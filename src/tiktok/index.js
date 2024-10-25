/* Copyright (C) 2024 CODEX
Licensed under the MIT License;
you may not use this file except in compliance with the License.
scraper-x - Ziyan
*/


const cheerio = require("cheerio");
const miniget = require("miniget");
const fetch = require("node-fetch").default; 
const { createWriteStream, existsSync, mkdirSync, unlinkSync } = require("fs");
const puppeteer = require("puppeteer");
const http = require("node:http");
const https = require("node:https");
const { exit } = require("node:process");
const { CookieJar } = require("netscape-cookies-parser");
const { getUserVideos } = require("./User-Videos");
const { Video, User, Music } = require("./Entities");

const _cookiesJar = new CookieJar();
let _cookies = "";

// Load cookies if a path is provided
function loadCookies(cookiesPath) {
  _cookies = cookiesPath ? _cookiesJar.load(cookiesPath) : "";
}
  /**
   * Fetches the website content and convert its content into text.
   * @param baseUrl baseUrl of the site to fetch
   * @param fetchOptions node-fetch fetch options. Optional
   * @returns Promise<cheerio.CheerioAPI>
  
  Example:
  ```ts
  const $ = await requestWebsite("https://www.amazon.de/s?k=" + "airpods")
  // => will return cheerio API Object to work with.
  
  $(".prices").each((_, value) => {
  console.log($(value).text().trim());
  });
  ```
   */

async function requestWebsite(baseUrl, fetchOptions) {
  const httpAgent = new http.Agent({ keepAlive: true, maxSockets: 20 });
  const httpsAgent = new https.Agent({ keepAlive: true, maxSockets: 20 });
  
  const DefaultOptions = {
    agent: (_parsedURL) => _parsedURL.protocol === "http:" ? httpAgent : httpsAgent,
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      Cookie: `${_cookies}`,
    },
  };

  const req = await fetch(baseUrl, fetchOptions || DefaultOptions);
  const res = await req.text();
  return cheerio.load(res, { xmlMode: true });
}

  /**
   * Extract the JSON Object from the DOM with JavaScript instead of cheerio
   * @param html string
   * @returns
   */

function extractJSONObject(html) {
  const scriptTag = `<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application/json">`;
  const splitHtml = html.split(scriptTag)[1];
  if (!splitHtml) throw new Error("The JSON script tag was not found in the HTML.");
  
  const endOfJson = splitHtml.indexOf("</script>");
  return splitHtml.slice(0, endOfJson);
}

  /**
   * Trys to parse the JSON Object extracted from the Page HTML
   * @param content HTML DOM Content
   * @returns
   */

function checkJSONExisting(content) {
  try {
    return JSON.parse(content) ? true : false;
  } catch (error) {
    return false;
  }
}

/**
   * Does Tiktok Requests with headless chrome
   * @param url
   * @returns
   */

async function requestWithPuppeteer(url) {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  const response = await page.goto(url, { waitUntil: "domcontentloaded" });

  if (!response) {
    await browser.close();
    throw new Error("Could not load the desired Page!");
  }

  const html = await page.content();
  await browser.close();
  return extractJSONObject(html);
}

/**
   * Replaces the window Object with a export string and writes the new JS file to work with the result as a JS Object
   * @param content the HTML content of the Page
   * @deprecated No need for this function anymore since Tiktok now adds the json directly to the html in a seperated script tag
   */

async function handleHTMLContent(content) {
  const htmlObject = content;
  const startIndex = htmlObject.split("window['SIGI_STATE']=")[1];

  if (!startIndex) {
    throw new Error("SIGI_STATE not found in the content");
  }

  const removeWindowObject = startIndex.indexOf(";window['SIGI_RETRY']=");

  if (removeWindowObject === -1) {
    throw new Error("SIGI_RETRY not found in the content");
  }

  const jsonString = startIndex.slice(0, removeWindowObject);
  
  try {
    const object = JSON.parse(jsonString);
    return object;
  } catch (error) {
    throw new Error("Error parsing JSON from HTML content: " + error.message);
 
  }
}

  /**
   * Checker to use Node-fetch over puppteer in case cookies were not required since it happens randomly
   * @param link
   * @returns
   */

async function tryFetch(link) {
  const $ = await requestWebsite(link);
  const jsonText = $("#__UNIVERSAL_DATA_FOR_REHYDRATION__").text();

  if (!checkJSONExisting(jsonText)) {
    return await requestWithPuppeteer(link);
  } else {
    return JSON.parse(jsonText);
  }
}

 /**
   * Scrapes the tiktok video info from the given Link
   * @param uri tiktok video url
   * @returns Video
   */

async function getVideo(uri) {
  if (!uri) throw new Error("A video URL must be provided");

  const videoData = await tryFetch(uri);
  const videoObject = videoData["__DEFAULT_SCOPE__"]["webapp.video-detail"].itemInfo.itemStruct;

  const videoURL = await noWaterMark(uri);
  return new Video(
    videoObject.id,
    videoObject.desc,
    new Date(Number(videoObject.createTime) * 1000).toLocaleDateString(),
    videoObject.video.height,
    videoObject.video.width,
    videoObject.video.duration,
    videoObject.video.ratio,
    videoObject.stats.shareCount,
    videoObject.stats.diggCount,
    videoObject.stats.commentCount,
    videoObject.stats.playCount,
    videoURL,
    videoObject.video.cover,
    videoObject.video.dynamicCover,
    videoURL,
    videoObject.video.format,
    videoObject.author,
    `https://www.tiktok.com/@${videoObject.author.uniqueId}/video/${videoObject.id}`
  );
}

 /**
   * Scrapes the given user page and returns all available info
   * @param username tiktok username of a user
   * @returns User
   */

async function getUser(username) {
    if (!username) throw new Error("Please enter a username");

    let infoObject = await tryFetch(`https://www.tiktok.com/@${username}`);
    const userObject = infoObject["__DEFAULT_SCOPE__"]["webapp.user-detail"].userInfo;

    const userResult = new User(
      userObject.user.id,
      userObject.user.uniqueId,
      userObject.user.nickname,
      userObject.user.avatarLarger,
      userObject.user.signature.trim(),
      new Date(userObject.createTime * 1000).toLocaleDateString(),
      userObject.user.verified,
      userObject.user.secUid,
      userObject?.bioLink?.link ?? "none",
      userObject.user.privateAccount,
      userObject.stats.followerCount,
      userObject.stats.followingCount,
      userObject.stats.heart,
      userObject.stats.videoCount
    );

    return userResult;
}

  /**
   * Scrapes a user page and returns a list of all videos for this user
   * @param username tiktok username
   * @param noWaterMark whether the returned videos should be without watermark
   * @returns IVideo[]
   */

async function getAllVideosFromUser(username, noWaterMark = false) {
    if (!username) throw new Error("You must provide a username!");

    const { secretUID } = await getUser(username);
    if (!secretUID) {
      throw new Error("Could not find user UID!");
    }

    let cursor = "";
    const videos = [];
    const resultArray = [];
    
    // Fetch the first set of user videos
    let userVideos = await getUserVideos(secretUID, cursor);
    if (userVideos?.itemList) {
      resultArray.push(userVideos.itemList);
      cursor = userVideos.cursor;
    }

    // Fetch more videos if available
    while (userVideos?.hasMore === true) {
      userVideos = await getUserVideos(secretUID, cursor);
      if (userVideos?.itemList) {
        resultArray.push(userVideos.itemList);
        cursor = userVideos.cursor;
      }
    }

    // Process the videos and create Video objects
    for (const result of resultArray) {
      for (const video of result) {
        videos.push(
          new Video(
            video.id,
            video.desc,
            new Date(Number(video.createTime) * 1000).toLocaleDateString(),
            Number(video.video?.height),
            Number(video.video?.width),
            Number(video.video?.duration),
            video.video?.ratio,
            video?.stats?.shareCount,
            video?.stats?.diggCount,
            video?.stats?.commentCount,
            video?.stats?.playCount,
            noWaterMark
              ? await this.noWaterMark(`https://www.tiktok.com/@${video.author.uniqueId}/video/${video.id}`)
              : video.video?.downloadAddr.trim(),
            video?.video?.cover,
            video?.video?.dynamicCover,
            noWaterMark
              ? await this.noWaterMark(`https://www.tiktok.com/@${video.author.uniqueId}/video/${video.id}`)
              : video.video?.downloadAddr.trim(),
            video?.video?.format,
            video.author,
            `https://www.tiktok.com/@${video.author.uniqueId}/video/${video.id}`
          )
        );
      }
    }

    return videos;
}

  /**
   * Scrapes the given Link and returns information about the Music of the Video
   * @param link tiktok video url
   * @returns Music
   */

async function getMusic(link) {
    if (!link) throw new Error("You must provide a link!");

    let musicdata = await tryFetch(link);
    const musicObject = musicdata["__DEFAULT_SCOPE__"]["webapp.video-detail"].itemInfo.itemStruct;

    const music = new Music(
      musicObject.music.id,
      musicObject.music.title,
      musicObject.music.playUrl,
      musicObject.music.coverLarge,
      musicObject.music.coverThumb,
      musicObject.music.authorName,
      Number(musicObject.music.duration),
      musicObject.music.original,
      musicObject.music.album
    );

    return music;
}

/**
   * Downloads all videos from a user page!
   * @param username tiktok username of the user
   * @param options download options
   */

async function downloadAllVideosFromUser(username, options = { path: '', watermark: false }) {
    if (!username) throw new Error("Please enter a username!");

    const getAllvideos = await getAllVideosFromUser(username);
    if (!getAllvideos) {
      throw new Error("No Videos were found for this username. Either the videos are private or the user has no videos.");
    }

    // Set default path for downloads
    if (!options.path) {
      options.path = `${__dirname}/../${username}`;
      if (existsSync(options.path)) {
        console.log(`A folder with this username exists, that is unusual!`);
        try {
          unlinkSync(options.path);
        } catch (error) {
          console.log(`[ERROR] Could not remove ${options.path}\n Error Message: ${error.message}`);
          exit(1);
        }
      }
      if (!existsSync(options.path)) {
        mkdirSync(options.path);
      }
    }

    // Download videos with or without watermark
    for (const [index, video] of getAllvideos.entries()) {
      console.log(`Downloading Video: ${video.description ? video.description : video.id}, [${index + 1}/${getAllvideos.length}]`);

      let videoLink;
      if (options.watermark) {
        videoLink = await this.noWaterMark(video.id);
        if (!videoLink) {
          console.log(`Could not fetch ${video.description ? video.description : video.id} with no watermark`);
          continue;
        }
      } else {
        videoLink = video.downloadURL;
      }

      miniget(videoLink).pipe(
        createWriteStream(`${options.path}/${video.id}_${video.resolution}.${video.format}`)
      );
    }
}

/**
   * Returns direct download link for the video with no watermark!
   * @param link tiktok video url
   * @returns string
   */

async function noWaterMark(link) {
  const data = { url: link, count: "12", cursor: "0", web: "1", hd: "1" };
  
  const fetchNoWaterInfo = await fetch("https://www.tikwm.com/api/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  });

  const noWaterJson = await fetchNoWaterInfo.json();
  if (noWaterJson.code === -1) throw new Error("API limit reached for no watermark");

  return "https://www.tikwm.com" + noWaterJson.data.hdplay;
}

  /**
   * Scrapes hashtag posts
   * @param tag tiktok hashtag
   * @returns Promise<IVideo[]>
   */

async function hashTag(tag) {
  if (!tag)
    throw new Error("You must provide a tag name to complete the search!");

  let tagsObject = await tryFetch(`https://www.tiktok.com/tag/${tag}`);
  console.log(tagsObject);

  const { ItemList } = tagsObject;
  const videos = [];

  for (const video of ItemList.challenge.list) {
    videos.push(
      new Video(
        tagsObject.ItemModule[video].video.id,
        tagsObject.ItemModule[video].desc,
        new Date(
          Number(tagsObject.ItemModule[video].createTime) * 1000
        ).toLocaleDateString(),
        Number(tagsObject.ItemModule[video].video.height),
        Number(tagsObject.ItemModule[video].video.width),
        Number(tagsObject.ItemModule[video].video.duration),
        tagsObject.ItemModule[video].video.ratio,
        tagsObject.ItemModule[video].stats.shareCount,
        tagsObject.ItemModule[video].stats.diggCount,
        tagsObject.ItemModule[video].stats.commentCount,
        tagsObject.ItemModule[video].stats.playCount,
        tagsObject.ItemModule[video].video.downloadAddr.trim(),
        tagsObject.ItemModule[video].video.cover,
        tagsObject.ItemModule[video].video.dynamicCover,
        tagsObject.ItemModule[video].video.playAddr.trim(),
        tagsObject.ItemModule[video].video.format,
        tagsObject.ItemModule[video].author
      )
    );
  }
  
  return videos;
}

// Exporting the functions
module.exports = {
  loadCookies,
  requestWebsite,
  extractJSONObject,
  checkJSONExisting,
  requestWithPuppeteer,
  handleHTMLContent,
  tryFetch,
  getVideo,
  getUser,
  getAllVideosFromUser,
  getMusic,
  downloadAllVideosFromUser,
  noWaterMark,
  hashTag
};

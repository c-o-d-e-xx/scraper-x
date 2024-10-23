const fs = require('fs');
const path = require('path');

// Path to the src folder
const srcPath = path.join(__dirname);

// Read all directories in src
fs.readdirSync(srcPath).forEach(dir => {
  const modulePath = path.join(srcPath, dir, 'index.js');

  // Check if the directory has an index.js file
  if (fs.lstatSync(path.join(srcPath, dir)).isDirectory() && fs.existsSync(modulePath)) {
    const module = require(modulePath);

    // Assuming each module exports a `run` function
    if (typeof module.run === 'function') {
      module.run();
    }
  }
});

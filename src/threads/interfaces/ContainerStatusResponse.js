const { ContainerStatus } = require('./ContainerStatus');

/**
 * @class ContainerStatusResponse
 * @property {ContainerStatus} status - The status of the container
 * @property {string} id - The unique identifier for the container
 * @property {string} [error_message] - Optional error message if the container is in an error state
 */
class ContainerStatusResponse {
  /**
   * @param {ContainerStatus} status - The status of the container
   * @param {string} id - Unique ID for the container
   * @param {string} [error_message] - Optional error message
   */
  constructor(status, id, error_message) {
    if (!Object.values(ContainerStatus).includes(status)) {
      throw new TypeError('status must be a valid ContainerStatus');
    }
    if (typeof id !== 'string') {
      throw new TypeError('id must be a string');
    }
    if (error_message && typeof error_message !== 'string') {
      throw new TypeError('error_message must be a string');
    }

    this.status = status;
    this.id = id;
    this.error_message = error_message || null;
  }
}

module.exports = { ContainerStatusResponse
};

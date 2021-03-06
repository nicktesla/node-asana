var util = require('util');
var Resource = require('./resource');

/**
 * Constructs a resource accessor for Attachments that will use the dispatcher
 * for all requests to the API
 * @class
 * @classdesc A wrapper for the Attachments resource
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Attachments(dispatcher) {
  Resource.call(this, dispatcher);
}
util.inherits(Attachments, Resource);

/**
 * Dispatches a GET request to /attachments/:attachmentId of the API to get
 * information about the attachment.
 * @param  {Number} attachmentId The attachment id
 * @param  {Object} [params]     Extra params for the dispatcher
 * @return {Promise}             The result of the API call
 */
Attachments.prototype.findById = function(attachmentId, params) {
  var path = util.format('/attachments/%d', attachmentId);
  return this.dispatchGet(path, params);
};

/**
 * Dispatches a GET request to /tasks/:taskId/attachments of the API to get all
 * attachments associated with the task.
 * @param  {Number} taskId       The task id
 * @param  {Object} [params]     Extra params for the dispatcher
 * @return {Promise}             The result of the API call
 */
Attachments.prototype.findByTask = function(taskId, params) {
  var path = util.format('/tasks/%d/attachments', taskId);
  return this.dispatchGetCollection(path, params);
};

module.exports = Attachments;
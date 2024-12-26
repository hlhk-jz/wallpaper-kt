"use strict";
const common_util_request = require("../common/util/request.js");
function requestDataApi() {
  return common_util_request.request({
    "url": "https://api.thecatapi.com/v1/images/search?limit=5"
  });
}
exports.requestDataApi = requestDataApi;

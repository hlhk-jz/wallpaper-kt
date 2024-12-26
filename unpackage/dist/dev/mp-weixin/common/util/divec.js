"use strict";
const common_vendor = require("../vendor.js");
const getSatusBarHeight = () => {
  return common_vendor.index.getSystemInfoSync().statusBarHeight;
};
const getJnAnHeght = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { height, top } = common_vendor.index.getMenuButtonBoundingClientRect();
    return (top - getSatusBarHeight()) * 2 + height;
  } else {
    return 60;
  }
};
const getZt = () => getJnAnHeght() + getSatusBarHeight();
exports.getJnAnHeght = getJnAnHeght;
exports.getSatusBarHeight = getSatusBarHeight;
exports.getZt = getZt;

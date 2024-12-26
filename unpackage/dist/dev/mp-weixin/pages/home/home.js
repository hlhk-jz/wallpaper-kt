"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        c: common_vendor.p({
          type: "right",
          size: "30",
          color: "#A0A0A0"
        }),
        d: common_vendor.p({
          type: "star-filled",
          color: "#27B189",
          size: "20"
        }),
        e: common_vendor.p({
          type: "right",
          size: "30",
          color: "#A0A0A0"
        }),
        f: common_vendor.p({
          type: "chatboxes-filled",
          color: "#27B189",
          size: "20"
        }),
        g: common_vendor.p({
          type: "right",
          size: "30",
          color: "#A0A0A0"
        }),
        h: common_vendor.p({
          type: "notification-filled",
          color: "#27B189",
          size: "20"
        }),
        i: common_vendor.p({
          type: "right",
          size: "30",
          color: "#A0A0A0"
        }),
        j: common_vendor.p({
          type: "flag-filled",
          color: "#27B189",
          size: "20"
        }),
        k: common_vendor.p({
          type: "right",
          size: "30",
          color: "#A0A0A0"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);

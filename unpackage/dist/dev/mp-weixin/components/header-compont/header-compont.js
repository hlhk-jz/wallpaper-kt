"use strict";
const common_vendor = require("../../common/vendor.js");
const common_util_divec = require("../../common/util/divec.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "header-compont",
  props: {
    title: {
      type: String,
      default: "壁纸"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(common_util_divec.getSatusBarHeight)() + "px",
        b: common_vendor.t(__props.title),
        c: common_vendor.p({
          type: "search",
          size: "22"
        }),
        d: common_vendor.unref(common_util_divec.getJnAnHeght)() + "px",
        e: common_vendor.unref(common_util_divec.getZt)() + "px"
      };
    };
  }
};
wx.createComponent(_sfc_main);

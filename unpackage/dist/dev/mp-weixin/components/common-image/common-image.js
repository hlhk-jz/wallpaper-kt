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
  __name: "common-image",
  props: {
    isShow: false,
    item: {
      default() {
        return {
          url: "https://cdn2.thecatapi.com/images/a2g.png"
        };
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isShow
      }, !__props.isShow ? {
        b: __props.item.url
      } : {}, {
        c: __props.isShow
      }, __props.isShow ? {
        d: common_assets._imports_0$3,
        e: common_vendor.p({
          type: "more-filled",
          size: "30",
          color: "width"
        })
      } : {});
    };
  }
};
wx.createComponent(_sfc_main);

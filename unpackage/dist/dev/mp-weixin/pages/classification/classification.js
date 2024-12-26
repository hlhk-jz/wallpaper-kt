"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_header_compont2 = common_vendor.resolveComponent("header-compont");
  const _easycom_common_image2 = common_vendor.resolveComponent("common-image");
  (_easycom_header_compont2 + _easycom_common_image2)();
}
const _easycom_header_compont = () => "../../components/header-compont/header-compont.js";
const _easycom_common_image = () => "../../components/common-image/common-image.js";
if (!Math) {
  (_easycom_header_compont + _easycom_common_image)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "分类"
    }),
    b: common_vendor.f(15, (item, k0, i0) => {
      return {
        a: "d701a848-1-" + i0
      };
    }),
    c: common_vendor.p({
      isShow: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);

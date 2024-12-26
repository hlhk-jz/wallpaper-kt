"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apijs = require("../../api/apijs.js");
if (!Array) {
  const _easycom_header_compont2 = common_vendor.resolveComponent("header-compont");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_common_image2 = common_vendor.resolveComponent("common-image");
  (_easycom_header_compont2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_common_image2)();
}
const _easycom_header_compont = () => "../../components/header-compont/header-compont.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_common_image = () => "../../components/common-image/common-image.js";
if (!Math) {
  (_easycom_header_compont + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_common_image)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const imgList = common_vendor.ref([]);
    const requestData = async () => {
      let data = await api_apijs.requestDataApi();
      imgList.value = data.data;
    };
    requestData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "首页"
        }),
        b: common_vendor.f(imgList.value, (item, index, i0) => {
          return {
            a: item.url,
            b: item.id
          };
        }),
        c: common_vendor.p({
          type: "sound-filled",
          color: "#22B48B",
          size: "20"
        }),
        d: common_vendor.p({
          type: "right",
          size: "20"
        }),
        e: common_vendor.p({
          type: "calendar",
          color: "#22B48B",
          size: "20"
        }),
        f: common_vendor.p({
          date: Date.now(),
          format: "dd日"
        }),
        g: common_vendor.f(imgList.value, (item, index, i0) => {
          return {
            a: item.url,
            b: item.id
          };
        }),
        h: common_vendor.f(imgList.value, (item, k0, i0) => {
          return {
            a: item.id,
            b: "51d90c42-7-" + i0,
            c: common_vendor.p({
              item
            })
          };
        }),
        i: common_vendor.p({
          isShow: true
        })
      };
    };
  }
};
wx.createPage(_sfc_main);

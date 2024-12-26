"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_tag2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_rate + _easycom_uni_tag + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const isTrue = common_vendor.ref(true);
    const isShow = () => {
      isTrue.value = !isTrue.value;
    };
    const popup = common_vendor.ref(null);
    const open = () => {
      popup.value.open("bottom");
    };
    const gobak = () => {
      common_vendor.index.navigateBack();
    };
    const rateValue = common_vendor.ref(0);
    const onChange = () => {
    };
    const clos = () => {
      popup.value.close();
    };
    const isPf = common_vendor.ref(false);
    const pfNum = common_vendor.ref(0);
    function pfTk() {
      isPf.value = !isPf.value;
    }
    const pfonChange = (e) => {
      pfNum.value = e.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(6, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$2,
        c: common_vendor.o(isShow),
        d: isTrue.value
      }, isTrue.value ? {
        e: common_vendor.p({
          type: "left",
          size: "30"
        }),
        f: common_vendor.o(gobak),
        g: common_vendor.p({
          type: "info",
          size: "20"
        }),
        h: common_vendor.o(open),
        i: common_vendor.p({
          type: "star-filled",
          size: "20"
        }),
        j: common_vendor.t(pfNum.value),
        k: common_vendor.o(pfTk),
        l: common_vendor.p({
          type: "download",
          size: "20"
        })
      } : {}, {
        m: common_vendor.p({
          type: "closeempty",
          size: "22",
          color: "#9C9898"
        }),
        n: common_vendor.o(clos),
        o: common_vendor.o(onChange),
        p: common_vendor.o(($event) => rateValue.value = $event),
        q: common_vendor.p({
          modelValue: rateValue.value
        }),
        r: common_vendor.p({
          text: "标签"
        }),
        s: common_vendor.sr(popup, "84efa224-4", {
          "k": "popup"
        }),
        t: common_vendor.p({
          type: "bottom",
          ["border-radius"]: "10px 10px 0 0"
        }),
        v: isPf.value
      }, isPf.value ? {
        w: common_vendor.p({
          type: "closeempty",
          size: "22",
          color: "#9C9898"
        }),
        x: common_vendor.o(pfTk),
        y: common_vendor.o(pfonChange),
        z: common_vendor.o(($event) => pfNum.value = $event),
        A: common_vendor.p({
          size: "35",
          modelValue: pfNum.value
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);

import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/Tourism-plan/zhinan.svg";
const __pageData = JSON.parse('{"title":"乘机流程","description":"","frontmatter":{},"headers":[],"relativePath":"views/BoardingGuide/index.md","filePath":"views/BoardingGuide/index.md","lastUpdated":null}');
const _sfc_main = { name: "views/BoardingGuide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="乘机流程" tabindex="-1">乘机流程 <a class="header-anchor" href="#乘机流程" aria-label="Permalink to &quot;乘机流程&quot;">​</a></h1><img${ssrRenderAttr("src", _imports_0)} alt="drawing" class="index-img"><h3 id="总体流程" tabindex="-1">总体流程 <a class="header-anchor" href="#总体流程" aria-label="Permalink to &quot;总体流程&quot;">​</a></h3><p>买票 → 到机场 → 取票 → 办托运 → 安检 → 找登机口 → 登机一到达 → 取行李</p><h4 id="基础流程" tabindex="-1">基础流程 <a class="header-anchor" href="#基础流程" aria-label="Permalink to &quot;基础流程&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">相关步骤</p><ul><li>到机场 <ul><li>要注意时间，因为航空公司规定航班起飞前30分钟停止办理登机手续，所以最好在起飞前1 - 2个小时到机场。</li><li>国际航空不适用于本次计划</li></ul></li><li>找值机柜台 <ul><li>通过机场出发大厅里面的显示屏查看需办理航班的柜台号码 或 手机购票软件查看</li></ul></li><li>办理行李托运，换取登机牌 <ul><li>托运行李：凭机票或本人有效身份证件到相应的值机柜台办理乘机和行李托运手续，领取登机牌。</li><li>无托运行李：在自助值机上打印登机牌选择座位即可(可选靠窗, 即A和F)。</li></ul></li><li>进行安全检查 <ul><li>取完票之后, 需要找到安全检查的入口，提前准备好机票、登机牌和有效身份证件，并交给安全检查员查验。为了飞行安全，旅客必须从安全门通过安全检查，随身携带的行李物品必须经 X 光机检查。</li></ul></li><li>机场候机，准备登机 <ul><li>检查完成之后, 按照机票上的候机站台是多少号, 然后根据路标指引走过去对应的候机台, 然后对照一下航班出行信息, 然后就找个座位坐着。一般会提前15-30分钟左右登机。</li></ul></li><li>登机完毕</li><li>到达取行李 <ul><li>机票上会显示行李转盘口的数字，按照地标或其他指引前往行李转盘等待行李！</li><li>无托运离开即可</li></ul></li></ul></div><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">相关步骤</p><ul><li>因为安全规定, 不能携带液体上飞机, 所以买的水记得喝完, 安检完里面会有自助饮水机</li><li>单瓶 &lt; 100ml的洗漱护肤品(指的是瓶子的容量只能小于100ml, 100ml也不行), 只要不是液体，是可以带的。如果需要携带液体的话, 就得去买那种飞机携带的小瓶子(ps:网上有卖)。</li><li>充电宝是可以带的, 最多两个，容量不得超过100wh(20000mah)。</li><li>牙膏&gt;100ml 不能携带。</li><li>20寸的行李箱是可以携带上去飞机, 不需要托运的。</li><li>免费托运的最大重量为20kg（根据航司规定可能有所不同）</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/BoardingGuide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { c as commentaries } from "./commentaries.CWvac669.js";
import { useSSRContext } from "vue";
import "./Content.Bt4knT4Z.js";
import "@vueuse/core";
import "valine";
import "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"旅游计划","text":"Tourism-plan","tagline":"去见山 去看海 去会众生 去寻自己","image":{"src":"/home.svg","alt":"Tourism-plan"},"actions":[{"theme":"brand","text":"Let`s go ->","link":"/views/Hangzhou/"}]},"features":[{"icon":{"src":"/hangzhou.svg"},"title":"杭州","details":"你所不知道的远方，都是值得一去的好地方。","link":"/views/Hangzhou/"},{"icon":{"src":"/nanjing.svg"},"title":"南京","details":"会看花的人，就会看云、看月、看星辰，并且在人世中的一切看到智慧","link":"/views/Nanjing/"},{"icon":{"src":"/xiamen.svg"},"title":"厦门","details":"星星发亮是为了让每一个人有一天都能找到属于自己的星星","link":"/views/Xiamen/"},{"icon":{"src":"/shangrao.svg"},"title":"上饶","details":"趁兴而行，或南或北，能走多远走多远","link":"/views/Shangrao/"},{"icon":{"src":"/wuhan.svg"},"title":"武汉","details":"隔过星辰大海，无畏世俗尘埃","link":"/views/Wuhan/"},{"icon":{"src":"/changsha.svg"},"title":"长沙","details":"答案在路上，自由在风里","link":"/views/Changsha/"},{"icon":{"src":"/chongqing.svg"},"title":"重庆","details":"宇宙山河浪漫、生活点滴温暖、都值得我们前进。","link":"/views/Chongqing/"},{"icon":{"src":"/nanchang.svg"},"title":"南昌","details":"别听世俗的耳语，去看自己喜欢的风景","link":"/views/Nanchang/"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(commentaries, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};

import { c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-c38kth_START -->${$$result.title = `<title>${escape($page.data?.title ?? "Default title")}</title>`, ""}<!-- HEAD_svelte-c38kth_END -->`, ""} <nav data-svelte-h="svelte-wuusjt"><a href="/">Home</a> <a href="/about">About</a> <a href="/blog/test">Blog</a> <a href="/my-books/list/h/123">My Books</a> <a href="/todo/hello-world">Todo</a> <a href="/comments">Comments</a></nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

import { c as create_ssr_component, i as is_promise, n as noop, d as each, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	Loading comments...
`;
    }
    return function(comments) {
      return ` ${each(comments, (comment) => {
        return `<p>Title: ${escape(comment.title)}</p> <div>Text: ${escape(comment.text)}</div> <hr>`;
      })} `;
    }(__value);
  }(data.comments)}`;
});
export {
  Page as default
};

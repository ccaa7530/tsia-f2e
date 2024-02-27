import { e as error } from "../../../../chunks/index.js";
async function load({ params }) {
  if (params.slug === "hello-world") {
    return {
      title: "Hello world!",
      content: "Welcome to our blog. Lorem ipsum dolor sit amet..."
    };
  }
  error(404, "Not found");
}
export {
  load
};

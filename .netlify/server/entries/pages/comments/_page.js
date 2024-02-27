function loadComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: "One",
          text: "Hey~~"
        },
        {
          title: "Two",
          text: "Jue~~~"
        }
      ]);
    }, 5e3);
  });
}
function load() {
  return {
    comments: loadComments()
  };
}
export {
  load
};

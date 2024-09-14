// single react element
// const heading = React.createElement(
//   "h1",
//   { style: { color: "Red" } },
//   "Hello World From React"
// );
// console.log(heading); // gives out an object, which is the react element

setTimeout(() => {
  const element = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }),
    [
      React.createElement("h1", null, "This is h1 tag!! chaa"),
      React.createElement("h2", null, "This is h2 tag!! chaa"),
    ],
    React.createElement("div", { id: "child2" }),
    [
      React.createElement("h1", null, "This is h1 tag!! child2 chaa"),
      React.createElement("h2", null, "This is h2 tag!! child2 chaa"),
    ],
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(element);
}, [3000]);

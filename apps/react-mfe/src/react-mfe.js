import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return React.createElement(
      "div",
      { style: { padding: "16px", color: "red" } },
      `Błąd w React-micro: ${err.message}`
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
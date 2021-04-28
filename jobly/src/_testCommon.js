import { unmountComponentAtNode } from "react-dom";

let container

const commonBeforeEach= () => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container)
};

const commonAfterEach= () => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container= null
};

export {commonBeforeEach,commonAfterEach}
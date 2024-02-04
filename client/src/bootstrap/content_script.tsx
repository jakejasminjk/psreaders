import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});

const parentNode = document.getElementsByClassName(
  "paid-course-landing-page__body"
);

if (parentNode && parentNode.length > 0) {
  const targetNode = document.createElement("div");
  targetNode.id = "targetDiv";
  targetNode.className = "course-landing-page__main-content"

  parentNode[0].insertBefore(targetNode, parentNode[0].firstChild);

  const root = createRoot(targetNode);

  root.render(<App />);
}

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import App from "../App";

export default {
  title: "Example/App",
  component: App,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
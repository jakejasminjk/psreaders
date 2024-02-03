import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Reviews from "../components/Reviews";

export default {
    title: "Example/Reviews",
    component: Reviews,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof Reviews>;

const Template: ComponentStory<typeof Reviews> = (args) => <Reviews />;

export const Default = Template.bind({});
Default.args = {};

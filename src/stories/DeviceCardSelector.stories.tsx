import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DeviceCardSelector } from "../components/DeviceCardSelector";
import { DeviceStatus } from "../components/DeviceIcon";

export default {
  title: "DeviceCardSelector",
  component: DeviceCardSelector,
  argTypes: {},
} as ComponentMeta<typeof DeviceCardSelector>;

const Template: ComponentStory<typeof DeviceCardSelector> = (args) => (
  <DeviceCardSelector {...args} />
);

export const iMac = Template.bind({});
iMac.args = {
  status: DeviceStatus.Imac,
};
export const ipad = Template.bind({});
ipad.args = {
  status: DeviceStatus.ipad,
};
export const watch = Template.bind({});
watch.args = {
  status: DeviceStatus.watch,
};

import { Card } from "./Card";

export default {
  title: "App/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

const Template = (args) => <Card {...args} />;

export const CompletedTask = Template.bind({});
CompletedTask.args = {
  todo: "Completed Task",
  completed: true,
};

export const OpenTask = Template.bind({});
OpenTask.args = {
  todo: "Open Task",
  completed: false,
};

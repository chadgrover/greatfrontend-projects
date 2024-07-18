import type { Meta, StoryObj } from "@storybook/react";
import ProfileCard from "./ProfileCard";

const meta = {
  title: "Example/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

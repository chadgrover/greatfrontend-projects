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
  args: {
    thumbnail: "images/profile-thumbnail.png",
    firstName: "sarah",
    lastName: "dole",
    jobTitle: "front end engineer",
    company: "microsoft",
    description:
      "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  },
};

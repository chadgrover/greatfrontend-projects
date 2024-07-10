import type { Meta, StoryObj } from "@storybook/react";
import TestimonialCard from "./TestimonialCard";

const meta = {
  title: "Example/TestimonialCard",
  component: TestimonialCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    thumbnail: "/images/profile-thumbnail.png",
    firstName: "sarah",
    lastName: "dole",
    handle: "sarahdole",
    message:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
};

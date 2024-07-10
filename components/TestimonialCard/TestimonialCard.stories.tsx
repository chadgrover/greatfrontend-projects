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
  args: {},
};

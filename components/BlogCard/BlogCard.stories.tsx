import type { Meta, StoryObj } from "@storybook/react";
import BlogCard from "./BlogCard";

const meta = {
  title: "Example/BlogCard",
  component: BlogCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imageUrl: "/images/blog-image.jpg",
    tags: ["Interior"],
    title: "Top 5 Living Room Inspirations",
    description:
      "Curated vibrant colors for your living, make it pop & calm in the same time.",
  },
};

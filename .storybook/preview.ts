import type { Preview } from "@storybook/react";
import "@/app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "greatFrontEndBackground",
      values: [
        {
          name: "greatFrontEndBackground",
          value: "linear-gradient(to bottom, #f9fafb, #d2d6db)",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

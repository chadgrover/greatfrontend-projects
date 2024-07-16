interface IBlogCardProps {
  imageUrl: string;
  tags?: string[];
  title: string;
  description: string;
}

interface ITagProps {
  tag: string;
}

interface IButtonProps {
  type: "button" | "submit" | "reset";
  addClassName?: string;
  variant?: "primary" | "disabled";
  children: React.ReactNode;
}

export type { IBlogCardProps, ITagProps, IButtonProps };


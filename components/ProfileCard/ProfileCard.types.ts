import { IButtonProps } from "@/components/BlogCard/BlogCard.types";

interface IProfileCardProps {
  thumbnail: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  description: string;
}

export type { IProfileCardProps, IButtonProps };

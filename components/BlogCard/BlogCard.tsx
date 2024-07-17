"use server";

import { memo } from "react";
import Image from "next/image";
import ArrowRight from "@/assets/icons/ui/ArrowRight";
import { formatButtonVariantClassName } from "@/lib/utils/formatting";
import { ITagProps, IBlogCardProps, IButtonProps } from "./BlogCard.types";

const Tag: React.FC<ITagProps> = ({ tag }) => (
  <span className="px-2 py-[2px] bg-green-50 text-green-700 border-green-200 rounded-2xl text-xs border-[1px]">
    {tag}
  </span>
);

const Button: React.FC<IButtonProps> = ({
  type,
  addClassName,
  children,
  variant = "primary",
  ...rest
}) => {
  const BASE_BUTTON_CLASSES =
    "w-fit flex flex-row items-center text-base gap-2 p-px";

  return (
    <button
      {...rest}
      type={type}
      disabled={variant === "disabled"}
      className={formatButtonVariantClassName(
        variant,
        BASE_BUTTON_CLASSES,
        addClassName
      )}
    >
      <span>{children}</span>
      <ArrowRight
        strokeWidth="3"
        stroke="currentColor"
        addClassName="stroke-indigo-700"
      />
    </button>
  );
};

const BlogCard: React.FC<IBlogCardProps> = memo(
  ({ imageUrl, tags, title, description }) => (
    <article className="w-[340px] h-[504px] bg-white rounded-b-md drop-shadow-md font-noto-sans">
      <figure className="relative w-full h-[288px] overflow-hidden rounded-t-md">
        <Image
          src={imageUrl}
          alt="A picture for the blog post"
          priority={true}
          fill
          sizes="340px"
          className="w-full object-cover"
        />
      </figure>
      <section className="px-4 py-6 h-[216px] flex flex-col">
        <ul className="flex flex-row gap-2 mb-2">
          {tags?.map((tag, index) => (
            <li key={index}>
              <Tag tag={tag} />
            </li>
          ))}
        </ul>
        <header className="mb-3">
          <h1 className="text-lg neutral-900 font-medium">{title}</h1>
        </header>
        <p className="text-base neutral-600 font-normal mb-6">{description}</p>
        <Button variant="primary" type="button">
          Read more
        </Button>
      </section>
    </article>
  )
);

BlogCard.displayName = "BlogCard";

export default BlogCard;

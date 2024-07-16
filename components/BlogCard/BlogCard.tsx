import { memo } from "react";
import Image from "next/image";
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
}) => (
  <button
    {...rest}
    type={type}
    className={`flex flex-row items-center text-base gap-2 ${addClassName}`}
  >
    <span className="text-indigo-700">{children}</span>
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      className="w-4 h-4 stroke-indigo-700"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  </button>
);

const BlogCard: React.FC<IBlogCardProps> = memo(
  ({ imageUrl, tags, title, description }) => (
    <article className="w-[340px] h-[504px] bg-white rounded-b-md drop-shadow-md font-noto-sans">
      <figure className="relative w-full h-[288px] overflow-hidden rounded-t-md">
        <Image
          src={imageUrl}
          alt="A picture for the blog post"
          fill
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

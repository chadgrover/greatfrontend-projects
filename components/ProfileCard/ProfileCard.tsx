"use server";

import { memo } from "react";
import Image from "next/image";
import {
  formatFullName,
  formatButtonVariantClassName,
  formatJobTitleAndCompany,
} from "@/lib/utils/formatting";
import { IProfileCardProps, IButtonProps } from "./ProfileCard.types";

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
    </button>
  );
};

const ProfileCard: React.FC<IProfileCardProps> = memo(
  ({ thumbnail, firstName, lastName, jobTitle, company, description }) => (
    <article className="flex flex-col items-center w-[340px] h-auto bg-white rounded-md drop-shadow-md font-noto-sans px-4 py-6 gap-10">
      <header className="flex flex-col items-center gap-6 justify-between">
        <Image
          src={thumbnail}
          alt="The profile picture of the user"
          width={64}
          height={64}
          priority
        />
        <div className="flex flex-col items-center gap-px">
          <h1 className="text-xl text-neutral-900 font-medium">
            {formatFullName(firstName, lastName)}
          </h1>
          <h2 className="text-sm text-neutral-600 font-light">
            {formatJobTitleAndCompany(jobTitle, company)}
          </h2>
        </div>
        <p className="text-base text-neutral-600 font-normal text-center">
          {description}
        </p>
      </header>
      <Button type="button" variant="primary">
        Contact me
      </Button>
    </article>
  )
);

ProfileCard.displayName = "ProfileCard";

export default ProfileCard;

"use server";

import React from "react";
import Image from "next/image";
import ITestimonialCardProps from "./TestimonialCard.types";
import { formatFullName } from "@/lib/utils/formatting";

const TestimonialCard: React.FC<ITestimonialCardProps> = ({
  thumbnail,
  firstName,
  lastName,
  handle,
  message,
}) => (
  <article className="flex flex-col gap-4 bg-white h-auto w-[340px] p-6 border-neutral-200 border-2 rounded-[8px] drop-shadow-md">
    <header className="flex flex-row gap-4">
      <Image
        src={thumbnail}
        alt="User's profile picture"
        width={48}
        height={48}
      />
      <div className="flex flex-col gap-[1px]">
        <h1 className="text-neutral-900 text-base font-semibold">
          {formatFullName(firstName, lastName)}
        </h1>
        <p className="text-neutral-600 text-sm">@{handle}</p>
      </div>
    </header>
    <div>
      <blockquote className="text-neutral-600 text-base">{message}</blockquote>
    </div>
  </article>
);

export default TestimonialCard;

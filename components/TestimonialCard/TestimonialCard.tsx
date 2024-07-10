"use server";

import { memo } from "react";
import Image from "next/image";
import { formatFullName } from "@/lib/utils/formatting";
import ITestimonialCardProps from "./TestimonialCard.types";

const TestimonialCard: React.FC<ITestimonialCardProps> = memo(
  ({ thumbnail, firstName, lastName, handle, message }) => (
    <article className="flex flex-col gap-4 bg-white h-[233px] w-[340px] p-6 border-neutral-200 border-2 rounded-[8px] drop-shadow-md text-wrap md:text-balance font-noto-sans">
      <header className="flex flex-row gap-4">
        <Image
          src={thumbnail || "images/anonymous-thumbnail.webp"}
          alt={`${firstName && lastName ? formatFullName(firstName, lastName) : "Anonymous User"}'s thumbnail`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col gap-[1px]">
          <h1 className="text-neutral-900 text-base font-semibold">
            {firstName && lastName
              ? formatFullName(firstName, lastName)
              : "Anonymous User"}
          </h1>
          {handle && <p className="text-neutral-600 text-sm">@{handle}</p>}
        </div>
      </header>
      <div>
        <blockquote className="text-neutral-600 text-base line-clamp-5">
          {message}
        </blockquote>
      </div>
    </article>
  )
);

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;

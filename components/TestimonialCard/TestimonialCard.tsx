"use server";

import Image from "next/image";

interface ITestimonialCardProps {
  thumbnail?: string;
  name?: string;
  handle?: string;
  message: string;
}

const TestimonialCard = () => {
  return (
    <section className="bg-white h-auto w-[340px] p-8 border-neutral-200 border-2 rounded-[8px] drop-shadow-md">
      <div className="flex flex-row gap-4">
        <Image
          src="/images/profile-thumbnail.png"
          alt="User Thumbnail"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-neutral-900 text-base font-semibold">
            Sarah Dole
          </h1>
          <span className="text-neutral-600 text-sm">@sarahdole</span>
        </div>
      </div>
      <div>
        <p className="text-neutral-600 text-base">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </div>
    </section>
  );
};

export default TestimonialCard;

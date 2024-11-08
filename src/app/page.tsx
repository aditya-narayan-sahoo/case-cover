import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews/Reviews";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/snake-1.png"
                  height={145}
                  width={112}
                  alt="snake"
                  className="w-full"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-1 rounded-md text-white">
                  Custom
                </span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Captue your favourite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                Case Cover allows you to protect your memories, not just your
                phone case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    High quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    width={40}
                    height={40}
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user"
                  />
                  <Image
                    width={40}
                    height={40}
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user"
                  />
                  <Image
                    width={40}
                    height={40}
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user"
                  />
                  <Image
                    width={40}
                    height={40}
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user"
                  />
                  <Image
                    width={40}
                    height={40}
                    className="inline-block size-10 rounded-full ring-2 ring-slate-100 object-cover"
                    src="/users/user-5.jpg"
                    alt="user"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                    <Star className="size-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1699</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                width={208}
                height={144}
                src="/your-image.png"
                alt="your"
                className="absolute w-44 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <Image
                width={80}
                height={143}
                src="/line.png"
                alt="line"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-12">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-600" />
              </span>{" "}
              say
            </h2>
            <Image
              width={96}
              height={86}
              src="/snake-2.png"
              className="w-24 order-0 lg:order-2"
              alt="snake-2"
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className=" flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case is durable and the design still looks great
                  after two and a half months.{" "}
                  <span className="p-0.5 bg-slate-600 text-white">
                    The image clarity is excellent
                  </span>
                  , unlike my previous case which started fading to a yellowish
                  tint after a few weeks. I even got a compliment on it. Very
                  satisfied&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  height={48}
                  width={48}
                  src="/users/user-1.png"
                  alt="user"
                  className="rounded-full size-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Kevin</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 storke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* second user review */}
            <div className=" flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
                <Star className="size-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;I have had this case for a couple of months now, and it
                  still looks brand new.{" "}
                  <span className="p-0.5 bg-slate-600 text-white">
                    The material feels premium, and the image has not distorted
                    or faded
                  </span>
                  .The fit is snug and it offers great protection without
                  compromising on style. Pleased with my purchase!&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  height={48}
                  width={48}
                  src="/users/user-4.jpg"
                  alt="user"
                  className="rounded-full size-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jay</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 storke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}

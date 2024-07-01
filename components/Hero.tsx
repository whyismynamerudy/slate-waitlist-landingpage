"use client";

import { useMemo } from "react";
import Image from "next/image";
// config
import config from "@/config/general";
// components
import Form from "./Form";

const Hero = () => {
  const title = useMemo(() => {
    const findIndex = config.contents.title.search(config.contents.markOfTitle);

    if (findIndex >= 0) {
      return {
        text: config.contents.title.slice(0, findIndex),
        mark: config.contents.title.slice(
          findIndex,
          findIndex + config.contents.markOfTitle.length
        ),
      };
    }
    return { text: config.contents.title, mark: null };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.contents]);

  // img attribution: <a href="https://www.freepik.com/free-photo/homepage-seen-laptop-screen_26538646.htm#fromView=search&page=1&position=7&uuid=883d36ec-8b3b-4c78-96e3-9f2db3d0dc5f">Image by freepik</a>

  return (
    <section className="xl:flex-row flex-col flex items-center justify-center gap-7 sm:gap-14">
      <div className="xl:w-5/12 w-11/12 xl:my-40 mt-40 flex flex-col gap-6">
        <h1 className="min-w-[73%] sm:min-w-[300px] xl:min-w-[490px] xl:w-10/12 w-8/12 font-normal text-2xl sm:text-4xl text-black relative z-40 text-warp">
          <span className="break-words">
            {title.text}
            {title.mark && (
              <span className="bg-primary whitespace-nowrap inline-block ml-1 absolute px-2 w-[fit-content] bottom-[12px] sm:bottom-[12px] leading-[8px] text-black rounded h-2 sm:h-3 text-warp">
                {title.mark}
              </span>
            )}
          </span>
        </h1>
        <span className="font-light text-lg sm:text-2xl text-black">
          {config.contents.description}
        </span>
        <Form />
      </div>
      <Image
        src="/computer-screen-slate.jpg"
        alt="hero"
        width={648}
        height={500}
        className="rounded-sm xl:w-6/12 xl:max-w-[648px] w-11/12 h-max mb-10"
      />
    </section>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";
import { Check, Megaphone, Search, Settings, TrendingUp } from "lucide-react";
import { PiMegaphone } from "react-icons/pi";
import { cn } from "@/lib/utils";

const WebsiteIllustration = () => {
  const actionButtons = [
    {
      aria: "Visibilité",
      node: <PiMegaphone className="size-5" />,
    },
    { aria: "SEO", node: <Search strokeWidth={1.75} className="size-5" /> },
    {
      aria: "Lancement",
      node: (
        <Image
          src="/rocket.gif"
          alt=""
          aria-hidden
          width={30}
          height={30}
          className="absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 z-20"
        />
      ),
    },
    {
      aria: "Croissance",
      node: <TrendingUp strokeWidth={1.75} className="size-5" />,
    },
    {
      aria: "Maintenance",
      node: <Settings strokeWidth={1.75} className="size-5" />,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-3 h-fit">
      <div className="relative rounded-3xl border border-gray-lighter shadow-md bg-white p-3 w-full">
        {/* Header pastilles */}
        <div className="flex items-center gap-2 rounded-t-3xl pb-4 pt-2 px-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-light" aria-hidden />
          <div
            className="h-2.5 w-2.5 rounded-full bg-primary-green"
            aria-hidden
          />
        </div>

        <hr className="border-gray-lighter mb-5" />

        {/* Badges statut */}
        <div className="absolute left-[50%] translate-x-[-50%] top-3 flex gap-2">
          <div className="rounded-md text-gray-dark bg-background text-xs px-5 py-1">
            www.votresite.com
          </div>
        </div>

        {/* Layout interne */}

        {/* Headline */}
        <div className="flex flex-col justify-center gap-2 w-full bg-gray-lighter rounded-xl p-4">
          <div className="h-2 w-full bg-white rounded-full" aria-hidden />
          <div className="h-2 w-4/5 bg-white rounded-full" aria-hidden />
        </div>
        <div className="grid grid-cols-3 gap-3 my-3">
          {/* 3 images + skeletons */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col justify-center gap-3 w-full">
              <div
                className="bg-gray-lighter rounded-xl h-[80px] w-fulls flex items-center justify-center"
                role="img"
                aria-label="Placeholder visuel"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Image"
                  width={100}
                  height={100}
                  className="size-8"
                />
              </div>
              <div className="space-y-2">
                <div
                  className="h-2 w-full bg-gray-lighter rounded-full"
                  aria-hidden
                />
                <div
                  className="h-2 w-4/5 bg-gray-lighter rounded-full"
                  aria-hidden
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-3 right-3 inline-flex items-center justify-center size-6 rounded-full text-white bg-primary-green">
          <Check strokeWidth={3} className="size-3" />
        </div>
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-center gap-3 bg-white rounded-3xl p-2 border border-gray-lighter shadow-md w-fit">
        {actionButtons.map((btn, idx) => (
          <div
            key={btn.aria}
            role="button"
            aria-label={btn.aria}
            className={cn(
              "relative inline-flex items-center justify-center size-10 rounded-full text-gray-dark",
              idx === 2
                ? "size-12 ring-4 ring-primary-green/30"
                : "hover:bg-background"
            )}
          >
            {btn.node}
            {idx === 2 && (
              <>
                <span className="bg-primary-green size-12 rounded-full absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 z-10"></span>
                <span className="bg-primary-dark size-7 rounded-full animate-[ping_1.5s_linear_infinite] absolute top-[50%] right-[50%] translate-x-1/2 -translate-y-1/2 z-0"></span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteIllustration;

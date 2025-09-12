import { cn } from "@/lib/utils";
import { BiSolidQuoteRight } from "react-icons/bi";

export const TestimonialsCard = ({
  img,
  name,
  job,
  body,
}: {
  img: string;
  name: string;
  job: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full rounded-xl p-6 bg-white ring-6 ring-gray-lighter"
      )}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <BiSolidQuoteRight className="text-gray-lighter text-xl" />
          <blockquote className="text-sm text-gray-dark">{body}</blockquote>
        </div>
        <div>
          <hr className="w-full my-6 border-gray-lighter" />
          <div className="flex items-center gap-2">
            <img
              className="rounded-full"
              width="40"
              height="40"
              alt=""
              src={img}
            />
            <div className="flex flex-col">
              <figcaption className="text-base font-medium">{name}</figcaption>
              <figcaption className="text-sm text-gray-dark">{job}</figcaption>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

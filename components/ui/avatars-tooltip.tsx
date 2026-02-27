import Image from "next/image";

export const AvatarsTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    role: string;
    image: string;
  }[];
}) => {
  return (
    <>
      {items.map((item) => (
        <div className="group relative -mr-3.5" key={item.name}>
          <Image
            height={100}
            width={100}
            src={`/clients/${item.image}`}
            alt={item.name}
            className="relative !m-0 h-11 w-11 rounded-full border-1 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
      <div className="relative z-50 w-11 h-11 bg-linear-to-br from-primary-dark to-secondary-dark rounded-full -mr-5 flex items-center justify-center font-medium text-white text-xs">
        +20
      </div>
    </>
  );
};

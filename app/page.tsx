import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen text-[#252432]">
      <div className="relative w-fit h-[100px] ">
        <Image
          src="/logo.svg"
          alt="Logo vizion web"
          width={400}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="text-center mt-8">
        <p className="font-semibold text-3xl">
          Site en cours de construction...
        </p>
        <p className="mt-4 mb-4 text-lg">
          Pour toute demande, veuillez nous contacter à cette adresse :
        </p>
        <p className="text-xl px-6 py-2 rounded-[10px] bg-[#252432] w-fit text-white mx-auto">
          contact@vizionweb.fr
        </p>
      </div>

      <div className="absolute bottom-0 w-full h-full -z-10">
        <Image
          src="/gradient-footer.png"
          alt="Logo vizion web"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

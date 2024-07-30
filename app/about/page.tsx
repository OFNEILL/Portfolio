import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3">
        <div className="aspect-square h-full max-h-[600px] overflow-hidden">
          <Image
            src="/my-pic.jpg"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-full h-full"
            alt="cool-ass photo of me"
          />
        </div>
        <div className="pt-4 col-span-2"></div>
      </div>
      <Marquee></Marquee>
    </div>
  );
}

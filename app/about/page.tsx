import Image from "next/image";

export default function About() {
  return (
    <div>
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
    </div>
  );
}

import Image from "next/image";

interface ImageCircleProps {
  image: string;
}

export default function ImageCircle({ image }: ImageCircleProps) {
  return (
    <div className="rounded-full h-12 sm:h-12 md:h-16 w-12 sm:w-12 md:w-16 lg:h-16  flex items-center justify-center relative">
      <Image src={image} alt="logo" fill />
    </div>
  );
}

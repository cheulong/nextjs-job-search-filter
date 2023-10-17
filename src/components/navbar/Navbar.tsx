import Image from "next/image";
// import bgImgDesktop from "/images/bg-header-desktop.svg";
// import bgImgMobile from "/images/bg-header-mobile.svg";

export default function Navbar() {
  return (
    <div className="bg-primary mb-8 w-full">
      <Image
        src="/images/bg-header-desktop.svg"
        alt="bgImgDesktop"
        width={1366}
        height={156}
      />

      {/* <img
        src="/images/bg-header-desktop.svg"
        alt="header"
        className="hidden  sm:hidden lg:block md:block"
      />
      <img
        src="/images/bg-header-mobile.svg"
        alt="header"
        className="lg:hidden md:hidden sm:block block "
      /> */}
    </div>
  );
}

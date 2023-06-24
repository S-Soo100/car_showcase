import Link from "next/link";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <section className="absolute z-10 w-full ">
      <nav className="max-w-[1440px] mx-auto flex flex-row justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          ></Image>
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        ></CustomButton>
      </nav>
    </section>
  );
};

export default Navbar;

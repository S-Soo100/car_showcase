"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn  text-white rounded-full mt-10  ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="{`flex-1 bg-red-500`}">{title}</span>
    </button>
  );
}

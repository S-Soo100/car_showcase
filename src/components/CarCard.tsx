"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import CustomButton from "./CustomButton";

interface IProps {
  car: CarProps;
}

const CarCard = ({ car }: IProps) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-medium">$</span>
        {carRent}

        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative object-contain w-full h-40 my-3">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex justify-between w-full group-hover:invisible text-gray">
          <div className="flex flex-col items-center justify-start gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {car.transmission === "a" ? "Autometic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col items-center justify-start gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{car.drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center justify-start gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10;">
          <CustomButton
            title="View More"
            containerStyles="w-full bg-primary-blue py-[16px] rounded-full"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
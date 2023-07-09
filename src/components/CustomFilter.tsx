"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps, OptionProps } from "@/types";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState<OptionProps>(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e: OptionProps) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative z-10 w-fit">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron-up down"
              height={20}
              width={20}
              className="object-contain ml-4"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={`
              absolute 
              mt-1 max-h-60 
              w-full 
              overflow-auto 
              rounded-md bg-white 
              py-1 text-base 
              shadow-lg ring-1 
              ring-black ring-opacity-5 
              focus:outline-none sm:text-sm`}
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({
                    active,
                  }) => `relative cursor-default select-none py-2 px-4 
                ${active ? `bg-primary-blue text-white` : `text-gray-900`}`}
                >
                  {(selected) => <span>{option.title}</span>}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;

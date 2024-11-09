"use client";

import { CalendarDays } from "lucide-react";
import { useRef, useEffect } from "react";

export default function TimeRangeSelection() {
  const ranges = [
    {
      code: "short",
      name: "4 Weeks",
    },
    {
      code: "medium",
      name: "6 Months",
    },
    {
      code: "long",
      name: "1 Year",
    },
  ];
  const shortTermRadioRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (shortTermRadioRef.current) shortTermRadioRef.current.click();
  }, []);

  return (
    <>
      <header className="p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400">
        <h2 className="text-sm flex gap-1 items-center font-normal">
          <span className="text-neutral-600 dark:text-neutral-400">
            <CalendarDays size={16} strokeWidth={2} />
          </span>
          Time Range
        </h2>
      </header>

      <input
        className="hidden"
        ref={shortTermRadioRef}
        id={"short-select"}
        type="radio"
        name="time-range"
        value={"short-term"}
        defaultChecked
      />
      <input
        className="hidden"
        id={"medium-select"}
        type="radio"
        name="time-range"
        value={"medium-term"}
      />
      <input
        className="hidden"
        id={"long-select"}
        type="radio"
        name="time-range"
        value={"long-term"}
      />

      <form className="flex w-full gap-2 lg:gap-6 mb-6">
        {ranges.map((range) => {
          return (
            <label
              id={range.code + "-select-label"}
              key={range.code}
              htmlFor={range.code + "-select"}
              className="text-center w-1/3 p-2 rounded-md text-sm cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300 bg-neutral-100/25 dark:bg-neutral-900/25 border-[1px] border-zinc-300 dark:border-zinc-800 sm:hover:bg-neutral-100/75 sm:dark:hover:bg-neutral-900/75"
            >
              {range.name}
            </label>
          );
        })}
      </form>
    </>
  );
}

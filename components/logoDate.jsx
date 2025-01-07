"use client";

import { useState } from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import DatePicker from "./datePicker";
import { Upload } from "lucide-react";

export default function LogoDate({ register, control }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-7 justify-between">
      <FormItem
        className="relative border border-gray-400/25 rounded-md w-[160px] h-[160px]
       hover:bg-[rgb(68,68,68,0.1)] transition-colors duration-100"
      >
        <div className="  flex flex-col gap-3 items-center text-gray-400/45 text-xl absolute top-[30%] left-[16%]">
          <Upload />
          <span>Select Logo</span>
        </div>
        <FormLabel className="flex justify-center items-center absolute inset-0 z-50 cursor-pointer "></FormLabel>
        <FormControl>
          <Input
            className=" invisible"
            type="file"
            accept="image/*"
            {...register("logo", {
              onChange: handleImageChange,
            })}
          />
        </FormControl>
        <FormMessage />

        {imagePreview && (
          <div className=" absolute inset-0 -top-2">
            <img
              src={imagePreview}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </FormItem>

      <div className="w-full -mt-2 sm:w-[370px] flex flex-col justify-between my-6">
        <DatePicker control={control} role="date" />

        <Controller
          name="invoice_number"
          control={control}
          render={({ field }) => (
            <FormItem className="  flex gap-5 items-baseline  justify-between">
              <FormLabel className=" text-sm">Invoice No.</FormLabel>
              <FormControl className=" ">
                <Input {...field} className="max-w-[64%]" />
              </FormControl>
            </FormItem>
          )}
        />

        <DatePicker control={control} role="due_date" />
      </div>
    </div>
  );
}

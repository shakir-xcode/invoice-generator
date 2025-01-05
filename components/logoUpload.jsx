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

export default function LogoUpload({ register, control, setValue }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="border flex flex-col md:flex-row gap-7 justify-between">
      <FormItem className="relative border w-[160px] h-[160px] ">
        <div className=" text-gray-400/45 text-5xl absolute top-[35%] left-[15%]">
          Logo
        </div>
        <FormLabel className="flex justify-center items-center absolute inset-0 z-50 "></FormLabel>
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

      <div>
        <DatePicker control={control} role="date" />

        <Controller
          name="invoice_number"
          control={control}
          render={({ field }) => (
            <FormItem className="flex gap-5 items-baseline max-w-[350px] justify-between">
              <FormLabel className=" text-sm">Invoice Number</FormLabel>
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

"use client";

import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import DatePicker from "./datePicker";
import { Trash2, Upload } from "lucide-react";

const LogoDate = React.memo(
  ({ register, control, imagePreview, setValue, errors }) => {
    const handleImageDelete = () => {
      setValue("logo", null);
    };

    return (
      <div className="flex flex-col md:flex-row gap-7 justify-between">
        <FormItem
          className="relative border border-gray-400/25 rounded-md w-[160px] h-[160px]
       hover:bg-[rgb(68,68,68,0.1)] transition-colors duration-100"
        >
          <div className="  flex flex-col gap-3 items-center text-gray-400/45 text-xl absolute top-[30%] left-[16%]">
            {!imagePreview && (
              <div className="flex flex-col items-center">
                <Upload />
                <span>Select Logo</span>
              </div>
            )}
          </div>
          <FormLabel className="flex justify-center items-center absolute inset-0 z-50 cursor-pointer "></FormLabel>
          <FormControl>
            <Input
              className=" invisible"
              type="file"
              accept="image/*"
              {...register("logo", {
                validate: {
                  checkFileType: (value) => {
                    if (!value?.[0]) return true; //allow no logo
                    return (
                      value?.[0]?.type?.startsWith("image/") ||
                      "Only image files are allowed"
                    );
                  },
                  checkFileSize: (value) => {
                    if (!value?.[0]) return true;

                    return (
                      value?.[0]?.size <= 2 * 1024 * 1024 || // 2MB limit
                      "File size must not exceed 2MB"
                    );
                  },
                },
              })}
            />
          </FormControl>
          <FormMessage />
          {errors.logo && (
            <p className=" absolute bottom-0 px-0.5 text-sm text-red-500 text-center">
              {errors.logo.message}
            </p>
          )}
          {imagePreview && (
            <div
              onClick={handleImageDelete}
              className=" absolute top-0 right-1 z-50 cursor-pointer  px-0.5  text-gray-500 text-center"
            >
              <Trash2 size={20} />
            </div>
          )}
          {imagePreview && (
            <div className=" absolute inset-0 flex justify-center items-center -top-2 bg-gray-500/10 ">
              <img src={imagePreview} alt="" className="object-contain" />
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
);

export default LogoDate;

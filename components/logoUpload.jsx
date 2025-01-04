"use client";

import { useState } from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function LogoUpload({ setValue, register }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    console.log("HERE...");
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      //   setValue("logo", file); // Set the image in the form
    }
  };

  return (
    <>
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
    </>
  );
}

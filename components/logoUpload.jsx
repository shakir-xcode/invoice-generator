"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
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
      <FormItem className="relative border w-[160px] h-[160px]">
        <FormControl>
          <Input
            type="file"
            accept="image/*"
            {...register("logo", {
              onChange: handleImageChange,
            })}
          />
        </FormControl>
        <FormMessage />

        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-32 w-32 object-cover"
            />
          </div>
        )}
      </FormItem>
    </>
  );
}

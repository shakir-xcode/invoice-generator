"use client";

import React from "react";

import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ProviderData = ({ form }) => {
  const tailwindStyles = "text-sm";

  return (
    <>
      <div className="w-[340px]" />
      <FormField
        control={form.control}
        name="from_name"
        render={({ field }) => (
          <FormItem className=" flex items-center justify-between gap-1">
            <FormLabel className={`${tailwindStyles} `}>Name</FormLabel>
            <FormControl>
              <Input required={true} {...field} className="max-w-[75%] " />
            </FormControl>
            {/* <FormMessage className=" text-xs " /> */}
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="from_address"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between gap-2 max-w-[320px] ">
            <FormLabel className={`${tailwindStyles}`}>Address</FormLabel>
            <FormControl>
              <Input {...field} className="max-w-[75%]" />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="from_email"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between gap-2 max-w-[320px]">
            <FormLabel className={`${tailwindStyles}`}>Email</FormLabel>
            <FormControl>
              <Input type="email" {...field} className="max-w-[75%]" />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="from_phone"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between gap-2 max-w-[320px]">
            <FormLabel className={`${tailwindStyles}`}>Phone</FormLabel>
            <FormControl>
              <Input {...field} className="max-w-[75%]" />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="from_website"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between gap-2 max-w-[320px]">
            <FormLabel className={`${tailwindStyles}`}>Website</FormLabel>
            <FormControl>
              <Input {...field} className="max-w-[75%]" />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export default ProviderData;

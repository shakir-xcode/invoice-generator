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

const ClientData = ({ form }) => {
  const tailwindStyles = "text-sm";

  return (
    <>
      <div className="w-[340px]" />
      <FormField
        control={form.control}
        name="client_name"
        render={({ field }) => (
          <FormItem className=" flex items-center justify-between gap-1">
            <FormLabel className={`${tailwindStyles} `}>Name</FormLabel>
            <FormControl>
              <Input {...field} className="max-w-[75%] " />
            </FormControl>
            {/* <FormMessage className="absolute bottom-0 right-0 text-xs " /> */}
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="client_address"
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
        name="client_email"
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
        name="client_phone"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between gap-2 max-w-[320px]">
            <FormLabel className={`${tailwindStyles}`}>Phone</FormLabel>
            <FormControl>
              <Input {...field} className="max-w-[75%]" />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export default ClientData;

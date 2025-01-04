import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Controller } from "react-hook-form";

const AmountCalculator = ({ control }) => {
  return (
    <div className="border">
      {/* <FormField
        control={control}
        name="subtotal"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between gap-2 max-w-[320px]">
            <FormLabel className="">Subtotal</FormLabel>
            <FormControl>
              <Input {...field} className="  max-w-[75%] " disabled={true} />
            </FormControl>
          </FormItem>
        )}
      /> */}

      <Controller
        name="subtotal"
        control={control}
        render={({ field }) => (
          <FormItem className="flex gap-3 items-center w-fit border">
            <FormLabel className=" text-md border">Subtotal</FormLabel>
            <FormControl>{field.value.toFixed(2)}</FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default AmountCalculator;

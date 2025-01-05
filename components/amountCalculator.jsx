import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Controller } from "react-hook-form";

const AmountCalculator = ({ control, selectedCurrency }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between">
      <div className="border flex flex-col md:max-w-[40%] order-2">
        <Controller
          name="taxi"
          control={control}
          render={({ field }) => (
            <FormItem className="relative flex gap-5 items-baseline max-w-[350px] justify-between">
              <FormLabel className=" text-sm">
                Taxi <span className=" text-sm">%</span>
              </FormLabel>
              <FormControl className=" ">
                <Input {...field} className="max-w-[64%]" />
              </FormControl>
              <p className="absolute right-2 top-2 ">%</p>
            </FormItem>
          )}
        />
      </div>

      <div className="border flex flex-col md:max-w-[40%]">
        <Controller
          name="subtotal"
          control={control}
          render={({ field }) => (
            <FormItem className="flex gap-5 items-baseline max-w-[350px] justify-between">
              <div className=" text-md">Subtotal</div>
              <FormControl>
                <div className=" flex gap-1.5">
                  <span>{selectedCurrency}</span>
                  <span>{field.value}</span>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Controller
          name="tax"
          control={control}
          render={({ field }) => (
            <FormItem className="relative flex gap-5 items-baseline max-w-[350px] justify-between">
              <FormLabel className=" text-sm">
                Tax <span className=" text-sm">%</span>
              </FormLabel>
              <FormControl className=" ">
                <Input {...field} className="max-w-[64%]" />
              </FormControl>
              <p className="absolute right-2 top-2 ">%</p>
            </FormItem>
          )}
        />

        <Controller
          name="discount"
          control={control}
          render={({ field }) => (
            <FormItem className="flex gap-5 items-baseline max-w-[350px] justify-between">
              <FormLabel className=" text-sm">
                Discount <span className=" text-sm">{selectedCurrency}</span>
              </FormLabel>
              <FormControl className=" ">
                <Input {...field} className="max-w-[64%]" />
              </FormControl>
            </FormItem>
          )}
        />

        <Controller
          name="shipping"
          control={control}
          render={({ field }) => (
            <FormItem className="flex gap-5 items-baseline max-w-[350px] justify-between">
              <FormLabel className=" text-sm">Shipping fee</FormLabel>
              <FormControl className=" ">
                <Input {...field} className="max-w-[64%]" />
              </FormControl>
            </FormItem>
          )}
        />

        <Controller
          name="total"
          control={control}
          render={({ field }) => (
            <FormItem className="text-md font-bold flex gap-5 items-baseline max-w-[350px] justify-between mt-6">
              <div className=" ">Total</div>
              <FormControl>
                <div className=" flex gap-1.5">
                  <span>{selectedCurrency}</span>
                  <span>{field.value}</span>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default AmountCalculator;

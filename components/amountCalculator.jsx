import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencyList } from "@/lib/currencyList";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const AmountCalculator = ({ control, selectedCurrency, register }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between items-baseline">
      <div className="flex flex-col gap-6 w-full md:w-[50%] ">
        <FormField
          control={control}
          name="currency"
          render={({ field }) => (
            <FormItem className="md:w-[70%]">
              <FormLabel className="text-md">Select Currency</FormLabel>
              <Select
                onValueChange={field.onChange}
                // defaultValue={field?.value.split("_").pop()}
                defaultValue={field.value}
              >
                {/* {console.log(field?.value.split("_").pop() || "null")} */}
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a currency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {currencyList.map((currency) => (
                    <SelectItem
                      key={currency.id}
                      value={`${currency.value}_${currency.symbol}_${currency.text}`}
                    >
                      {currency.text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Label htmlFor="notes" className=" text-md text-bold">
            Notes
          </Label>
          <Textarea
            className="h-24 resize-none text-sm"
            placeholder="Add any additional information or instructions for the recipient here."
            id="notes"
            {...register("notes")}
          />
        </div>

        <div>
          <Label htmlFor="terms" className=" text-md text-bold">
            Terms
          </Label>
          <Textarea
            className="h-24 resize-none text-sm"
            placeholder="Terms and conditions of the invoice (e.g., payment deadline, penalties)"
            id="terms"
            {...register("terms")}
          />
        </div>
      </div>

      <div className="flex flex-col md:w-[370px] ">
        <Controller
          name="subtotal"
          control={control}
          render={({ field }) => (
            <FormItem className="flex gap-5 items-baseline w-full justify-between">
              <div className=" text-md">Subtotal</div>
              <FormControl>
                <div className=" flex gap-1.5">
                  <span>{selectedCurrency || ""}</span>
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
            <FormItem className="relative flex gap-5 items-baseline justify-between">
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
          name="tax_value"
          hidden={true}
          control={control}
          render={({ field }) => (
            <FormItem className="relative flex gap-5 items-baseline justify-between">
              <FormControl className=" ">
                <Input {...field} type="hidden" />
              </FormControl>
            </FormItem>
          )}
        />

        <Controller
          name="discount"
          control={control}
          render={({ field }) => (
            <FormItem className="flex gap-5 items-baseline justify-between">
              <FormLabel className=" text-sm">
                Discount{" "}
                <span className=" text-sm">({selectedCurrency || ""})</span>
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
            <FormItem className="flex gap-5 items-baseline justify-between">
              <FormLabel className=" text-sm">
                Shipping fee{" "}
                <span className=" text-sm">({selectedCurrency || ""})</span>
              </FormLabel>
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
            <FormItem className="text-md flex gap-5 items-baseline justify-between">
              <div className=" ">Total</div>
              <FormControl>
                <div className=" flex gap-1.5">
                  <span>{selectedCurrency || ""}</span>
                  <span>{field.value}</span>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Controller
          name="amount_paid"
          control={control}
          render={({ field }) => (
            <FormItem className="flex gap-5 items-baseline justify-between">
              <FormLabel className=" text-sm">
                Amount Paid{" "}
                <span className=" text-sm">({selectedCurrency || ""})</span>
              </FormLabel>
              <FormControl className=" ">
                <Input {...field} className="max-w-[64%]" />
              </FormControl>
            </FormItem>
          )}
        />

        <Controller
          name="balance_due"
          control={control}
          render={({ field }) => (
            <FormItem className="text-md font-bold flex gap-5 items-baseline justify-between ">
              <div className=" ">Balance Due</div>
              <FormControl>
                <div className=" flex gap-1.5">
                  <span>{selectedCurrency || ""}</span>
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

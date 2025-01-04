"use client";

import React, { useState } from "react";

import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

const ProductDescription = () => {
  const tailwindStyles = {
    text: "text-sm",
    tdc1: "border border-gray-300 px-4 py-2 w-full md:w-auto",
    td: "border border-gray-300 px-4 py-2 w-1/2 md:w-auto",
  };

  const [productCount, setProductCount] = useState(1);
  const data = [{ col1: "Data 1", col2: "Data 2", col3: "Data 3" }];

  const form = useForm();

  function onSubmit(data) {
    console.log(data);
    alert(JSON.stringify(data));
  }
  return (
    <>
      {/* <FormField
        control={form.control}
        name="product_name"
        render={({ field }) => (
          <FormItem className=" flex items-center justify-between gap-1">
            <FormLabel className={`${tailwindStyles} `}>product</FormLabel>
            <FormControl>
              <Input {...field} className="max-w-[75%] " />
            </FormControl>
          </FormItem>
        )}
      /> */}

      {/* <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-slate-800">
            <th className="border border-gray-300 px-4 py-2 w-[100%] md:w-[70%] text-left">
              Column 1
            </th>
            <th className="border border-gray-300 px-4 py-2 w-[50%] md:w-[15%] text-left">
              Column 2
            </th>
            <th className="border border-gray-300 px-4 py-2 w-[50%] md:w-[15%] text-left">
              Column 3
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${tailwindStyles.tdc1}`}>Row 1, Column 1</td>
            <td className={`${tailwindStyles.td}`}>Row 1, Column 1</td>
            <td className={`${tailwindStyles.td}`}>Row 1, Column 1</td>
          </tr>
          <tr>
            <td className={`${tailwindStyles.tdc1}`}>Row 1, Column 1</td>
            <td className={`${tailwindStyles.td}`}>Row 1, Column 1</td>
            <td className={`${tailwindStyles.td}`}>Row 1, Column 1</td>
          </tr>
          <tr>
            <td className={`${tailwindStyles.tdc1}`}>Row 1, Column 1</td>
            <td className={`${tailwindStyles.td}`}>Row 1, Column 1</td>
            <td className={`${tailwindStyles.td}`}>Row 1, Column 1</td>
          </tr>
        </tbody>
      </table> */}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border space-y-8"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full lg:w-[60%] ">
              <h3 className=" hidden md:block bg-gray-800 text-left px-4 py-2 font-semibold">
                Product
              </h3>
              <FormField
                control={form.control}
                name="product_description1"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input {...field} className="my-1" />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full lg:w-[40%] flex">
              <div className="w-1/3  md:mt-0">
                <h3 className="hidden md:block bg-gray-800 text-left px-4 py-2 font-semibold">
                  Quantity
                </h3>
                <FormField
                  control={form.control}
                  name="product_quantity1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          value="1"
                          className="md:w-[97%] mx-auto my-1"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-1/3 md:mt-0 ">
                <h3 className="hidden md:block bg-gray-800 text-left px-4 py-2 font-semibold">
                  Rate
                </h3>
                <FormField
                  control={form.control}
                  name="product_rate1"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          value="0"
                          className="my-1"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      <Button
        onClick={() => {
          setProductCount((pre) => pre + 1);
        }}
      >
        Add Item
      </Button>
    </>
  );
};

export default ProductDescription;

"use client";

import React from "react";
import { Button } from "./ui/button";
import { CirclePlus } from "lucide-react";

const ProductDetails = ({
  fields,
  append,
  remove,
  register,
  selectedCurrency,
}) => {
  return (
    <div>
      <h1 className="block md:hidden text-xl">Products</h1>
      <table className="w-full mt-2 md:mt-6">
        {/* item table heading */}
        <thead className="hidden md:block">
          <tr
            className="flex  bg-secondary-accent text-text-secondary  px-3 py-2
           rounded font-normal text-sm text-left "
          >
            <th className="w-[57%] font-semibold text-start ">Product</th>
            <th className="w-[13.5%] font-semibold text-start ">Quantity</th>
            <th className="w-[12.5%] font-semibold text-start ">Rate&nbsp;</th>
            <th className="w-[15%] font-semibold pl-4 ">Amount&nbsp;</th>
          </tr>
        </thead>

        <tbody className=" flex flex-col gap-3 sm:gap-0">
          {fields.map((field, index) => (
            <tr
              key={field.id}
              className=" relative border md:border-0  rounded flex flex-wrap
            sm:px-0 px-3 py-2 font-normal text-sm text-left gap-1 -mb-1.5 group"
            >
              <td className=" w-[90%] md:w-[55%]   ">
                <input
                  {...register(`products.${index}.description`)}
                  placeholder="Description"
                  className="w-full border px-3 py-2  rounded "
                />
              </td>

              <td className=" w-[20%] md:w-[12.5%] ">
                <input
                  step="any"
                  min="0"
                  type="number"
                  {...register(`products.${index}.quantity`)}
                  placeholder="Quantity"
                  className=" remove-arrow w-full border px-3 py-2 rounded"
                />
              </td>
              <td className="flex justify-center items-center md:hidden">
                <p className="text-slate-500 text-lg rotate-45">+</p>
              </td>
              <td className=" w-[20%] md:w-[12.5%] border rounded flex items-center">
                <input
                  step="any"
                  min="0"
                  type="number"
                  {...register(`products.${index}.rate`)}
                  placeholder="Rate"
                  className="remove-arrow w-full rounded px-3 py-2 grow "
                />
              </td>

              <td className="border rounded w-[150px] md:w-[18%] lg:grow lg:w-[12.5%]  flex items-center">
                <p className="pl-2 flex gap-3">
                  <span className="text-slate-500 block md:hidden text-md">
                    =
                  </span>
                  <span>{` ${selectedCurrency || ""}`}</span>
                </p>
                <input
                  disabled
                  min="0"
                  type="number"
                  {...register(`products.${index}.amount`)}
                  placeholder="0"
                  className="  w-full rounded pl-2 py-2 grow bg-transparent"
                />
              </td>

              {fields.length > 1 && (
                <td
                  title="remove item"
                  className=" absolute  right-1 md:right-4 lg:right-7 text-secondary-accent 
                      px-2  pt-1 text-2xl  rotate-45  
                      opacity-0 group-hover:opacity-100 cursor-pointer"
                  onClick={() => remove(index)}
                >
                  +
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <Button
        type="button"
        onClick={() => append({ description: "", rate: "", quantity: "" })}
        className=" px-2.5 mt-2 gradient-btn hover-color-shadow"
      >
        <CirclePlus />
        {/* <span className=" text-xl">+</span> */}
        Add Item
      </Button>
    </div>
  );
};

export default ProductDetails;

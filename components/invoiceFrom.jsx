"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import ProductsNew from "./productsNew";
import LogoUpload from "./logoUpload";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import AmountCalculator from "./amountCalculator";
import { getSubtotal, getTotal } from "@/lib/calculations";

const FormSchema = z.object({
  // logo: z
  //   .instanceof(File)
  //   .refine((file) => file.size <= 100, "Image size must be less than 5MB")
  //   .refine(
  //     (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
  //     "Only JPG and PNG images are allowed"
  //   ),
  from_name: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  from_address: z.string(),
  from_email: z.string(),
  from_phone: z.string(),
  from_website: z.string(),
  client_name: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  client_address: z.string(),
  client_email: z.string(),
  client_phone: z.string(),
  // products: z.array(),
});

export function InvoiceForm() {
  const form = useForm({
    // resolver: zodResolver(FormSchema),
    defaultValues: {
      logo: null,
      company_details: "",
      client_details: "",
      products: [{ description: "", rate: 0, quantity: 0, amount: 0 }],
      subtotal: 0,
      tax: 0,
      discount: 0,
      shipping: 0,
      total: 43,
      date: "",
      due_date: "",
      invoice_number: Date.now().toString().split("").slice(3).join(""),
    },
  });

  const selectedCurrency = "$";
  const selectedCurrencyLabel = "usd";

  const {
    register,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = form;

  const watchedProducts = useWatch({ control, name: "products" });

  useEffect(() => {
    watchedProducts.forEach((product, index) => {
      const calculatedAmount = (
        (parseFloat(product?.rate) || 0) * (parseFloat(product?.quantity) || 0)
      ).toFixed(2);
      // Only update if the total is incorrect
      if (product?.amount !== calculatedAmount) {
        setValue(`products.${index}.amount`, calculatedAmount || 0);
        // console.log("total : ", getValues("total"));
      }
    });
    setValue(`subtotal`, getSubtotal(watchedProducts));
  }, [watchedProducts, setValue]);

  const subtotal = watch("subtotal");
  const tax = watch("tax");
  const discount = watch("discount");
  const shipping = watch("shipping");

  useEffect(() => {
    const calculatedTotal = parseFloat(
      getTotal(subtotal, tax, discount, shipping)
    ).toFixed(2);
    if (getValues("total") !== calculatedTotal)
      setValue("total", calculatedTotal || 0);
  }, [subtotal, tax, discount, shipping, setValue]);

  const [imagePreview, setImagePreview] = useState(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  function onSubmit(data) {
    console.log(data);
    alert(JSON.stringify(data));
  }

  const handleImageChange = (event) => {
    console.log("HERE........");
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("logo", file); // Set the image in the form
      console.log("Updated form state:", watch());
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
          <LogoUpload {...form} />

          <div className="flex flex-col md:flex-row justify-between gap-5  border">
            <div className="w-full  md:w-[40%] ">
              <div className="grid w-full gap-1.5">
                <Label htmlFor="company-details" className="text-xl text-bold">
                  Your Company Details
                </Label>
                <Textarea
                  className="h-32 resize-none"
                  placeholder="Enter details here."
                  id="company-details"
                  {...register("company_details", {
                    required: "Details are required",
                    minLength: {
                      value: 6,
                      message: "Details must be at least 6 characters",
                    },
                  })}
                />
                {errors.company_details && (
                  <p className="text-sm text-red-500">
                    {errors?.company_details?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full  md:w-[40%] ">
              <div className="grid w-full gap-1.5">
                <Label htmlFor="client-details" className="text-xl text-bold">
                  Bill To
                </Label>
                <Textarea
                  className="h-32 resize-none"
                  placeholder="Enter details here."
                  id="client-details"
                  {...register("client_details", {
                    required: "Details are required",
                    minLength: {
                      value: 6,
                      message: "Details must be at least 6 characters",
                    },
                  })}
                />
                {errors.client_details && (
                  <p className="text-sm text-red-500">
                    {errors?.client_details?.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <ProductsNew
            fields={fields}
            append={append}
            register={register}
            remove={remove}
            selectedCurrency={selectedCurrency}
            selectedCurrencyLabel={selectedCurrencyLabel}
          />

          <AmountCalculator {...form} selectedCurrency={selectedCurrency} />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}

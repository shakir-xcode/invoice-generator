"use client";

import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useEffect } from "react";
import ProductDetails from "./productDetails";
import LogoDate from "./logoDate";
import AmountCalculator from "./amountCalculator";
import { getSubtotal, getTotal } from "@/lib/calculations";
import CompanyDetails from "./companyDetails";

export function InvoiceForm() {
  const form = useForm({
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
      currency: "USD_$_USD - US Dollar ($)",
      terms: "",
      notes: "",
    },
  });

  const { register, setValue, getValues, watch, control } = form;

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
  const currency = watch("currency");

  useEffect(() => {
    const calculatedTotal = parseFloat(
      getTotal(subtotal, tax, discount, shipping)
    ).toFixed(2);
    if (getValues("total") !== calculatedTotal)
      setValue("total", calculatedTotal || 0);
  }, [subtotal, tax, discount, shipping, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  function onSubmit(data) {
    console.log(data);
    alert(JSON.stringify(data));
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 ">
          <LogoDate {...form} />

          <CompanyDetails {...form} />

          <ProductDetails
            fields={fields}
            append={append}
            register={register}
            remove={remove}
            selectedCurrency={currency.split("_")[1] || "$"}
            selectedCurrencyLabel={currency.split("_")[0] || "USD"}
          />

          <AmountCalculator
            {...form}
            selectedCurrency={currency.split("_")[1] || "$"}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}

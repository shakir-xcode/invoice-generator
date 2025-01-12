"use client";

import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useEffect } from "react";
import ProductDetails from "./productDetails";
import LogoDate from "./logoDate";
import AmountCalculator from "./amountCalculator";
import { getBalanceDue, getSubtotal, getTotal } from "@/lib/calculations";
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
      tax_value: "",
      discount: 0,
      shipping: 0,
      total: 0,
      amount_paid: 0,
      balance_due: 0,
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

  // Products
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
  const total = watch("total");
  const amount_paid = watch("amount_paid");

  // Total
  useEffect(() => {
    const [taxValue, _total] = getTotal(subtotal, tax, discount, shipping);
    const calculatedTotal = parseFloat(_total).toFixed(2);
    if (getValues("total") !== calculatedTotal)
      setValue("total", calculatedTotal || 0);

    if (getValues("tax_value") !== taxValue)
      setValue("tax_value", taxValue || 0);
  }, [subtotal, tax, discount, shipping, setValue]);

  // Balance Due
  useEffect(() => {
    console.log("triggered...");
    const balanceDue = parseFloat(getBalanceDue(total, amount_paid)).toFixed(2);
    if (getValues("balance_due") !== balanceDue) {
      setValue("balance_due", balanceDue || 0);
    }
  }, [amount_paid, total, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  function onSubmit(data) {
    // console.log(data);
    // alert(JSON.stringify(data));
    sendInoviceData(data);
  }

  async function sendInoviceData(data) {
    const res = await fetch("/api/handleInvoice", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    console.log(responseData);
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

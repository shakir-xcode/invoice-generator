"use client";

import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState, useEffect } from "react";
import ProductDetails from "./productDetails";
import LogoDate from "./logoDate";
import AmountCalculator from "./amountCalculator";
import { getBalanceDue, getSubtotal, getTotal } from "@/lib/calculations";
import CompanyDetails from "./companyDetails";
import { formatData } from "@/lib/formatInvoiceData";
import { SubmissionAlertDialog } from "./submissionAlertDialog";
import { ScrollAnimated } from "@/animation/animation-wrapper";

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

  const [imagePreview, setImagePreview] = useState(null);

  const [invoiceState, setInvoiceState] = useState({
    success: 0,
    loading: false,
    isDialogOpen: false,
    dialogMessage: "",
  });

  const resetInvoiceState = () => {
    setInvoiceState({
      success: 0,
      loading: false,
      isDialogOpen: false,
      dialogMessage: "",
    });
  };

  const {
    register,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = form;

  const watchedProducts = useWatch({ control, name: "products" });

  const subtotal = watch("subtotal");
  const tax = watch("tax");
  const discount = watch("discount");
  const shipping = watch("shipping");
  const currency = watch("currency");
  const total = watch("total");
  const amount_paid = watch("amount_paid");
  const logo = watch("logo");

  //Logo
  useEffect(() => {
    if (!logo?.length || logo[0].size > 3 * 1024 * 1024) {
      setImagePreview(null);
      return;
    }
    const file = logo[0];
    setImagePreview(URL.createObjectURL(file));
  }, [logo, setValue]);

  // Products
  useEffect(() => {
    watchedProducts.forEach((product, index) => {
      const calculatedAmount = (
        (parseFloat(product?.rate) || 0) * (parseFloat(product?.quantity) || 0)
      ).toFixed(2);
      // Only update if the total is incorrect
      if (product?.amount !== calculatedAmount) {
        setValue(`products.${index}.amount`, calculatedAmount || 0);
      }
    });

    setValue(`subtotal`, getSubtotal(watchedProducts));
  }, [watchedProducts, setValue]);

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
    const balanceDue = parseFloat(getBalanceDue(total, amount_paid)).toFixed(2);
    if (getValues("balance_due") !== balanceDue) {
      setValue("balance_due", balanceDue || 0);
    }
  }, [amount_paid, total, setValue]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  async function onSubmit(data) {
    setInvoiceState({
      success: 0,
      loading: true,
      isDialogOpen: false,
      dialogMessage: "",
    });
    // setInvoiceState((pre) => ({ ...pre, loading: true }));
    const formattedData = formatData(data);
    setInvoiceState((pre) => ({ ...pre, isDialogOpen: true }));

    try {
      const formData = new FormData();

      // Append regular form fields
      const keys = Object.keys(formattedData);
      keys.forEach((key) => {
        if (key === "products")
          formData.append("products", JSON.stringify(formattedData.products));
        else formData.append(key, formattedData[key]);
      });

      const response = await fetch("/api/generate-invoice/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setInvoiceState((pre) => ({ ...pre, success: -1 }));
        setInvoiceState((pre) => ({
          ...pre,
          dialogMessage: "Could not generate Invoice",
        }));
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "invoice.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url); // Cleanup the object URL

      setInvoiceState((pre) => ({ ...pre, loading: false }));
      setInvoiceState((pre) => ({ ...pre, success: 1 }));
      setInvoiceState((pre) => ({
        ...pre,
        dialogMessage: "Invoice generated successfully",
      }));
    } catch (error) {
      setInvoiceState((pre) => ({ ...pre, loading: false }));
      setInvoiceState((pre) => ({ ...pre, success: -1 }));
      setInvoiceState((pre) => ({
        ...pre,
        dialogMessage: "Error submitting form",
      }));
    }
  }

  return (
    <div className="container mx-auto ">
      <div className="text-center mb-16 px-4">
        {/* <p className="bg-clip-text text-transparent default text-2xl border w-fit px-8 py-1 rounded-full mx-auto">Featrues</p> */}
        <h2 className="text-4xl font-bold mb-4">
          Create Your <span className="gradient-text">Invoice</span>
        </h2>
        <p className="text-xl text-muted-foreground">
          Simple tools for creating stunning invoices
        </p>
      </div>
      <div className="relative border bg-secondary/50 py-12 px-4 md:px-12 rounded-lg">
        <div className="absolute h-1.5 -z-1 left-10 right-10  rounded-full gradient-item -top-0.5" />
        <ScrollAnimated
          className="child-one"
          animationClass="slide-in"
          threshold={0.2}
          triggerOnce={true}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-12 "
            >
              <LogoDate
                register={register}
                control={control}
                setValue={setValue}
                imagePreview={imagePreview}
                errors={errors}
              />

              <CompanyDetails register={register} errors={errors} />

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
              <Button
                type="submit"
                disabled={invoiceState?.loading}
                className="gradient-btn"
              >
                {invoiceState?.loading ? "Generating" : "Generate"}
              </Button>
              <SubmissionAlertDialog
                success={invoiceState.success}
                isDialogOpen={invoiceState.isDialogOpen}
                resetInvoiceState={resetInvoiceState}
                setInvoiceState={setInvoiceState}
                dialogMessage={invoiceState.dialogMessage}
              />
            </form>
          </Form>
        </ScrollAnimated>
      </div>
    </div>
  );
}

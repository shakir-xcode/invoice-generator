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
import ProviderData from "./providerData";
import ClientData from "./clientData";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import ProductsNew from "./productsNew";
import LogoUpload from "./logoUpload";

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
      // logo: null,
      from_name: "",
      from_address: "",
      from_email: "",
      from_phone: "",
      from_website: "",

      client_name: "",
      client_address: "",
      client_email: "",
      client_phone: "",
      products: [{ description: "", rate: "", quantity: "", total: "" }],
    },
  });

  const { register, setValue, watch, control } = form;

  // const rate = watch("products.0.rate");
  // const quantity = watch("products.0.quantity");

  // useEffect(() => {
  //   const calculatedTotal = rate * quantity;
  //   setValue("products.0.total", calculatedTotal || 0); // Dynamically update total
  // }, [rate, quantity, setValue]);

  const watchedProducts = useWatch({ control, name: "products" });

  useEffect(() => {
    watchedProducts.forEach((product, index) => {
      const calculatedTotal = (product?.rate || 0) * (product?.quantity || 0);

      // Only update if the total is incorrect
      if (product?.total !== calculatedTotal) {
        setValue(`products.${index}.total`, calculatedTotal || 0);
      }
    });
  }, [watchedProducts, setValue]);

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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border space-y-8"
        >
          <div className="max-w-[320px] ">
            <h2 className="text-2xl text-bold">Logo </h2>
            <LogoUpload setValue={setValue} register={register} />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5  border">
            <div className="max-w-[320px] ">
              <h2 className="text-2xl text-bold">From </h2>
              <ProviderData form={form} />
            </div>

            <div className="max-w-[320px]">
              <h2 className="text-2xl text-bold">Client</h2>
              <ClientData form={form} />
            </div>
          </div>

          {/* <div className=" border">
        </div> */}
          <ProductsNew
            fields={fields}
            append={append}
            register={register}
            remove={remove}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* <ProductDescription form={form} /> */}
    </>
  );
}

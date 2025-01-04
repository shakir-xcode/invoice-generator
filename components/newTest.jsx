"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const NewTest = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      products: [{ description: "", rate: "", quantity: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log("Submitted Data:", data);
    // Send data to backend
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Products</h2>
      {fields.map((field, index) => (
        <div key={field.id} className="mb-4">
          <input
            {...register(`products.${index}.description`)}
            placeholder="Description"
            className="border px-2 py-1 mr-2"
          />
          <input
            type="number"
            {...register(`products.${index}.rate`)}
            placeholder="Rate"
            className="border px-2 py-1 mr-2"
          />
          <input
            type="number"
            {...register(`products.${index}.quantity`)}
            placeholder="Quantity"
            className="border px-2 py-1 mr-2"
          />
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-red-500 border px-2 py-1"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ description: "", rate: "", quantity: "" })}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>
      <br />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default NewTest;

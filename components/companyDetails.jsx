import React from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const CompanyDetails = ({ register, formState: { errors } }) => {
  return (
    <div className=" flex flex-col md:flex-row justify-between gap-5 ">
      <div className="w-full  md:w-[45%] ">
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

      <div className="w-full  md:w-[45%] ">
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
  );
};

export default CompanyDetails;

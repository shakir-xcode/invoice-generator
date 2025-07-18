import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const TemplateCarousl = React.memo(({ control, selectedTemplate }) => {
  const templates = [
    {
      image: "/images/template_1.webp",
      templateId: "100",
    },
    {
      image: "/images/template_2.webp",
      templateId: "200",
    },
    {
      image: "/images/template_3.webp",
      templateId: "300",
    },
  ];

  return (
    <div className="container px-10 mx-auto">
      <div className=" flex justify-center gap-2 py-3 text-2xl font-bold gradient-text">
        <h2 className="">Choose Invoice Template</h2>
      </div>
      <div className="">
        <FormField
          control={control}
          name="template_id"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <Carousel className=" w-[80%] sm:w-[30%] mx-auto ">
                    <CarouselContent>
                      {templates.map((template) => (
                        <CarouselItem
                          key={template.templateId}
                          className="basis-[100%] "
                        >
                          <FormItem className="flex flex-col items-center ">
                            <FormLabel
                              title={
                                template.templateId !== selectedTemplate
                                  ? "click to select template"
                                  : ""
                              }
                              className="font-normal cursor-pointer"
                            >
                              <div
                                className={`p-[4px] rounded-[10px] ${
                                  selectedTemplate === template.templateId
                                    ? "gradient-item"
                                    : "bg-primary/20"
                                }  `}
                              >
                                <Image
                                  priority={false}
                                  className={`sm:block rounded-[8px] object-cover mx-auto z-10  `}
                                  src={template.image}
                                  width={1536}
                                  height={1536}
                                  alt="inovice template"
                                />
                              </div>
                            </FormLabel>

                            <FormControl>
                              <RadioGroupItem
                                value={template.templateId}
                                className={`w-10 h-2 border-none data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-[--blue-accent] data-[state=checked]:to-[--purple-accent] data-[state=unchecked]:bg-gray-300 text-transparent`}
                              />
                            </FormControl>
                          </FormItem>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      type="button"
                      className="gradient-btn hover-color-shadow w-10 h-10 "
                    />
                    <CarouselNext
                      type="button"
                      className="gradient-btn hover-color-shadow w-10 h-10"
                    />
                  </Carousel>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
});

export default TemplateCarousl;

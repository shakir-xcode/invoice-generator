import { Button } from "@/components/ui/button";
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

export default function TemplateCarousl({ control, selectedTemplate }) {
  // console.log(selectedTemplate);
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
      <div className="text-center py-3 ">
        <h2 className="text-2xl font-bold">
          <span className="gradient-text">Select template</span>
        </h2>
        {/* <input type="hidden" {...register("template_id")} /> */}
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
                                className={`p-[2px] rounded-[10px] ${
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
                                  alt="inovice-img"
                                />
                              </div>
                            </FormLabel>

                            <FormControl>
                              <RadioGroupItem
                                value={template.templateId}
                                className=" hidden"
                              />
                            </FormControl>
                          </FormItem>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      type="button"
                      className="gradient-btn hover-color-shadow w-10 h-10"
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
}


import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";


export default function Home() {

    const templates = [
        {
            image: "/images/inv.webp",
            templateId: 100,
        },
        {
            image: "/images/inv.webp",
            templateId: 200,
        },
        {
            image: "/images/inv.webp",
            templateId: 300,
        },

    ];


    return (
        <div className="container px-10 mx-auto mt-12">
            <div className="text-center mb-16 ">
                <h2 className="text-2xl font-bold mb-4 ">
                    <span className="gradient-text">Select template</span>
                </h2>
            </div>
            <Carousel
                className="w-[50%] mx-auto "
            >
                <CarouselContent>
                    {templates.map((template) => (
                        <CarouselItem
                            key={template.templateId}
                            className="  basis-[100%] "
                        >
                            <Image priority={false} className=" sm:block  rounded-3xl object-cover mx-auto z-10 d-shadow" src={template.image} width={1536} height={1536} alt="inovice-img" />
                            <Button variant="outline" className=" w-full text-lg ">Select</Button>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="gradient-btn hover-color-shadow w-10 h-10" />
                <CarouselNext className="gradient-btn hover-color-shadow w-10 h-10" />
            </Carousel>
        </div>
    );
}
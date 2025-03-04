import Image from 'next/image'
import Button from './Button';

type SustainabilityAndCareersSectionProps = {
    img: string;
    alt: string;
    title: string;
    text: string;
    buttonText: string;
    type: "type-1" | "type-2";
}

function SustainabilityAndCareersComponent({img, alt, title, text, buttonText, type}: SustainabilityAndCareersSectionProps) {
  return (
    <div className='flex flex-col justify-between gap-x-2 gap-y-6 xs:gap-y-0 xs:flex-row lg:gap-x-4 xl:gap-x-8'>
        <Image
            width={576}
            height={720}
            src={img}
            alt={alt}
            className={`rounded-sm w-full xs:w-[45vw] ${type === "type-2" ? "xs:order-3" : ""}`}
        />
        <div className={`text-3xl w-[70vw] tracking-tighter xs:tracking-tight xs:text-2xl xs:min-w-[25vw] md:ml-0 md:text-3xl md:w-[31vw] md:leading-8 lg:w-[60vw] lg:text-4xl lg:leading-8 xl:w-[60vw] xl:leading-9 ${type === "type-2" ? "xs:order-1" : ""}`}>{title}</div>
        <div className={`self-center text-sm xs:mt-28 xs:-ml-14 md:mt-0 md:text-base md:-ml-52 md:w-[45vw] lg:-ml-40 lg:w-[60vw] xl:-ml-14 xl:w-[55vw] ${type === "type-2" ? "xs:order-2" : ""}`}>
            <div className='pb-6'>
               {text} 
            </div>
            <div>
                <Button
                    text={buttonText}
                    variant='secondary'
                />
            </div>
        </div>
    </div>
  )
}

export default SustainabilityAndCareersComponent
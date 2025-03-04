import Button from "./Button"
import SustainabilityAndCareersComponent from "./SustainabilityAndCareersComponent"

function SustainabilityAndCareersSection() {
  return (
    <div className="flex flex-col space-y-16 xs:space-y-40 pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] lg:pl-[8vw] lg:pr-[8vw]">
        <SustainabilityAndCareersComponent
            img="/sustainability.webp"
            alt="sustainability-img"
            title="Crafting a Sustainable Future"
            text="Populous has been at the forefront of environmentally sustainable design solutions for public assembly venues since the formation of our practice."
            buttonText="Sustainability"
            type="type-1"
        />
        <SustainabilityAndCareersComponent
            img="/careers.webp"
            alt="careers-img"
            title="We Can’t Do It Without You"
            text="Populous is all about people — it’s in our name. Attracting and retaining talented people who are passionate about their work is what makes us thrive. Learn more about working at Populous, and view our open positions."
            buttonText="Careers"
            type="type-2"
        />
        <div className="mx-auto flex pt-20 flex-col items-center space-y-12 lg:space-y-20">
          <div className="text-4xl w-[70vw] tracking-tighter leading-[1] xs:text-[5.2vw] xs:w-[45vw] text-center">
            Have a question?
            Want to work with us?
          </div>
          <div className="w-fit">
            <Button
              text="Contact"
              variant="secondary"
            />
          </div>
        </div>
    </div>
  )
}

export default SustainabilityAndCareersSection
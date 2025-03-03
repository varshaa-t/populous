import DisciplinesCategory from "./DisciplinesCategory"

function DisciplinesSection() {
  
  return (
    <div className="flex flex-col justify-between space-y-8 pl-[1.5vw] pr-[1.5vw] sm:pl-[4vw] sm:pr-[4vw] md:flex-row md:space-y-0 lg:pl-[8vw] lg:pr-[8vw]">
      <div className="text-[27px] xs:text-[6vw] sm:text-[5vw] md:text-[3.5vw] lg:text-4xl xl:text-[42px]">
        Disciplines
      </div>
      <div>
          <DisciplinesCategory
              text="Architecture"
          />
          <DisciplinesCategory
              text="Audiovisual Consultancy"
          />
          <DisciplinesCategory
              text="Brand Activation"
          />
          <DisciplinesCategory
              text="Design & Build"
          />
          <DisciplinesCategory
              text="Event"
          />
          <DisciplinesCategory
              text="Food & Beverage Strategy"
          />
          <DisciplinesCategory
              text="Interior Design"
          />
          <DisciplinesCategory
              text="Landscape Architecture"
          />
          <DisciplinesCategory
              text="Urban Design"
          />
          <DisciplinesCategory
              text="Wayfinding"
          />
        </div>
    </div>
  )
}

export default DisciplinesSection
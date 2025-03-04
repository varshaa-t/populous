
type FooterLastLinksProps = {
    links: string[];
}

function FooterLastLinks({links} : FooterLastLinksProps) {
  return (
    <div>
        {links.map((link, index) => (
            <div key={index} className="flex flex-col text-[15px] xs:text-sm sm:text-[15px] lg:text-base xl:text-[17px] hover:underline cursor-pointer whitespace-nowrap">{link}</div>
        ))}
    </div>
  )
}

export default FooterLastLinks
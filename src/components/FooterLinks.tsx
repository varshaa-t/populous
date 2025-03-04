
type FooterLinksProps = {
    title?: string;
    links: string[];
}

function FooterLinks({title = "", links}: FooterLinksProps) {
  return (
    <div className="flex flex-col space-y-2 md:space-y-10">
        <div className="min-h-6 text-gray text-[10px] font-extrabold tracking-tight">{title}</div>
        <div>
            {links.map((link, index) => (
                <div key={index} className="flex flex-col text-[15px] xs:text-sm sm:text-[15px] lg:whitespace-nowrap lg:text-base xl:text-[17px] cursor-pointer hover:underline">
                    {link}
                </div>
            ))}
        </div>
    </div>
  )
}

export default FooterLinks
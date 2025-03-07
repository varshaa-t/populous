import AngledRightArrow from "@/icons/AngledRightArrow"

type ButtonProps = {
    text: string;
    variant: "primary" | "secondary" | "tertiary";
}

const variantClasses = {
    "primary": "bg-white text-black pr-4",
    "secondary": "bg-black text-white",
    "tertiary": "bg-dark-blue text-white"
}

function Button({text, variant}: ButtonProps) {
  return (
    <button className={`flex space-x-3 pl-2 pr-3 py-2 rounded-md cursor-pointer hover:text-white hover:bg-dark-blue duration-200 ${variantClasses[variant]}`}>
        <AngledRightArrow/>
        <div className="text-xs font-semibold">{text}</div>
    </button>
  )
}

export default Button
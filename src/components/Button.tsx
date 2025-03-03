import AngledRightArrow from "@/icons/AngledRightArrow"

type ButtonProps = {
    text: string;
    variant?: "primary";
}

const variantClasses = {
    "primary": "bg-white text-black pr-4"
}

function Button({text, variant}: ButtonProps) {
  return (
    <button className={`flex space-x-3 pl-2 pr-3 py-2 rounded-md cursor-pointer hover:text-white hover:bg-dark-blue ${variant == "primary" ? variantClasses[variant] : ""}`}>
        <AngledRightArrow/>
        <div className="text-xs font-semibold">{text}</div>
    </button>
  )
}

export default Button
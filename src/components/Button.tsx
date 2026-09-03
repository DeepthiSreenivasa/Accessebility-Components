import { useRef, type ButtonHTMLAttributes, type ReactNode, type Ref } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  variant?:"Primary" | "Secondary",
  ref?:any
}

const Button = ({children ,variant,ref,...props}:ButtonProps) =>{


   
    console.log("Props::",props);
    console.log("Variant::",variant)

    return <button ref={ref} {...props} >{children}</button>
}

export default Button;
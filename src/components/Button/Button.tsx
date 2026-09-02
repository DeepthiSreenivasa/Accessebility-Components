import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant:"Primary" | "Secondary"
}

const Button = ({children ,variant,...props}:ButtonProps) =>{

    console.log("Props::",props);
    console.log("Variant::",variant)

    return <button {...props} >{children}</button>
}

export default Button;
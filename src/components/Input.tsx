import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string,
    error?:string,
    description?:string,
    ref?:any
}

const Input = ({label,error,description,id,ref,...props}:InputProps) => {

    const inputId = id ?? 'input';
    const descriptionId = description ? `${inputId}-description` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
    <div>
        <label htmlFor={inputId}>{label}</label>
        <input 
        ref={ref}
        id={inputId}
        aria-describedby={
            [descriptionId,errorId].filter(Boolean).join(' ') || undefined
        }
        aria-invalid={error ? true : undefined}
        {...props}/>

        {description && (
            <p id={descriptionId}>{description}</p>
        )}

        {
            error && (<p id={errorId} role="alert">{error}</p>)
        }

    </div>)
}

export default Input
import React,{FunctionComponent} from 'react'

interface props {
    text: string;
    setText: (val: string) => void;
    placeholder?: string;
    className?: string;
    rows?: number;
}

export const Textarea: FunctionComponent<props> = ({
    text,
    setText,
    className,
    placeholder,
    rows = 16,

}) => {
    return (
        <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={`
                w-full
                p-2
                resize-none outline-none rounded-md focus:border-gray-500
                ${className}
            `}
            placeholder={placeholder}
            rows={rows}
        />      
    )
}
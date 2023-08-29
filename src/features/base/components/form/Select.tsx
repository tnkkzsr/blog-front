import React, { FunctionComponent,ReactNode } from "react";

interface Props {
    options: {value: string, label: string}[];
    value?: string;
    onSelect?: (value: string) => void;
}

export const Select: FunctionComponent<Props> = ({
    options,
    value,
    onSelect=()=>{},
}) => {
    
        return (
            <select
                value={value}
                onChange = {(e) => {
                    const selectedCategoryId = e.target.value;
                    onSelect(selectedCategoryId);
                }}
                className="p-2 rounded-md border cursor-pointer w-[200px]"
            >
                <option value={""} selected={!value}></option>
                {options?.map(({ value: valueItem, label }) => (
                    <option key={valueItem} value={valueItem} selected={valueItem == value}>
                    {label}
                </option>
                ))}
                
            </select>
        )
    }
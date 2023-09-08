import React,{FunctionComponent,useState} from 'react'
import { Input } from '@/features/base/components/form/Input';

interface Props {
    className?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
}

export const TitleForm: FunctionComponent<Props> = ({
    className="",
    value="",
    onChange=()=>{},
    placeholder="タイトル",
}) => {
    
    return (
       
        <Input
            text={value}
            setText={onChange}
            className={`text-lg font-bold ${className}`}
            placeholder={placeholder}
            type='text'
        />
    )
}

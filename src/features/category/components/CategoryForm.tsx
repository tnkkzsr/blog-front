import React,{FunctionComponent} from "react";
import { Category } from "../types";
import {Input} from "@/features/base/components/form/Input";
import {Button} from "@/features/base/components/form/Button";

interface Props {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}


export const CategoryForm: FunctionComponent<Props> = ({
    className="",
    value="",
    onChange=()=>{},
}) => {

    return (
        <div className="flex flex-row">
            <Input
                text={value}
                setText={onChange}
                className={` ${className}`}
                placeholder="新規カテゴリ..."
                
            />
            <Button
                className="ml-2"
                onClick={()=>{}}
                label="保存"
                color="gray"
            />
        </div>
    )
}
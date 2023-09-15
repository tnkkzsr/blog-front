import React,{FunctionComponent, use, useState} from "react";
import { Category } from "../types";
import {Input} from "@/features/base/components/form/Input";
import {Button} from "@/features/base/components/form/Button";
import { categoryCreater } from "../libs/external/categoryCreater";
import { useAuthContext } from "@/features/user/contexts/AuthContext";

interface Props {
    className?: string;
    value?: string;
  
}

export const CategoryForm: FunctionComponent<Props> = ({
    className="",
    value="",
    
}) => {
    const [newCategory, setNewCategory] = useState("");
    const {session} = useAuthContext();

    const categorySubmit = async () => {
        if (newCategory.trim() === "") {
            alert("カテゴリ名を入力してください");
            return;
        }
        try {
            if(session){
                await categoryCreater(newCategory,session.access);
                setNewCategory("");
                alert("カテゴリを作成しました");
            }
        } catch (e) {
            console.log(e);
            alert("カテゴリの作成に失敗しました");
        }
    }

    return (
        <div className="flex flex-row">
            <Input
                text={newCategory}
                setText={(newCategory)=>{setNewCategory(newCategory)}}
                className={` ${className}`}
                placeholder="新規カテゴリ..."
                
            />
            <Button
                className="ml-2"
                onClick={categorySubmit}
                label="保存"
                color="gray"
            />
        </div>
    )
}
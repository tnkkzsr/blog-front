import React,{useState} from 'react'
import { useCategories } from "@/features/category/contexts/CategoryContext";
import { Post } from '../types';
import { Category } from '@/features/category/types';



export const useFormPost = () => {

    const [post,setPost] = useState<Post>({
        title: "",
        content: "",
        id: "",
    });

    const setTitle = (title: string) => {
        setPost((prev)  => ({
            ...prev,
            title
        }))
    }
    const setContent = (content: string) => {
        setPost((prev)  => ({
            ...prev,
            content
        }))
    }

    const setCategory = (category:Category) => {
        setPost((prev)  => ({
            ...prev,
            category    
        }))
    }


   
    
    

    return {
        post,
        setTitle,
       
        setContent,
    
        setCategory,


    }

}

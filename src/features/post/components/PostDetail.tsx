import React,{FunctionComponent} from "react";

import { Layout } from "@/features/templates/components/Layout";
import { PostTitle } from "@/features/post/components/PostTitle";
import { Block } from "@/features/base/components/container/Block";
import { CategoryItem } from "@/features/category/components/CategoryItem";
import { PostHeader } from "@/features/post/components/PostHeader";
import { PostContent } from "@/features/post/components/PostContent";
import { usePostDetail } from "@/features/post/hooks/usePostDetail";
import { Post } from "@/features/post/types";


interface Props {
    post:Post | null;
    className?: string;

}

export const PostDetail:FunctionComponent<Props> = ({post}) => {
  
    return (
      <>

            <PostTitle post={post}/>
            <CategoryItem category ={post?.category} className="my-6"/>
            <PostHeader post={post}/>
            <PostContent post ={post}/>
        
      </>
    );
  }
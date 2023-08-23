import {useEffect} from "react";
import {usePostList} from "@/features/post/hooks/usePostList";

import { Layout } from "@/features/base/components/Layout";
import { PostTitle } from "@/features/post/components/PostTitle";
import { Block } from "@/features/base/components/container/Block";
import { Category } from "@/features/category/components/Category";
import { PostHeader } from "@/features/post/components/PostHeader";
import { PostContent } from "@/features/post/components/PostContent";
export default function Home() {

  const {posts,nextPosts,prevPosts,currentPage,lastPage} =usePostList();


  return (
    <>
      <Layout className="mt-10">
        <Block className="w-[800px]  bg-white p-6 rounded-md">
          <PostTitle/>
          <Category/>
          <PostHeader/>
          <PostContent/>
          
        </Block >
        
       
      </Layout>
    </>
  );
}
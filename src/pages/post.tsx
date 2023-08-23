import {useEffect} from "react";
import {usePostList} from "@/features/post/hooks/usePostList";

import { Layout } from "@/features/base/components/Layout";


export default function Home() {

  const {posts,nextPosts,prevPosts,currentPage,lastPage} =usePostList();


  return (
    <>
      <Layout className="mt-10">
      
        
       
      </Layout>
    </>
  );
}
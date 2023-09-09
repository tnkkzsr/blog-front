import {useEffect} from "react";
import {usePostList} from "@/features/post/hooks/usePostList";
import {useRouter} from "next/router";

import { Layout } from "@/features/templates/components/Layout";
import { Block } from "@/features/base/components/container/Block";
import { usePostDetail } from "@/features/post/hooks/usePostDetail";
import { PostDetail } from "@/features/post/components/PostDetail";

export default function Home() {

  
  const router = useRouter();
  const {id} = router.query;
  const {post} = usePostDetail(id as string);

  return (
    <Layout className="mt-10 ml-6 pb-4">
    <Block className="w-[800px] h-auto bg-white p-6 rounded-md">
      <PostDetail post={post}/>
    </Block >
    
   
  </Layout>
  );
}
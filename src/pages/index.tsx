import { Block } from "@/features/base/components/Block";
import { Header } from "@/features/base/components/Header";
import { Main } from "@/features/base/components/Main";
import { Sidebar } from "@/features/base/components/Sidebar";
import { PostCardList } from "@/features/base/components/PostCardList";
import { Pagination } from "@/features/base/components/Pagination";
import {fetchPosts} from "@/features/post/libs/external/postFetcher";
import {useEffect} from "react";
import {usePostList} from "@/features/post/hooks/usePostList";




export default function Home() {

  const {posts} =usePostList();


  return (
    <>
      <Header />

      <Main className="bg-gray-200/80 min-h-screen w-full">
        <Block className="max-w-[1100px] mx-auto grid grid-cols-[1fr,min-content] gap-8">
          <Block className="mt-10">
            <PostCardList posts={posts} />
            <Pagination />
            
         
          </Block>

          <Sidebar className="mt-10"/>
        </Block>
      </Main>
    </>
  );
}
import { PostCardList } from "@/features/post/components/PostCardList";
import { Pagination } from "@/features/post/components/Pagination";
import {usePostList} from "@/features/post/hooks/usePostList";

import { Layout } from "@/features/templates/components/Layout";



export default function Home() {

  const {posts,nextPosts,prevPosts,currentPage,lastPage} =usePostList();
  const title = "HOME";


  return (
    <>
      <Layout className="mt-10 ml-6" title={title}>
        <PostCardList posts={posts} />
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onNext={nextPosts}
          onPrev={prevPosts}
        />
      </Layout>
    </>
  );
}
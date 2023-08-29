import React from 'react'
import { Layout } from '@/features/templates/components/Layout'
import { PostCreateButton } from '@/features/post/components/PostCreateButton'
import { PostManageList } from '@/features/post/components/PostManageList';
import { Pagination } from '@/features/post/components/Pagination';
import { usePostList } from '@/features/post/hooks/usePostList';

export default function manage()  {
    const title = "管理画面";
    const {posts,nextPosts,prevPosts,currentPage,lastPage} =usePostList();

  return (
    <Layout title={title} className='m-10 ml-40'>
        <PostCreateButton/>
        <PostManageList posts={posts}/>
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onNext={nextPosts}
          onPrev={prevPosts}
        />

        
    </Layout>
  )
}

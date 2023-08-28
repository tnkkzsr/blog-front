import React from 'react'
import { Layout } from '@/features/base/components/Layout'
import { PostCreateButton } from '@/features/base/components/form/PostCreateButton'
import { PostManageList } from '@/features/post/components/PostManageList';
import { Pagination } from '@/features/post/components/Pagination';
import { usePostList } from '@/features/post/hooks/usePostList';

export default function manage()  {
    const title = "管理画面";
    const {posts,nextPosts,prevPosts,currentPage,lastPage} =usePostList();

  return (
    <Layout title={title} className='mt-10 ml-40'>
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

import React from 'react'
import { Layout } from '@/features/templates/components/Layout'
import { PostCreateButton } from '@/features/post/components/PostCreateButton'
import { PostManageList } from '@/features/post/components/PostManageList';
import { Pagination } from '@/features/post/components/Pagination';
import { usePostList } from '@/features/post/hooks/usePostList';
import { Button } from '@/features/base/components/form/Button';
import { useAuthContext } from '@/features/user/contexts/AuthContext';
import { useRouter } from 'next/router';

export default function manage()  {
    const title = "管理画面";
    const {posts,nextPosts,prevPosts,currentPage,lastPage,setPosts} =usePostList();

    const {logout} = useAuthContext()

    const router = useRouter()

    const handleLogout = async () => {
        await logout();
        router.push('/');
    }


  return (
    <Layout title={title} className='m-10 ml-40'>
        <PostCreateButton/>
        <Button label="ログアウト" color='blue' className='ml-10 ' onClick={handleLogout}/>
        <PostManageList posts={posts} setPosts={setPosts}/>
        <Pagination
          className="my-10 flex justify-center"
          currentPage={currentPage}
          lastPage={lastPage}
          onNext={nextPosts}
          onPrev={prevPosts}
        />

        
    </Layout>
  )
}

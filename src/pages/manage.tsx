import React from 'react'
import { Layout } from '@/features/base/components/Layout'
import { PostCreateButton } from '@/features/base/components/form/PostCreateButton'
import { PostManageList } from '@/features/post/components/PostManageList';

export default function manage()  {
    const title = "管理画面";
  return (
    <Layout title={title} className='mt-10 ml-40'>
        <PostCreateButton/>
        <PostManageList/>
        
    </Layout>
  )
}

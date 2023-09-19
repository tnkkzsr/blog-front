
import { Layout } from '@/features/templates/components/Layout'


import { PostEditor } from '@/features/post/components/PostEditor'

export default function create(){
    return (
        <Layout className='my-10 ml-10 '>
          <PostEditor/>
        </Layout>
      )
}


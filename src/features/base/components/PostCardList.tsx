import React, { FunctionComponent } from 'react'
import { Block } from './Block'
import { PostCard } from './PostCard'
import { Post } from '@/features/post/types'

interface Props {
  posts:Post[];
}




export const PostCardList:FunctionComponent<Props> = ({posts}) => {
  return (
    <Block className='grid grid-cols-1 lg:grid-cols-2 place-item-center gap-12 '>
      {posts.map((postItem) => (
        <PostCard key={postItem.id} post={postItem} />
      ))}

    </Block>
  )
}

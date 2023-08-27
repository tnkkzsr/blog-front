import React, { FunctionComponent } from 'react'
import { Block } from '../../base/components/container/Block'
import { PostCard } from './PostCard'
import { Post } from '@/features/post/types'

interface Props {
  posts:Post[];
  className?:string;
}




export const PostCardList:FunctionComponent<Props> = ({posts,className}) => {
  return (
    <Block className='grid grid-cols-1 lg:grid-cols-2 place-item-center gap-12 '>
      {posts.map((postItem) => (
        <PostCard key={postItem.id} post={postItem} />
      ))}

    </Block>
  )
}

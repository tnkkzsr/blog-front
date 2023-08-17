import React from 'react'
import { Block } from './Block'
import { PostCard } from './PostCard'


export const PostCardList = () => {
  return (
    <Block className='grid grid-cols-1 lg:grid-cols-2 place-item-center gap-12 '>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />

    </Block>
  )
}

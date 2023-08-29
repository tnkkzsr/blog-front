import React from 'react'
import { Button } from '@/features/base/components/form/Button';
import Link from 'next/link';

export const PostCreateButton = () => {
  return (
    <Link href="/post/create">
      <Button label="新規作成" color='blue'/>
    </Link>
  )
}

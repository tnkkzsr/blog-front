import React ,{FunctionComponent}from 'react'
import { Button } from '@/features/base/components/form/Button';
import { useRouter } from 'next/router';

interface Props {
  onclick: () => Promise<string>;
}

export const PostSbmitButton :FunctionComponent<Props> = ({onclick}) => {

  const router = useRouter();

  const pageTransiton = async () => {
    const postId = await onclick();
    router.push(`/post/${postId}`);
  }

  return (
    
      <Button label="投稿保存" color='blue' onClick={pageTransiton}/>
    
  )
}

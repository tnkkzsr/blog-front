import React ,{FunctionComponent}from 'react'
import { Button } from '@/features/base/components/form/Button';


interface Props {
  onclick: () => void;
}

export const PostSbmitButton :FunctionComponent<Props> = ({onclick}) => {
  return (
    
      <Button label="投稿保存" color='blue' onClick={onclick}/>
    
  )
}

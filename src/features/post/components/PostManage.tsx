import React,{FunctionComponent} from 'react'
import { Block } from '@/features/base/components/container/Block';
import { Button } from '@/features/base/components/form/Button';
import { Post } from '@/features/post/types';

interface Props {
    className?: string;
    children?: React.ReactNode;
    post:Post;
}


export const PostManage:FunctionComponent<Props> = ({className,children,post}) => {
    return (
        <Block className="my-4 flex justify-between">
            <Block>{post.title}</Block>
            <Block >
                <Button label="編集"color='gray' className='mr-3'></Button>
                <Button label="削除"color='red' className='mr-2'></Button>
            </Block>
        </Block>
    )
}
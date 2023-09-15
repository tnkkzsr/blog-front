import React,{FunctionComponent} from 'react'
import { Block } from '@/features/base/components/container/Block';
import { Button } from '@/features/base/components/form/Button';
import { PostManage } from './PostManage';
import { Post } from '@/features/post/types';

interface Props {
    className?: string;
    children?: React.ReactNode;
    posts:Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const PostManageList:FunctionComponent<Props> = ({className,children,posts,setPosts}) => {
    return (
        <Block className="w-[600px] bg-white p-2 rounded-md mt-10">
            {posts.map((postItem) => (
                <PostManage key={postItem.id} post={postItem} setPosts={setPosts}/>
            ))
}           
        </Block>
            
        
    )
}
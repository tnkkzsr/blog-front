import React,{FunctionComponent} from 'react'
import {Title}  from '@/features/base/components/display/Title';
import {Description} from '@/features/base/components/display/Description';
import {Post} from '@/features/post/types';

interface Props {
    className?: string;
    children?: React.ReactNode;
    post:Post|null;
    
}



export const PostTitle:FunctionComponent<Props> = ({className,children,post}) => {

    if(!post) return null;
    return (
        
        <Title type="h1" className='mt-6 text-gray-500' >{post.title}</Title>
        
    )
}

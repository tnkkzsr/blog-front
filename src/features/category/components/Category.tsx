import React,{FunctionComponent} from 'react'
import {Inline} from '@/features/base/components/container/Inline';
import { Block } from '@/features/base/components/container/Block';
import { Post } from '@/features/post/types';

interface Props {
    className?: string;
    children?: React.ReactNode;
    post:Post|null;
}

export const Category :FunctionComponent<Props> = ({className,children,post}) => {

   

    if(!post) return null;
    const category = post.category ? post.category.title : "未分類";
    return (

        <Block className="my-6">
            <Inline className={`
                px-2 py-1
                border border-gray-400
                text-gray-500
            `}>
                {category}
            </Inline>
        </Block>
    )

}

import React,{FunctionComponent} from 'react'
import {Inline} from '@/features/base/components/container/Inline';
import { Block } from '@/features/base/components/container/Block';
import { Post } from '@/features/post/types';
import { Category } from '@/features/category/types';

interface Props {
    className?: string;
    children?: React.ReactNode;
    category: Category | undefined;
}

export const CategoryItem :FunctionComponent<Props> = ({className,children,category}) => {

    const categoryDisplay = category?.title ?? "未分類";
    return (

        <Block className="my-6">
            <Inline className={`
                px-2 py-1
                border border-gray-400
                text-gray-500
            `}>
                {categoryDisplay}
            </Inline>
        </Block>
    )

}

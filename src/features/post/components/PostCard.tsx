import React,{FunctionComponent} from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Block } from "@/features/base/components/container/Block";
import { Relative } from "@/features/base/components/container/Relative";
import { Inline } from "@/features/base/components/container/Inline";
import { Description } from "@/features/base/components/display/Description";
import { Absolute } from "@/features/base/components/container/Absolute";
import {Post} from "@/features/post/types";
import {formatDate} from "@/features/base/libs/formatDate";


interface Props {
    post:Post;
    className?: string;
}



export const PostCard: FunctionComponent<Props> = ({
    className,post
}) => {

    const updated_at = formatDate(post.updated_at!);
    const category = post.category ? post.category.title : "未分類";
    const headerImageUrl = post.header_image ? post.header_image : "/images/mauntain.png";
    // const headerImageUrl = "/images/header.png";

    return (
        <Block
            className={`w-full max-w-[350px] 
            bg-white 
            rounded-xl shadow-md
            overflow-hidden    
            ${className || ""}`}
        >

            <Relative className='h-[200px] transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer'>
            <Link href={`/post/${post.id}`}> 
                <Image src={headerImageUrl} fill sizes="100%" alt="...image"/>
            </Link>
              
            </Relative>
            <Relative className='h-[180px] p-8'>
                <Block className={`
                    flex flex-row space-x-2
                `}>
                    <Inline className={`
                        px-2 py-1
                        border border-gray-400
                        text-gray-500 font-medium
                    `}>
                        {category}
                    </Inline>

                </Block>

                <Description className='mt-2 text-2xl font-bold cursor-pointer hover:scale-105 transition duration-300'>
                    <Link href={`/post/${post.id}`}>
                        {post.title}
                    </Link>
                </Description>

                <Absolute className='bottom-3 right-4'>
                    <Inline className={`${className} text-gray-500`}>{updated_at}</Inline>
                </Absolute>
              
            </Relative>

        </Block>
    )

}
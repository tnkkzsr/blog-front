import React,{FunctionComponent} from 'react'
import { Block } from '@/features/base/components/container/Block';
import Image from 'next/image';
import { Relative } from '@/features/base/components/container/Relative';
import { Post } from '@/features/post/types';
interface Props {
    className?: string;
    children?: React.ReactNode;
    post:Post | null;

}

export const PostHeader:FunctionComponent<Props> = ({className,children,post}) => {
    if(!post) return null;
    const headerImageUrl = post.header_image ? post.header_image : "/images/mauntain.png";
    // const headerImageUrl = "/images/header.png";


    return (
        <Relative className="w-full h-80 bg-black">
            <Image src={headerImageUrl} fill sizes="100%" alt="...image"></Image>
        </Relative>
    )
}


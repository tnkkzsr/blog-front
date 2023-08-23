import React,{FunctionComponent} from 'react'
import { Block } from '@/features/base/components/container/Block';
import Image from 'next/image';
import { Relative } from '@/features/base/components/container/Relative';
interface Props {
    className?: string;
    children?: React.ReactNode;

}

export const PostHeader:FunctionComponent<Props> = ({className,children}) => {

    return (
        <Relative className="w-full h-60 bg-black">
            <Image src={"/images/header.png"} fill sizes="100%" alt="...image"></Image>
        </Relative>
    )
}


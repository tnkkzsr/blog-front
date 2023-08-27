import React ,{FunctionComponent} from 'react';
import { Block } from '@/features/base/components/container/Block';
import { Title } from '@/features/base/components/display/Title';
import { Post } from '@/features/post/types';


interface Props {
    className?: string;
    children?: React.ReactNode;
    post:Post|null;
}

export const PostContent:FunctionComponent<Props> = ({className,children,post}) => {


    if(!post) return null;
    return(
        <Block className="mt-10">
            {/* <Title type="h2" className="border-b pb-2 text-3xl">私が好きな漫画</Title>
            <Block className='my-4'>
            <p className="mb-4">私が好きな漫画は次の二つです</p>
            <ul className="list-none list-inside pl-8">
                <li>ワンピース</li>
                <li>ドラゴンボール</li>
            </ul>
            </Block>
            <Title type="h2" className="border-b pb-2">何が好きなのか</Title>
            <Block className='my-4'>
            <p className="mb-4">何がいいのかというと...</p>
            </Block> */}
            {post.content}
            
            
        </Block>


    )
}
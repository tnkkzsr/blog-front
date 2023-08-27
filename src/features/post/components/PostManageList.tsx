import React,{FunctionComponent} from 'react'
import { Block } from '@/features/base/components/container/Block';

interface Props {
    className?: string;
    children?: React.ReactNode;
}


export const PostManageList:FunctionComponent<Props> = ({className,children}) => {
    return (
        <Block className="w-[600px] bg-white p-6 rounded-md mt-10">
            <Block>好きな漫画</Block>
            
        </Block>
    )
}
import React,{FunctionComponent} from 'react'
import {Inline} from '@/features/base/components/container/Inline';
import { Block } from '@/features/base/components/container/Block';

interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Category :FunctionComponent<Props> = ({className,children}) => {
    return (

        <Block className="my-6">
            <Inline className={`
                px-2 py-1
                border border-gray-400
                text-gray-500
            `}>
                趣味
            </Inline>
        </Block>
    )

}

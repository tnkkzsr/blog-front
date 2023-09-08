import React,{FunctionComponent} from 'react'
import { Badge } from '@/features/base/components/form/Badge'
import { Block } from '@/features/base/components/container/Block'

interface Props {
    className?: string;
    isFill?: boolean;
}  

export const PostModeSelect: FunctionComponent<Props> = () => {
    
    return (
    
        <Block className='mt-8 w-full flex justify-end'>
             <Badge label='プレビュー'isFill={false} className='mr-2' />
             <Badge label='編集'/>
          
        </Block>
    )
}
import React,{FunctionComponent} from 'react'
import { Badge } from '@/features/base/components/form/Badge'
import { Block } from '@/features/base/components/container/Block'

interface Props {
    className?: string;
    isPreview: boolean;
    onPreview: () => void;
    onEdit: () => void;
}  

export const PostModeSelect: FunctionComponent<Props> = ({className,isPreview=false,onPreview,onEdit}) => {
    
    return (
    
        <Block className='mt-8 w-full flex justify-end'>
             <Badge label='プレビュー'isFill={isPreview} className='mr-2' onClick={onPreview} />
             <Badge label='編集' isFill={!isPreview} className='mr-2' onClick={onEdit} />
        </Block>
    )
}
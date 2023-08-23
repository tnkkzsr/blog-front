import React,{FunctionComponent} from 'react'
import {Title}  from '@/features/base/components/display/Title';
import {Description} from '@/features/base/components/display/Description';

interface Props {
    className?: string;
    children?: React.ReactNode;
    
}



export const PostTitle:FunctionComponent<Props> = ({className,children}) => {
    return (
        
        <Title type="h1" className='mt-6 text-gray-500' >好きな漫画</Title>
        
    )
}

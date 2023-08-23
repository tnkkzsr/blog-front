import React from 'react';
import { Card } from '../../base/components/container/Card';
import { Title } from '../../base/components/display/Title';
import { Block } from '../../base/components/container/Block';
import { CategoryList } from './CategoryList';

export const CategoryPanel = () => {
  return (
    <Card className='w-full p-4'>
        <Title className='max-w-fit border-b-2 border-gray-400'>カテゴリ一覧</Title>


        <Block className='mt-4'>
            <CategoryList/>
        </Block>

    </Card>
  )
}

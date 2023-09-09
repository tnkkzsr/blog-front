import React,{useState} from 'react'
import { Layout } from '@/features/templates/components/Layout'
import { TitleForm } from '@/features/base/components/form/TitleForm'
import { CategorySelect } from '@/features/category/components/CategorySelect'
import { useCategoryList } from '@/features/category/hooks/useCategoryList'
import { CategoryForm } from '@/features/category/components/CategoryForm'
import { Block } from '@/features/base/components/container/Block'
import { PostModeSelect } from '@/features/post/components/PostModeSelect'
import { PostTextarea } from '@/features/post/components/PostTextarea'
import { PostSbmitButton } from '@/features/post/components/PostSbmitButton'
import { postCreater } from '@/features/post/libs/external/postCreater'
import { PostContentPreview } from '@/features/post/components/PostContentPreview'

export default function create(){

    const {categories} = useCategoryList();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState("");
    const [isPreview ,setIsPreview] = useState(false);

    const submit = async () => {
      const data =await postCreater(title, content, category);
      return data.id;
    }

    const onPreview = () => {
      setIsPreview(true);
  
    }

    const onEdit = () => {
      setIsPreview(false);
    }

    return (
        <Layout className='mt-10 ml-10 '>
          <TitleForm value={title} onChange={setTitle}/>
          <Block className='mt-8 flex flex-row'>
            <CategorySelect 
              className='mr-8' 
              options={categories} 
              value={category}
              onChange={(newCategory) => {setCategory(newCategory)}}
              />
            <CategoryForm/>
          </Block>   
        
          <PostModeSelect isPreview={isPreview} onPreview={onPreview} onEdit={onEdit}/>
          {isPreview ? <PostContentPreview content={content}/> : <PostTextarea value={content} onChange={setContent}/>}
          <PostSbmitButton onclick={submit}/>
        </Layout>
      )
}


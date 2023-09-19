import { Block } from "@/features/base/components/container/Block";
import React, { useState } from "react";
import { TitleForm } from "@/features/base/components/form/TitleForm";
import { CategorySelect } from "@/features/category/components/CategorySelect";
import { useCategoryList } from "@/features/category/hooks/useCategoryList";
import { CategoryForm } from "@/features/category/components/CategoryForm";
import { PostModeSelect } from "@/features/post/components/PostModeSelect";
import { PostTextarea } from "@/features/post/components/PostTextarea";
import { PostSbmitButton } from "@/features/post/components/PostSbmitButton";
import { PostContentPreview } from "@/features/post/components/PostContentPreview";
import { usePostCreater } from "@/features/post/hooks/usePostCreater";
import { useFormPost } from "../hooks/useFormPost";

export const PostEditor = () => {
  //カスタムフックにする
  const { post, setTitle, setContent, setCategory } = useFormPost();
  //TODO:fix
  const { postCreater } = usePostCreater();
  const { categories } = useCategoryList();

  const [isPreview, setIsPreview] = useState(false);

  const onSubmit = async () => {
    const data = await postCreater(
      post.title,
      post.content,
      post?.category?.id
    );
    return data.id;
  };

  const onPreview = () => {
    setIsPreview(true);
  };

  const onEdit = () => {
    setIsPreview(false);
  };

  return (
    <Block>
      <TitleForm value={post.title} onChange={setTitle} />
      <Block className="mt-8 flex flex-row">
        <CategorySelect
          className="mr-8"
          options={categories}
          value={post.category?.id || ""}
          onChange={(category) => {
            setCategory({
              id: category,
              title: "",
            });
          }}
        />
        <CategoryForm />
      </Block>

      <PostModeSelect
        isPreview={isPreview}
        onPreview={onPreview}
        onEdit={onEdit}
      />
      {isPreview ? (
        <PostContentPreview content={post.content} />
      ) : (
        <PostTextarea value={post.content} onChange={setContent} />
      )}
      <PostSbmitButton onclick={onSubmit} />
    </Block>
  );
};

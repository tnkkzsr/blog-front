import React, { FunctionComponent } from "react";
import { Block } from "@/features/base/components/container/Block";
import { Button } from "@/features/base/components/form/Button";
import { Post } from "@/features/post/types";
import { postDeleteFetcher } from "../libs/external/postDeleteFetcher";
import { useAuthContext } from "@/features/user/contexts/AuthContext";

interface Props {
  className?: string;
  children?: React.ReactNode;
  post: Post;
  setPosts:  React.Dispatch<React.SetStateAction<Post[]>>;
}

export const PostManage: FunctionComponent<Props> = ({
  className,
  children,
  post,
  setPosts
}) => {
  const { session } = useAuthContext();
  const postDelete = async () => {
    if (session) {
      const isDelete = window.confirm("この投稿を削除しますか？");
      if (isDelete) {
        setPosts((prev:Post[]) => prev.filter((postItem:Post) => postItem.id !== post.id));
        await postDeleteFetcher(post.id, session.access);
        

        alert("投稿を削除しました");
      }
    }
  };
  return (
    <Block className="my-4 flex justify-between">
      <Block>{post.title}</Block>
      <Block>
        <Button label="編集" color="gray" className="mr-3"></Button>
        <Button
          label="削除"
          color="red"
          className="mr-2"
          onClick={postDelete}
        ></Button>
      </Block>
    </Block>
  );
};

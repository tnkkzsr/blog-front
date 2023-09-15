import React, { FunctionComponent } from "react";
import { Button } from "@/features/base/components/form/Button";
import { useRouter } from "next/router";

interface Props {
  onclick: () => Promise<string>;
  className?: string;
}

export const PostSbmitButton: FunctionComponent<Props> = ({
  onclick,
  className,
}) => {
  const router = useRouter();

  const pageTransiton = async () => {
    try {
      const postId = await onclick();
      router.push(`/post/${postId}`);
    } catch (e) {
      console.log(e);
      alert("投稿に失敗しました");
    }
  };

  return <Button label="投稿保存" color="blue" onClick={pageTransiton} />;
};

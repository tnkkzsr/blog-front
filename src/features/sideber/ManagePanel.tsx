import React from "react";
import Link from "next/link";

import { Card } from "../base/components/container/Card";
import { Block } from "../base/components/container/Block";
import { Title } from "../base/components/display/Title";
import { BsKeyFill } from "react-icons/bs";
import { useAuthContext } from "../user/contexts/AuthContext";

export const ManagePanel = () => {
  const { session } = useAuthContext();

  return (
    <Card className="w-full p-4">
      <Title className="max-w-fit border-b-2 border-gray-400">管理者</Title>

      {session ? (
        <Link href="/manage" className="corsor-pointer">
          <Block
            className={`
                mt-2 p-1
                flex items-center flex-row space-x-1
                border-transparent
                text-gray-500 border-b hover:border-gray-400`}
          >
            <BsKeyFill className="w-6 h-6" />
            <Block>記事管理</Block>
          </Block>
        </Link>
      ) : (
        <Link
          href="/login"
          className="block bg-gray-500 text-white p-2 rounded-lg mt-1"
        >
          ログイン
        </Link>
      )}
    </Card>
  );
};

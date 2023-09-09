import React,{FunctionComponent} from "react";
import { Block } from "@/features/base/components/container/Block";
import  ReactMarkdown  from "react-markdown";

interface Props {
    className?: string;
    content : string;
}

export const PostContentPreview:FunctionComponent<Props> = ({className,content}) => {
    
    return(
        <Block className="my-4 p-2 bg-white w-full h-auto rounded-md">
            <h1 className="font-mono">プレビュー</h1>
            <ReactMarkdown className="prose" children={content} />
        </Block>
    )
}

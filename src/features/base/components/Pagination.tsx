import React,{FunctionComponent} from "react";

import { Block } from "@/features/base/components/Block";
import { Button} from "@/features/base/components/Button";
import { Inline } from "./Inline";

interface Props{
    className?: string;
}

export const Pagination: FunctionComponent<Props> = ({
    className,
}) => {
    return(
      <Block className={`my-10 flex justify-center ${className || ""}`}>
        <Button label="前へ"></Button>
        <Inline className="mx-2 py-2 px-4 text-gray-500">1/10</Inline>
        <Button label="次へ"></Button>

      </Block>
    )
}

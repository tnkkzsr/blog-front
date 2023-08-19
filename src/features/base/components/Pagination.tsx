import React,{FunctionComponent} from "react";

import { Block } from "@/features/base/components/Block";
import { Button} from "@/features/base/components/Button";
import { Inline } from "./Inline";

interface Props{
    className?: string;
    onNext?: () => void;
    onPrev?: () => void;
    currentPage?: number;
    lastPage?: number;
}

export const Pagination: FunctionComponent<Props> = ({
    className,
    onNext,
    onPrev,
    currentPage=1,
    lastPage=1
}) => {
    return(
      <Block className={`my-10 flex justify-center ${className || ""}`}>
        {currentPage>1 && <Button label="前へ" onClick={onPrev}/>}
        
        <div className="mx-2 py-2 px-4 text-gray-500">
          {currentPage} / {lastPage}
        </div>
        
        {currentPage< lastPage  && <Button label="次へ" onClick={onNext}/>}

      </Block>
    )
}

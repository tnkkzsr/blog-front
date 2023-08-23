import React,{FunctionComponent,ReactNode} from "react";
import { Block } from "./Block";

interface Props{
    className?: string;
    children: ReactNode;
    onclick?: () => void;

}

export const Relative: FunctionComponent<Props> = ({
    className,
    children,
    onclick,
}) => {
    return (
        <Block className={`relative ${className || ""}`} onClick={onclick}>
            {children}
        </Block>
    );
}
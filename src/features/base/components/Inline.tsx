import React, {FunctionComponent,ReactNode} from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
    onclick?: () => void;
}

export const Inline: FunctionComponent<Props> = ({
    className,
    children,
    onclick,
}) => {
    return (
        <span className={`${className || ""}`} onClick={onclick}>
            {children}
        </span>
    );
}
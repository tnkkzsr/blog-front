import React, { FunctionComponent, ReactNode } from 'react';

interface Props {
    className?: string;
    children: ReactNode;
}

export const Description: FunctionComponent<Props> = ({
    className,
    children,
}) => {
    return <p className={`text-gray-500 ${className}`}>{children}</p>;
}
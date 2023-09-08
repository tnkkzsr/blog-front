import React, { FunctionComponent } from "react";
import {Textarea} from '@/features/base/components/form/Textarea'

interface Props {
    className?: string;
    value: string;
    onChange: (value: string) => void;
}

export const PostTextarea: FunctionComponent<Props> = ({
    className="",
    value="",
    onChange=()=>{},
}) => {
    
        return (
            <Textarea
                text={value}
                setText={onChange}
                className={`my-4  ${className}`}
                placeholder="本文..."
            />
        )
    }
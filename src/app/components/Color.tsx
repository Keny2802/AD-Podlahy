import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type ColorType = {
    className?: string;
    id?: string;
    type: "text" | "bg";
    color: string;
    children?: ReactNode;
};

const Color = ({ ...props }: ColorType) => {
    const {
        className,
        id,
        type,
        color,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper
            className={clsx(className, `${type === "text" ? `text-[${color}]` :  `bg-[${color}]`}`)}
            id={id}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Color;
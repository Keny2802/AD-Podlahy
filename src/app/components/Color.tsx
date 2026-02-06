import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type ColorType = {
    className?: string;
    type: "text" | "bg";
    color: string;
    children?: ReactNode;
};

const Color = ({ ...props }: ColorType) => {
    const {
        className,
        type,
        color,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, `${type === "text" ? `text-[${color}]` :  `bg-[${color}]`}`)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Color;
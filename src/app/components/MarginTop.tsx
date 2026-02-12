import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type MarginTopType = {
    className?: string;
    children: ReactNode;
};

const MarginTop = ({ ...props }: MarginTopType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "mt-6 md:mt-8 margin-top-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default MarginTop;
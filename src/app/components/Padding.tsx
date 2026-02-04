import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type PaddingType = {
    className?: string;
    children?: ReactNode;
};

const Padding = ({ ...props }: PaddingType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "p-2 md:p-3 lg:p-4 padding-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Padding;
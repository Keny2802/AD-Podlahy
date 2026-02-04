import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type OverlayWrapperType = {
    className?: string;
    children?: ReactNode;
};

const OverlayWrapper = ({ ...props }: OverlayWrapperType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "absolute inset-0 text-center flex justify-center items-center flex-col gap-2 md:gap-3 lg:gap-4 overlay-wrapper-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default OverlayWrapper;
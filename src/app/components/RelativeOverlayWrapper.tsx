import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type RelativeOverlayWrapperType = {
    className?: string;
    children?: ReactNode;
};

const RelativeOverlayWrapper = ({ ...props }: RelativeOverlayWrapperType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "relative relative-overlay-wrapper-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default RelativeOverlayWrapper;
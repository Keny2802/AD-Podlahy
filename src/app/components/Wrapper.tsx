import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

type WrapperType = {
    className?: string;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: WrapperType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <div className={clsx(className, "wrapper-component")}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;
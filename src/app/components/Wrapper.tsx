import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

type WrapperType = {
    className?: string;
    id?: string;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: WrapperType) => {
    const {
        className,
        id,
        children
    } = props;

    return (
        <Fragment>
            <div
            className={clsx(className, "wrapper-component")}
            id={id}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;
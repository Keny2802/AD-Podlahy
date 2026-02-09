import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

type WrapperType = {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: WrapperType) => {
    const {
        className,
        id,
        style,
        children
    } = props;

    return (
        <Fragment>
            <div
            className={clsx(className, "wrapper-component")}
            id={id}
            style={style}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;
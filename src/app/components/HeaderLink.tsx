import {
    ReactNode,
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

type HeaderLinkType = {
    className?: string;
    href: string;
    children: ReactNode;
};

const HeaderLink = ({ ...props }: HeaderLinkType) => {
    const {
        className,
        href,
        children
    } = props;

    return (
        <Fragment>
            <Link
            href={href}
            className={clsx(className, "header-link")}>
                {children}
            </Link>
        </Fragment>
    );
};

export default HeaderLink;
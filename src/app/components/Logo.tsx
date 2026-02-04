"use client";

import {
    ReactNode,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type LogoType = {
    className?: string;
    width?: number;
    height?: number;
    children?: ReactNode;
};

const Padding = ({ ...props }: LogoType) => {
    const {
        className,
        width,
        height
    } = props;

    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <Fragment>
            <Link
            href={isHome ? "" : "/"}>
                <Image
                {...(width && height) && { width: width, height: height }}
                src="/fota/logo/logo.png"
                alt="Logo AD Podlahy"
                />
            </Link>
        </Fragment>
    );
};

export default Padding;
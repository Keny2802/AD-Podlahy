"use client";

import {
    ReactNode,
    useState,
    Fragment
} from "react";
import {
    HeaderSet
} from "./HeaderSet";
import {
    Menu,
    Minus
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Padding from "./Padding";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

type HeaderType = {
    className?: string;
    children?: ReactNode;
};

const Header = ({ ...props }: HeaderType) => {
    const [isMobileMenuClicked, setMobileMenuClicked] = useState<boolean>(false);

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "bg-white shadow-md header-component")}>
                <Padding>
                    <Wrapper className="flex justify-between items-center gap-2 md:gap-3 lg:gap-4">
                        <Logo/>
                        <ul className="hidden md:flex justify-between items-center gap-2 md:gap-3 lg:gap-4">
                            {
                                HeaderSet.map((headerItem, index) => {
                                    return (
                                        <li
                                        key={index}
                                        className="text-black list-none header-item">
                                            <Link
                                            href={headerItem.href}>
                                                {headerItem.text}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        {/* <Menu
                        aria-label="Otevřít menu"
                        role="button"
                        className="inline-block md:hidden text-black cursor-pointer"
                        onClick={() => {
                            setMobileMenuClicked(prev => !prev);
                        }}/> */}
                        {
                            isMobileMenuClicked ? (
                                <Minus
                                aria-label="Zavřít menu"
                                role="button"
                                className="inline-block md:hidden text-black cursor-pointer"
                                onClick={() => {
                                    setMobileMenuClicked(false);
                                }}/>
                            ) : (
                                <Menu
                                aria-label="Otevřít menu"
                                role="button"
                                className="inline-block md:hidden text-black cursor-pointer"
                                onClick={() => {
                                    setMobileMenuClicked(prev => !prev);
                                }}/>
                            )
                        }
                        {children}
                    </Wrapper>
                </Padding>
            </Wrapper>
            {/* {isMobileMenuClicked && (
                <MobileMenu
                isMobileMenuClicked={isMobileMenuClicked}
                setMobileMenuClicked={setMobileMenuClicked}
                />
            )} */}
            <MobileMenu
            isMobileMenuClicked={isMobileMenuClicked}
            setMobileMenuClicked={setMobileMenuClicked}
            />
        </Fragment>
    );
};

export default Header;
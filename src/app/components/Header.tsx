"use client";

import {
    ReactNode,
    useState,
    useEffect,
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
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    const {
        className,
        children
    } = props;

    useEffect(() => {
        const isHeaderScrolled = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            };
        };

        window.addEventListener("scroll", isHeaderScrolled);

        return () => {
            window.removeEventListener("scroll", isHeaderScrolled);
        };
    }, []);

    return (
        <Fragment>
            {/* fixed top-0 left-0 ${isScrolling && "bg-white shadow-md"} */}
            <Wrapper className={clsx(className, `bg-white shadow-md w-full z-50 header-component`)}>
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
                        {
                            isMobileMenuClicked ? (
                                <Minus
                                aria-label="Zavřít menu"
                                role="button"
                                className={clsx("text-black inline-block md:hidden cursor-pointer")}
                                onClick={() => {
                                    setMobileMenuClicked(false);
                                }}/>
                            ) : (
                                <Menu
                                aria-label="Otevřít menu"
                                role="button"
                                className={clsx("text-black inline-block md:hidden cursor-pointer")}
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
import {
    Fragment
} from "react";
import {
    HeaderSet
} from "./HeaderSet";
import clsx from "clsx";

import Color from "./Color";
import Wrapper from "./Wrapper";
import Padding from "./Padding";
import Logo from "./Logo";
import FlexCol from "./FlexCol";
import HeaderList from "./HeaderList";
import HeaderItem from "./HeaderItem";
import HeaderLink from "./HeaderLink";

type MobileMenuType = {
    className?: string;
    isMobileMenuClicked: boolean;
    setMobileMenuClicked: (isMobileMenuClicked: boolean) => void;
};

const MobileMenu = ({ ...props }: MobileMenuType) => {
    const year = new Date().getFullYear();

    const {
        className,
        isMobileMenuClicked
    } = props;

    return (
        <Fragment>
            <Color
            type="bg"
            color="white">
                <Wrapper className={clsx(className, isMobileMenuClicked ? "translate-x-0 md:-translate-x-full" : "-translate-x-full", "bg-white shadow-md fixed inset-0 z-50 w-[320px] h-full transition-transform duration-300 ease-in-out")}>
                    <Padding className="h-screen flex justify-between flex-col">
                        <Wrapper>
                            <Logo />
                            <FlexCol
                            className="mt-4"
                            gap={6}>
                                <Padding>
                                    <HeaderList className="text-black">
                                        {
                                            HeaderSet.map((headerItem, index) => {
                                                return (
                                                    <HeaderItem key={index}>
                                                        <HeaderLink href={headerItem.href}>
                                                            {/* <Color
                                                            type="text"
                                                            color="black">
                                                                {headerItem.text}
                                                            </Color> */}
                                                            {headerItem.text}
                                                        </HeaderLink>
                                                    </HeaderItem>
                                                );
                                            })
                                        }
                                    </HeaderList>
                                </Padding>
                            </FlexCol>
                        </Wrapper>
                        <p className="text-black text-center text-sm">
                            Všechna práva Vyhrazena, {year} AD Podlahy | Adam Šimara.
                        </p>
                    </Padding>
                </Wrapper>
            </Color>
        </Fragment>
    );
};

export default MobileMenu;
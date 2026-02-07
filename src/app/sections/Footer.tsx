import {
    Fragment
} from "react";
import {
    HeaderSet
} from "../components/HeaderSet";

import Color from "../components/Color";
import FlexCol from "../components/FlexCol";
import Padding from "../components/Padding";
import Logo from "../components/Logo";
import Flex from "../components/Flex";
import HeaderList from "../components/HeaderList";
import HeaderItem from "../components/HeaderItem";
import HeaderLink from "../components/HeaderLink";
import BodyText from "../components/BodyText";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Color
            type="bg"
            color="white"
            className="bg-white">
                <Padding>
                    <FlexCol className="justify-center items-center gap-2 md:gap-3 lg:gap-4">
                        <Logo
                        width={300}
                        height={300}
                        />
                        <HeaderList className="text-black">
                            <Flex className="justify-center items-center gap-2 md:gap-3 lg:gap-4">
                                {
                                    HeaderSet.map((headerItem, index) => {
                                        return (
                                            <HeaderItem key={index}>
                                                <HeaderLink href={headerItem.href}>
                                                    {headerItem.text}
                                                </HeaderLink>
                                            </HeaderItem>
                                        );
                                    })
                                }
                            </Flex>
                        </HeaderList>
                        <FlexCol className="text-black items-center gap-1 md:gap-1.5 lg:gap-2">
                            <BodyText>
                                Adam Šimara, {year}, všechna práva vyhrazena.
                            </BodyText>
                            <HeaderLink href="https://vojtaoliva.cz">
                                Vytvořil Vojta Oliva
                            </HeaderLink>
                        </FlexCol>
                    </FlexCol>
                </Padding>
            </Color>
        </Fragment>
    );
};

export default Footer;
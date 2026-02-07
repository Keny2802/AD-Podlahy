import {
    Fragment
} from "react";

import Color from "../components/Color";
import Padding from "../components/Padding";
import Flex from "../components/Flex";
import FlexCol from "../components/FlexCol";
import Heading from "../components/Heading";
import BodyText from "../components/BodyText";
import Img from "../components/Img";
import Cta from "../components/Cta";

const About = () => {
    return (
        <Fragment>
            <Color
            type="bg"
            color="#270c86"
            id="o-nas">
                <Padding className="text-white">
                    <Padding>
                        <Flex className="justify-center items-center gap-4 md:gap-5 lg:gap-6">
                            <FlexCol className="items-start gap-2 md:gap-3 lg:gap-4">
                                <Heading className="text-center">
                                    AD podlahy
                                </Heading>
                                <BodyText className="max-w-3xl">
                                    Jsme spolehlivým partnerem pro realizaci vašich zakázek. Díky dlouholetým zkušenostem a odbornému přístupu zaručujeme vysokou kvalitu provedení. Ke každému klientovi přistupujeme individuálně a vždy hledáme řešení přesně podle jeho potřeb a požadavků.
                                </BodyText>
                                <Cta
                                color="bg-white"
                                href="#kontakt"
                                className="text-center text-black">
                                    Kontaktujte nás
                                </Cta>
                            </FlexCol>
                            <Img
                            width={500}
                            height={500}
                            src="/fota/sekce/o-nas/o-nas.avif"
                            alt="Firemní vozy společnosti AD podlahy"
                            className="w-auto rounded-md"
                            />
                        </Flex>
                    </Padding>
                </Padding>
            </Color>
        </Fragment>
    );
};

export default About;
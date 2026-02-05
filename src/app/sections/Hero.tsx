import {
    Fragment
} from "react";

import RelativeOverlayWrapper from "../components/RelativeOverlayWrapper";
import Img from "../components/Img";
import Wrapper from "../components/Wrapper";
import OverlayWrapper from "../components/OverlayWrapper";
import Padding from "../components/Padding";
import HeroHeading from "../components/HeroHeading";
import HeroSubheading from "../components/HeroSubheading";
import Cta from "../components/Cta";

const Hero = () => {
    return (
        <Fragment>
            <RelativeOverlayWrapper className="w-full min-h-screen text-white">
                <Img
                fill={true}
                // src="/fota/sekce/hero/transformers.avif"
                src="/fota/galerie/foto-galerie-1.avif"
                alt="Komplexní služby, vše kolem betonu"
                loading="eager"
                className="object-cover"
                />
                <Wrapper className="absolute inset-0 bg-black/30"></Wrapper>
                <Padding>
                    <OverlayWrapper>
                    <HeroHeading className="uppercase">
                        Komplexní služby, vše kolem betonu
                    </HeroHeading>
                    <HeroSubheading>
                        Specializujeme se na dovoz a čerpání betonových směsí včetně realizace litých podlah.
                    </HeroSubheading>
                    <Wrapper className="w-11/12 md:w-max flex justify-center items-center flex-col md:flex-row gap-2 md:gap-3 lg:gap-4">
                        <Cta
                        color="bg-[#c72026]"
                        href="#o-nas">
                            Historie firmy
                        </Cta>
                        <Cta
                        color="bg-[#270c86]"
                        href="#kontakt">
                            Domluvit konzultaci
                        </Cta>
                    </Wrapper>
                </OverlayWrapper>
                </Padding>
            </RelativeOverlayWrapper>
        </Fragment>
    );
};

export default Hero;
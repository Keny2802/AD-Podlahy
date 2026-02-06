import {
    Fragment
} from "react";
import {
    GarageSet
} from "../components/Garageset";

import Wrapper from "../components/Wrapper";
import Color from "../components/Color";
import Padding from "../components/Padding";
import Heading from "../components/Heading";
import Grid from "../components/Grid";
import RelativeOverlayWrapper from "../components/RelativeOverlayWrapper";
import Img from "../components/Img";
import OverlayWrapper from "../components/OverlayWrapper";
import Cta from "../components/Cta";

const Garage = () => {
    return (
        <Fragment>
            <Color
            type="bg"
            color="#270c86">
                <Padding>
                    <Heading className="text-center">
                        Doprava a čerpání betonu
                    </Heading>
                    <Grid className="w-full lg:w-10/12 mt-4 md:mt-6 lg:mt-6 mx-auto">
                        {
                            GarageSet.map((card, index) => {
                                return (
                                    <Fragment key={index}>
                                        <Wrapper className="flex justify-center">
                                            <RelativeOverlayWrapper>
                                                <Img
                                                width={300}
                                                height={300}
                                                src={card.img}
                                                alt={card.cta}
                                                className="w-full md:w-[300px] md:h-[300px] object-cover rounded-md"
                                                />
                                                <OverlayWrapper
                                                position="inset-x-0 bottom-4 flex justify-center"
                                                className="px-3">
                                                    <Cta
                                                    href={card.href}
                                                    color="bg-[#270c86]">
                                                        {card.cta}
                                                    </Cta>
                                                </OverlayWrapper>
                                            </RelativeOverlayWrapper>
                                        </Wrapper>
                                    </Fragment>
                                );
                            })
                        }
                    </Grid>
                </Padding>
            </Color>
        </Fragment>
    );
};

export default Garage;
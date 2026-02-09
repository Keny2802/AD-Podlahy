import {
    Fragment
} from "react";

import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import FlexCol from "@/app/components/FlexCol";
import Heading from "@/app/components/Heading";
import BodyText from "@/app/components/BodyText";
import MarginTop from "@/app/components/MarginTop";
import Grid from "@/app/components/Grid";
import Img from "@/app/components/Img";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <Header />
            <Section
            color="secondary">
                <FlexCol className="text-center items-center gap-2 md:gap-2.5 lg:gap-3">
                    <Heading>
                        Suché potěry
                    </Heading>
                    <BodyText>
                        Zde bude podnadpis.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <Grid>
                        {
                            [
                                "/fota/podstranky/suche-potery/suche-potery-1.avif",
                                "/fota/podstranky/suche-potery/suche-potery-2.avif",
                                "/fota/podstranky/suche-potery/suche-potery-3.avif",
                                "/fota/podstranky/suche-potery/suche-potery-4.avif",
                                "/fota/podstranky/suche-potery/suche-potery-5.avif",
                                "/fota/podstranky/suche-potery/suche-potery-6.avif"
                            ].map((image, index) => {
                                return (
                                    <Img
                                    key={index}
                                    width={500}
                                    height={500}
                                    src={image}
                                    alt={`${index + 1}. Ukázka z realizace suchých potěrů společnosti AD podlahy.`}
                                    className="w-full rounded-2xl object-cover cursor-pointer"
                                    />
                                );
                            })
                        }
                    </Grid>
                </MarginTop>
            </Section>
            <About />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;
import {
    Fragment
} from "react";
import clsx from "clsx";

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
import Wrapper from "@/app/components/Wrapper";

const Content = () => {
    return (
        <Fragment>
            <Header />
            <Section
            color="secondary">
                <FlexCol className="text-center items-center gap-2 md:gap-2.5 lg:gap-3">
                    <Heading>
                        Zemní práce
                    </Heading>
                    <BodyText>
                        Zde bude podnadpis.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            [
                                "/fota/podstranky/zemni-prace/zemni-prace-1.avif",
                                "/fota/podstranky/zemni-prace/zemni-prace-2.avif",
                                "/fota/podstranky/zemni-prace/zemni-prace-3.avif",
                                "/fota/podstranky/zemni-prace/zemni-prace-4.avif",
                                "/fota/podstranky/zemni-prace/zemni-prace-5.avif",
                                "/fota/podstranky/zemni-prace/zemni-prace-6.avif",
                                "/fota/podstranky/zemni-prace/zemni-prace-7.avif",
                                "/fota/podstranky/zemni-prace/zemni-prace-8.avif",
                                "/fota/podstranky/zemni-prace/zemni-prace-9.avif",
                                "/fota/podstranky/zemni-prace/zemni-prace-10.avif",
                            ].map((image, index) => {
                                return (
                                    <Img
                                    key={index}
                                    width={500}
                                    height={500}
                                    src={image}
                                    alt={`${index + 1}. Ukázka z realizace zemních prací společnosti AD podlahy.`}
                                    className="w-full min-h-[300px] max-h-[300px] rounded-2xl object-cover cursor-pointer"
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
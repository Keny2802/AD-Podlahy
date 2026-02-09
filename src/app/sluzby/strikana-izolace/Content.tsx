import {
    Fragment
} from "react";
import clsx from "clsx";

import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import FlexCol from "@/app/components/FlexCol";
import Heading from "@/app/components/Heading";
import SmallerHeading from "@/app/components/SmallerHeading";
import BodyText from "@/app/components/BodyText";
import MarginTop from "@/app/components/MarginTop";
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
                        Stříkaná izolace
                    </Heading>
                    <BodyText>
                        Zde bude podnadpis.
                    </BodyText>
                </FlexCol>
                <MarginTop>
                    <FlexCol className="gap-2 md:gap-3 lg:gap-4">
                        {
                            [
                                {
                                    title: "Stříkaná pěna - perfektní izolace na celý život!",
                                    bodyText: `Aplikací PUR stříkané izolační pěny provádíme tepelné, zvukové a průmyslové izolace staveb. Řešíme zateplení a izolace střech, základů, stropů, zdiva či podkroví rodinných domů, panelových domů, bytů, průmyslových objektů a staveb, bazénů i zásobníků hmot.`
                                },
                                {
                                    title: "Proč si vybrat naši izolační pěnu?",
                                    bodyText: "Naše izolační pěna má řadu vynikajících vlastností, díky kterým se stává jedničkou na trhu mezi dostupnými izolačními materiály."
                                }
                            ].map((textBlock, index) => {
                                return (
                                    <Fragment key={index}>
                                        <FlexCol className="gap-2 md:gap-2.5 lg:gap-3">
                                            <SmallerHeading>
                                                {textBlock.title}
                                            </SmallerHeading>
                                            <BodyText>
                                                {textBlock.bodyText}
                                            </BodyText>
                                        </FlexCol>
                                    </Fragment>
                                );
                            })
                        }
                    </FlexCol>
                </MarginTop>
            </Section>
            <About />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;
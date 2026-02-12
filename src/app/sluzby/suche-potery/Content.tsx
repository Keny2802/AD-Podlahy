import {
    Fragment
} from "react";

import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import FlexCol from "@/app/components/FlexCol";
import Heading from "@/app/components/Heading";
import BodyText from "@/app/components/BodyText";
import MarginTop from "@/app/components/MarginTop";
import Flex from "@/app/components/Flex";
import Wrapper from "@/app/components/Wrapper";
import SmallerHeading from "@/app/components/SmallerHeading";
import Img from "@/app/components/Img";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
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
                        Suché betonové potěry pro váš dům i byt
                    </BodyText>
                </FlexCol>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-evenly gap-2 md:gap-4 lg:gap-6">
                        <Img
                        width={350}
                        height={350}
                        src="/fota/podstranky/suche-potery/suche-potery-3.avif"
                        alt="Betonový suchý potěr připravený pro litou podlahu"
                        className="w-full max-h-[400px] md:max-w-[350px] md:max-h-[350px] object-cover rounded-md"
                        />
                        <FlexCol className="max-w-xl gap-2 md:gap-3 lg:gap-4">
                            {
                                [
                                    `Suché betonové potěry jsou moderní způsob, jak rychle a přesně připravit podklad pro finální podlahy. Hodí se do novostaveb i rekonstrukcí, umožňují rychlou pokládku a minimalizují vlhkost v konstrukci.`,
                                ].map((textBlock, index) => {
                                    return (
                                        <BodyText
                                        key={index}>
                                            {textBlock}
                                        </BodyText>
                                    );
                                })
                            }
                        </FlexCol>
                    </Flex>
                </MarginTop>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-center gap-2 md:gap-4 lg:gap-6">
                        <Wrapper>
                            <SmallerHeading>
                                Proč zvolit suchý betonový potěr?
                            </SmallerHeading>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `Rychlost: Pochozí už za krátkou dobu po realizaci.`,
                                                `Nízká vlhkost: Ideální pro rekonstrukce a dřevostavby.`,
                                                `Rovinnost: Přesný podklad pro vinyl, dlažbu, laminát i dřevo.`,
                                                `Univerzálnost: Vhodné pro podlahové vytápění i běžné podlahy.`
                                            ].map((textBlock, index) => {
                                                return (
                                                    <ListItem
                                                    key={index}>
                                                        {textBlock}
                                                    </ListItem>
                                                );
                                            })
                                        }
                                    </FlexCol>
                                </List>
                            </MarginTop>
                        </Wrapper>
                        <Img
                        width={500}
                        height={500}
                        src="/fota/podstranky/suche-potery/suche-potery-1.avif"
                        alt="Příprava suchého potěru - realizováno společností AD Podlady"
                        className="w-full md:min-w-[200px] md:max-w-[700px] md:max-h-[500px] object-cover rounded-md"
                        />
                    </Flex>
                </MarginTop>
            </Section>
            <About />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;
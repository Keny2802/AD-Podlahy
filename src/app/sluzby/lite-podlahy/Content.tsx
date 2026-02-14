import {
    Fragment
} from "react";

import ContactHeader from "@/app/components/ContactHeader";
import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import FlexCol from "@/app/components/FlexCol";
import Heading from "@/app/components/Heading";
import BodyText from "@/app/components/BodyText";
import MarginTop from "@/app/components/MarginTop";
import Flex from "@/app/components/Flex";
import Wrapper from "@/app/components/Wrapper";
import SmallerHeading from "@/app/components/SmallerHeading";
import YAnimation from "@/app/components/YAnimation";
import Img from "@/app/components/Img";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const Content = () => {
    return (
        <Fragment>
            <ContactHeader />
            <Header />
            <Section color="secondary">
                <FlexCol className="text-center items-center gap-2 md:gap-2.5 lg:gap-3">
                    <Heading>
                        Lité podlahy
                    </Heading>
                    <BodyText>
                        Průmyslové lité podlahy s vysokou odolností.
                    </BodyText>
                </FlexCol>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-center flex-col gap-2 md:gap-4 lg:gap-6">
                        <YAnimation className="w-full cursor-pointer">
                            <Img
                            width={300}
                            height={300}
                            src="/fota/podstranky/lite-podlahy/lite-podlahy-1.jpeg"
                            alt="Modré stacionární čerpadlo na realizace litých podlah společnosti AD Podlady"
                            className="w-full md:min-w-[300px] md:max-w-[500px] object-cover rounded-md"
                            />
                        </YAnimation>
                        <FlexCol className="max-w-3xl gap-2 md:gap-3 lg:gap-4 cursor-pointer">
                        {
                            [
                                `Anhydritový podlahový potěr je tekutá směs na bázi síranu vápenatého se samonivelací určená pro vnitřní podlahy umožňující dokonalé srovnání podlahových konstrukcí a vytvářející ideálně rovnou a hladkou podlahovou plochu pro finální nášlapnou vrstvu - dlažba, plovoucí podlahy, PVC, koberce, parkety… nebo při určitých úpravách může sloužit jako finální podlaha.`,
                                `Po zaschnutí se vyznačuje homogenní a pevnou strukturou. Je vyráběn z pojiva na bázi síranu, jemnozrnného kameniva, vody a chemických přísad ovlivňující zpracovatelnost směsi a konečné vlastnosti anhydritového potěru.`,
                                `Výroba probíhá na betonárkách na základě průkazních zkoušek pomocí přesného dávkovacího zařízení odkud je směs přepravována autodomíchávači na stavbu v konzistenci pro konečné zpracování. Zde je směs speciálním čerpadlem pomocí gumových hadic dopravena až na místo určení.`,
                                `Je vhodný pro všechny druhy interiérových podlahových konstrukcí do novostaveb, ale i rekonstrukcí obytných budov, bytové domy, obytné domy, staveb administrativních i obchodních center, objektů občanské vybavenosti, školy, nemocnice a podobně. Není vhodný do trvale vlhkých a venkovních prostor.`
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
                    <Flex className="justify-evenly flex-col-reverse gap-2 md:gap-4 lg:gap-6">
                        <Wrapper>
                            <SmallerHeading>
                                Výhody
                            </SmallerHeading>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `ideálně rovný a hladký povch`,
                                                `odpadá složité a náročné štěrkování`,
                                                `vysoká pevnost`,
                                                `lepší izolační vlastnosti`,
                                                `biologická nezávadnost`,
                                                `menší zátěž a spotřeba materiálu`,
                                                `průchodnost podlahy za 1 až 2 dny`,
                                                `zatížitelnost po 4 - 5 dnech`,
                                                `výrazné zkrácení doby stavby`,
                                                `zvýšení světlé výšky místnosti`,
                                                `pro pokládku nepotřebujete elektřinu`,
                                                `snadná pokládka finálních nášlapných vrstev`,
                                                `nejrychlejší způsob pokládky`,
                                                `ideální pro podlahové topení`
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
                        <YAnimation className="cursor-pointer">
                            <Img
                            width={600}
                            height={600}
                            src="/fota/podstranky/lite-podlahy/lite-podlahy-2.jpeg"
                            alt="Oranžové čerpadlo na lité podlahy společnosti AD Podlady"
                            className="w-full md:min-w-[300px] md:max-w-[600px] md:max-h-[600px] object-cover rounded-md"
                            />
                        </YAnimation>
                    </Flex>
                </MarginTop>
                <MarginTop className="lg:mt-16">
                    <Flex className="justify-evenly flex-col gap-2 md:gap-4 lg:gap-6">
                        <YAnimation className="cursor-pointer">
                            <Img
                            width={400}
                            height={400}
                            src="/fota/podstranky/lite-podlahy/lite-podlahy-02.jpg"
                            alt="Epoxidová litá podlaha v útulném domě, realizováno společností AD Podlahy"
                            className="w-full md:max-w-[400px] object-cover rounded-md"
                            />
                        </YAnimation>
                        <Wrapper>
                            <SmallerHeading>
                                Oblasti použití
                            </SmallerHeading>
                            <MarginTop>
                                <List className="ml-4 md:ml-6 lg:ml-12">
                                    <FlexCol className="gap-1.5 md:gap-2 lg:gap-2.5">
                                        {
                                            [
                                                `roznášecí vrstva v těžkých plovoucích podlahách`,
                                                `náhrada cementových potěrů (vyjma vlhkých míst jako bazény, prádelny, atd...)`,
                                                `potěr pro podlahové topení`,
                                                `potěr na oddělovací vrstvě`
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
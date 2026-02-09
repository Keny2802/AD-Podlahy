import {
    Fragment
} from "react";

import Header from "@/app/components/Header";
import Section from "@/app/components/Section";
import FlexCol from "@/app/components/FlexCol";
import Heading from "@/app/components/Heading";
import BodyText from "@/app/components/BodyText";
import Flex from "@/app/components/Flex";
import Img from "@/app/components/Img";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";
import Wrapper from "@/app/components/Wrapper";

const Content = () => {
    return (
        <Fragment>
            <Header />
            <Section color="secondary">
                <FlexCol className="text-center items-center gap-2 md:gap-2.5 lg:gap-3">
                    <Heading>
                        Moderní lité podlahy pro dokonalý interiér
                    </Heading>
                    <BodyText>
                        Průmyslové lité podlahy s vysokou odolností.
                    </BodyText>
                </FlexCol>
                {/* <Flex className="flex-wrap gap-2 md:gap-3 lg:gap-4">
                    {
                        [
                            "/fota/podstranky/lite-podlahy/lite-podlahy-1.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-2.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-3.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-4.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-5.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-6.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-7.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-8.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-9.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-10.avif",
                        ].map((image, index) => {
                            return (
                                <Wrapper
                                key={index}
                                className="w-1/2 md:w-1/4">
                                    <Img
                                    width={500}
                                    height={500}
                                    src={image}
                                    alt=""
                                    className="w-full rounded-2xl object-cover"
                                    />
                                </Wrapper>
                            );
                        })
                    }
                </Flex> */}
                <Wrapper className="mt-2 md:mt-3 lg:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                    {
                        [
                            "/fota/podstranky/lite-podlahy/lite-podlahy-1.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-2.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-3.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-4.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-5.avif",
                            // "/fota/podstranky/lite-podlahy/lite-podlahy-6.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-7.avif",
                            // "/fota/podstranky/lite-podlahy/lite-podlahy-8.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-9.avif",
                            "/fota/podstranky/lite-podlahy/lite-podlahy-10.avif",
                        ].map((image, index) => {
                            return (
                                <Img
                                key={index}
                                width={500}
                                height={500}
                                src={image}
                                alt={`${index + 1}. Ukázka z realizace litých podlah společnosti AD podlahy.`}
                                className="w-full rounded-2xl object-cover"
                                />
                            );
                        })
                    }
                </Wrapper>
                <FlexCol className="mt-2 md:mt-3 lg:mt-4 gap-2 md:gap-3 lg:gap-4">
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
            </Section>
            <About />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Content;
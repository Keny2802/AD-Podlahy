import {
    ReactNode,
    Fragment
} from "react";
import {
    Menu
} from "lucide-react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Padding from "./Padding";
import Logo from "./Logo";

type HeaderType = {
    className?: string;
    children?: ReactNode;
};

const Header = ({ ...props }: HeaderType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(className, "bg-white shadown-md header-component")}>
                <Padding>
                    <Wrapper className="flex justify-between items-center gap-2 md:gap-3 lg:gap-4">
                        <Logo />
                        <Menu className="text-black cursor-pointer" />
                    </Wrapper>
                </Padding>
            </Wrapper>
        </Fragment>
    );
};

export default Header;
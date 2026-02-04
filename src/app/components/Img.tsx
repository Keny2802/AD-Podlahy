import {
  Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

type ImageType = {
    className?: string;
    fill?: boolean;
    width?: number;
    height?: number;
    src: string;
    alt: string;
};

const Img = ({ ...props }: ImageType) => {
    const {
        className,
        fill,
        width,
        height,
        src,
        alt
    } = props;

    return (
        <Fragment>
            <Image
            {...(fill ?
                { fill: true } : { width, height }
            )}
            src={src}
            alt={alt}
            className={clsx(className, "image-component")}
            />
        </Fragment>
    );
};

export default Img;
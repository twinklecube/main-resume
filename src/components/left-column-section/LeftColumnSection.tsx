import {Wrapper} from "./LeftColumnSection.styles.ts";
import LeftColumnTitle from "../left-column-title/LeftColumnTitle.tsx";
import {PropsWithChildren} from "react";

type Props = {
    title: string;
} & PropsWithChildren;

const LeftColumnSection = ({title, children}: Props) => {
    return (
        <Wrapper>
            <LeftColumnTitle title={title} />
            {children}
        </Wrapper>
    );
};

export default LeftColumnSection;

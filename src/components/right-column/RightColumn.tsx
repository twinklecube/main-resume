import {
    Wrapper
} from "./RightColumn.styles.ts";
import {PropsWithChildren} from "react";

type Props = {} & PropsWithChildren;

const RightColumn = ({children}: Props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default RightColumn;

import {Wrapper} from "./LeftColumn.styles.ts";
import {PropsWithChildren} from "react";

type Props = {} & PropsWithChildren;

const LeftColumn = ({children}: Props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default LeftColumn;

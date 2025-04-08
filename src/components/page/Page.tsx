import {PropsWithChildren} from 'react';
import {Wrapper} from "./Page.styles.ts";

type Props = {} & PropsWithChildren;

const Page = ({children}: Props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default Page;

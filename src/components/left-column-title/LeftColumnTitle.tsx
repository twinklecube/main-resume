import {Wrapper, Title, TitleFlag} from "./LeftColumnTitle.styles.ts";

type Props = {
    title: string;
}

const LeftColumnTitle = ({title}: Props) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <TitleFlag />
        </Wrapper>
    );
};

export default LeftColumnTitle;

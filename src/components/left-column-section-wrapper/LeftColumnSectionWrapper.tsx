import {Li, P, Ul, Wrapper} from "./LeftColumnSectionWrapper.styles.ts";
import {useContext} from "react";
import {AppContext} from "../../store/store.ts";
import LeftColumnTitle from "../left-column-title/LeftColumnTitle.tsx";

export type Props = {
    page: number
}

const LeftColumnSectionWrapper = ({ page }: Props) => {

    const {value} = useContext(AppContext);

    return (
        <Wrapper>
            {value?.leftColumn
                .filter((leftColumnSection) => leftColumnSection.page === page)
                .sort((a,b) => a.order - b.order)
                .map(({title, startParagraph, list, endParagraph}) => (
                    <>
                        <LeftColumnTitle title={title} />
                        {startParagraph && startParagraph.map(paragraph => (<P>{paragraph}</P>))}
                        {list && list.length > 0 && (
                            <Ul>
                                {list.map(listItem => (
                                    <Li>
                                        {listItem.map(paragraph => (
                                            <p>{paragraph}</p>
                                        ))}
                                    </Li>
                                ))}
                            </Ul>
                        )}
                        {endParagraph && endParagraph.map(paragraph => (<P>{paragraph}</P>))}
                    </>
            ))}
        </Wrapper>
    );
};

export default LeftColumnSectionWrapper;

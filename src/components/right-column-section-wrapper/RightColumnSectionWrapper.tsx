import {
    KeywordParagraph,
    SectionTitle,
    SectionTitleLeft,
    SectionTitleRight,
    SectionWrapper, TextParagraph,
    Title,
    Wrapper
} from "./RightColumnSectionWrapper.styles.ts";
import {useContext} from "react";
import {RightColumnSectionCategory} from "../../store/store.types.ts";
import {AppContext} from "../../store/store.ts";

type Props = {
    title?: string;
    page: number,
    category: RightColumnSectionCategory
};

const RightColumnSectionWrapper = ({title, page, category}: Props) => {
    const {value} = useContext(AppContext);

    const sections = value?.rightColumn
        .filter((rightColumnSection) =>
        rightColumnSection.category === category && rightColumnSection.page === page)
        .sort((a, b) => a.order - b.order)

    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
            {sections && sections.map(section => (
                <SectionWrapper>
                    <SectionTitle>
                        <SectionTitleLeft />
                        <SectionTitleRight>
                            {section.titleText && section.titleText}
                            {section.titleAnchor && section.titleAnchor}
                        </SectionTitleRight>
                    </SectionTitle>
                    {section.textParagraphs && section.textParagraphs.length > 0 && section.textParagraphs.map((paragraph) => (
                        <TextParagraph>{paragraph}</TextParagraph>
                    ))
                    }
                    {section.keywordParagraphs && section.keywordParagraphs.length > 0 && section.keywordParagraphs.map((paragraph) => (
                        <KeywordParagraph>{paragraph}</KeywordParagraph>
                    ))
                    }
                </SectionWrapper>
            ))}
        </Wrapper>
    );
};

export default RightColumnSectionWrapper;

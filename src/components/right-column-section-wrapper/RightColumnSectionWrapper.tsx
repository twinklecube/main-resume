import {
    IconImg, IconLink,
    IconContent, IconText,
    KeywordParagraph,
    SectionTitle,
    SectionTitleLeft,
    SectionTitleRight, SectionTitleRightAnchor,
    SectionWrapper, TextParagraph,
    Title,
    Wrapper
} from "./RightColumnSectionWrapper.styles.ts";
import {useContext} from "react";
import {IconContentType, RightColumnSectionCategory} from "../../store/store.types.ts";
import {AppContext} from "../../store/store.ts";

type Props = {
    title?: string;
    page: number,
    category: RightColumnSectionCategory
};

const mapIconContentTypeToIcon: Record<IconContentType, string> = {
    "architecture-diagram": '/architecture-diagram.svg',
    "npm-repo": '/npm.svg',
    "github-repo": '/github.webp'
}

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
                        {section.titleText && <SectionTitleRight>{section.titleText}</SectionTitleRight>}
                        {section.titleAnchor && <SectionTitleRightAnchor href={section.titleAnchor} target='_blank'>{section.titleAnchor}</SectionTitleRightAnchor>}
                    </SectionTitle>
                    {section.textParagraphs && section.textParagraphs.length > 0 && section.textParagraphs.map((paragraph) => (
                        <TextParagraph>{paragraph}</TextParagraph>
                    ))
                    }
                    {section.iconContents && section.iconContents.length > 0 && section.iconContents.map(iconContent => (

                        <IconContent>
                            <IconImg src={mapIconContentTypeToIcon[iconContent.type]}/>
                            <IconText>
                                <span>{iconContent.text}</span>
                                <IconLink href={iconContent.link} target='_blank'>{iconContent.link}</IconLink>
                            </IconText>
                        </IconContent>

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

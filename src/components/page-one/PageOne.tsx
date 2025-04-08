import Page from "../page/Page.tsx";
import Teaser from "../teaser/Teaser.tsx";
import {ColumnWrapper} from "./PageOne.styles.ts";
import LeftColumn from "../left-column/LeftColumn.tsx";
import RightColumn from "../right-column/RightColumn.tsx";
import {Name} from "./PageOne.styles.ts";
import LeftColumnSectionWrapper from "../left-column-section-wrapper/LeftColumnSectionWrapper.tsx";
import SocialMediaBlock from "../social-media-block/SocialMediaBlock.tsx";

const PageOne = () => {
    return (
        <Page>
            <Teaser />
            <ColumnWrapper>
                <LeftColumn>
                    <Name>Malin Samaranayake</Name>
                    <SocialMediaBlock
                        icon='/linkedin.svg.webp'
                        link='https://www.linkedin.com/in/malin-m-samaranayake/'
                    />
                    <SocialMediaBlock
                        icon='/stackoverflow.webp'
                        link='https://stackoverflow.com/users/20426277/twinklecube'
                    />
                    <SocialMediaBlock
                        icon='/github.webp'
                        link='https://github.com/twinklecube/'
                    />
                    <LeftColumnSectionWrapper page={1} />
                </LeftColumn>
                <RightColumn />
            </ColumnWrapper>
        </Page>
    );
};

export default PageOne;

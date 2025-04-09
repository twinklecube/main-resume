import Page from "../page/Page.tsx";
import LeftColumn from "../left-column/LeftColumn.tsx";
import LeftColumnSectionWrapper from "../left-column-section-wrapper/LeftColumnSectionWrapper.tsx";
import RightColumn from "../right-column/RightColumn.tsx";
import RightColumnSectionWrapper from "../right-column-section-wrapper/RightColumnSectionWrapper.tsx";

const PageTwo = () => {
    return (
        <Page>
            <LeftColumn>
                <LeftColumnSectionWrapper page={2} />
            </LeftColumn>
            <RightColumn>
                <RightColumnSectionWrapper page={2} category='project' />
            </RightColumn>
        </Page>
    );
};

export default PageTwo;

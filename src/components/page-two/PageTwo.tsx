import Page from "../page/Page.tsx";
import LeftColumn from "../left-column/LeftColumn.tsx";
import LeftColumnSectionWrapper from "../left-column-section-wrapper/LeftColumnSectionWrapper.tsx";

const PageTwo = () => {
    return (
        <Page>

            <LeftColumn>
                <LeftColumnSectionWrapper page={2} />
            </LeftColumn>
        </Page>
    );
};

export default PageTwo;

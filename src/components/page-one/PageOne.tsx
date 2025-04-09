import Page from "../page/Page.tsx";
import {Brief, ProfileImage, ProfileImagePlaceHolder} from "./PageOne.styles.ts";
import LeftColumn from "../left-column/LeftColumn.tsx";
import RightColumn from "../right-column/RightColumn.tsx";
import {Name} from "./PageOne.styles.ts";
import LeftColumnSectionWrapper from "../left-column-section-wrapper/LeftColumnSectionWrapper.tsx";
import SocialMediaBlock from "../social-media-block/SocialMediaBlock.tsx";
import RightColumnSectionWrapper from "../right-column-section-wrapper/RightColumnSectionWrapper.tsx";

const PageOne = () => {
    return (
        <Page>
            <LeftColumn>
                <ProfileImagePlaceHolder>
                    <ProfileImage />
                </ProfileImagePlaceHolder>
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
                <SocialMediaBlock
                    icon='/cv.svg'
                    link='https://malin-resume.netlify.app/'
                />
                <LeftColumnSectionWrapper page={1}  />
            </LeftColumn>
            <RightColumn>
                <Brief>
                    <p>
                        <strong>Passionate Frontend Developer with a solid understanding of backend technologies.<br /></strong> contributing to cutting-edge projects at
                        a well-known tech company <strong>Since September 2021</strong>.
                    </p>
                </Brief>
                <RightColumnSectionWrapper title='EXPERIENCE' page={1} category='experience' />
                <RightColumnSectionWrapper title='PROJECTS' page={1} category='project' />
            </RightColumn>
        </Page>
    );
};

export default PageOne;

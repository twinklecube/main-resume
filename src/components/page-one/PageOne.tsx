import Page from "../page/Page.tsx";
import {Brief, ColumnWrapper, ProfileImage, ProfileImagePlaceHolder} from "./PageOne.styles.ts";
import LeftColumn from "../left-column/LeftColumn.tsx";
import RightColumn from "../right-column/RightColumn.tsx";
import {Name} from "./PageOne.styles.ts";
import LeftColumnSectionWrapper from "../left-column-section-wrapper/LeftColumnSectionWrapper.tsx";
import SocialMediaBlock from "../social-media-block/SocialMediaBlock.tsx";

const PageOne = () => {
    return (
        <Page>
            {/*<Teaser />*/}

            <ColumnWrapper>
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
                    <LeftColumnSectionWrapper page={1} />
                </LeftColumn>
                <RightColumn>
                    <Brief>
                        <p>
                            <strong>Passionate Frontend Developer based in Munich,</strong> contributing to cutting-edge projects at
                            a well-known tech company <strong>Since September 2021</strong>. While my expertise lies in building intuitive, high-performance
                            user interfaces,
                            I also bring a solid understanding of backend technologies allowing me to collaborate effectively
                            across the stack.
                        </p>
                        <p>
                            Continuously driven by curiosity, I actively work on personal projects to explore emerging tools
                            and frameworks. With a sharp eye for detail and a commitment to clean, maintainable code.
                        </p>
                        <p>
                            I believe now is the perfect time to take the next step in my journey and bring fresh
                            energy to a new team.
                        </p>
                    </Brief>
                </RightColumn>
            </ColumnWrapper>
        </Page>
    );
};

export default PageOne;

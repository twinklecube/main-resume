import {Content, ProfileImage, ProfileImagePlaceHolder, Wrapper} from "./Teaser.styles.ts";

const Teaser = () => {
    return (
        <Wrapper>
            <ProfileImagePlaceHolder>
                <ProfileImage />
                {/*<ProfileImage src='/malin-profile-pic.jpg' />*/}
            </ProfileImagePlaceHolder>
            <Content>
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
            </Content>
        </Wrapper>
    );
};

export default Teaser;

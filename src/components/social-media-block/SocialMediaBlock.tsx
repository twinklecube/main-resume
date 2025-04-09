import {SocialMediaImg, SocialMediaLink, SocialMediaWrapper} from "./SocialMediaBlock.styles.ts";

type Props = {
    icon: string;
    link: string;
}

const SocialMediaBlock = ({icon, link}: Props) => {
    return (
        <SocialMediaWrapper>
            <SocialMediaImg src={icon} />
            <SocialMediaLink href={link} target='_blank'>
                {link}
            </SocialMediaLink>
        </SocialMediaWrapper>
    );
};

export default SocialMediaBlock;

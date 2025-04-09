import styled from "@emotion/styled";

export const SocialMediaWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 25px 0 50px;
    margin: 10px 0;
`;

export const SocialMediaImg = styled.img`
    width: 30px;
    height: 30px;
`;

export const SocialMediaLink = styled.a`
    text-decoration: none;
    color: white;
    line-break: anywhere;
    
    &:hover {
        text-decoration: underline;
    }
`;

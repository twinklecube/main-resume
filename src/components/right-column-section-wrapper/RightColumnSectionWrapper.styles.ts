import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Title = styled.div`
    font-size: 20px;
    color: #191f22;
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const SectionTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SectionTitleLeft = styled.div`
    width: 15px;
    height: 25px;
    background-color: #191f22;
`;

export const SectionTitleRight = styled.div`
    flex: 1;
    padding-left: 5px;
    text-decoration: none;
    font-size: 18px;
    color: #191f22;
    line-break: anywhere;
`;

export const TextParagraph = styled.p`
    font-size: 14px;
    color: #191f22;
    padding-left: 20px;
`;

export const KeywordParagraph = styled.div`
    padding-left: 20px;
    font-size: 16px;
    color: #308397;
`;

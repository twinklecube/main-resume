import styled from "@emotion/styled";

export const Wrapper = styled.main`
    flex: 1;
    //background-color: pink;
    z-index: -2;
    padding: 0 50px 0 25px;
`;

export const CategoryTitle = styled.div`
    font-size: 20px;
    color: #191f22;
    //font-weight: 500;
`;

export const ProjectWrapper = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    //border-left: solid 2px #191f22;
    //padding-left: 15px;
`;

export const ProjectTitle = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProjectTitleLeft = styled.div`
    width: 15px;
    height: 20px;
    background-color: #191f22;
`;

export const ProjectTitleRight = styled.div`
    flex: 1;
    padding-left: 5px;
`;

export const ProjectUrl = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #191f22;
    line-break: anywhere;
`;

export const ProjectP = styled.p`
    font-size: 14px;
    color: #191f22;
    padding-left: 20px;
`;

export const ProjectKeywords = styled.div`
    padding-left: 20px;
    font-size: 16px;
    color: #308397;
`;



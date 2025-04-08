import styled from "@emotion/styled";
import {LEFT_COLUMN_BG_COLOR, LEFT_COLUMN_WIDTH} from "../../utils/consts.ts";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ProfileImagePlaceHolder = styled.div`
    width: ${LEFT_COLUMN_WIDTH};
    //position: relative;
    background-color: ${LEFT_COLUMN_BG_COLOR};
    display: flex;
    //justify-content: center;
    align-items: center;
    padding-left: 50px;
`;

export const ProfileImage = styled.img`
    //position: absolute;
    //top: 15px;
    //left: 15px;
    width: 250px;
    height: 250px;
    //border: solid 2px #ffdd00;
    border-radius: 50%;
    //background-color: white;
    background: url("/malin-profile-pic.jpg");
    background-position: -12px -30px;
    //background-position: center;
    background-size: cover;
`;


export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 50px 50px 25px 25px;
    font-size: 14px;
    line-height: 18px;
    //background-color: #fbd971;
`;

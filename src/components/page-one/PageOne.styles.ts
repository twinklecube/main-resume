import styled from "@emotion/styled";
import {LEFT_COLUMN_BG_COLOR, LEFT_COLUMN_WIDTH} from "../../utils/consts.ts";

export const Name = styled.div`
    font-size: 30px;
    color: #ffdd00;
    padding-left: 50px;
    margin: 10px 0;
`;

export const ProfileImagePlaceHolder = styled.div`
    width: ${LEFT_COLUMN_WIDTH};
    background-color: ${LEFT_COLUMN_BG_COLOR};
    display: flex;
    align-items: center;
    padding-left: 50px;
`;

export const ProfileImage = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: url("/malin-profile-pic.jpg");
    background-position: -12px -30px;
    background-size: cover;
`;

export const Brief = styled.div`
    //flex: 1;
    //display: flex;
    //flex-direction: column;
    gap: 5px;
    font-size: 14px;
    line-height: 18px;
    
    //p {
    //    margin: 0;
    //}
    //margin-bottom: 40px;
`;

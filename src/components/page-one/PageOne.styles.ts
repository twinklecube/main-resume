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
    background: url("/malin-profile-pic.jpg") -12px -30px;
    background-size: cover;
`;

export const Brief = styled.div`
    font-size: 16px;
    line-height: 20px;
`;

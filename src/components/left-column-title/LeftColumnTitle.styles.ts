import styled from "@emotion/styled";
import {LEFT_COLUMN_BG_COLOR} from "../../utils/consts.ts";

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    height: 35px;
`;

export const Title = styled.div`
    position: absolute;
    top: 0;
    width: 310px;
    background-color: #ffdd00;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 16px;
    color: ${LEFT_COLUMN_BG_COLOR};
`;

export const TitleFlag = styled.div`
    position: absolute;
    right: -7px;
    bottom: -7px;
    width: 15px;
    height: 15px;
    background-color: #a99306;
    transform: rotate(135deg);
    z-index: -1;
`;

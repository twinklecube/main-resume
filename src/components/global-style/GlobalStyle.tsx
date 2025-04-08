import {css, Global} from '@emotion/react';

const globalStyle = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto Light", Arial, sans-serif;
    }
`;

export const GlobalStyles = () => <Global styles={globalStyle} />;

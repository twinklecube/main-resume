import styled from '@emotion/styled'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
    
    @media print {
        gap: 0;
        margin: 0;
    }
`;



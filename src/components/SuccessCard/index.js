import styled from 'styled-components';

const SuccessCard = styled.div`
    background-color: ${({ theme }) => theme.colors.success};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 5px 7px;
    margin-top: 30px;

    p {
        font-size: 18px;
        text-align: center;
    }
`

export default SuccessCard
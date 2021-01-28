import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    border: none;
    height: 50px;
    padding: 8px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors.gold};
`

export default Button
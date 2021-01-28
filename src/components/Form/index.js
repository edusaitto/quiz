import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const NameInput = styled.input`
  padding: 15px 10px;
  background-color: #000a12;
  color: ${({ theme }) => theme.colors.contrastText};
  border: none;
  border-radius: 6px;
  margin-bottom: 15px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.contrastText};
  }
`;

const ButtonSubmit = styled.button`
    padding: 8px;
    border: none;
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors.gold};
`

export default function Form() {
    const router = useRouter()
    const [name, setName] = React.useState('')  
    return (
        <FormContainer onSubmit={(e)=>{
            e.preventDefault();
            router.push(`/quiz?name=${name}`)
          }}
          >
            <NameInput
              placeholder="Digite seu nome aqui para jogar :)"
              onChange={(e)=> {
                setName(e.target.value)
              }}
            />  
            <ButtonSubmit type="submit" disabled={name.length === 0}>
              Bora jogar, {name}
            </ButtonSubmit>
        </FormContainer>
    )
}


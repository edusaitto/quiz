import styled from 'styled-components'
import Image from 'next/image'

Image.Circle = styled.img`
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`

const PhotoHolder = styled.div`
  margin-bottom: 10px;
`

const FooterWrapper = styled.footer`
  background-color: #00000099;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <div>
          <PhotoHolder>
            <Image.Circle
              src="/photo.png" 
              layout="responsive" 
            />
          </PhotoHolder>
      </div>
      <p>
        Criado por
        {' '}
        <a href="https://www.linkedin.com/in/saito-eduardo/">
          <span>Eduardo Saito</span>
        </a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
} 
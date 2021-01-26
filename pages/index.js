import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Form from '../src/components/Form'

export const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  height: 100vh;
  background-position: center;
`;

const SocialHolder = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SocialName = styled.p`
  margin-left: 10px;
`

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin:auto;
    padding: 15px;
  }
  @media screen and (max-width: 381px) {
    width: 90%;
  }
  @media screen and (max-width: 300px) {
    width: 80%;
  }
`

export default function Home() {
  return (
    <BackgroundImage>
      <Container>
        <Widget>
          <Widget.Header>
              <h1>FAKE NEWS</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Você é capaz de identificar uma fake news? Coloque seu nome abaixo, clique em jogar e descubra quantas notícias você pode desmascarar!</p>
            <Form/>
          </Widget.Content>
        </Widget>
        <Footer/>
      </Container>
      <GitHubCorner projectUrl="https://github.com/edusaitto"/>
    </BackgroundImage>
  );
}

import Container from '../src/components/Container'
import BackgroundImage from '../src/components/Background'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import Form from '../src/components/Form'
import Footer from '../src/components/Footer'

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

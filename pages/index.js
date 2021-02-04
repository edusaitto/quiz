import Container from '../src/components/Container'
import BackgroundImage from '../src/components/Background'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'
import Form from '../src/components/Form'
import Footer from '../src/components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <BackgroundImage>
      <Container>
        <Widget
          as={motion.section}
          transition={{ delay:0, duration: 0.8 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
              <h1>TECH QUIZ</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Esse é um quiz de 5 perguntas com algumas curiosidades sobre tecnologia. O que acha de tentar acertar alguma delas? Boa sorte!</p>
            <Form/>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.section}
          transition={{ delay:0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </Container>
      <GitHubCorner projectUrl="https://github.com/edusaitto"/>
    </BackgroundImage>
  );
}

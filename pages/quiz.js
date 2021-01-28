import Container from '../src/components/Container'
import BackgroundImage from '../src/components/Background'
import QuestionWidget from '../src/components/QuestionWidget'
import Loading from '../src/components/Loading'
import ResultWidget from '../src/components/ResultWidget'
import db from '../db.json'


const screenStates = {
    LOADING: 'LOADING',
    QUIZ: 'QUIZ',
    RESULT: 'RESULT',
}

export default function QuizPage() {
    const [index, setIndex] = React.useState(0)
    const question = db.questions[index];
    const [screenState, setScreenState] = React.useState(screenStates.LOADING)
    const [results, setResults] = React.useState([])
    
    function addResult(result) {
        setResults([
            ...results,
            result
        ])
    }

    React.useEffect(()=>{
        setTimeout(() => {
            if (index < db.questions.length - 1)
                setScreenState(screenStates.QUIZ)
            else
                setScreenState(screenStates.RESULT)
        }, 1 * 1000)
    }, [screenState])
    
    function handleSubmit() {
        const nextQuestion = index + 1
        if (index < db.questions.length - 1)
            setIndex(index+1)
        else
            setScreenState(screenStates.RESULT)
    }

    return (
        <BackgroundImage>
            <Container>
                { screenState === screenStates.LOADING && <Loading/> }
                { screenState === screenStates.QUIZ && 
                    <QuestionWidget 
                    question={question}
                    index={index}
                    handleSubmit={handleSubmit}
                    addResult={addResult}
                    /> 
                }
                { screenState === screenStates.RESULT && <ResultWidget results={results} index={index} /> }
            </Container>
        </BackgroundImage>
    )
}
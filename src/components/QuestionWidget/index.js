import Widget from '../Widget'
import Button from '../Button'
import WrongCard from '../WrongCard'
import SuccessCard from '../SuccessCard'
import AlternativesForm from '../AlternativesForm'
import db from '../../../db.json'

export default function QuestionWidget({ question, index, handleSubmit, addResult }) {
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
    const [formSubmit, setFormSubmit] = React.useState(false)
    const questionId = `question__${index}`
    const isCorrect = selectedAlternative === question.answer
    const hasAlternativeSelected = selectedAlternative !== undefined
    const [checkedButton, setCheckedButton] = React.useState(false)
    return (
        <Widget>
            <Widget.Header>
                <h1>
                    PERGUNTA
                    {` ${index + 1} `}
                    de
                    {` ${db.questions.length}`}
                </h1>
            </Widget.Header>
            <img
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                }}
                src={question.image}
            />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>

                <AlternativesForm onSubmit={(e)=>{
                    e.preventDefault()
                    setFormSubmit(true)
                }}>
                    {question.alternatives.map((a, index) => {
                        const alternativeId = `alternative-${a}`
                        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
                        const isSelected = selectedAlternative === index
                        return (
                            <Widget.Topic
                                as="label"
                                key={alternativeId}
                                data-selected={isSelected}
                                data-status={formSubmit && alternativeStatus}
                            >
                            <input
                                style={{ display: 'none' }}
                                name={questionId}
                                onChange={() => {
                                    setSelectedAlternative(index)
                                    
                                }}
                                onClick={() => {
                                    setCheckedButton(checkedButton)
                                }}
                                type="radio"
                                checked={formSubmit === false ? checkedButton : !checkedButton}
                            />
                            {a}
                            </Widget.Topic>
                        );
                    })}

                    <Button 
                        type="submit"
                        disabled={!hasAlternativeSelected}
                        hidden={formSubmit}
                    >
                        CONFIRMAR
                    </Button>
                    {formSubmit && isCorrect &&
                        <div>
                            <Button
                                onClick={()=>{
                                    setTimeout(()=> {
                                        handleSubmit()
                                        addResult(isCorrect)
                                        setSelectedAlternative(undefined)
                                        setCheckedButton(false)
                                        setFormSubmit(false) 
                                    }, 500)
                                }}
                            >
                                PRÓXIMA
                            </Button>
                            <SuccessCard>
                                <p>Você acertou!</p>
                            </SuccessCard>
                        </div>
                    }
                    {formSubmit && !isCorrect && 
                        <div>
                            <Button
                                onClick={()=>{
                                    setTimeout(()=> {
                                        handleSubmit()
                                        addResult(isCorrect)
                                        setSelectedAlternative(undefined)
                                        setCheckedButton(false)
                                        setFormSubmit(false) 
                                    }, 500)
                                }}
                            >
                                PRÓXIMA
                            </Button>
                            <WrongCard>
                                <p>Você errou! A resposta correta era a alternativa {question.answer+1}</p>
                            </WrongCard>
                        </div>
                    }
                    
                </AlternativesForm>
            </Widget.Content>
        </Widget>
    )
}
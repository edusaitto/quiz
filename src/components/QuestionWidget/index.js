import Widget from '../Widget'
import Button from '../Button'
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
                    setTimeout(()=> {
                        addResult(isCorrect)
                        handleSubmit()
                        setFormSubmit(false)
                        setSelectedAlternative(undefined)
                        setCheckedButton(false)
                    }, 1000)
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
                                checked={checkedButton}
                            />
                            {a}
                            </Widget.Topic>
                        );
                    })}

                    <Button 
                        type="submit"
                        disabled={!hasAlternativeSelected}
                    >
                        Confirmar
                    </Button>
                    {formSubmit && isCorrect && <p>Você acertou!</p>}
                    {formSubmit && !isCorrect && <p>Você errou!</p>}
                </AlternativesForm>
            </Widget.Content>
        </Widget>
    )
}
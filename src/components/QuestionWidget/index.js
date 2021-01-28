import Widget from '../Widget'
import Button from '../Button'
import db from '../../../db.json'

export default function QuestionWidget({ question, index, handleSubmit }) {
    const questionId = `question__${index}`
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

                <form onSubmit={(e)=>{
                    e.preventDefault()
                    handleSubmit()
                }}>
                    {question.alternatives.map((a) => {
                        return (
                            <Widget.Topic
                                as="label"
                            >
                            <input
                                style={{ display: 'none' }}
                                name={questionId}
                                type="radio"
                            />
                            {a}
                            </Widget.Topic>
                        );
                    })}

                    <Button 
                        type="submit"
                    >
                        Confirmar
                    </Button>
                </form>
            </Widget.Content>
        </Widget>
    )
}
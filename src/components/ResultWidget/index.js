import Widget from '../Widget'
import styled from 'styled-components'

const ListResultOk = styled.li`
    padding: 8px;
    margin: 8px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({theme}) => theme.colors.success};
`

const ListResultWrong = styled.li`
    padding: 8px;
    margin: 8px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({theme}) => theme.colors.wrong};
`

function ListFunction({ result, index }) {
    if (result === true)
    return (
        <ListResultOk>
            Questão {index+1}: Acertou!
        </ListResultOk>
    )
    else
    return (
        <ListResultWrong>
            Questão {index+1}: Errou :(
        </ListResultWrong>
    )
}

export default function ResultWidget({ results, index }) {
    return (
        <Widget>
            <Widget.Header>
                RESULTADO
            </Widget.Header>

            <Widget.Content>
                <h4>Você acertou {results.reduce((somatoria, resultado) => {
                    const isAcerto = resultado === true
                    if (isAcerto) {
                        return somatoria + 1
                    } 
                    return somatoria
                }, 0)} de 5 questões</h4>
                <ul>
                    {results.map((result, index) => (
                        <ListFunction result={result} index={index}>
                            {result === true ? " Acertou" : " Errou"}
                        </ListFunction>
                    ))}
                </ul>
                <h1>Obrigado por participar do meu Tech Quiz! Se tiver algum feedback eu adoraria ouvir :)</h1>
            </Widget.Content>
        </Widget>
    )
}

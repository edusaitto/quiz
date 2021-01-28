import Widget from '../Widget'

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
                }, 0)} questões</h4>
                <ul>
                    {results.map((result, index) => (
                        <li>
                            Questão #{index+1}:
                            {result === true ? " Acertou" : " Errou"}
                        </li>
                    ))}
                </ul>
            </Widget.Content>
        </Widget>
    )
}

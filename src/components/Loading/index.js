import React from 'react'
import Widget from '../Widget'

export default function Loading() {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>
            <Widget.Content>
                Obrigado por participar do Tech Quiz!
            </Widget.Content>
        </Widget>
    )
}
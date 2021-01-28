import React from 'react'
import Widget from '../Widget'

export default function Loading() {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>
            <Widget.Content>
                Não compartilhe fake news!
            </Widget.Content>
        </Widget>
    )
}
import * as Styled from './style'

export default function NoLists() {
    return (
        <Styled.Container>
            <img
                width={140}
                height={140}
                src='./to-do-list.png'
            />
            <h1> Você não possui nenhuma lista </h1>
            <p> Cria uma lista ao lado para começar o seu planejamento </p>
        </Styled.Container>
    )
}
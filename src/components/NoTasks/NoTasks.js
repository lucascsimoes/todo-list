import * as Styled from "./style"

export default function NoTask() {
    return (
        <Styled.Container>
            <img
                width={90}
                height={90}
                src="./task.png"
            />
            <h2> Nenhuma tarefa encontrada </h2>
            <p> Você pode adicionar uma tarefa na caixa de texto acima e selecionando uma data ao lado </p>
        </Styled.Container>
    )
}
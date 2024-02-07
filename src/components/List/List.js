import * as Styled from './style'

export default function List({ name, isSelected, selection, remove }) {
    return (
        <Styled.Container selected={isSelected} onClick={() => selection(name)}>
            <p> { name } </p>
            { isSelected && 
                <svg onClick={() => remove(name)} fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>
            }
        </Styled.Container>
    )
}
import * as Styled from "./style"

export default function Task({ id, description, date, isDone, taskState, remove }) {

    const day = new Date(date).getDate().toString()
    const month = (new Date(date).getMonth() + 1).toString()
    const year = new Date(date).getFullYear().toString()

    return (
        <Styled.Container done={isDone}>
            <input type="checkbox" id={id} onChange={e => taskState(id, e.target.checked)} hidden/>
            <label htmlFor={id}>
                { isDone && <svg fill="currentColor" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg> }
            </label>

            <div>
                <span> { `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}` } </span>
                <p> { description } </p>
            </div>

            <button onClick={() => remove(id)}>
                <svg fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>
            </button>
        </Styled.Container>
    )
}
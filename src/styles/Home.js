import styled from "styled-components";

export const ListContainer = styled.aside`
    max-width: 300px;
    width: 100dvw;
    height: 100dvh;
    background: #252525;
    padding: 30px;

    .title {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 80px;

        svg {
            min-width: 32px;
            width: 0;

            path {
                fill: #F6C76C;
            }
        }

        h1 {
            color: white;
        }
    }

    input {
        border: 1px solid var(--terciary);
        background-color: transparent;
        padding: 18px;
        width: 100%;
        outline: none;
        caret-color: #fff;
        border-radius: 8px;
        color: #fff;
        font-size: 14px;
    }
`

export const CreateList = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    border: none;
    background: transparent;
    transition: background .2s cubic-bezier(0.075, 0.82, 0.165, 1);
    padding: 15px;
    border-radius: 8px;
    opacity: .6;
    cursor: pointer;
    margin-top: 20px;
    user-select: none;

    &:hover {
        background: var(--hover-secondary);
        transition: background .2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    svg {
        min-width: 17px;
        width: 0;
        margin-left: 15px;

        path {
            fill: #fff;
        }
    }

    p {
        color: #fff;
        font-size: 14px;
    }
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    width: 100%;
    background-color: var(--secondary);
    border-radius: 15px;
    padding: 50px 30px;
    color: #fff;
    outline: none;
    
    img {
        text-align: center;
        margin-block: 20px;
    }

    p {
        text-align: center;
        font-size: 14px;
        margin-top: 8px;
    }

    button {
        max-width: 60%;
        width: 100%;
        padding: 14px;
        border: none;
        border-radius: 10px;
        margin-block: 50px 20px;
        cursor: pointer;
        background: var(--red);
        color: #fff;
        font-weight: 500;
        box-shadow: #d9534f33 0px 2px 8px 0px;
    }

    a {
        text-align: center;
        cursor: pointer;
        opacity: .6;
        font-size: 13px;
    }
`

export const CreateError = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 5px;

    svg {
        min-width: 16px;
        width: 0;
        
        path {
            fill: var(--red);
        }
    }

    p {
        font-size: 13px;
        color: var(--red);
    }
`





export const ListItemsContainer = styled.main`
    width: 100%;
    height: 100dvh;
    padding: 80px;

    input {
        border: 1px solid var(--terciary);
        background-color: transparent;
        padding: 20px;
        width: 100%;
        outline: none;
        caret-color: #fff;
        border-radius: 8px;
        color: #fff;
        font-size: 15px;
        margin-top: 50px;

        & + p {
            color: white;
            text-align: center;
        }
    }
`

export const Title = styled.header`
    display: flex;
    align-items: center;
    gap: 40px;
    color: #fff;

    .date {
        text-align: center;
    }

    h2 {
        opacity: .6;
    }
`





export const CalendarContainer = styled.aside`
    max-width: 450px;
    width: 100dvw;
    height: 100dvh;
    background: #252525;
    padding: 50px;

    * {
        color: #fff !important;
    }

    .css-innj4t-MuiPickersYear-yearButton.Mui-selected {
        background: var(--primary) !important;
        color: #000 !important;
    }

    .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root.hasTask {
        background: var(--terciary);
    }

    .css-jgls56-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected) {
        border: 1px solid var(--primary);
    }

    .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root.Mui-selected,
    .css-jgls56-MuiButtonBase-root-MuiPickersDay-root.Mui-selected {
        background: var(--primary) !important;
        color: #000 !important;
    }

    .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root {
        background: transparent;
        transition: background .2s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            background: var(--hover-secondary);
            transition: background .2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
    }
`
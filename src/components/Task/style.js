import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 30px;
    border-radius: 8px;
    background-color: var(--secondary);
    margin-block: 10px;
    color: #fff;

    label {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 20px;
        width: 0;
        min-height: 20px;
        height: 0;
        border-radius: 5px;
        border: 1px solid #fff;

        &::after {
            display: ${({ done }) => done ? "block" : "none"};
            content: "";
            position: absolute;
            top: 0;
            right: -4px;
            width: 12px;
            height: 12px;
            background-color: var(--secondary);
        }

        svg {
            position: relative;
            transform: translate(3px, -1px);
            min-width: 21px;
            width: 0;
            z-index: 1;
        }
    }

    & > div {
        span {
            font-size: 12px;
            opacity: .6;
            letter-spacing: 1px;
            text-decoration: ${({ done }) => done ? "line-through" : "none"};
        }

        p {
            text-decoration: ${({ done }) => done ? "line-through" : "none"};
            opacity: ${({ done }) => done ? ".6" : "1"};
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 5px;
        background: var(--terciary);
        transition: background .2s cubic-bezier(0.075, 0.82, 0.165, 1);
        border: none;
        cursor: pointer;
        margin-left: auto;

        &:hover {
            background: var(--hover-terciary);
            transition: background .2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        svg {
            min-width: 20px;
            width: 0;
            opacity: .6;

            path {
                fill: #fff;
            }
        }
    }
`
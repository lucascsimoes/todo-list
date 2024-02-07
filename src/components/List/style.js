import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-radius: 8px;
    background: ${({ selected }) => selected ? "var(--primary)" : "transparent"};
    transition: background .2s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin-block: 5px;
    cursor: pointer;
    user-select: none;

    &:hover {
        background: ${({ selected }) => selected ? "var(--hover-primary)" : "var(--hover-secondary)"};
        transition: background .2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    p {
        font-size: 15px;
        color: ${({ selected }) => selected ? "#000" : "#fff"};
        font-weight: ${({ selected }) => selected ? "500" : "400"};
    }

    svg {
        min-width: 19px;
        width: 0;

        path {
            fill: #000;
        }
    }
`
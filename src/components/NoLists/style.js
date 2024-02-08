import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    opacity: .3;

    img {
        filter: invert(100%);
    }

    h1 {
        margin-block: 10px 5px;
    }

    h1, p {
        text-align: center;
        color: #fff;
    }
`
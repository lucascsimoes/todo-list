import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    width: 100%;
    text-align: center;
    color: #fff;
    margin: 100px auto 0;
    opacity: .4;
    user-select: none;

    img {
        filter: invert(100%);
        max-width: 150px;
        width: 100%;
        max-height: 150px;
        height: 100%;
    }

    h2 {
        margin-block: 10px 5px;
    }

    p {
        font-weight: 500;
        font-size: 14px;
    }
`
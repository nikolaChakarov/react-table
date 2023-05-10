import React from "react";
import styled from "styled-components";

const Error = ({ message }) => {
    return <ErrorWrapper>{message}</ErrorWrapper>
};

const ErrorWrapper = styled.div`
    color: red
`

export default Error;


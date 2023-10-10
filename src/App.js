import React from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Content from "./components/Container/Content";

function App(){

    return(
        <>
            <Container>
                <Header/>
                <Content />
            </Container>
        </>
    )
}

export default App
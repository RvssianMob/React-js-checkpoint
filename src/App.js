import React from "react";
import { Navbar, Nav, Card, Container} from "react-bootstrap";
import VOOM from './genco-written-as-the-main-object- (1).jpeg';
import VOOM2 from '././genco-written-as-the-main-object-.jpeg';
import VOOM3 from '././genco-written-as-the-main-object- (2).jpeg';



function App(){
    return(
        <>
        <div className="App">
            {/* Declaration of the navbar */}
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href="#home">THE SPIDER-VERSE</Navbar.Brand>
                {/* the nav inside the navbar */}
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Miles</Nav.Link>
                    <Nav.Link href="#features">Gwen</Nav.Link>
                    <Nav.Link href="#pricing">Peter</Nav.Link>
                </Nav>
            </Navbar>
            <Container>
                {/* This container contains the whole of the card */}
                <h1>The Spider Verse Is</h1>
                <div className="card-container" style = {{width :'20rem', display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>  
                        <Card className="m-3" style = {{width: '20rem', height: '25rem' }}>
                            <Card.Img className="h-30" variant="top" src={VOOM}></Card.Img>
                            <Card.Body>
                                <Card.Title>What might be in there?</Card.Title>

                                <Card.Text >Definitely not Miles Morales</Card.Text>
                            </Card.Body>
                            </Card> 
                        <Card className="m-3" style = {{width: '20rem'}}>
                        <Card.Img className="h-30" variant="top" src={VOOM2}></Card.Img>
                            <Card.Body>
                                <Card.Title>Second Card</Card.Title>
                                <Card.Text>Take a look and get lucky.</Card.Text>
                            </Card.Body>
                            </Card> 
                        <Card className="m-3" style = {{width: '20rem'}}>
                        <Card.Img className="h-30" variant="top" src={VOOM3}></Card.Img>
                            <Card.Body>
                                <Card.Title>Mega Price</Card.Title>
                                <Card.Text>Take a look inside might be worth your time.</Card.Text>
                            </Card.Body>
                        </Card>
                </div>
            </Container>
        </div>
        </>
    )
}

export default App;

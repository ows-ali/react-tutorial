import React, { useState } from 'react'
// Bootstrap for react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoFunc() {

    const [userInput, setuserInput] = useState('')
    const [list, setList] = useState([])

    // Set a user input value
    const updateInput=(value)=>{
        setuserInput(value)
        
    }

    // Add item if user input in not empty
    const addItem=()=>{
        if(userInput !== '' ){
        const userInp = {

            // Add a random id which is used to delete
            id : Math.random(),

            // Add a user value to list
            value : userInput
        };

        // Update list
        const newList = [...list];
        newList.push(userInp);

        // reset state
        setList(newList)
        setuserInput('')
        // setState({
        //     list,
        //     userInput:""
        // });
        }
    }

    // Function to delete item from list use id to delete
    const deleteItem=(key)=>{
        const list = [...list];

        // Filter values and leave value which we need to delete
        const updateList = list.filter(item => item.id !== key);

        
        setList(updateList)

    }

    return (
        <>
        <Container>

    <Row style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: '3rem',
        fontWeight: 'bolder',
        }}
        >TODO LIST
    </Row>

<hr/>
<Row>
<Col md={{ span: 5, offset: 4 }}>

<InputGroup className="mb-3">
<FormControl
    placeholder="add item . . . "
    size="lg"
    value = {userInput}
    onChange = {item => updateInput(item.target.value)}
    aria-label="add something"
    aria-describedby="basic-addon2"
/>
{/* <InputGroup.Append> */}
    <Button
    variant="dark"
    size="lg"
    onClick = {()=>addItem()}
    >
    ADD
    </Button>
{/* </InputGroup.Append> */}
</InputGroup>

</Col>
</Row>
<Row>
<Col md={{ span: 5, offset: 4 }}>
<ListGroup>
{/* map over and print items */}
{list.map(item => {return(

    <ListGroup.Item variant="dark" action
    key={item.id}
    onClick = { () => deleteItem(item.id) }>
    {item.value}
    </ListGroup.Item>

)})}
</ListGroup>
</Col>
</Row>
</Container>
        </>
  )
}

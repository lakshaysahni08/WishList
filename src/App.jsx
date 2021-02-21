import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';
import styled from "styled-components";


const mapStateToProps = (state) => {
    return (
        { wishList: state.wishList }
    )
}

const mapDispatchToProps = { addItem, deleteItem };

// outer container
const Box = styled.div`
    width: 400px;
    height: 540px;
    background-color: #FAC0CB;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content : space-around;
    border-radius: 15px;
    box-shadow: 0px 0px 15px ;
`
// display screen containing the items in the wishlist
const Display = styled.div`
    width: 75%;
    height: 50%;
    background-color: white;
    border: 1px solid black;
    box-shadow: 0px 0px 2px inset;
    overflow-y: scroll;
    padding-left: 5%;
`

// textbox to add items in the wishlist
const TextBox = styled.input`
    width: 75%;
    height: 5%;
    background-color: white;
    border: 1px solid black;
    box-shadow: 0px 0px 2px inset;
    border-radius: 5px;
`
// add and submit buttons
const Button = styled.a`
    width: ${props => props.add ? "30%" : "75%"} ;
    height: 8%;
    background-color: #91EB92;
    border: 1px solid black;
    box-shadow: 0px 0px 2px inset;
    border-radius: 5px;
    display : flex;
    align-items: center;
    justify-content : center;
    
    &:hover {
        cursor: pointer;
    }
`



const App = (props) => {
    // keeps track of the item added by the user
    const [item, setItem] = useState("");

    // adds the item
    const addItem = (item) => {
        if (item !== "" && !props.wishList.includes(item)) {
            props.addItem(item);
            setItem("");
        }
    }

    // submits the wishlist
    const submit = () => {
        props.wishList.map(item => props.deleteItem(item))
        setItem("");
        alert("Wish list submitted to Santa!");
    }

    return (
        <Box>
            <h2>MY WISHLIST</h2>
            <Display>
                {props.wishList.map(i =>
                    <p onClick={() => props.deleteItem(i)} key={i}>{i}</p>
                )}
            </Display>
            <TextBox value={item} onChange={e => setItem(e.target.value)} />
            <Button add onClick={() => addItem(item)}>Add</Button>
            <Button onClick={submit}>Submit</Button>
        </Box >
    )
}




export default connect(mapStateToProps, mapDispatchToProps)(App);

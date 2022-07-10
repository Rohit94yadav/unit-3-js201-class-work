import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteData, getData } from './api';

const Container = styled.div`
    border: 1px solid black;
    margin: 10px;
`;

export const OutAdr = ({id, flatNo, street, landmark, area, city, state, pinCode}) => {

    const handleDelete = (id)=>{
        deleteData(id)
        .then(res => {
            getData()
        })
    }
    
    return (
        <Container>
            <p>Flat No./ floor: {flatNo}</p>
            <p>Street: {street}</p>
            <p>Landmark: {landmark}</p>
            <p>Area/ Locality: {area}</p>
            <p>City, State: {`${city}, ${state}`}</p>
            <p>Pincode: {pinCode}</p>
            <Link to=" /addresses/:id/edit"><button>Edit</button></Link>
            <button onClick={()=>handleDelete(+id)} >Delete</button>
        </Container>
    )
}

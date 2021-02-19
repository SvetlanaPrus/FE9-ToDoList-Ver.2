import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input, Label} from "reactstrap";
import styled from 'styled-components';

export default function Add(props) {

    const {listProducts} = props;
    const [name, setName] = useState('')    //input - name
    const [price, setPrice] = useState('')   //input - price

    // own style
    const ListOfProductsStyle = styled.div`     
        margin-top: auto;
    `;

    return (
        <div className="container row w-auto">
            {/* CHOOSE FROM LIST OF PRODUCTS; obernuli v style, t.k.nado bilo chtob polja virovnjalis po odnoj linii*/}
            <ListOfProductsStyle>
                <h5><Label for="exampleSelect">List of products:</Label></h5>
                <Input value={name} onChange={(e) => setName(e.target.value)} type="select" name="select"
                       id="exampleSelect">

                    {listProducts.map(el => <option>{el.name}</option>)}

                </Input>
            </ListOfProductsStyle>
            {/* INPUT PRICE */}
            <div className="w-25 input-group-m ml-3 mt-auto">
                <h5><label>Price:</label></h5>
                <input placeholder="-- Write: --" className="form-control" type="number"

                       value={price} onChange={(e) => setPrice(e.target.value)}/>

            </div>

            {/* BUTTON "ADD" */}
            {name && price ?
                <button className="btn btn-m btn-primary ml-3 mt-auto"

                        onClick={() => props.add(name, price, setPrice)}>Add Item</button>

                : <button className="btn btn-m btn-primary ml-3 mt-auto"
                          disabled="true">Add Item</button>
            }
        </div>
    )
}
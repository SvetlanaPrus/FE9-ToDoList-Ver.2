import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./List";
import Add from "./Add";
import Total from "./Total";
import Milk from "./images/milk.png";

// ***Funkcional rabotaet.***
// 1.sdelat sortirovku produktov. Mozno sdelat neskolko "Input" na raznie gruppi tovarov.
// 2.razobratsja so stiljami i perenesti tekst vpravo.
// 3.razobratsja: kak zagruzat Images.
// 4.napisat kod na knopku "Edit".

function App() {

    const [itemsWishToBuy, setItemsWishToBuy] = useState([]);    //spisok produktov, chto ja hochu kupit

    const [total, setTotal] = useState(0);                       //podschet obshej summi, skolko vsego nado platit

    const listProducts = [
        {id: uuidv4(), img: '', name: "-- Choose: --"},
        {id: uuidv4(), img: {Milk}, name: "Milk"},
        {id: uuidv4(), img: '', name: "Cheese"},
        {id: uuidv4(), img: '', name: "Butter"},
        {id: uuidv4(), img: '', name: "Bread"},
        {id: uuidv4(), img: '', name: "Sour cream"},
        {id: uuidv4(), img: '', name: "Cottage cheese"}
    ];

    function add(name, price, setPrice) {
        let newList = [];
        if (itemsWishToBuy.length === 0) {
            newList = [{id: uuidv4(), name: name, price: price}];
            setTotal(+price);
        } else {
            newList = [...itemsWishToBuy, {id: uuidv4(), name: name, price: price}]
            setTotal(total + +price)
        }
        setItemsWishToBuy(newList);
        setPrice('');
    }

    function deleteItem(id, price) {
        const newList = itemsWishToBuy.filter(el => el.id !== id);
        setItemsWishToBuy(newList);
        setTotal(total - +price)
    }

    return (
        <div className="container mt-5 $red-100">
            <h1>Shop - Ver.2</h1>
            <hr/>
            <List itemsWishToBuy={itemsWishToBuy} deleteItem={deleteItem}/>
            <hr/>
            <div className="row ml-auto">
                <Add id="field" add={add} listProducts={listProducts}/>
                <Total total={total}/>
            </div>
        </div>
    )
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function List(props) {

    const header = ["Image", "Name", "Price ($)", ""];

    return (
        <table className="table table-light.bg-gradient table-striped">
            <thead>
            <tr>
                {header.map(el => <th scope="col"><h5> {el} </h5></th>)}
            </tr>
            </thead>
            <tbody>
            {props.itemsWishToBuy.map(el =>
                <tr key={el.id}>
                    <td>{el.img}</td>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <button className="btn btn-sm btn-outline-danger h-25 m-2" onClick={() => props.deleteItem(el.id, el.price)}>Delete</button>
                    <button className="btn btn-sm btn-outline-primary h-25 m-2">Edit</button>
                </tr>
            )}
            </tbody>
        </table>
    )
}
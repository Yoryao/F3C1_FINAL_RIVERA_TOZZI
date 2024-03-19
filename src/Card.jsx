import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useS } from 'react';

const Card = () => {
        const [card, setCard] = useState();
        const [productos, setProductos] = useState([])
        const url = "https://fakestoreapi.com/products";

        useEffect(() => {
                const fetchCard = async () => {
                        const response = await axios(url);
                        console.log(response.data);
                        setProductos[response.data];
                        console.log(productos)
                }
                fetchCard();
        }, []
        )
        console.log(productos)
        return (
                <div>
                        {productos.map(elemento =>
                        (
                                <h3 key={elemento.id}>{elemento.title}</h3>
                        )
                        )}
                </div>
        )
}

export default Card
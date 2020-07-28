import React, { Fragment, useEffect, useState, useContext } from "react";
import Card from "./Card";
import { GlobalContext } from "../GlobalContext";

function CardList(props) {

    const { searchText, type } = useContext(GlobalContext);

    const [pros, setPros] = useState([]);

    const getPros = async () => {
        try {
            let response = await fetch("http://localhost:4000/pros");
            const jsonData = await response.json();
            const filteredPros = jsonData.filter(pro => pro.type.toLowerCase() === type || type === "all");
            setPros(filteredPros);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getPros();
    }, [type]);

    return (
        <Fragment>
            {pros.map(pro => (
                <Card key={pro.id} name={pro.name} type={pro.type} contact_number={pro.contact_number} />
            ))}
            <div style={{ marginBottom: '30px' }} />
        </Fragment>
    )
}

export default CardList;

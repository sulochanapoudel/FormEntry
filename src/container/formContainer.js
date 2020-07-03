import React from 'react'
import axios from 'axios'

import Album from '../component/entryForm'


let entryFormContainer = () => {


    const saveData = (data) => {
        const formdata = new FormData();
        formdata.append("species", data.species)
        formdata.append("rarity", data.rarity)
        formdata.append("notes", data.notes)
        formdata.append("picture", data.picture)
        axios.post("http://localhost:5000/api/observation", formdata, {
            headers: { "Access-Control-Allow-Origin": "*" },
        })
            .then((arg) => {
                console.log("Saved Successfully");
                console.log(arg);
            })
            .catch((err) => {
                console.log("Error", err);
            })
    }


    return (
        <div>
            <Album save={saveData} />
        </div>
    )
}

export default entryFormContainer
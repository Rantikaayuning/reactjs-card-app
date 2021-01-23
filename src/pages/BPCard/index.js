import React from "react";
import Card from "../../components/Card/index.js";
import { BPName } from "../../utility/Api.js";

function BPCard() {
    return (
        <div className='card-box'>
        {Object.keys(BPName).map((item, id) => (
            <ul>
                <li>
                    <Card
                    name={BPName[item].name}
                    image={BPName[item].image}
                    stageName={BPName[item].stageName}
                    id={BPName[item].id}
                    />
                </li>
            </ul>
        ))}
        </div>
    );
}

export default BPCard;
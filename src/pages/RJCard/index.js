import React, { useState } from 'react';
import { RJ } from '../../utility/Api';
import imgRJ from '../../assets/images/rj.gif';
import Card2 from '../../components/Card/card2';

const RJBook = () => {
    const [data, setData] = useState(RJ);

    const handleAdd = () => {
        const newData = {
                id: data.length + 1,
                name: 'RJ',
                img: imgRJ,
            }
        const newArr = [...data] // spread operator and destructuring
        let result = newArr.concat(newData);
        setData(result);
    };

    const handleRemove = () => {
        const newArr = [...data];
          let result = newArr.slice(0, -1); // remove last element
        setData(result);
    };

    return (
        <div className='RJ'>
            <h1>"RJ Family"</h1>
            <div className='button'>
            <button className='add' onClick={handleAdd}>Add</button>
            <button className='remove' onClick={handleRemove}>Remove</button>
            </div>
            <div className='new-card'>
                {data.map((item, index) => (
                    <ul key={index}>
                        <li key={index}>
                            <Card2
                                name={item.name}
                                id={item.id}
                                img={item.img}
                            />
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default RJBook;
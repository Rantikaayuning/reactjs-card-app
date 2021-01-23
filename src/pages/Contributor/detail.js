import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { USER_API } from '../../utility/constant';

const ContributorDetail = () => {
    const [ user, setUser] = useState([]);
    const [ total, setTotal] = useState([0]);

    const { id } = useParams();

    useEffect(() => {
        const getData = async() => {
            const result = await axios(USER_API + id);
            setUser(result.data.data);
        };
        const getTotal = async() => {
            const result = await axios(USER_API);
            setTotal(result.data.total);
        };
        getData();
        getTotal();
    }, [id]);

    const prevID = (user.id === 1 ? total : user.id - 1);
    const nextID = (user.id === total ? 1 : user.id + 1)

    return (      
        <div className='detail-box'>
            <div className='detail-contributor'>
                <p>{user.first_name} {user.last_name}</p>
                <p><img src={user.avatar} alt={user.first_name}/></p>
                <p>{user.email}</p>
                <p>
                <Link to={`./${prevID}`}>
                        <button className='prev-next' >Prev</button>
                </Link>or 
                <Link to={`./${nextID}`}>
                    <button className='prev-next' >Next</button>
                </Link>
                </p>
            </div>
        </div>
    )
}

export default ContributorDetail;
import React from "react";
import { useParams } from "react-router-dom";
import { BPName } from "../../utility/Api";
import '../../assets/css/detail.css';
import BackButton from "../../components/BackButton";

function DetailProfile() {
  const { id } = useParams();
  return (
      <div className='profile'>
        <h4>{BPName[id].name}</h4>
        <img className='bp-profile' src={BPName[id].image} alt={BPName[id].name}/>
        <p>{BPName[id].birthday}</p>
        <p>{BPName[id].bio}</p>
        <p><BackButton /></p>
      </div>
    );
  };

export default DetailProfile;
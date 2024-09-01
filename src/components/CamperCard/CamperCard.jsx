import { FaRegHeart } from "react-icons/fa";
import Feature from "../Feature/Feature";

export default function CamperCard({ camper }) {
    const camperFeatures = Object.entries(camper).filter((entry)=> entry.includes(true))
    const featureList = camperFeatures.map((entry, index)=>{ return (<li key={index}> <Feature name ={entry[0]}/></li>)} );
  return (
    <div>
      <img></img>
      <div>
        <p>{camper.name}</p>
        <p>{camper.price}</p>
        <FaRegHeart />
      </div>
      <div>
        <span>{camper.rating}</span>
        <span>{camper.loaction}</span>
      </div>
      <ul>{featureList}</ul>
    </div>
  );
}

// "AC": true,
// "bathroom": false,
// "kitchen": true,
// "TV": false,
// "radio": true,
// "refrigerator": false,
// "microwave": false,
// "gas": false,
// "water": true,
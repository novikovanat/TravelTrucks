import { FaRegHeart } from "react-icons/fa";
import Feature from "../Feature/Feature";

export default function CamperCard({ camper }) {
    const camperFeatures = Object.entries(camper).filter((entry)=> entry.includes(true))
    const featureList = camperFeatures.map((entry, index)=><li key={index}> <Feature name ={entry[0]}/></li>);
    const [{thumb}] = camper.gallery
  return (
    <div>
      <img src={thumb}></img>
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

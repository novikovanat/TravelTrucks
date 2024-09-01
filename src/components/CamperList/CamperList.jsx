import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/selectors";
import CamperCard from "../CamperCard/CamperCard";

export default function CamperList() {
  const happyVans = useSelector(selectCampers);
  const camperList = happyVans.map((camper) => (
    <li key={camper.id}>
      <CamperCard camper={camper} />
    </li>
  ));
  return <ul>{camperList}</ul>;
}

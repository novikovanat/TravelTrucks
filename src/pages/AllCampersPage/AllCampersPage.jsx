import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCampers } from "../../redux/operations";
import CamperList from "../../components/CamperList/CamperList";

export default function AllCampersPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCampers());
  },[dispatch]);

  return <CamperList/>
}

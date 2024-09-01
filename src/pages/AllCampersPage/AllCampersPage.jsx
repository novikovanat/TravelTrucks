import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCampers } from "../../redux/operations";

export default function AllCampersPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCampers());
  },[dispatch]);

  return <h1>AllCampersPage</h1>;
}

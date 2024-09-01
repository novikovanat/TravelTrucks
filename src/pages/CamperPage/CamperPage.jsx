import { useParams } from "react-router-dom"
export default function CamperPage() {
  const {id} = useParams()
  return (
    <div>CamperPage</div>
  )
}

import { useNavigate } from "react-router"
function OrderSummary() {
    const navigate = useNavigate()
    return (
    <div>
      <h1> Order Summary Page </h1>
      <button onClick={() => navigate(-1)}> Go back </button>
    </div>
  );
}
export default OrderSummary;

import { useParams } from "react-router";

function OneUser() {
  const {userId} = useParams();
  return <div>OneUser {userId}</div>;
}

export default OneUser;

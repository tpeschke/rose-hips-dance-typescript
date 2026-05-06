import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationNoClass() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/classes/registration/no-class");
  }, [])

  return <div></div>;
}

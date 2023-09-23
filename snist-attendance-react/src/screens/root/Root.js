import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";

export default function Root() {
  const navigate = useNavigate();
  const sessionData = useSelector((state) => state.session);

  React.useEffect(() => {
    if (
      sessionData.data &&
      sessionData.loading === false &&
      sessionData.data.success === true
    ) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [sessionData]);

  return <></>;
}

import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PATH_URIS, ROLES } from "../../constants";
import { getUserRole } from "../../store/selectors";

const PrivateRoute = ({ children }) => {
  const userRole = useSelector(getUserRole);

  if (userRole !== ROLES.ADMIN) {
    return <Navigate to={PATH_URIS.COURSES_LIST} />;
  }

  return children;
};

export default PrivateRoute;

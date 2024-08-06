import React from "react";
import PropTypes from "prop-types";
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

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;

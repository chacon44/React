import React from "react";
import { useSelector } from "react-redux";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";
import { PATH_URIS, ROLES } from "../../constants";
import { BUTTON_TEXT, MESSAGE } from "./emptyCourseListStrings";
import { BUTTON_TYPE } from "../../common/Button/buttonStrings";
import { getUserRole } from "../../store/selectors";

const EmptyCourseList = () => {
  const userRole = useSelector(getUserRole);

  return (
    <div className="empty-course-list">
      <h2>{MESSAGE.EMPTY_LIST}</h2>
      {userRole === ROLES.ADMIN ? (
        <>
          <Link to={PATH_URIS.ADD_COURSE}>
            <Button
              buttonText={BUTTON_TEXT.ADD_COURSE}
              type={BUTTON_TYPE.BUTTON}
            ></Button>
          </Link>
        </>
      ) : (
        <p>{MESSAGE.NO_PERMISSION}</p>
      )}
    </div>
  );
};

export default EmptyCourseList;

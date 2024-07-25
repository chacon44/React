import React from "react";
import { useSelector } from "react-redux";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import { PATH_URIS, ROLES } from "../../constants";
import { BUTTON_TEXT, MESSAGE } from "./emptyCourseListStrings";
import { BUTTON_TYPE } from "../../common/Button/buttonStrings";
import { getUserRole } from "../../store/selectors";

const EmptyCourseList = () => {
  const navigate = useNavigate();
  const userRole = useSelector(getUserRole);
  const handleAddCourse = () => {
    navigate(PATH_URIS.ADD_COURSE);
  };

  return (
    <div className="empty-course-list">
      <h2>{MESSAGE.EMPTY_LIST}</h2>
      {userRole === ROLES.ADMIN ? (
        <>
          <Button
            buttonText={BUTTON_TEXT.ADD_COURSE}
            type={BUTTON_TYPE.BUTTON}
            onClick={handleAddCourse}
          ></Button>
        </>
      ) : (
        <p>{MESSAGE.NO_PERMISSION}</p>
      )}
    </div>
  );
};

export default EmptyCourseList;

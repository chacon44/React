import { v4 as uuidv4 } from "uuid";
import { MESSAGES } from "../../../helpers/constants";
import { PARAMETERS } from "../../../helpers/parameters";

export const CreateNewCourse = (
  title,
  description,
  duration,
  courseAuthors,
  addCourse,
  onCourseCreated,
) => {
  if (
    !title.trim() ||
    description.trim().length < PARAMETERS.DESCRIPTION_MIN_LENGTH ||
    isNaN(Number(duration)) ||
    Number(duration) <= 0 ||
    courseAuthors.length === 0
  ) {
    alert(MESSAGES.NOT_VALID_COURSE);
    return;
  }
  const newCourse = {
    id: uuidv4(),
    title,
    description,
    creationDate: new Date().toISOString().split("T")[0],
    duration: Number(duration),
    authors: courseAuthors.map((author) => author.id),
  };
  addCourse(newCourse);
  onCourseCreated();
};

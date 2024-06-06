import { v4 as uuidv4 } from "uuid";
import { MESSAGES } from "../../../helpers/constants";
import { PARAMETERS } from "../../../helpers/parameters";

export const CreateAuthor = (
  newAuthorName,
  authors,
  addAuthor,
  setNewAuthorName,
) => {
  if (
    !newAuthorName.trim() ||
    newAuthorName.trim().length < PARAMETERS.AUTHOR_MIN_LENGTH
  ) {
    alert(MESSAGES.AUTHOR_NOT_VALID(PARAMETERS.AUTHOR_MIN_LENGTH));
    return;
  }

  const existingAuthor = authors.find(
    (author) => author.name.toLowerCase() === newAuthorName.toLowerCase(),
  );
  if (existingAuthor) {
    alert(MESSAGES.DUPLICATED_AUTHOR);
    return;
  }

  const newAuthor = { id: uuidv4(), name: newAuthorName };
  addAuthor(newAuthor);
  setNewAuthorName("");
};

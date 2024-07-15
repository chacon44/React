import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAuthors } from "../store/authors/actions";
import { getAuthorsAPI } from "../services";

export default function useGetAuthors(authorsIdArray) {
  const dispatch = useDispatch();
  const authorsList = useSelector((state) => state.authorReducer || []);

  useEffect(() => {
    if (authorsList.length === 0) {
      getAuthorsAPI().then((data) => {
        console.log("Fetched authors from API:", data.result);
        dispatch(getAuthors(data.result));
      });
    }
  }, [authorsList.length, dispatch]);

  console.log("Authors list from state:", authorsList);
  console.log("Authors ID array:", authorsIdArray); 

  const authorsArray = [];

  authorsIdArray.forEach((authorId) =>
    authorsList.forEach((author) => {
      if (author.id === authorId) {
        authorsArray.push(author.name);
      }
    }),
  );

  console.log("Resolved authors array:", authorsArray);

  return authorsArray;
}

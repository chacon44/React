import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAuthorsAPI } from "../services";
import { useDispatch } from "react-redux";
import { getAuthors } from "../store/authors/actions";
import { CREATED_AUTHORS } from "../constants";
const useCombinedAuthors = () => {
  const authorsListStore = useSelector((state) => state.authorsReducer || []);
  const [availabeAuthorsList, setAvailableAuthorsList] =
    useState(authorsListStore);
  const dispatch = useDispatch();

  useEffect(() => {
    getAuthorsAPI().then((data) => {
      dispatch(getAuthors(data.result));
      setAvailableAuthorsList(data.result);
    });
  }, [dispatch]);

  const authorsListLocalStorage =
    JSON.parse(localStorage.getItem(CREATED_AUTHORS)) || [];

  const combinedAuthorsList = [
    ...availabeAuthorsList,
    ...authorsListLocalStorage,
  ];

  return combinedAuthorsList;
};

export default useCombinedAuthors;

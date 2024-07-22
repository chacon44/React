import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthors } from "../store/authors/actions";

const useCombinedAuthors = () => {
  const authorsListStore = useSelector(
    (state) =>
      state.authors.apiAuthors.concat(state.authors.localAuthors) || [],
  );
  const dispatch = useDispatch();
  const fetchAuthors = async () => {
    dispatch(getAuthors());
  };
  useEffect(() => {
    fetchAuthors();
  }, [dispatch]);

  return authorsListStore;
};

export default useCombinedAuthors;

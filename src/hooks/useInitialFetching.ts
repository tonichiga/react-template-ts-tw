import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";

const useInitialFetching = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(userOperations.fetchUser());
  }, [dispatch]);
};

export default useInitialFetching;

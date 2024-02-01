import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showStoreActions, fetchStatusActions } from "../store";

function FetchData() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    const timeoutId = setTimeout(() => {
      fetch("https://api.tvmaze.com/search/shows?q=all", { signal })
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchStatusActions.markFetchDone());
          dispatch(fetchStatusActions.markFetchingFinished());
          dispatch(showStoreActions.addData(data));
        });

      return () => {
        controller.abort();
      };
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);
  return <></>;
}

export default FetchData;

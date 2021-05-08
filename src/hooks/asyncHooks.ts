import { useEffect, useReducer } from "react";

const initialState = {
  results: [],
  loading: false,
  error: "",
};

function reducer(state = initialState, type: any) {
  switch (type.action) {
    case "fetchStarted":
      return { ...state, loading: true };

    case "fetchSucceeded":
      return { ...state, loading: false, results: type.payload };

    case "fetchFailed":
      return { ...state, loading: false, error: type.payload };

    default:
      return state;
  }
}

export function useGiphy(query = "") {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ action: "fetchStarted" });

        const uri = `https://api.giphy.com/v1/gifs/search`;
        const apiKey = `UJ83DtolXtUKIIxr6yo1uPK3JGCw32Zp`;
        const defaultQs = `&limit=10&offset=0&rating=G&lang=en`;
        const reqInfo = `${uri}?api_key=${apiKey}&q=${query}${defaultQs}`;

        const response = await fetch(reqInfo);
        const json = await response.json();

        console.log({ json });

        const data =
          Array.isArray(json.data) &&
          json.data.map((item) => item.images.preview.mp4);
        dispatch({
          action: "fetchSucceeded",
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (query !== "") {
      fetchData();
    }
  }, [query]);

  return [state.results, state.loading];
}

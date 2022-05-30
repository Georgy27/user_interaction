import { useCallback, useState } from "react";
import {
  fetchUsersFailure,
  fetchUsersRequest,
} from "../store/action-creators/userActions";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);

      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
        setLoading(false);
        setError(null);
        return data;
      } catch (e) {
        // dispatch(fetchUsersFailure(e));
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setLoading("loading");
  }, []);

  return {
    request,
    clearError,
    loading,
    error,
  };
};

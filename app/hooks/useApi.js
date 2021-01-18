import { useState } from "react";

export default (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };
  return { data, loading, error, request };
};

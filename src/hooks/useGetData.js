import { useState } from 'react';

export function useGetData() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function getData({ route, mode, method = 'GET', body, headers = {} }) {
    setLoading(true);
    try {
      const response = await fetch(`${route}`, {
        mode,
        method,
        headers,
        body,
      });
      
      if (response.ok) {
        const responseAsJson = await response.json();
        
        setData(responseAsJson);
      } else {
        setError(new Error(`${response.status}: ${response.statusText}`));
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return { getData, data, error, loading };
}

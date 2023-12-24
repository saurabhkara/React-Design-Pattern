import { useEffect, useState } from "react";

function useApicall() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) =>
        setTimeout(() => {
          setIsLoading(false);
          setData(json);
        }, 2000)
      );
  }, []);
  return { data, isLoading };
}

export default useApicall;

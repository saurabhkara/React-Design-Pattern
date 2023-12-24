import React from "react";
import useApicall from "./useApicall";

export default function Hooks() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://fakestoreapi.com/products/1")
  //       .then((res) => res.json())
  //       .then((json) =>
  //         setTimeout(() => {
  //           setIsLoading(false);
  //           setData(json);
  //         }, 2000)
  //       );
  //   }, []);

  const { isLoading, data } = useApicall();
  if (isLoading) {
    return <h4>Loading.....</h4>;
  }
  return (
    <div>
      <p>{data?.title}</p>
      <p>{data?.price}</p>
      <p>{data?.category}</p>
      <p>{data?.description}</p>
    </div>
  );
}

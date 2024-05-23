import { useState, useEffect } from "react";
import RenderJoke from "./RenderJoke";
export default function FetchData() {
  const [getJoke, setGetJoke] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(`https://v2.jokeapi.dev/joke/Any`);
    const data = await response.json();

    setGetJoke(data);
  }

  return (
    <>
      <RenderJoke data={getJoke} />
    </>
  );
}

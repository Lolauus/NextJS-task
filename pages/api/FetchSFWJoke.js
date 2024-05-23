import RenderSFWJoke from "./RenderSFWJoke";
import { useState, useEffect } from "react";
export default function FetchSFWJokeData() {
  const [getSFWJoke, setGetSFWJoke] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      `https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,political,racist,sexist,explicit`
    );
    const data = await response.json();

    setGetSFWJoke(data);
  }

  return (
    <>
      <RenderSFWJoke data={getSFWJoke} />
    </>
  );
}

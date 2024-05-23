import FetchSFWJoke from "./api/FetchSFWJoke";
import FetchAnyJoke from "./api/FetchAnyJoke";
export default function Home() {
  return (
    <main>
      <div>
        <FetchSFWJoke />
        <FetchAnyJoke />
      </div>
    </main>
  );
}

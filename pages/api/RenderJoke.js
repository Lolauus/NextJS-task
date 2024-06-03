export default function RenderJoke({ data }) {
  const NestedProp = data?.type;
  if (NestedProp === "twopart") {
    return (
      <div aria-label="twopart-label">
        Category:
        <div>{JSON.stringify(data.category)}</div>
        Setup:
        <div>{JSON.stringify(data.setup)}</div>
        Punchline:
        <div>{JSON.stringify(data.delivery)}</div>
      </div>
    );
  } else if (NestedProp === "single")
    return (
      <div>
        Category:
        <div>{JSON.stringify(data.category)}</div>
        One liner:
        <div aria-label="oneliner">{JSON.stringify(data.joke)}</div>
      </div>
    );
}

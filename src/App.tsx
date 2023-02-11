import { useFetch } from "~/hooks";

const App = () => {
  const [data] = useFetch("api/me");

  console.log({ data });

  return <div>App</div>;
};

export default App;

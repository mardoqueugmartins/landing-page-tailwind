import { Button } from "./components/Button";

function App() {
  return (
    <>
      <h1 className="text-red-500 bg-slate-800 font-bold p-4">Olá, Mundo!</h1>
      <Button>Primary Background</Button>
      <Button variant="secondary">Secondary Background</Button>
      <Button isBold>Bold Text With Primary Background</Button>
      <Button isBold variant="secondary">
        Bold Text
      </Button>
    </>
  );
}

export default App;

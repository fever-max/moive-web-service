import Button from "./Button";
import style from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={style.title}>TEST</h1>
      <Button text={"OK"} />
    </div>
  );
}

export default App;

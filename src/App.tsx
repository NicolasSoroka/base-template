import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full bg-white">
        Click on the Vite and React logos to learn more
      </div>
    </>
  );
}

export default App;

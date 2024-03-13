import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

import "./index.css";
import Test from "./Test";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      {/* <ThemeSwitcher /> */}
      <Test />
    </PrimeReactProvider>
  </React.StrictMode>,
);




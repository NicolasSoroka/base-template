import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { router } from "src/routes/router";

import "./index.css";
import { twMerge } from "tailwind-merge";

import { RouterProvider } from "react-router-dom";
import ReactQueryProvider from "./providers/react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <PrimeReactProvider
        value={{
          unstyled: true,
          pt: Tailwind,
          ptOptions: {
            mergeSections: true,
            mergeProps: true,
            classNameMergeFunction: twMerge,
          },
        }}
      >
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </ReactQueryProvider>
  </React.StrictMode>,
);

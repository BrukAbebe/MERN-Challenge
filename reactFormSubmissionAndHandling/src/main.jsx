import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);

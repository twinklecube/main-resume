import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/app/app.tsx";
import {GlobalStyles} from "./components/global-style/GlobalStyle.tsx";
import ContextProvider from "./store/ContextProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
      <ContextProvider>
        <App />
      </ContextProvider>
  </StrictMode>,
)

import { createRoot } from "react-dom/client";
import App from './App';

const root = document.querySelector(".root");
const rootInstance = createRoot(root);

rootInstance.render(<App />);
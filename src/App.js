import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <AllRoutes />
        <Footer />
      </header>
    </div>
  );
}

export default App;

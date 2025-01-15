import "./App.css";
import Home from "./apps/page";
import { StudentApiProvider } from "./hooks/useStudentApi";

function App() {
  return (
    <StudentApiProvider>
      <div>
        <Home />
      </div>
    </StudentApiProvider>
  );
}

export default App;

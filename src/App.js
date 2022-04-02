import Routes from "./components/Routes";
import {AuthProvider} from "./Provider/AuthProvider";

function App() {
  return (
      <AuthProvider>
        <Routes/>
      </AuthProvider>
  );
}

export default App;

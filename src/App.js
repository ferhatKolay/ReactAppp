import AppRouter from "./router/AppRouter";
import { ToastContainer } from 'react-toastify';



function App() {
    return (
        <div className="App">
            <AppRouter/>
            <ToastContainer/>
        </div>
    );
}

export default App;

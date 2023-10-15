import './App.css'
import AppProvider from './provider/App'
import Approuter from "./routes/Approuter.tsx";


function App() {

  return (
        <AppProvider>
            <Approuter/>
        </AppProvider>
  )
}

export default App

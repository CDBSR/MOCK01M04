import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ChakraProvider } from './components/ui/provider'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import './index.css'
import App from './App.jsx'
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ChakraProvider>
    </Provider>


  </StrictMode>,
)

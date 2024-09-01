import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './components/App/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Provider store ={store}> */}
        <App/>
      {/* </Provider> */}
    </BrowserRouter>
  </StrictMode>
)

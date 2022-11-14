import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/routes'

import THEME from './styles/theme'

import './styles/global.css'
import { StationList } from './pages/StationList'

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        {/*<Routes />*/}
        <StationList />
      </BrowserRouter>
    </ThemeProvider>
  )
}

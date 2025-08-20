import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/Router'
import { ThemeProvider } from './components/ThemeProvider'
import { getBasename } from './src/utils/env'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={getBasename()}>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}
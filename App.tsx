import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/Router'
import { ThemeProvider } from './components/ThemeProvider'
import { ScrollToTop } from './components/ScrollToTop'
import { getBasename } from './src/utils/env'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={getBasename()}>
        <ScrollToTop />
        <main id="main-content" role="main">
          <AppRouter />
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}
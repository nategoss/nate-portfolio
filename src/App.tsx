import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '../components/Router'
import { ThemeProvider } from '../components/ThemeProvider'
import { ScrollToTop } from '../components/ScrollToTop'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <main id="main-content" role="main">
          <AppRouter />
        </main>
      </BrowserRouter>
    </ThemeProvider>
  )
}
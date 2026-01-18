import { BrowserRouter as Router } from 'react-router'
import './styles'
import AppRouter from '@/app/routing'

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App

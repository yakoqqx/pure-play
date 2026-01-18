import { Route, Routes } from 'react-router'
import MainPage from '@/pages/MainPage'
import StatPage from '@/pages/StatPage'
import NotFoundPage from '@/pages/NotFoundPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/statistics" element={<StatPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRouter
import { Route, Routes } from 'react-router';
import { routes } from '@/app/routing/routesConfig';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  )
}

export default AppRouter
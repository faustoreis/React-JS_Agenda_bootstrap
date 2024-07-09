import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Tabela } from '../pages/tabela';
import { Adicionar } from '../pages/adicionar';
import { Editar } from '../pages/editar';
import { Excluir } from '../pages/excluir';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Tabela />,
    },
    {
      path: '/add',
      element: <Adicionar />,
    },
    {
      path: '/edit/:id',
      element: <Editar />,
    },
    {
      path: '/delete/:id',
      element: <Excluir />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;

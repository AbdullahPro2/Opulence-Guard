import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Registration from './features/User/Registration';
import About from './ui/About';
import Transaction from './features/Transaction/Transaction';
import Products from './ui/Products';
import Contact from './ui/Contact';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/Opulence-Guard/',
        element: <Home />,
      },
      {
        path: '/Opulence-Guard/app',
        element: <Transaction />,
      },
      {
        path: '/Opulence-Guard/registration',
        element: <Registration />,
      },
      {
        path: '/Opulence-Guard/about',
        element: <About />,
      },
      {
        path: '/Opulence-Guard/products',
        element: <Products />,
      },
      {
        path: '/Opulence-Guard/contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

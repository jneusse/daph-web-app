import './sass/app.scss'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import 'moment/locale/es'
import { Home, Message, MyLove, Charlandito, Propuesta } from './routes'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/para-mi-amor',
      element: <MyLove />
    },
    {
      path: 'un-mensaje-para-ti/:messageId',
      loader: ({ params }) => ({ messageId: params.messageId }),
      element: <Message />
    },
    {
      path: 'charlandito',
      element: <Charlandito />
    },
    {
      path: 'dont-open',
      loader: ({ params }) => ({ messageId: params.messageId }),
      element: <Propuesta />
    },
    {
      path: '*',
      loader: () => redirect('/')
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

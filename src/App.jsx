import { ArrowDown, Minus } from 'lucide-react'
import './App.css'
import { Suspense, lazy } from 'react'
import { Toaster } from 'react-hot-toast'

// Dynamically import the components
const NavLink = lazy(() => import('./components/NavLink'))
const Cursor = lazy(() => import('./components/pages/Cursor'))

function App() {
  return (
    <>
      <Suspense 
        fallback={
          <div className='flex justify-center items-center h-[100vh] '>
            <span>
            <ArrowDown className='animate-bounce h-[10vh] w-[10vw]'/>
            <Minus className='h-[10vh] w-[10vw]' />
            </span>
          </div>
        }
      >
         <Toaster position="top-center" reverseOrder={false} />
        <NavLink />
        <Cursor />
      </Suspense>
    </>
  )
}

export default App

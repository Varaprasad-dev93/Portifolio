import './App.css'
import { Canvas} from '@react-three/fiber'
import NavLink from './components/NavLink'
import Cursor from './components/pages/Cursor'
import { Suspense } from 'react'
function App() {
  return (
    <>
      <Suspense fallback={15}>
      <NavLink/>
      <Cursor/>
      </Suspense>
    </>
  )
}

export default App

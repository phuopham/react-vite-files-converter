import Dropzone from "./components/dropzone"
import Home from "./components/home"
import Navbar from "./components/navbar"
import { Toaster } from "./components/ui/toaster"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <main className="pt-16 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
        <Dropzone />
      </main>
      <Toaster />
    </>
  )
}

export default App

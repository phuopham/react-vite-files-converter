import Dropzone from "./components/dropzone"
import Home from "./components/home"
import { Navbar } from "./components/navbar"
import { Toaster } from "./components/ui/toaster"

function App() {

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen lg:pt-36 container m-auto">
        <Home />
        <Dropzone />
        <div className="mt-16 pb-2 text-center text-sm text-slate-400">
          @2023 Created by Phuopham.com
        </div>
      </main>
      <Toaster />
    </>
  )
}

export default App

import { Navbar, Welcome, Services, Transactions, Features, Footer } from "./components"

const App = () => {

  return (
    <div className="min-h-screen w-full-max">

      <Navbar />
      <Welcome />
      <Transactions />
      <Features />
      <Services />
      <Footer />
    </div>
  )
}

export default App

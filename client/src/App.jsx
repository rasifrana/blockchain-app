import { Navbar, Welcome, Services, Transactions, Features, Numbers, Footer } from "./components"

const App = () => {

  return (
    <div className="min-h-screen w-full-max">

      <Navbar />
      <Welcome />
      <Transactions />
      <Features />
      <Numbers />
      <Services />
      <Footer />

    </div>
  )
}

export default App

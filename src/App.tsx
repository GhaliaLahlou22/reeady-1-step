import '@fontsource/montserrat'
import LoanCard from './components/LoanCard'
import LoanForm from './components/LoanForm'
import LoanManagement from './components/LoanManagement'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0f2a20] text-[#d7c068] flex flex-col items-center justify-center font-[Montserrat]">
      <h1 className="text-3xl font-bold mb-8">
        Bienvenue sur le simulateur de prêt !
      </h1>

      <div className="space-y-4">
        <Link
          to="/loan-card"
          className="block bg-[#285944] p-3 rounded-xl text-center transition"
        >
          Simuler une mensualité
        </Link>
        <Link
          to="/loan-form"
          className="block bg-[#285944] p-3 rounded-xl text-center  transition"
        >
          Faire une demande de prêt
        </Link>
        <Link
          to="/loan-management"
          className="block bg-[#285944] p-3 rounded-xl text-center transition"
        >
          Gestion des prêts
        </Link>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loan-card" element={<LoanCard />} />
        <Route path="/loan-form" element={<LoanForm />} />
        <Route path="/loan-management" element={<LoanManagement />} />
      </Routes>
    </Router>
  )
}

export default App

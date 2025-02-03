import { useState } from 'react'

const LoanCard = () => {
  const [loanAmount, setLoanAmount] = useState(2000)
  const [interestRates, setInterestRates] = useState(3.5)
  const [loanDuration, setLoanDuration] = useState(1)

  const calculerMensualite = (
    loanAmount: number,
    interestRates: number,
    loanDuration: number
  ) => {
    const loanDurationInMonths = loanDuration * 12
    const monthlyInterestRate = interestRates / 100 / 12
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - (1 + monthlyInterestRate) ** -loanDurationInMonths)
    return monthlyPayment
  }
  const monthlyPayment = calculerMensualite(
    loanAmount,
    interestRates,
    loanDuration
  ).toFixed(2)

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#12372A]">
      <div className="max-w-md mx-auto p-6 bg-[#2a8162] rounded-2xl shadow-md space-y-4 text-[#F5C518]">
        <h2 className="text-xl font-bold text-center">Calcul de mensualité</h2>
        <div>
          <label>Montant du prêt (€): </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full p-1 border rounded bg-transparent text-white border-[#F5C518]"
          ></input>
        </div>

        <div>
          <label>Taux d'intérêt (%) : </label>
          <input
            type="number"
            value={interestRates}
            onChange={(e) => setInterestRates(Number(e.target.value))}
            className="w-full p-1 border rounded bg-transparent text-white border-[#F5C518]"
          ></input>
        </div>
        <div>
          <label>Durée du prêt (Année) : </label>
          <input
            type="number"
            value={loanDuration}
            onChange={(e) => setLoanDuration(Number(e.target.value))}
            className="w-full p-1 border rounded bg-transparent text-white border-[#F5C518]"
          ></input>
        </div>
        <div>
          <p className="text-center">Mensualité : {monthlyPayment} €</p>
        </div>
      </div>
    </div>
  )
}

export default LoanCard

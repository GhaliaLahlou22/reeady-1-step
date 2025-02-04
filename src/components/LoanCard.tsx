import { useState } from 'react'
import clsx from 'clsx'
const LoanCard = () => {
  const [loanAmount, setLoanAmount] = useState(2000)
  const [interestRates, setInterestRates] = useState(3.5)
  const [loanDuration, setLoanDuration] = useState(1)

  const [errors, setErrors] = useState({
    loanAmount: '',
    interestRates: '',
    loanDuration: ''
  })

  const validateInput = (name: string, value: number) => {
    if (value <= 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'La valeur doit être supérieure à 0'
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ''
      }))
    }
  }

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

  const hasErrors = Object.values(errors).some((error) => error !== '')

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f2a20] font-[Montserrat] ">
      <div className="max-w-md mx-auto p-6 bg-[#285944] rounded-2xl shadow-md space-y-4 text-[#d7c068]">
        <h2 className="text-xl font-bold text-center ">Calcul de mensualité</h2>
        <div>
          <label>Montant du prêt (€): </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => {
              const amountVal = Number(e.target.value)
              setLoanAmount(amountVal)
              validateInput('loanAmount', amountVal)
            }}
            className="w-full p-1 border rounded bg-transparent text-white border-[#d7c068]"
          ></input>
          {errors.loanAmount && (
            <p className="text-red-500">{errors.loanAmount}</p>
          )}
        </div>

        <div>
          <label>Taux d'intérêt (%) : </label>
          <input
            type="number"
            value={interestRates}
            onChange={(e) => {
              const interestVal = Number(e.target.value)
              setInterestRates(interestVal)
              validateInput('interestRates', interestVal)
            }}
            className="w-full p-1 border rounded bg-transparent text-white border-[#d7c068]"
          ></input>
          {errors.interestRates && (
            <p className="text-red-500">{errors.interestRates}</p>
          )}
        </div>
        <div>
          <label>Durée du prêt (Année) : </label>
          <input
            type="number"
            value={loanDuration}
            onChange={(e) => {
              const durationVal = Number(e.target.value)
              setLoanDuration(durationVal)
              validateInput('loanDuration', durationVal)
            }}
            className="w-full p-1 border rounded bg-transparent text-white border-[#d7c068]"
          ></input>
          {errors.loanDuration && (
            <p className="text-red-500">{errors.loanDuration}</p>
          )}
        </div>
        {!hasErrors && (
          <div>
            <p
              className={clsx('text-center font-bold', {
                'text-red-500': Number(monthlyPayment) > 10000
              })}
            >
              Mensualité : {monthlyPayment} €
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoanCard

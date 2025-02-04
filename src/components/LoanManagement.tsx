import { CheckCircle, XCircle } from 'lucide-react'
import clsx from 'clsx'
import { loans } from '../data/loansStatusInfo'

const LoanManagement = () => {
  return (
    <div className="min-h-screen bg-[#0f2a20] text-[#d7c068] p-6 font-[Montserrat] flex justify-center">
      <div className="max-w-3xl w-full bg-[#285944] p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Gestion des prêts
        </h2>

        <div className="grid gap-4">
          {loans.map((loan) => (
            <div
              key={loan.id}
              className="p-4 bg-[#1e4533] rounded-lg flex justify-between items-center transition-transform transform hover:scale-105 hover:bg-opacity-30"
            >
              <div>
                <p className="text-lg font-semibold">
                  Montant: {loan.amount} €
                </p>
                <p className="text-sm">Durée: {loan.duration} ans</p>
                <p className="text-sm">Taux: {loan.rate} %</p>
              </div>

              <div
                className={clsx(
                  'flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium',
                  loan.status === 'Approuvé' && 'bg-green-600 text-white',
                  loan.status === 'En attente' && 'bg-yellow-500 text-black',
                  loan.status === 'Rejeté' && 'bg-red-500 text-white'
                )}
              >
                {loan.status === 'Approuvé' && <CheckCircle size={18} />}
                {loan.status === 'Rejeté' && <XCircle size={18} />}
                <span>{loan.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoanManagement

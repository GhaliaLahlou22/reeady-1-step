import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { LoanData } from '../type/LoanRequestType'

const loanSchema = yup.object().shape({
  name: yup
    .string()
    .required('Le nom est requis')
    .min(3, 'Le nom doit contenir au moins 3 caractères'),
  email: yup.string().email('Email invalide').required("L'email est requis"),
  loanAmount: yup
    .number()
    .typeError('Le montant doit être un nombre')
    .positive('Le montant doit être supérieur à 0')
    .required('Le montant est requis'),
  loanDuration: yup
    .number()
    .typeError('La durée doit être un nombre')
    .positive('La durée doit être supérieure à 0')
    .integer('La durée doit être un nombre entier')
    .required('La durée est requise'),
  monthlyIncome: yup
    .number()
    .typeError('Le revenu doit être un nombre')
    .positive('Le revenu doit être supérieur à 0')
    .required('Le revenu mensuel est requis')
})

const LoanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<LoanData>({
    resolver: yupResolver(loanSchema),
    mode: 'onChange'
  })

  const onSubmit = (data: LoanData) => {
    console.log('submited data :', data)
    alert('Votre demande de prêt a été soumise avec succès !')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f2a20] text-[#d7c068] font-[Montserrat]">
      <div className="bg-[#285944] p-6 rounded-2xl shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold text-center mb-4">
          Demande de Prêt Immobilier
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Nom :</label>
            <input
              type="text"
              {...register('name')}
              className="w-full p-2 border rounded bg-transparent text-white border-[#d7c068]"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label>Email :</label>
            <input
              type="email"
              {...register('email')}
              className="w-full p-2 border rounded bg-transparent text-white border-[#d7c068]"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label>Montant du prêt (€) :</label>
            <input
              type="number"
              {...register('loanAmount')}
              className="w-full p-2 border rounded bg-transparent text-white border-[#d7c068]"
            />
            {errors.loanAmount && (
              <p className="text-red-500">{errors.loanAmount.message}</p>
            )}
          </div>

          <div>
            <label>Durée du prêt (années) :</label>
            <input
              type="number"
              {...register('loanDuration')}
              className="w-full p-2 border rounded bg-transparent text-white border-[#d7c068]"
            />
            {errors.loanDuration && (
              <p className="text-red-500">{errors.loanDuration.message}</p>
            )}
          </div>

          <div>
            <label>Revenus mensuels (€) :</label>
            <input
              type="number"
              {...register('monthlyIncome')}
              className="w-full p-2 border rounded bg-transparent text-white border-[#d7c068]"
            />
            {errors.monthlyIncome && (
              <p className="text-red-500">{errors.monthlyIncome.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full px-6 py-3 font-bold rounded-lg transition ${
              isValid
                ? 'bg-[#d7c068] text-black hover:bg-[#bca35a]'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Soumettre
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoanForm

import SideBanner from '../components/sideBanner'
import SignUpForm from '../components/signUpForm'

function signUpPage() {
  return (
    <div className='flex flex-1'>
        <SideBanner />
        <SignUpForm />
    </div>
  )
}

export default signUpPage
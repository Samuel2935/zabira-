import React from 'react';
import SignUpWithGoogleForm from '../components/signUpWithGoogleForm';
import SignUpWithEmailForm from '../components/signUpWithEmailForm';

export default function Page() {
    return (
        <div className='flex flex-1'> 
        <SignUpWithGoogleForm />
        {/* <SignUpWithEmailForm /> */}
        </div>
    );
}
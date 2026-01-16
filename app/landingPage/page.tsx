"use client";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";  
import SignUpWithEmailForm from '@/app/emailForm/signUpWithEmailForm';
// import SignUpWithGoogleForm from '@/components/ui/signUpWithGoogleForm';

export default function Page() {

  return (
    <div className="flex flex-1">
        <SignUpWithEmailForm />
    </div>
  );
}

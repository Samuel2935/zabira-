import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Form: React.FC = () => {
  return (
    <div className="h-auto flex flex-col  px-4 sm:px-6 flex-1 justify-center">
      {/* Form */}
      <form
        className="
          flex flex-col gap-4
          w-full
          max-w-[500px]
          mx-auto
          bg-white
          p-4 sm:p-6
          rounded-md
          mt-6
        "
      >
        {/* Header */}
        <p className="text-[#1A1A1A] font-bold text-[20px] sm:text-[24px] text-center">
          Create Account in 2 minutes
        </p>

        {/* Info placeholder */}
        <div className="h-12 bg-blue-500 rounded-md w-full" />

        {/* Email */}
        <div className="p-2 border border-[#E1E1E2] rounded-md">
          <label className="text-[#1A1A1AB2] text-[14px]">Email</label>
          <div className="flex items-center gap-2 mt-1">
            <Image src="/gmail.svg" width={20} height={20} alt="email" />
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent outline-none w-full text-[#1A1A1A5C] text-[16px]"
            />
          </div>
        </div>

        {/* Password */}
        <div className="p-2 border border-[#E1E1E2] rounded-md">
          <label className="text-[#1A1A1AB2] text-[14px]">Password</label>
          <div className="flex items-center gap-2 mt-1">
            <Image src="/lock.svg" width={20} height={20} alt="lock" />
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-transparent outline-none w-full text-[#1A1A1A5C] text-[16px]"
            />
            <Image
              src="/eye.svg"
              width={20}
              height={20}
              alt="toggle visibility"
            />
          </div>
        </div>

        {/* Referral */}
        <div className="p-2 border border-[#E1E1E2] rounded-md">
          <label className="text-[#1A1A1AB2] text-[14px]">
            Referral code (optional)
          </label>
          <div className="flex items-center gap-2 mt-1">
            <Image src="/community.svg" width={20} height={20} alt="referral" />
            <input
              type="text"
              placeholder="Enter Referral Code"
              className="bg-transparent outline-none w-full text-[#1A1A1A5C] text-[16px]"
            />
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-1" />
          <p className="text-[#1A1A1A5C] text-[13px] sm:text-[14px] leading-snug">
            By clicking ‘Sign Up’, I agree to Zabira’s{" "}
            <span className="text-blue-700 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-700 cursor-pointer">Privacy Policy</span>
            .
          </p>
        </div>

        {/* Sign Up */}
        <Button
          disabled
          className="w-full bg-[#F4F4F5] text-[#1A1A1A2E] cursor-not-allowed border border-[#E1E1E2]"
        >
          Sign Up
        </Button>

        {/* Divider */}
        <p className="text-center text-[#1A1A1AB2] text-[14px]">
          Or continue with
        </p>

        {/* Social buttons */}
        <div className="flex justify-center gap-2 mt-2">
          {/* Google */}
          <Button
            className="
      w-[56px]
      sm:w-auto sm:flex-1
      bg-white
      border border-[#E1E1E2]
      flex items-center justify-center
      text-[#1A1A1A]
    "
          >
            <Image
              src="/Google__G__Logo.svg"
              width={20}
              height={20}
              alt="google"
            />
            <span className="hidden sm:inline ml-2">Google</span>
          </Button>

          {/* Apple */}
          <Button
            className="
      w-[56px]
      sm:w-auto sm:flex-1
      bg-[#1A1A1A]
      text-white
      border border-[#E1E1E2]
      flex items-center justify-center
    "
          >
            <Image src="/Icon L.svg" width={20} height={20} alt="apple" />
            <span className="hidden sm:inline ml-2">Apple</span>
          </Button>
        </div>
      </form>

      {/* Footer */}
      <p className="text-[#1A1A1A] text-[14px] text-center mt-4">
        Already have an account?{" "}
        <span className="text-blue-700 cursor-pointer">Login</span>
      </p>

      <div className="flex items-center gap-1 text-[#1A1A1AB2] text-[14px] justify-center mt-2 bg-white px-2 py-1 rounded-sm w-fit mx-auto">
        <Image
          src="/shield-star-fill.svg"
          width={20}
          height={20}
          alt="shield"
        />
        <p>NDPR Compliant</p>
      </div>
    </div>
  );
};

export default Form;

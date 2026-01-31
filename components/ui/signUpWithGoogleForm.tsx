"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

/* ----------------------------- INPUT FIELD ----------------------------- */
type InputFieldProps = {
  label: string;
  icon: string;
  placeholder: string;
  type?: string;
  trailingIcon?: string;
};

const InputField = ({
  label,
  icon,
  placeholder,
  type = "text",
  trailingIcon,
}: InputFieldProps) => {
  return (
    <div className="rounded-md border border-[#E1E1E2] p-2">
      <label className="text-sm text-[#1A1A1AB2]">{label}</label>

      <div className="mt-1 flex items-center gap-2">
        <Image src={icon} width={20} height={20} alt={label} />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-[16px] text-[#1A1A1A5C] outline-none"
        />
        {trailingIcon && (
          <Image
            src={trailingIcon}
            width={20}
            height={20}
            alt="toggle visibility"
          />
        )}
      </div>
    </div>
  );
};

/* ----------------------------- SOCIAL BUTTON ----------------------------- */
type SocialButtonProps = {
  icon: string;
  label: string;
  isDark?: boolean;
  onClick?: () => void;
};

const SocialButton = ({
  icon,
  label,
  isDark = false,
  onClick,
}: SocialButtonProps) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={`flex w-14 items-center justify-center border border-[#E1E1E2]
        sm:w-auto sm:flex-1
        ${isDark ? "bg-[#1A1A1A] text-white" : "bg-white text-[#1A1A1A]"}
      `}
    >
      <Image src={icon} width={20} height={20} alt={label} />
      <span className="ml-2 hidden sm:inline">{label}</span>
    </Button>
  );
};

/* ----------------------------- MAIN FORM ----------------------------- */
export default function Form() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      {/* LEFT — SIDEBAR */}
      <aside className="hidden h-full p-2 sm:flex">
        <Image
          src="/bannerFrame.png"
          alt="sidebar banner"
          width={420}
          height={1000}
          priority
          className="h-full object-cover"
        />
      </aside>

      {/* RIGHT — FORM */}
      <main className="flex min-h-screen flex-1 flex-col justify-center px-4 sm:px-6">
        <form className="mx-auto w-full max-w-[500px] rounded-md bg-white p-4 sm:p-6 space-y-4">
          {/* Header */}
          <p className="text-center text-[20px] font-bold sm:text-[24px]">
            Create an Account in 2 minutes!
          </p>

          <Image src="/Card 3.png" width={500} height={20} alt="info" />

          {/* Inputs */}
          <InputField
            label="Email"
            icon="/gmail.svg"
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            icon="/lock.svg"
            placeholder="Enter your password"
            type="password"
            trailingIcon="/eye.svg"
          />

          <InputField
            label="Referral code (optional)"
            icon="/community.svg"
            placeholder="Enter Referral Code"
          />

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1 cursor-pointer accent-[#0044EE]" />
            <p className="text-[13px] text-[#1A1A1A5C] sm:text-[14px]">
              By clicking ‘Sign Up’, I agree to Zabira’s{" "}
              <span className="cursor-pointer text-[#0044EE]">Terms of Service</span>{" "}
              and{" "}
              <span className="cursor-pointer text-[#0044EE]">Privacy Policy</span>.
            </p>
          </div>

          {/* Submit */}
          <Button className="flex w-full items-center justify-center gap-2 bg-[#1A1A1A] text-white">
            <Image src="/Group.svg" width={20} height={20} alt="signup" />
            Sign Up
          </Button>

          <p className="text-center text-sm text-[#1A1A1AB2]">
            Or continue with
          </p>

          {/* Social Auth */}
          <div className="flex justify-center gap-2 sm:justify-start">
            <SocialButton
              icon="/Google__G__Logo.svg"
              label="Google"
              onClick={() => router.push("/signupwithemail")}
            />
            <SocialButton
              icon="/Icon L.svg"
              label="Apple"
              isDark
              onClick={() => router.push("/auth/apple")}
            />
          </div>

          {/* Footer */}
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <span className="cursor-pointer text-blue-700">Login</span>
          </p>

          <div className="mx-auto flex w-fit items-center gap-1 rounded-sm bg-white px-2 py-1 text-sm text-[#1A1A1AB2]">
            <Image src="/shield-star-fill.svg" width={20} height={20} alt="shield" />
            <span>NDPR Compliant</span>
          </div>
        </form>
      </main>
    </div>
  );
}

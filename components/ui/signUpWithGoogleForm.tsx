import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

/* ----------------------------- INPUT FIELD ----------------------------- */
type InputFieldProps = {
  label: string;
  icon: string;
  placeholder: string;
  type?: string;
  trailingIcon?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  placeholder,
  type = "text",
  trailingIcon,
}) => (
  <div className="p-2 border border-[#E1E1E2] rounded-md">
    <label className="text-[#1A1A1AB2] text-[14px]">{label}</label>
    <div className="flex items-center gap-2 mt-1">
      <Image src={icon} width={20} height={20} alt={label} />
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent outline-none w-full text-[#1A1A1A5C] text-[16px]"
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

/* ----------------------------- SOCIAL BUTTON ----------------------------- */
type SocialButtonProps = {
  icon: string;
  label: string;
  isDark?: boolean;
};

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, isDark }) => (
  <Button
    className={`
      w-14 sm:flex-1 sm:w-auto
      ${isDark ? "bg-[#1A1A1A] text-white" : "bg-white text-[#1A1A1A]"}
      border border-[#E1E1E2] flex items-center justify-center
    `}
  >
    <Image src={icon} width={20} height={20} alt={label} />
    <span className="hidden sm:inline ml-2">{label}</span>
  </Button>
);

/* ----------------------------- MAIN FORM ----------------------------- */
const Form: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row flex-1">
      {/* LEFT — FIXED SIDEBAR */}
      <aside className="hidden sm:flex p-2 h-full">
        <Image
          src="/bannerFrame.png"
          alt="sidebar banner"
          width={420}
          height={1000}
          className="h-full w-105 object-cover"
          priority
        />
      </aside>

      {/* RIGHT — FORM */}
      <main className="flex flex-1 flex-col justify-center px-4 sm:px-6 min-h-screen">
        <form className="flex flex-col gap-4 w-full max-w-125 mx-auto bg-white p-4 sm:p-6 rounded-md">
          {/* Header */}
          <p className="text-[#1A1A1A] font-bold text-[20px] sm:text-[24px] text-center">
            Create an Account in 2 minutes!
          </p>

          {/* Info placeholder */}
          <Image src="/Card 3.png" width={500} height={20} alt="info" />

          {/* Input fields */}
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
            <input
              type="checkbox"
              className="mt-1 accent-[#0044EE] cursor-pointer"
            />
            <p className="text-[#1A1A1A5C] text-[13px] sm:text-[14px] leading-snug">
              By clicking ‘Sign Up’, I agree to Zabira’s{" "}
              <span className="text-[#0044EE] cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#0044EE] cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </div>

          {/* Sign Up */}
          <Button className="w-full bg-[#1A1A1A] text-white border border-[#E1E1E2] flex items-center justify-center gap-2">
            <Image src="/Group.svg" width={20} height={20} alt="signup" />
            Sign Up
          </Button>

          {/* Divider */}
          <p className="text-center text-[#1A1A1AB2] text-[14px]">
            Or continue with
          </p>

          {/* Social Buttons */}
          <div className="flex gap-2 justify-center sm:justify-start">
            <SocialButton icon="/Google__G__Logo.svg" label="Google" />
            <SocialButton icon="/Icon L.svg" label="Apple" isDark />
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-[14px] mt-4">
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
      </main>
    </div>
  );
};

export default Form;

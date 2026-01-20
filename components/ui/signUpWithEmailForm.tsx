import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

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
        className="w-full bg-transparent outline-none text-[#1A1A1A5C] text-[16px]"
      />
      {trailingIcon && (
        <Image src={trailingIcon} width={20} height={20} alt="toggle" />
      )}
    </div>
  </div>
);
/* ----------------------------- MAIN FORM ----------------------------- */

const Form: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row flex-1 ">
      {/* LEFT COLUMN — SIDEBAR */}
      <div className=" hidden sm:flex p-2 h-full">
        <Image
          src="/Frame 40288 (1).png"
          alt="sidebar banner"
          width={420}
          height={700}
          className="h-full w-105 object-cover"
        />
      </div>

      {/* RIGHT COLUMN — FORM */}
      <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 ">
        <form className="flex flex-col gap-4  max-w-110 mx-auto bg-white p-4 sm:p-6 rounded-md">
          <p className="text-[#1A1A1A] font-bold text-[20px] sm:text-[24px] text-center">
            Create an Account in 2 minutes!
          </p>

          <Image src="/Card 4.png" width={500} height={20} alt="info" />

          <InputField
            label="Email"
            icon="/gmail2.svg"
            placeholder="jacob.jones@gmail.com"
          />

          <InputField
            label="Password"
            icon="/lock1.svg"
            placeholder="@#LOL@%098"
            type="password"
            trailingIcon="/eye.svg"
          />

          <InputField
            label="Referral code (optional)"
            icon="/community1.svg"
            placeholder="HYSGB87H"
          />

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1  accent-[#0044EE]
              cursor-pointer"
            />
            <p className="text-[#1A1A1A5C] text-[13px] sm:text-[14px]">
              By clicking ‘Sign Up’, I agree to Zabira’s
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

          <Button className="w-full btn flex items-center gap-2">
            <Image src="/Group.svg" width={20} height={20} alt="signup" />
            Sign Up
          </Button>

          <p className="text-center text-[#1A1A1AB2] text-[14px]">
            Or continue with
          </p>

          <div className="flex gap-2 justify-center sm:justify-start">
            <Button className="w-14 sm:flex-1 sm:w-auto bg-white text-[#1A1A1A] border border-[#E1E1E2] flex items-center justify-center">
              <Image
                src="/Google__G__Logo.svg"
                width={20}
                height={20}
                alt="google"
              />
              <span className="hidden sm:inline ml-2">Google</span>
            </Button>

            <Button className="w-14 sm:flex-1 sm:w-auto bg-[#1A1A1A] text-white border border-[#E1E1E2] flex items-center justify-center">
              <Image src="/Icon L.svg" width={20} height={20} alt="apple" />
              <span className="hidden sm:inline ml-2">Apple</span>
            </Button>
          </div>
        </form>

        <p className="text-center text-[14px] mt-4">
          Already have an account?{" "}
          <span className="text-blue-700 cursor-pointer">Login</span>
        </p>

        <div className="flex items-center gap-1 text-[#1A1A1AB2] text-[14px] justify-center mt-2">
          <Image
            src="/shield-star-fill.svg"
            width={20}
            height={20}
            alt="shield"
          />
          <p>NDPR Compliant</p>
        </div>
      </div>
    </div>
  );
};

export default Form;

"use client";

import { X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

type ProfileTask = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: string;
  action: () => void;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ProfileCompletionModal({ isOpen, onClose }: Props) {
  if (!isOpen || typeof document === "undefined") return null;

  const tasks: ProfileTask[] = [
    {
      id: "email",
      title: "Verify your email",
      description: "Takes about 2 minutes",
      completed: true,
      icon: "/emailicon.svg",
      action: () => console.log("Verify email"),
    },
    {
      id: "phone",
      title: "Verify phone number",
      description: "Takes about 2 minutes",
      completed: false,
      icon: "/phoneicon.svg",
      action: () => console.log("Verify phone"),
    },
    {
      id: "kyc",
      title: "Upgrade KYC",
      description: "Required to unlock higher limits",
      completed: false,
      icon: "/kycicon.svg",
      action: () => console.log("Start KYC"),
    },
    {
      id: "person",
      title: "Update Personal Information",
      description: "Required to unlock higher limits",
      completed: false,
      icon: "/personicon.svg",
      action: () => console.log("Start personal info"),
    },
    {
      id: "2fa",
      title: "Enable 2FA",
      description: "Secure your account",
      completed: false,
      icon: "/two-factor.svg",
      action: () => console.log("Enable 2FA"),
    },
    {
      id: "trx",
      title: "Make your first transaction",
      description: "Start trading instantly",
      completed: false,
      icon: "/firstrx.svg",
      action: () => console.log("Make transaction"),
    },
  ];

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-6 -right-6 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Card */}
        <div className="rounded-xl bg-white p-6 shadow-xl">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Welcome to Zabira 👋</h2>
              <p className="text-sm text-gray-500">
                Complete your account setup in a few easy steps
              </p>
            </div>

            <Image
              src="/ProgressRadial (1).svg"
              alt="progress"
              width={32}
              height={40}
            />
          </div>

          {/* Tasks */}
          <div className="mt-5 space-y-3">
            {tasks.map((task, index) => {
              const isFirst = index === 0;

              return (
                <button
                  key={task.id}
                  type="button"
                  onClick={task.action}
                  disabled={task.completed}
                  className={`
                    flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition
                    ${isFirst ? "bg-[#F0FDF9] border-[#00C896]" : "hover:bg-gray-50"}
                    disabled:cursor-not-allowed
                  `}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`
                        flex h-9 w-9 items-center justify-center rounded-full
                        ${task.completed ? "bg-green-100" : "bg-gray-100"}
                      `}
                    >
                      <Image
                        src={task.icon}
                        alt={task.title}
                        width={18}
                        height={18}
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">{task.title}</p>
                      <p className="text-xs text-gray-500">
                        {task.description}
                      </p>
                    </div>
                  </div>

                  {task.completed ? (
                    <Image
                      src="/Icon.svg"
                      alt="completed"
                      width={18}
                      height={18}
                    />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

type LogoIconProps = {
  className?: string;
};

// "use client";

// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const LogoIcon: React.FC = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.push("/signUpWithEmailForm"); // navigate client-side
//     }, 5000);

const LogoIcon: React.FC<LogoIconProps> = ({ className }) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect after 5 seconds
      router.push("/landingPage");
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  console.log("LogoIcon mounted");

  return (
    <>
      {/* Component-scoped styles */}
      <style>
        {`
          .logo-wrapper {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }

          .logo-svg {
            width: 100%;
            height: auto;
            max-width: 100%;
            animation: spin 5s linear forwards;
          }

          @media (min-width: 768px) {
            .logo-svg {
              width: 40%;
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div className="logo-wrapper">
        <svg
          viewBox="0 0 510 510"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className={`logo-svg ${className ?? ""}`}
        >
          <path
            d="M255 0C395.833 0 510 114.167 510 255C510 395.833 395.833 510 255 510C114.167 510 0 395.833 0 255C0 114.167 114.167 0 255 0ZM255 1C114.72 1 1 114.72 1 255C1 395.28 114.72 509 255 509C395.28 509 509 395.28 509 255C509 114.72 395.28 1 255 1ZM255 36C375.95 36 474 134.05 474 255C474 375.95 375.95 474 255 474C134.05 474 36 375.95 36 255C36 134.05 134.05 36 255 36ZM255 37C134.602 37 37 134.602 37 255C37 375.398 134.602 473 255 473C375.398 473 473 375.398 473 255C473 134.602 375.398 37 255 37ZM255 72C356.068 72 438 153.932 438 255C438 356.068 356.068 438 255 438C153.932 438 72 356.068 72 255C72 153.932 153.932 72 255 72ZM255 73C154.484 73 73 154.484 73 255C73 355.516 154.484 437 255 437C355.516 437 437 355.516 437 255C437 154.484 355.516 73 255 73ZM255 112C333.977 112 398 176.023 398 255C398 333.977 333.977 398 255 398C176.023 398 112 333.977 112 255C112 176.023 176.023 112 255 112ZM255 113C176.576 113 113 176.576 113 255C113 333.424 176.576 397 255 397C333.424 397 397 333.424 397 255C397 176.576 333.424 113 255 113ZM254.5 152C311.109 152 357 197.891 357 254.5C357 311.109 311.109 357 254.5 357C197.891 357 152 311.109 152 254.5C152 197.891 197.891 152 254.5 152ZM254.5 153C198.443 153 153 198.443 153 254.5C153 310.557 198.443 356 254.5 356C310.557 356 356 310.557 356 254.5C356 198.443 310.557 153 254.5 153Z"
            fill="url(#paint0_radial)"
          />
          <path
            d="M271.65 282.75L255.001 310.5C270.433 310.5 283.541 305.108 294.325 294.324C305.108 283.541 310.5 270.432 310.5 255C310.5 239.567 305.108 226.459 294.325 215.675C283.541 204.892 270.433 199.5 255 199.5L271.65 227.25L288.3 255L238.351 282.75H271.65Z"
            fill="#0088FF"
          />
          <path
            d="M238.35 227.25L255 199.5C239.567 199.5 226.459 204.892 215.675 215.675C204.892 226.459 199.5 239.567 199.5 255C199.5 270.432 204.892 283.54 215.675 294.324C226.459 305.108 239.567 310.5 255 310.5L238.35 282.75L221.7 255L271.65 227.25H238.35Z"
            fill="#0044EE"
          />
          <path
            d="M255 199.5L238.35 227.25H271.65L221.7 255L238.35 282.75L288.3 255L271.65 227.25L255 199.5Z"
            fill="white"
          />
          <path
            d="M238.351 282.75L255.001 310.5L271.65 282.75H238.351Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(255 255) rotate(90) scale(255)"
            >
              <stop stopColor="#F4F4F8" stopOpacity="0" />
              <stop offset="1" stopColor="#80BAFF" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default LogoIcon;

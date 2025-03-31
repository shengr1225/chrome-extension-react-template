import { useCallback } from "react";
import logo from "../assets/logo.png";
import howItWorks1 from "../assets/how-it-works-1.jpg";
import howItWorks2 from "../assets/how-it-works-2.jpg";
import howItWorks3 from "../assets/how-it-works-3.jpg";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const handleGoogleLogin = useCallback(() => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
      if (token) {
        onLogin();
      }
    });
  }, [onLogin]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      {/* Logo and Login Section */}
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-md">
        <div className="relative mb-8">
          <img
            className="mx-auto"
            src={logo}
            alt="OPeach Logo"
            width={193}
            height={60}
          />
        </div>

        {/* Login Section */}
        <button
          onClick={handleGoogleLogin}
          className="cursor-pointer flex items-center justify-center w-full gap-4 py-3 text-lg md:text-xl text-gray-900 rounded-xl h-20 bg-white transition-colors duration-300 hover:bg-gray-50 border-1 border-[#D3D3D3]"
        >
          <img
            src="/google-icon.svg"
            alt="Google"
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <text className="font-light">Continue with Google</text>
        </button>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-[#1C7851] py-12 md:py-15 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-10">
            How It Works
          </h2>
          <div className="flex lg:flex-row flex-col gap-6">
            {/* Pick Stores */}
            <div className="bg-white rounded-3xl p-4 md:p-6 text-center max-w-3xs mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Pick Stores
              </h3>
              <div className="rounded-2xl overflow-hidden">
                <img
                  className="mx-auto"
                  src={howItWorks1}
                  alt="Pick Stores Illustration"
                  width={167}
                  height={102}
                />
              </div>
            </div>

            {/* Pick Items */}
            <div className="bg-white rounded-3xl p-4 md:p-6 text-center max-w-3xs mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Pick Items</h3>
              <div className="rounded-2xl overflow-hidden">
                <img
                  className="mx-auto"
                  src={howItWorks2}
                  alt="Pick Items Illustration"
                  width={167}
                  height={102}
                />
              </div>
            </div>

            {/* See Deals */}
            <div className="bg-white rounded-3xl p-4 md:p-6 text-center max-w-3xs mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-4">See Deals</h3>
              <div className="rounded-2xl overflow-hidden">
                <img
                  className="mx-auto"
                  src={howItWorks3}
                  alt="See Deals Illustration"
                  width={167}
                  height={102}
                />
              </div>
            </div>
          </div>
          <p className="text-white text-center mt-8 md:mt-10 text-xs md:text-sm px-4">
            * Price shown is for illustrative purposes only and may not reflect
            actual current pricing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

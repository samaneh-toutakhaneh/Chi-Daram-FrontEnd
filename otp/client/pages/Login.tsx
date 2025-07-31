import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [phoneDigits, setPhoneDigits] = useState(["", "", "", "", ""]);
  const [otpCode, setOtpCode] = useState(["", "", "", "", ""]);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePhoneDigitChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newDigits = [...phoneDigits];
    newDigits[index] = value;
    setPhoneDigits(newDigits);

    // Auto-focus next input
    if (value && index < 4) {
      const nextInput = document.getElementById(`phone-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setStep("otp");
      setIsLoading(false);
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otpCode];
    newOtp[index] = value;
    setOtpCode(newOtp);
    
    // Auto-focus next input
    if (value && index < 4) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Redirect to dashboard
      window.location.href = "/dashboard";
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <span className="text-2xl font-bold text-white">چ</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">چی‌دارم</h1>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          {step === "phone" ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                ورود یا ثبت نام
              </h2>
                <p className="text-gray-600 text-sm">
                  کد تایید به شماره موبایل شما ارسال خواهد شد
                </p>
              </div>

              <div>
                <div className="flex justify-center gap-3 mb-4" dir="ltr">
                  {phoneDigits.map((digit, index) => (
                    <Input
                      key={index}
                      id={`phone-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handlePhoneDigitChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-lg font-semibold"
                      dir="ltr"
                    />
                  ))}
                </div>
              </div>

              {/* Timer and Edit Options */}
              <div className="flex justify-between items-center mb-4 text-sm">
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => {
                    setPhoneDigits(["", "", "", "", ""]);
                    document.getElementById('phone-0')?.focus();
                  }}
                >
                  ویرایش شماره موبایل
                </button>
                <div className="text-gray-600">
                  تا دریافت مجدد کد {formatTime(timer)}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-medium"
                disabled={isLoading || phoneDigits.some(digit => !digit)}
              >
                {isLoading ? "در حال ارسال..." : "تایید و ادامه"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  ورود با کد تایید
                </h2>
                <p className="text-gray-600 text-sm">
                  کد ۵ رقمی ارسال شده به شماره{" "}
                  <span className="font-medium text-gray-900">{phoneDigits.join("")}</span>{" "}
                  را وارد کنید
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  کد تایید
                </label>
                <div className="flex justify-center gap-3 mb-4" dir="ltr">
                  {otpCode.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-lg font-semibold"
                      dir="ltr"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium"
                  disabled={isLoading || otpCode.some(digit => !digit)}
                >
                  {isLoading ? "در حال تایید..." : "تایید و ورود"}
                </Button>
                
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep("phone")}
                  className="w-full text-gray-600"
                >
                  تغییر شماره موبایل
                </Button>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                  onClick={() => {
                    // Resend OTP logic
                    console.log("Resending OTP...");
                  }}
                >
                  ارسال مجدد کد تایید
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ورود شما به معنای پذیرش{" "}
            <Link to="/terms" className="text-primary hover:underline">
              قوانین و مقررات
            </Link>{" "}
            است
          </p>
        </div>
      </div>
    </div>
  );
}

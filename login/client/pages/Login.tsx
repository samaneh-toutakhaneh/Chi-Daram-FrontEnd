import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber && agreed) {
      // Navigate to dashboard after successful login
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Background Image Section */}
      <div className="flex-1 lg:flex">
        {/* Left side - Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/8062358/pexels-photo-8062358.jpeg"
            alt="محیط کار مدرن و منظم"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Login Form */}
        <div className="flex-1 lg:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">چی</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">چی‌دارم</span>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  ورود یا ثبت‌نام
                </h1>
                <p className="text-gray-600 text-sm">
                  کد تأیید به شماره موبایل شما ارسال خواهد شد.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Phone Number Input */}
                <div className="space-y-2">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <img
                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'%3e%3cpath fill='%23239F40' d='M0 0h24v16H0z'/%3e%3cpath fill='%23FFF' d='M0 5.33h24v5.34H0z'/%3e%3cpath fill='%23DA0010' d='M0 10.67h24V16H0z'/%3e%3cg fill='%23DA0010'%3e%3cpath d='M7.5 8.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S9.83 7 9 7s-1.5.67-1.5 1.5z'/%3e%3cpath d='M10.5 8.5L12 7.25v2.5l-1.5-1.25z'/%3e%3c/g%3e%3c/svg%3e"
                        alt="Iran"
                        className="w-6 h-4"
                      />
                      <span className="text-sm text-gray-700">+۹۸</span>
                    </div>
                    <Input
                      type="tel"
                      placeholder="۹۱۲ *** ****"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="pl-20 pr-4 h-12 text-center"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start space-x-2 space-x-reverse">
                  <Checkbox
                    id="agreement"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-1"
                  />
                  <label
                    htmlFor="agreement"
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    با ورود و ثبت نام در سایت، با{" "}
                    <Link to="/terms" className="text-blue-500 hover:underline">
                      قوانین چی دارم
                    </Link>{" "}
                    موافقت می کنم
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!phoneNumber || !agreed}
                  className="w-full h-12 text-base font-medium"
                >
                  ورود / ثبت‌نام
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { countryOptions } from "@/lib/countries";
import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen bg-gray-900 lg:grid lg:grid-cols-2">
      {/* Left Section */}
      <section className="flex flex-col items-start px-6 py-8 lg:px-16 lg:py-12 overflow-y-auto">
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo"
          width={140}
          height={32}
          className="h-8 w-auto mb-10"
        />

        <div className="flex justify-center flex-1">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </section>

      {/* Right Section */}
      <section className="hidden lg:flex flex-col justify-between bg-gray-800 p-10">
        <div>
          <blockquote className="text-gray-200 text-lg leading-8 italic">
            "Signalist is my definitive watchlist to track stocks. I receive
            alerts every day and now I feel much more confident investing."
          </blockquote>

          <div className="flex justify-between items-center mt-6">
            <div>
              <cite className="text-white not-italic font-semibold">
                John R.
              </cite>
              <p className="text-gray-400 text-sm">Retail Investor</p>
            </div>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  key={star}
                  src="/assets/icons/star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-end mt-10">
          <Image
            src="/assets/images/dashboard.png"
            alt="Dashboard Preview"
            width={900}
            height={700}
            className="w-full max-w-xl h-auto rounded-xl"
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;

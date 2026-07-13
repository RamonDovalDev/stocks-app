"use client";

import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { countryOptions } from "@/lib/countries";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const SignUpPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
  });
  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>

      <form className="space-y-5">
        <InputField
          name="fullName"
          label="Name"
          placeholder="Your Name"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required", min: 2 }}
        />
        <InputField
          name="email"
          label="Email"
          placeholder="example@example.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please, use a valid email",
            },
          }}
        />
        <InputField
          name="password"
          label="Password"
          placeholder="Strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />
        <SelectField
          name="country"
          label="Country"
          placeholder="Select your country"
          options={countryOptions}
          control={control}
          error={errors.country}
          required
          showFlags
        />
        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name="preferredIndustry"
          label="Preferred industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />
      </form>
    </>
  );
};

export default SignUpPage;

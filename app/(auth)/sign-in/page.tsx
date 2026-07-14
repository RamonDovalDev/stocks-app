"use client";

import FooterLink from "@/components/form/FooterLink";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const SignInPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="form-title">Welcome back!</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y 6">
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

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing In" : "Sign In"}
        </Button>

        <FooterLink
          text="Don't have an account?"
          linkText="Create an account"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignInPage;

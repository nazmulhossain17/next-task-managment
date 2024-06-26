/* eslint-disable @typescript-eslint/consistent-type-imports */
"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signInData = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    if (signInData?.error) {
      console.log(signInData.error);
    } else {
      router.refresh();
      router.push("/dashboard");
    }
    console.log(signInData);
    // Add your sign-in logic here
  };

  return (
    <main>
      <div className="flex min-h-screen justify-center bg-gray-100 text-gray-900">
        <div className="m-0 flex max-w-screen-xl flex-1 justify-center bg-white shadow sm:m-10 sm:rounded-lg">
          <div className="p-6 sm:p-12 lg:w-1/2 xl:w-5/12">
            <div className="mt-12 flex flex-col items-center p-9">
              <h1 className="text-2xl font-extrabold xl:text-3xl">Sign up</h1>
              <form className="mt-8 w-full flex-1" onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <input
                    className="mt-5 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-4 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="submit"
                    className="focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-indigo-500 py-4 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none"
                  >
                    <svg
                      className="-ml-2 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <path d="M20 8v6M23 11h-6"></path>
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                  <p className="mt-6 text-center text-xs text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link className="text-blue-600" href={"/register"}>
                      sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden flex-1 bg-indigo-100 text-center lg:flex">
            <div
              className="m-12 w-full bg-contain bg-center bg-no-repeat xl:m-16"
              style={{
                backgroundImage: `url('https://www.tamirapharmacy.com/login/svg/admin-img.svg')`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}

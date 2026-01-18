// server actions

"use server";

import { redirect } from "next/navigation";

import { headers } from "next/headers";
import { auth } from "../auth";

export const signUp = async (email: string, password: string, name: string) => {
    const result = await auth.api.signUpEmail({
        body: {
            email,
            password,
            name,
            callbackURL: "/",
        }
    });
    return result;
};


export const signIn = async (email: string, password: string) => {
    const result = await auth.api.signInEmail({
        body: {
            email,
            password,
            callbackURL: "/dashboard",
        }
    });
    
    return result;
};

export const signInSocial = async (provider: "github" | "google") => {
  return await auth.api.signInSocial({
    body: {
      provider,
      callbackURL: "/",
    },
  });
};


export const signOut = async () => {
    const result = await auth.api.signOut({
        headers: await headers()
    });
    
    return result;
};
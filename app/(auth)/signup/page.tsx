import { auth } from "@/lib/auth";
import { LoginForm } from "@/components/auth/login-form";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { SignupForm } from "@/components/auth/signup-form";

export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  
  if (session) {
    redirect("/");
  }
  
  return <SignupForm />;
}
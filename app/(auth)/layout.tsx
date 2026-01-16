import { HeroHeader } from "@/components/layout/header/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div>
    <HeroHeader />  
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6 mt-10">
         
          {/**/}
          {children}
        </div>
      </div>
    </div>
  );
}
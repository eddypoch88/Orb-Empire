import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="login-container glass-card p-16 text-center max-w-[480px] w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 px-4 py-1.5 rounded-full text-[0.65rem] font-bold tracking-[0.2em] uppercase inline-block mb-10">
          Neural Registration
        </div>

        <h1 className="text-4xl font-bold mb-3 tracking-tight text-white">
          Join the Matrix
        </h1>
        <p className="text-slate-500 mb-12 font-normal text-lg">Initialize your Sovereign identity.</p>

        <div className="flex justify-center w-full">
          <SignUp
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            appearance={{
              elements: {
                formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-500 transition-all shadow-[0_10px_20px_rgba(79,70,229,0.3)] rounded-xl py-3.5 text-base font-semibold tracking-tight',
                card: 'bg-transparent shadow-none p-0 w-full',
                headerTitle: 'hidden',
                headerSubtitle: 'hidden',
                socialButtonsBlockButton: 'bg-slate-900/50 border-white/10 text-slate-200 hover:bg-slate-800/80 rounded-xl py-3',
                formFieldInput: 'bg-slate-900/40 border-white/5 text-white rounded-xl py-3 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600',
                footer: 'hidden',
                dividerRow: 'hidden',
                formFieldLabel: 'text-slate-400 ml-1 mb-2 text-xs font-bold uppercase tracking-widest',
                identityPreviewText: 'text-white font-medium',
                identityPreviewEditButtonIcon: 'text-indigo-400',
              }
            }}
          />
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-slate-600 text-xs font-medium tracking-widest uppercase">
            Orb Empire • Growth Protocol
          </p>
        </div>
      </div>
    </main>
  );
}

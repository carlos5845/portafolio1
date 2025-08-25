import { User2 } from "lucide-react";
export default function Footer() {
  return (
    <footer className=" border-t border-white/10 pt-5 pb-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-zinc-500 max-w-7xl mx-auto pr-6 pl-6">
        <p>
          ©<span>Aiden Kim</span>Building useful, beautiful software.
        </p>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5">
            <User2 />
            GMT+1
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User2 />
            Remote
          </span>
        </div>
      </div>
    </footer>
  );
}

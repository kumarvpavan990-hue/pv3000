import React from "react";
import { X, Star, Repeat, ChevronDown } from "lucide-react";
import { MathText } from "@/components/MathText";

const DIFF_COLORS = {
  easy: "bg-emerald-100 text-emerald-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

// Full-screen (mobile-first) overlay listing questions grouped by "similarity".
export default function SimilarityModal({ groups, chapterName, onClose }) {
  const [open, setOpen] = React.useState({}); // { key: bool } -> answer revealed

  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#F8FAFC]">
      <div className="flex h-full w-full flex-col">
        {/* header */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 px-4 py-3">
          <Star className="h-4 w-4 fill-amber-600 text-amber-700" />
          <div className="min-w-0">
            <p className="truncate text-sm font-black uppercase tracking-wide text-amber-900">Similar Questions</p>
            <p className="truncate text-[11px] font-semibold text-amber-800/80">{chapterName} · 5M Numericals</p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-amber-900 transition hover:bg-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* body */}
        <div className="flex-1 overflow-y-auto px-3 py-4 md:px-5">
          {!groups || groups.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
              <p className="text-sm font-semibold text-slate-600">No similar questions added yet.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {groups.map((grp) => (
                <section key={grp.sim}>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-amber-950 shadow-sm">{grp.sim}</span>
                    <span className="text-xs font-bold text-amber-700">{grp.items.length} similar</span>
                  </div>
                  <div className="space-y-3">
                    {grp.items.map((q, i) => {
                      const key = `${grp.sim}-${i}`;
                      return (
                        <div key={key} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                          <div className="mb-2 flex flex-wrap items-center gap-1.5">
                            <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${DIFF_COLORS[q.difficulty] || DIFF_COLORS.easy}`}>
                              {q.difficulty}
                            </span>
                            <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700">{q.marks}</span>
                            <span className="ml-auto inline-flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600">
                              <Repeat className="h-3 w-3" /> ×{q.total}
                            </span>
                          </div>

                          <MathText value={q.question} className="text-[12px] leading-relaxed text-slate-900" />

                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {q.repetitions.map((r, ri) => (
                              <span key={ri} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                                {r.year} · {r.exam}
                              </span>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => setOpen((o) => ({ ...o, [key]: !o[key] }))}
                            className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 px-3 py-1.5 text-[11px] font-bold text-amber-950 shadow-sm transition hover:from-amber-500 hover:to-yellow-600"
                          >
                            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open[key] ? "rotate-180" : ""}`} />
                            {open[key] ? "Hide Answer" : "View Answer"}
                          </button>
                          {open[key] && (
                            <div className="mt-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5">
                              <p className="mb-1 text-[10px] font-black uppercase tracking-wide text-amber-700">Answer</p>
                              <MathText value={q.answer} className="text-[12px] leading-relaxed text-slate-800" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

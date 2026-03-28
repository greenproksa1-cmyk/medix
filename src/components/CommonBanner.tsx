export default function CommonBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 border-b border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,82,123,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(5,121,189,0.03),transparent_50%)]" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0E527B]" />
              Medix Institutional Platform
            </div>
            
            <h1 className="text-clamp-title font-black text-[#0F172A] leading-[1.15] tracking-tight mb-6" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-[18px] lg:text-[20px] text-slate-600 leading-relaxed max-w-2xl font-medium">
                {subtitle}
              </p>
            )}
            
            <div className="flex gap-2 mt-10">
              <div className="w-12 h-1.5 bg-[#0E527B] rounded-full" />
              <div className="w-4 h-1.5 bg-[#8FE4FF] rounded-full" />
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(14,82,123,0.1)] border border-slate-100 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">Framework</div>
                  <div className="text-[14px] font-bold text-[#0F172A]">Institutional Governance</div>
                </div>
                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">Standard</div>
                  <div className="text-[14px] font-bold text-[#0F172A]">Evidence-Based Review</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">100%</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">QA</div>
                </div>
                <div className="text-[11px] uppercase tracking-[0.15em] text-slate-400 font-bold">
                  Audit-Ready Engine
                </div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#0E527B]/5 to-transparent rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

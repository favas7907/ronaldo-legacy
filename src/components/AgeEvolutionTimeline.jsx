import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TIMELINE_STAGES } from '../data/content'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { ShimmerBorder } from './ui/TiltCard'

export function AgeEvolutionTimeline() {
  const [activeStageIndex, setActiveStageIndex] = useState(0)
  const activeStage = TIMELINE_STAGES[activeStageIndex]

  return (
    <SectionWrapper id="timeline" className="bg-charcoal/20 relative" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="timeline"
          eyebrow="Chronicle of Greatness"
          title="Age Evolution"
          subtitle="An interactive odyssey from a raw Portuguese prodigy to the ultimate living legend. Six eras that rewrote the definition of sports elite."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          {/* Left Side: Cinematic Media & Stats panel */}
          <div className="relative aspect-[4/5] md:aspect-[1.6/1] lg:aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-charcoal cinematic-shadow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                {/* Slow zooming image (Ken Burns) */}
                <motion.img
                  src={activeStage.image}
                  alt={activeStage.title}
                  className="h-full w-full object-cover brightness-[0.75] saturate-[0.85]"
                  animate={{ scale: [1, 1.06] }}
                  transition={{ duration: 7, ease: 'easeOut' }}
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/30" />
                
                {/* Gold Highlight Ring Bloom inside media */}
                <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-64 w-64 rounded-full bg-gold/10 blur-[90px]" aria-hidden="true" />

                {/* Glassmorphism Stats Badge */}
                <div className="absolute top-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 font-display text-xl tracking-wider text-gold gold-glow">
                  {activeStage.club === 'Sporting CP' ? 'SCP' : 
                   activeStage.club === 'Manchester United' ? 'MU' : 
                   activeStage.club === 'Real Madrid' ? 'RM' : 
                   activeStage.club === 'Juventus' ? 'JUVE' : 
                   activeStage.club === 'Al Nassr' ? 'NASR' : 'PT'}
                </div>

                {/* Era Tag overlay */}
                <div className="absolute top-6 right-6 rounded-full border border-white/10 bg-void/50 px-4 py-1.5 backdrop-blur-md">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-pearl/80">
                    {activeStage.period}
                  </p>
                </div>

                {/* Interactive stats reveal panel at the bottom of the card */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="glass-panel relative overflow-hidden rounded-2xl p-5 md:p-6 cinematic-shadow"
                  >
                    <ShimmerBorder className="rounded-2xl" />
                    
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                      {activeStage.age} · {activeStage.club}
                    </p>
                    <h3 className="mt-2 font-display text-2xl tracking-wide text-pearl md:text-3xl">
                      {activeStage.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-pearl/60">
                      {activeStage.description}
                    </p>

                    <div className="editorial-rule my-4" />

                    {/* Stats metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-muted">
                          Matches
                        </p>
                        <p className="mt-1 font-display text-lg text-pearl/90">
                          {activeStage.stats.appearances}
                        </p>
                      </div>
                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-muted">
                          Goals
                        </p>
                        <p className="mt-1 font-display text-lg text-gold">
                          {activeStage.stats.goals}
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-muted">
                          Honors
                        </p>
                        <p className="mt-1 truncate text-xs font-light text-pearl/80" title={activeStage.stats.honors}>
                          {activeStage.stats.honors}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 border border-white/10 pointer-events-none rounded-3xl" />
          </div>

          {/* Right Side: Stepper Navigation Items */}
          <div className="flex flex-col gap-4">
            {TIMELINE_STAGES.map((stage, i) => {
              const isActive = i === activeStageIndex
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageIndex(i)}
                  className={`group relative text-left rounded-2xl border border-white/[0.05] p-5 md:p-6 transition-all duration-300 focus-visible:outline-gold ${
                    isActive 
                      ? 'bg-gradient-to-r from-gold/10 via-charcoal to-void border-gold/30 cinematic-shadow'
                      : 'bg-void/40 hover:bg-charcoal/40 hover:border-white/10'
                  }`}
                >
                  {/* Left indicator glow bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-bar"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold to-gold-dim rounded-l-2xl"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-[9px] font-semibold uppercase tracking-[0.25em] transition ${
                        isActive ? 'text-gold' : 'text-muted'
                      }`}>
                        Stage {String(i + 1).padStart(2, '0')} · {stage.period}
                      </p>
                      <h4 className="mt-1.5 font-display text-xl tracking-wide text-pearl transition group-hover:text-gold-light md:text-2xl">
                        {stage.stage}
                      </h4>
                      <p className="mt-1 text-[11px] text-pearl/50">
                        {stage.club}
                      </p>
                    </div>

                    <div className={`flex items-center gap-2 font-display text-2xl transition ${
                      isActive ? 'text-gold' : 'text-muted group-hover:text-pearl/80'
                    }`}>
                      <span>{stage.age.split(' ')[1]}</span>
                      <span className="text-[10px] text-muted font-body font-normal">yrs</span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

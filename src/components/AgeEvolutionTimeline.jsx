import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TIMELINE_STAGES } from '../data/content'
import { SectionHeading, SectionWrapper } from './SectionWrapper'
import { ShimmerBorder } from './ui/TiltCard'
import { PremiumPlaceholder } from './ui/PremiumPlaceholder'

const PREMIUM_EASE = [0.22, 1, 0.36, 1]

export const AgeEvolutionTimeline = memo(function AgeEvolutionTimeline() {
  const [activeStageIndex, setActiveStageIndex] = useState(0)
  const activeStage = TIMELINE_STAGES[activeStageIndex]

  return (
    <SectionWrapper id="timeline" className="bg-charcoal/20 relative" ambient>
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="timeline"
          eyebrow="Chronicle of Greatness"
          title="Age Evolution"
          subtitle="An interactive odyssey from a raw Portuguese prodigy to the ultimate living legend."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
          {/* Left: Media panel */}
          <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[1.5/1] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-charcoal cinematic-shadow sm:rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(6px)' }}
                transition={{ duration: 0.5, ease: PREMIUM_EASE }}
                className="absolute inset-0"
              >
                <PremiumPlaceholder
                  accentHex={activeStage.accentHex}
                  badge={activeStage.badge}
                  label={activeStage.club}
                  caption={activeStage.period}
                  aspectRatio="auto"
                  className="h-full w-full"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />

                {/* Era tag */}
                <div className="absolute top-4 right-4 rounded-full border border-white/10 bg-void/50 px-3 py-1 backdrop-blur-md sm:top-6 sm:right-6 sm:px-4 sm:py-1.5">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-pearl/80 sm:text-[9px] sm:tracking-[0.25em]">
                    {activeStage.period}
                  </p>
                </div>

                {/* Club badge */}
                <div
                  className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border font-display text-sm tracking-wider sm:top-6 sm:left-6 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-xl"
                  style={{
                    borderColor: `${activeStage.accentHex}40`,
                    backgroundColor: `${activeStage.accentHex}12`,
                    color: activeStage.accentHex,
                  }}
                >
                  {activeStage.badge}
                </div>

                {/* Bottom info panel */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8">
                  <motion.div
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="glass-panel relative overflow-hidden rounded-xl p-4 cinematic-shadow sm:rounded-2xl sm:p-5 md:p-6"
                  >
                    <ShimmerBorder className="rounded-xl sm:rounded-2xl" />
                    
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] sm:text-[10px] sm:tracking-[0.3em]" style={{ color: activeStage.accentHex }}>
                      {activeStage.age} · {activeStage.club}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl tracking-wide text-pearl sm:mt-2 sm:text-2xl md:text-3xl">
                      {activeStage.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-pearl/50 sm:mt-3 sm:text-xs">
                      {activeStage.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Stepper nav */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {TIMELINE_STAGES.map((stage, i) => {
              const isActive = i === activeStageIndex
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageIndex(i)}
                  className={`group relative text-left rounded-xl p-4 transition-all duration-300 focus-visible:outline-gold sm:rounded-2xl sm:p-5 md:p-6 ${
                    isActive 
                      ? 'bg-gradient-to-r from-white/[0.04] via-charcoal to-void border border-white/10 cinematic-shadow'
                      : 'border border-white/[0.05] bg-void/40 hover:bg-charcoal/40 hover:border-white/10'
                  }`}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-bar"
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl sm:rounded-l-2xl"
                      style={{
                        background: `linear-gradient(to bottom, ${stage.accentHex}, ${stage.accentHex}60)`,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className={`text-[8px] font-semibold uppercase tracking-[0.2em] transition sm:text-[9px] sm:tracking-[0.25em] ${
                        isActive ? 'text-gold' : 'text-muted'
                      }`}>
                        Stage {String(i + 1).padStart(2, '0')} · {stage.period}
                      </p>
                      <h4 className="mt-1 font-display text-lg tracking-wide text-pearl transition group-hover:text-gold-light sm:mt-1.5 sm:text-xl md:text-2xl">
                        {stage.stage}
                      </h4>
                      <p className="mt-0.5 text-[10px] text-pearl/40 sm:text-[11px]">
                        {stage.club}
                      </p>
                    </div>

                    <div className={`flex-shrink-0 flex items-center gap-1 font-display text-xl transition sm:text-2xl sm:gap-2 ${
                      isActive ? 'text-gold' : 'text-muted group-hover:text-pearl/80'
                    }`}>
                      <span>{stage.age.split(' ')[1]}</span>
                      <span className="text-[9px] text-muted font-body font-normal sm:text-[10px]">yrs</span>
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
})

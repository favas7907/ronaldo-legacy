export const PAGE_ROUTES = [
  { path: '/', label: 'Experience', id: 'experience' },
  { path: '/timeline', label: 'Timeline', id: 'timeline' },
  { path: '/journey', label: 'Chapters', id: 'journey' },
  { path: '/museum', label: 'Museum', id: 'museum' },
  { path: '/stats', label: 'Analytics', id: 'stats' },
  { path: '/moments', label: 'Moments', id: 'moments' },
]

export const NAV_LINKS = [
  { id: 'hero', label: 'Opening', path: '/' },
  { id: 'timeline', label: 'Timeline', path: '/timeline' },
  { id: 'journey', label: 'Chapters', path: '/journey' },
  { id: 'achievements', label: 'Museum', path: '/museum' },
  { id: 'statistics', label: 'Analytics', path: '/stats' },
  { id: 'moments', label: 'Moments', path: '/moments' },
]

export const HOME_CHAPTERS = [
  {
    id: 'journey',
    number: '01',
    title: 'The Eras',
    subtitle: 'From Lisbon boy to global icon. Six legendary chapters.',
    accent: 'from-emerald-950/20 via-charcoal to-void',
  },
  {
    id: 'achievements',
    number: '02',
    title: 'The Museum',
    subtitle: 'Trophy room prestige. Golden balls and international crowns.',
    accent: 'from-gold/10 via-charcoal to-void',
  },
  {
    id: 'moments',
    number: '03',
    title: 'The Moments',
    subtitle: 'Cinematic highlights of gravity-defying headers and overheads.',
    accent: 'from-crimson/10 via-charcoal to-void',
  },
]

export const HERO_STATS = [
  { label: 'Ballon d\'Or', value: '5' },
  { label: 'Official Goals', value: '973' },
  { label: 'Portugal Goals', value: '143' },
  { label: 'UCL Record Goals', value: '140' },
]

export const PROFILE_FACTS = [
  { label: 'Nationality', value: 'Portuguese' },
  { label: 'Position', value: 'Forward' },
  { label: 'Current Club', value: 'Al Nassr' },
  { label: 'National Team', value: 'Portugal' },
]

export const ABOUT_PORTRAIT =
  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80'

export const CAREER_STAGES = [
  {
    id: 'sporting',
    club: 'Sporting CP',
    era: '2002–2003',
    summary: 'The breakthrough — raw talent, blistering speed, and stepovers forged in Lisbon before the world took notice.',
    badge: 'SCP',
    accent: 'from-emerald-950/30 via-emerald-900/10 to-charcoal',
  },
  {
    id: 'united',
    club: 'Manchester United',
    era: '2003–2009',
    summary: 'Premier League dominance, Champions League glory, and the acquisition of the first Ballon d\'Or under Sir Alex Ferguson.',
    badge: 'MUFC',
    accent: 'from-red-950/30 via-red-900/10 to-charcoal',
  },
  {
    id: 'madrid',
    club: 'Real Madrid',
    era: '2009–2018',
    summary: 'Four Champions League titles. 450 goals in 438 matches. Unmatched Galáctico dominance and Ballon d\'Or duplication.',
    badge: 'RMFC',
    accent: 'from-white/10 via-white/5 to-charcoal',
  },
  {
    id: 'juventus',
    club: 'Juventus',
    era: '2018–2021',
    summary: 'Serie A mastery — carrying elite standards into Italian football with consecutive Scudetto titles.',
    badge: 'JUVE',
    accent: 'from-zinc-800/30 via-zinc-900/10 to-charcoal',
  },
  {
    id: 'nassr',
    club: 'Al Nassr',
    era: '2023–Present',
    summary: 'Leading with goals, commanding presence, and massive global influence in Riyadh as the all-time goal quest continues.',
    badge: 'NASR',
    accent: 'from-yellow-950/30 via-yellow-900/10 to-charcoal',
  },
  {
    id: 'portugal',
    club: 'Portugal',
    era: '2003–Present',
    summary: '143 international goals. UEFA EURO 2016 and UEFA Nations League champion. The nation\'s eternal captain.',
    badge: 'PORT',
    accent: 'from-crimson/30 via-crimson/10 to-charcoal',
  },
]

export const TIMELINE_STAGES = [
  {
    id: 'prodigy',
    stage: 'Young Prodigy',
    club: 'Sporting CP',
    period: '2002–2003',
    age: 'Age 17–18',
    title: 'The Lisbon Spark',
    description: 'Raw, explosive, and fearless. A teenager in Lisbon with blistering speed and stepovers that immediately caught the attention of the world.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
    stats: { appearances: '31', goals: '5', honors: 'Supertaça' }
  },
  {
    id: 'superstar',
    stage: 'Manchester Rise',
    club: 'Manchester United',
    period: '2003–2009',
    age: 'Age 18–24',
    title: 'World-Class Metamorphosis',
    description: 'From a gifted winger to the world\'s most devastating attacker. Claimed his first Ballon d\'Or and UEFA Champions League title in red.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    stats: { appearances: '292', goals: '118', honors: '3x EPL, 1x UCL, 1x Ballon d\'Or' }
  },
  {
    id: 'peak',
    stage: 'Galáctico Peak',
    club: 'Real Madrid',
    period: '2009–2018',
    age: 'Age 24–33',
    title: 'The Ultimate Goal Machine',
    description: 'A period of unprecedented goalscoring dominance. Rewrote Real Madrid\'s history books, won 4 Champions Leagues, and secured 4 more Ballon d\'Or trophies.',
    image: 'https://images.unsplash.com/photo-1579952303492-5b49a6e861d0?w=800&q=80',
    stats: { appearances: '438', goals: '450', honors: '4x UCL, 2x La Liga, 4x Ballon d\'Or' }
  },
  {
    id: 'italy',
    stage: 'Italian Mastery',
    club: 'Juventus',
    period: '2018–2021',
    age: 'Age 33–36',
    title: 'The Turin Chapter',
    description: 'Conquered Italy by carrying elite standards and relentless work ethic to Serie A, winning consecutive league titles and scoring 100+ club goals in record time.',
    image: 'https://images.unsplash.com/photo-1518604669459-ee2639499a51?w=800&q=80',
    stats: { appearances: '134', goals: '101', honors: '2x Serie A, 1x Coppa Italia' }
  },
  {
    id: 'ruler',
    stage: 'Global Icon',
    club: 'Al Nassr',
    period: '2023–Present',
    age: 'Age 38–41',
    title: 'Leading in Riyadh',
    description: 'Continuing the legacy in the Middle East. Providing unmatched goal tallies, captaining Al Nassr, and extending the international scoring frontier.',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
    stats: { appearances: '75', goals: '68', honors: 'Arab Club Cup' }
  },
  {
    id: 'legend',
    stage: 'Living Legend',
    club: 'Portugal National Team',
    period: '2003–Present',
    age: 'Age 18–41',
    title: 'The Eternal Captain',
    description: 'A record-breaking international career. The only male player to score in 5 separate World Cups; tying the world record with his 6th World Cup appearance in 2026.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    stats: { appearances: '212', goals: '143', honors: 'EURO 2016, Nations League 2019/2025' }
  }
]

export const ACHIEVEMENTS = [
  {
    title: 'Ballon d\'Or',
    value: '5',
    detail: 'Five times crowned the world\'s best — the standard of elite football.',
    icon: 'star',
    featured: true,
  },
  {
    title: 'Official Career Goals',
    value: '973',
    detail: 'All-time record holder, rapidly approaching the legendary 1,000 milestone.',
    icon: 'target',
    featured: true,
  },
  {
    title: 'UEFA EURO 2016',
    value: 'Winner',
    detail: 'Portugal\'s first major trophy — leading a nation under pressure to glory.',
    icon: 'trophy',
  },
  {
    title: 'UEFA Nations League',
    value: '2x Champion',
    detail: 'Inaugural 2019 champion and 2025 continental triumph.',
    icon: 'shield',
  },
  {
    title: 'Portugal Record',
    value: '143 Goals',
    detail: 'All-time leading scorer for his nation — unmatched devotion and records.',
    icon: 'flag',
  },
  {
    title: 'Champions League',
    value: '140 Goals',
    detail: 'UEFA Champions League all-time leading goal scorer and 5x champion.',
    icon: 'crown',
  },
]

export const STATISTICS = [
  { label: 'Ballon d\'Or', value: 5, suffix: '', max: 5 },
  { label: 'Portugal Goals', value: 143, suffix: '', max: 150 },
  { label: 'UEFA Champions Goals', value: 140, suffix: '', max: 150 },
  { label: 'Official Career Goals', value: 973, suffix: '', max: 1000 },
  { label: 'Major Clubs Conquered', value: 5, suffix: '', max: 5 },
]

export const MEMORABLE_MOMENTS = [
  {
    title: 'Sporting Debut',
    caption: 'A young teenager in Lisbon who would redefine what is possible in sports.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80',
    alt: 'Young prodigy lightning speed start in Lisbon',
  },
  {
    title: 'Old Trafford Ascent',
    caption: 'Old Trafford witnessed the birth of the CR7 brand and a global superstar.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    alt: 'Manchester United rising under floodlights',
  },
  {
    title: 'Galáctico Presentation',
    caption: 'Presented in front of 80,000 screaming fans — starting the Madrid conquest.',
    image: 'https://images.unsplash.com/photo-1579952303492-5b49a6e861d0?w=800&q=80',
    alt: 'Santiago Bernabéu stadium packed to support Ronaldo',
  },
  {
    title: 'European Glory 2016',
    caption: 'Portugal\'s first major title. Standing on the sideline, driving his team.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    alt: 'European Champions gold trophy celebration',
  },
  {
    title: 'Turin Cycle',
    caption: 'Revisiting and claiming Italian dominance with Juve. Scoring 100 goals faster than any player.',
    image: 'https://images.unsplash.com/photo-1518604669459-ee2639499a51?w=800&q=80',
    alt: 'Juventus championship style celebration',
  },
  {
    title: '973-Goal Milestone',
    caption: 'Approaching the ultimate 1000 mark. Relentless goals across three decades.',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
    alt: 'Ronaldo high-jumping for goal celebration silhouette',
  },
]

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&q=80',
    alt: 'Atmospheric stadium silhouette capturing the spotlight and particles',
    mood: 'Stadium Lights',
  },
  {
    src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80',
    alt: 'Red and gold dramatic glow across the turf representing Manchester',
    mood: 'Theatre of Dreams',
  },
  {
    src: 'https://images.unsplash.com/photo-1579952303492-5b49a6e861d0?w=1200&q=80',
    alt: 'Golden Ballon d\'Or prestige atmosphere under editorial spotlights',
    mood: 'Trophy Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
    alt: 'Sleek dark pitch representing Portugal National Pride',
    mood: 'National Colors',
  },
  {
    src: 'https://images.unsplash.com/photo-1518604669459-ee2639499a51?w=1200&q=80',
    alt: 'Vibrant white floodlights of Champions League tournament nights',
    mood: 'Champions League Night',
  },
  {
    src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80',
    alt: 'Deep space aesthetic football training session',
    mood: 'Relentless Pursuit',
  },
]

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1920&q=85'

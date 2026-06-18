export const PAGE_ROUTES = [
  { path: '/', label: 'Experience', id: 'hero' },
  { path: '/about', label: 'About', id: 'about' },
  { path: '/timeline', label: 'Timeline', id: 'timeline' },
  { path: '/journey', label: 'Chapters', id: 'journey' },
  { path: '/museum', label: 'Museum', id: 'achievements' },
  { path: '/stats', label: 'Analytics', id: 'statistics' },
  { path: '/moments', label: 'Moments', id: 'moments' },
]

export const NAV_LINKS = [
  { id: 'hero', label: 'Opening', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
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
  { label: 'Official Goals', value: '900+' },
  { label: 'Portugal Goals', value: '143' },
  { label: 'UCL Record Goals', value: '145' },
]

export const PROFILE_FACTS = [
  { label: 'Nationality', value: 'Portuguese' },
  { label: 'Position', value: 'Forward' },
  { label: 'Current Club', value: 'Al Nassr' },
  { label: 'National Team', value: 'Portugal' },
]

// Club accent colors for premium placeholders
export const CLUB_ACCENTS = {
  sporting: { primary: '#00843D', secondary: '#f5f5f5', label: 'Sporting CP' },
  united: { primary: '#DA020E', secondary: '#FFE500', label: 'Manchester United' },
  madrid: { primary: '#FEBE10', secondary: '#FFFFFF', label: 'Real Madrid' },
  juventus: { primary: '#FFFFFF', secondary: '#000000', label: 'Juventus' },
  nassr: { primary: '#FEE536', secondary: '#FFAD00', label: 'Al Nassr' },
  portugal: { primary: '#DA020E', secondary: '#046A38', label: 'Portugal' },
}

export const CAREER_STAGES = [
  {
    id: 'sporting',
    club: 'Sporting CP',
    era: '2002–2003',
    summary: 'The breakthrough — raw talent, blistering speed, and stepovers forged in Lisbon before the world took notice.',
    badge: 'SCP',
    accent: 'from-emerald-950/30 via-emerald-900/10 to-charcoal',
    accentHex: '#00843D',
  },
  {
    id: 'united',
    club: 'Manchester United',
    era: '2003–2009',
    summary: 'Premier League dominance, Champions League glory, and the acquisition of the first Ballon d\'Or under Sir Alex Ferguson.',
    badge: 'MUFC',
    accent: 'from-red-950/30 via-red-900/10 to-charcoal',
    accentHex: '#DA020E',
  },
  {
    id: 'madrid',
    club: 'Real Madrid',
    era: '2009–2018',
    summary: 'Multiple Champions League titles. Unmatched Galáctico dominance and repeated Ballon d\'Or triumphs. The ultimate goal machine.',
    badge: 'RMFC',
    accent: 'from-white/10 via-white/5 to-charcoal',
    accentHex: '#FEBE10',
  },
  {
    id: 'juventus',
    club: 'Juventus',
    era: '2018–2021',
    summary: 'Serie A mastery — carrying elite standards into Italian football with dominant performances and consistent goal tallies.',
    badge: 'JUVE',
    accent: 'from-zinc-800/30 via-zinc-900/10 to-charcoal',
    accentHex: '#FFFFFF',
  },
  {
    id: 'nassr',
    club: 'Al Nassr',
    era: '2023–Present',
    summary: 'Leading with goals, commanding presence, and massive global influence in Riyadh as the all-time goal quest continues.',
    badge: 'NASR',
    accent: 'from-yellow-950/30 via-yellow-900/10 to-charcoal',
    accentHex: '#FEE536',
  },
  {
    id: 'portugal',
    club: 'Portugal',
    era: '2003–Present',
    summary: '143 international goals. UEFA EURO 2016 and UEFA Nations League 2019 champion. The nation\'s eternal captain.',
    badge: 'PORT',
    accent: 'from-crimson/30 via-crimson/10 to-charcoal',
    accentHex: '#DA020E',
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
    accentHex: '#00843D',
    badge: 'SCP',
  },
  {
    id: 'superstar',
    stage: 'Rising Star',
    club: 'Manchester United',
    period: '2003–2009',
    age: 'Age 18–24',
    title: 'World-Class Metamorphosis',
    description: 'From a gifted winger to the world\'s most devastating attacker. Claimed his first Ballon d\'Or and UEFA Champions League title in red.',
    accentHex: '#DA020E',
    badge: 'MUFC',
  },
  {
    id: 'peak',
    stage: 'Prime Dominance',
    club: 'Real Madrid',
    period: '2009–2018',
    age: 'Age 24–33',
    title: 'The Ultimate Goal Machine',
    description: 'A period of unprecedented goalscoring dominance. Rewrote Real Madrid\'s history books, won multiple Champions League titles, and secured repeated Ballon d\'Or triumphs.',
    accentHex: '#FEBE10',
    badge: 'RMFC',
  },
  {
    id: 'italy',
    stage: 'Record Breaker',
    club: 'Juventus',
    period: '2018–2021',
    age: 'Age 33–36',
    title: 'The Turin Chapter',
    description: 'Conquered Italy by carrying elite standards and relentless work ethic to Serie A, winning league titles and continuing to score at an extraordinary rate.',
    accentHex: '#FFFFFF',
    badge: 'JUVE',
  },
  {
    id: 'ruler',
    stage: 'Living Legend',
    club: 'Al Nassr & Portugal',
    period: '2023–Present',
    age: 'Age 38+',
    title: 'The Eternal Standard',
    description: 'Continuing the legacy across continents. Leading Al Nassr while captaining Portugal — extending the international scoring frontier as the all-time leading scorer with 143 goals.',
    accentHex: '#FEE536',
    badge: 'CR7',
  },
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
    value: '900+',
    detail: 'All-time record holder, surpassing 900 official career goals across all competitions.',
    icon: 'target',
    featured: true,
  },
  {
    title: 'UEFA EURO 2016',
    value: 'Winner',
    detail: 'Portugal\'s first major trophy — leading a nation under pressure to continental glory.',
    icon: 'trophy',
  },
  {
    title: 'UEFA Nations League',
    value: '2019',
    detail: 'Inaugural UEFA Nations League champion with Portugal.',
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
    value: '145 Goals',
    detail: 'UEFA Champions League all-time leading goal scorer in club competition.',
    icon: 'crown',
  },
]

export const STATISTICS = [
  { label: 'Ballon d\'Or', value: 5, suffix: '', max: 5 },
  { label: 'Portugal Goals', value: 143, suffix: '', max: 150 },
  { label: 'UEFA Club Goals', value: 145, suffix: '', max: 150 },
  { label: 'Official Career Goals', value: 900, suffix: '+', max: 1000 },
  { label: 'Major Clubs', value: 5, suffix: '', max: 5 },
]

export const MEMORABLE_MOMENTS = [
  {
    title: 'Sporting Debut',
    caption: 'A young teenager in Lisbon who would redefine what is possible in sports.',
    accentHex: '#00843D',
    badge: 'SCP',
    alt: 'Young prodigy lightning speed start in Lisbon',
  },
  {
    title: 'Old Trafford Ascent',
    caption: 'Old Trafford witnessed the birth of the CR7 brand and a global superstar.',
    accentHex: '#DA020E',
    badge: 'MUFC',
    alt: 'Manchester United rising under floodlights',
  },
  {
    title: 'Galáctico Presentation',
    caption: 'Presented in front of screaming fans — starting the Madrid conquest.',
    accentHex: '#FEBE10',
    badge: 'RMFC',
    alt: 'Santiago Bernabéu stadium packed to support Ronaldo',
  },
  {
    title: 'European Glory 2016',
    caption: 'Portugal\'s first major title. Standing on the sideline, driving his team to EURO victory.',
    accentHex: '#DA020E',
    badge: 'PORT',
    alt: 'European Champions gold trophy celebration',
  },
  {
    title: 'Turin Chapter',
    caption: 'Carrying elite standards to Serie A. Conquering Italy with relentless determination.',
    accentHex: '#FFFFFF',
    badge: 'JUVE',
    alt: 'Juventus championship style celebration',
  },
  {
    title: '900+ Goal Milestone',
    caption: 'Surpassing 900 official career goals. Relentless scoring across three decades.',
    accentHex: '#FEE536',
    badge: 'CR7',
    alt: 'Ronaldo celebrating a career milestone goal',
  },
]

export const GALLERY_IMAGES = [
  {
    accentHex: '#D4AF37',
    badge: 'CR7',
    alt: 'Atmospheric stadium silhouette capturing the spotlight and particles',
    mood: 'Stadium Lights',
  },
  {
    accentHex: '#DA020E',
    badge: 'MUFC',
    alt: 'Red and gold dramatic glow across the turf representing Manchester',
    mood: 'Theatre of Dreams',
  },
  {
    accentHex: '#FEBE10',
    badge: 'RMFC',
    alt: 'Golden Ballon d\'Or prestige atmosphere under editorial spotlights',
    mood: 'Trophy Room',
  },
  {
    accentHex: '#046A38',
    badge: 'PORT',
    alt: 'Sleek dark pitch representing Portugal National Pride',
    mood: 'National Colors',
  },
  {
    accentHex: '#1E3A5F',
    badge: 'UCL',
    alt: 'Vibrant white floodlights of Champions League tournament nights',
    mood: 'Champions Night',
  },
  {
    accentHex: '#FEE536',
    badge: 'NASR',
    alt: 'Deep space aesthetic football training session',
    mood: 'Relentless Pursuit',
  },
]

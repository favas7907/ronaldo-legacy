export const PAGE_ROUTES = [
  { path: '/', label: 'Experience', id: 'hero' },
  { path: '/about', label: 'About', id: 'about' },
  { path: '/journey', label: 'Journey', id: 'journey' },
  { path: '/museum', label: 'Museum', id: 'achievements' },
  { path: '/stats', label: 'Analytics', id: 'statistics' },
  { path: '/moments', label: 'Moments', id: 'moments' },
]

export const NAV_LINKS = [
  { id: 'hero', label: 'Opening', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'journey', label: 'Journey', path: '/journey' },
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

// Unified career eras — merged timeline + career stages
export const CAREER_ERAS = [
  {
    id: 'sporting',
    stage: 'The Origin',
    club: 'Sporting CP',
    period: '2002–2003',
    age: '17–18',
    title: 'The Lisbon Spark',
    summary: 'Raw, explosive, and fearless. A teenager in Lisbon with blistering speed and stepovers that immediately caught the attention of the world.',
    badge: 'SCP',
    accent: 'from-emerald-950/30 via-emerald-900/10 to-charcoal',
    accentHex: '#00843D',
  },
  {
    id: 'united',
    stage: 'Rising Star',
    club: 'Manchester United',
    period: '2003–2009',
    age: '18–24',
    title: 'World-Class Metamorphosis',
    summary: 'From a gifted winger to the world\'s most devastating attacker. Premier League dominance, Champions League glory, and the first Ballon d\'Or under Sir Alex Ferguson.',
    badge: 'MUFC',
    accent: 'from-red-950/30 via-red-900/10 to-charcoal',
    accentHex: '#DA020E',
  },
  {
    id: 'madrid',
    stage: 'Prime Dominance',
    club: 'Real Madrid',
    period: '2009–2018',
    age: '24–33',
    title: 'The Ultimate Goal Machine',
    summary: 'A period of unprecedented goalscoring dominance. Multiple Champions League titles, repeated Ballon d\'Or triumphs, and the ultimate Galáctico era.',
    badge: 'RMFC',
    accent: 'from-white/10 via-white/5 to-charcoal',
    accentHex: '#FEBE10',
  },
  {
    id: 'juventus',
    stage: 'Record Breaker',
    club: 'Juventus',
    period: '2018–2021',
    age: '33–36',
    title: 'The Turin Chapter',
    summary: 'Conquered Italy by carrying elite standards and relentless work ethic to Serie A, winning league titles and scoring at an extraordinary rate.',
    badge: 'JUVE',
    accent: 'from-zinc-800/30 via-zinc-900/10 to-charcoal',
    accentHex: '#FFFFFF',
  },
  {
    id: 'nassr',
    stage: 'Living Legend',
    club: 'Al Nassr',
    period: '2023–Present',
    age: '38+',
    title: 'The Eternal Standard',
    summary: 'Leading with goals, commanding presence, and massive global influence in Riyadh as the all-time goal quest continues toward 1,000.',
    badge: 'NASR',
    accent: 'from-yellow-950/30 via-yellow-900/10 to-charcoal',
    accentHex: '#FEE536',
  },
  {
    id: 'portugal',
    stage: 'National Icon',
    club: 'Portugal',
    period: '2003–Present',
    age: '18–39+',
    title: 'The Captain Eternal',
    summary: '143 international goals. UEFA EURO 2016 and UEFA Nations League 2019 champion. The most-capped European player and the nation\'s eternal captain.',
    badge: 'PORT',
    accent: 'from-crimson/30 via-crimson/10 to-charcoal',
    accentHex: '#DA020E',
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

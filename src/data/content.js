export const PAGE_ROUTES = [
  { path: '/', label: 'Home', id: 'home' },
  { path: '/legacy', label: 'Legacy', id: 'legacy' },
  { path: '/records', label: 'Records', id: 'records' },
  { path: '/archive', label: 'Archive', id: 'archive' },
]

export const NAV_LINKS = [
  { id: 'about', label: 'About', path: '/legacy' },
  { id: 'journey', label: 'Journey', path: '/legacy' },
  { id: 'achievements', label: 'Achievements', path: '/records' },
  { id: 'statistics', label: 'Statistics', path: '/records' },
  { id: 'moments', label: 'Moments', path: '/archive' },
  { id: 'gallery', label: 'Gallery', path: '/archive' },
]

export const HOME_CHAPTERS = [
  {
    path: '/legacy',
    number: '01',
    title: 'The Legacy',
    subtitle: 'Identity, journey, and the eras that shaped greatness.',
    accent: 'from-emerald-950/20 via-charcoal to-void',
  },
  {
    path: '/records',
    number: '02',
    title: 'The Records',
    subtitle: 'Trophy room prestige. Numbers that define an era.',
    accent: 'from-gold/10 via-charcoal to-void',
  },
  {
    path: '/archive',
    number: '03',
    title: 'The Archive',
    subtitle: 'Iconic moments and cinematic frames from a legendary career.',
    accent: 'from-crimson/10 via-charcoal to-void',
  },
]

export const HERO_STATS = [
  { label: 'Ballon d\'Or', value: '5' },
  { label: 'Career Goals', value: '900+' },
  { label: 'Portugal Goals', value: '143' },
  { label: 'UCL Record', value: '141+' },
]

export const PROFILE_FACTS = [
  { label: 'Nationality', value: 'Portuguese' },
  { label: 'Position', value: 'Forward' },
  { label: 'Current Club', value: 'Al Nassr' },
  { label: 'National Team', value: 'Portugal' },
]

export const ABOUT_PORTRAIT =
  'https://images.unsplash.com/photo-1517466787929-bc90951f0977?w=800&q=80'

export const CAREER_STAGES = [
  {
    id: 'sporting',
    club: 'Sporting CP',
    era: '2002–2003',
    summary: 'The breakthrough — raw talent forged in Lisbon before the world took notice.',
    badge: 'SP',
    accent: 'from-emerald-900/40 to-charcoal',
  },
  {
    id: 'united',
    club: 'Manchester United',
    era: '2003–2009',
    summary: 'Premier League dominance, Champions League glory, and global superstardom.',
    badge: 'MU',
    accent: 'from-red-950/40 to-charcoal',
  },
  {
    id: 'madrid',
    club: 'Real Madrid',
    era: '2009–2018',
    summary: 'Four Champions League titles. Records rewritten. Greatness was repeated.',
    badge: 'RM',
    accent: 'from-white/10 to-charcoal',
  },
  {
    id: 'juventus',
    club: 'Juventus',
    era: '2018–2021',
    summary: 'Serie A mastery — carrying elite standards into Italian football.',
    badge: 'JU',
    accent: 'from-zinc-700/30 to-charcoal',
  },
  {
    id: 'nassr',
    club: 'Al Nassr',
    era: '2023–Present',
    summary: 'Continuing the legacy — leading with presence, goals, and global influence.',
    badge: 'AN',
    accent: 'from-yellow-900/30 to-charcoal',
  },
  {
    id: 'portugal',
    club: 'Portugal',
    era: '2003–Present',
    summary: '143 goals. EURO 2016. Nations League 2019. A nation\'s eternal captain.',
    badge: 'PT',
    accent: 'from-crimson/30 to-charcoal',
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
    detail: 'Nine hundred and counting. Records were broken.',
    icon: 'target',
    featured: true,
  },
  {
    title: 'UEFA EURO 2016',
    value: 'Winner',
    detail: 'Portugal\'s first major trophy — a legacy built under pressure.',
    icon: 'trophy',
  },
  {
    title: 'UEFA Nations League',
    value: '2019',
    detail: 'Nations League glory — continental excellence reaffirmed.',
    icon: 'shield',
  },
  {
    title: 'Portugal Record',
    value: '143',
    detail: 'All-time leading scorer for his nation — unmatched devotion.',
    icon: 'flag',
  },
  {
    title: 'UEFA Club Record',
    value: '145',
    detail: 'UEFA Champions League all-time leading scorer — 141+ and counting.',
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
    title: 'Sporting Breakthrough',
    caption: 'A teenager in Lisbon who would redefine what possible means.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    alt: 'Football on a pristine pitch at dawn — the beginning of greatness',
  },
  {
    title: 'Manchester United Rise',
    caption: 'Old Trafford witnessed the birth of a global icon.',
    image: 'https://images.unsplash.com/photo-1526234204984-49680e8504ae?w=800&q=80',
    alt: 'Dramatic stadium atmosphere under floodlights',
  },
  {
    title: 'Real Madrid Domination',
    caption: 'Four Champions League crowns. The Bernabéu belonged to him.',
    image: 'https://images.unsplash.com/photo-1459864354623-b641ff879278?w=800&q=80',
    alt: 'Grand football stadium illuminated at night',
  },
  {
    title: 'Euro 2016 Triumph',
    caption: 'Portugal\'s first major trophy — tears, pride, immortality.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    alt: 'Celebratory football moment on the pitch',
  },
  {
    title: 'Nations League Glory',
    caption: 'Continental excellence proven once again in 2019.',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
    alt: 'Intense training session under stadium lights',
  },
  {
    title: '900-Goal Milestone',
    caption: 'Nine hundred official goals. History continues to be written.',
    image: 'https://images.unsplash.com/photo-1579952303492-5b49a6e861d0?w=800&q=80',
    alt: 'Silhouette of a footballer celebrating a goal',
  },
]

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1526234204984-49680e8504ae?w=1200&q=80',
    alt: 'Stadium celebration under dramatic floodlights',
    mood: 'Stadium Celebration',
  },
  {
    src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80',
    alt: 'Intense training portrait on the pitch',
    mood: 'Training Intensity',
  },
  {
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
    alt: 'National team hero shot on the pitch',
    mood: 'National Pride',
  },
  {
    src: 'https://images.unsplash.com/photo-1518604669459-ee2639499a51?w=1200&q=80',
    alt: 'Trophy night celebration atmosphere',
    mood: 'Trophy Night',
  },
  {
    src: 'https://images.unsplash.com/photo-1579952303492-5b49a6e861d0?w=1200&q=80',
    alt: 'Iconic goal celebration silhouette',
    mood: 'Iconic Moment',
  },
  {
    src: 'https://images.unsplash.com/photo-1459864354623-b641ff879278?w=1200&q=80',
    alt: 'Luxury cinematic football montage atmosphere',
    mood: 'Legacy Montage',
  },
]

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1920&q=85'

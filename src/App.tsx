import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Puzzle, 
  Trophy, 
  Bot, 
  Rocket, 
  ChevronRight,
  Zap,
  CheckCircle2,
  TrendingUp,
  Coins,
  Lightbulb,
  Calendar,
  Smile,
  Meh,
  UserCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { cn } from './lib/utils';

// --- Types ---

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: 'primary' | 'secondary' | 'tertiary';
  delay?: number;
}

interface TopicProgressProps {
  label: string;
  percentage: number;
  color: 'primary' | 'secondary';
}

interface ActivityItem {
  id: string;
  topic: string;
  subtopic: string;
  date: string;
  accuracy: number;
  xp: number;
  icon: string;
  iconBg: string;
  iconColor: string;
}

// --- Mock Data ---

const weeklyData = [
  { name: 'S', value: 40 },
  { name: 'S', value: 60 },
  { name: 'R', value: 90, active: true },
  { name: 'K', value: 30 },
  { name: 'J', value: 70 },
  { name: 'S', value: 45 },
  { name: 'M', value: 20 },
];

const activities: ActivityItem[] = [
  {
    id: '1',
    topic: 'Mengenal Angka Besar',
    subtopic: 'Latihan Mandiri',
    date: '14 Okt 2023',
    accuracy: 90,
    xp: 120,
    icon: '123',
    iconBg: 'bg-primary-container',
    iconColor: 'text-primary'
  },
  {
    id: '2',
    topic: 'Tabel Perkalian 7 & 8',
    subtopic: 'Kuis Mingguan',
    date: '12 Okt 2023',
    accuracy: 75,
    xp: 85,
    icon: '×',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-secondary'
  },
  {
    id: '3',
    topic: 'Pembagian Dasar',
    subtopic: 'AI Challenge',
    date: '10 Okt 2023',
    accuracy: 100,
    xp: 200,
    icon: '÷',
    iconBg: 'bg-tertiary-container',
    iconColor: 'text-tertiary'
  }
];

// --- Components ---

const StatCard = ({ icon, label, value, color, delay = 0 }: StatCardProps) => {
  const colors = {
    primary: 'bg-primary-container/30 border-primary-container text-primary',
    secondary: 'bg-secondary-container/30 border-secondary-container text-secondary',
    tertiary: 'bg-tertiary-container/30 border-tertiary-container text-tertiary',
  };

  const textColors = {
    primary: 'text-on-primary-container',
    secondary: 'text-on-secondary-container',
    tertiary: 'text-on-tertiary-container',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={cn(
        "p-6 rounded-2xl flex flex-col justify-between items-start border-b-4 transition-transform hover:scale-[1.02]",
        colors[color]
      )}
    >
      <div className="mb-4">{icon}</div>
      <div>
        <p className={cn("text-xs font-bold uppercase tracking-widest opacity-60", textColors[color])}>
          {label}
        </p>
        <h2 className={cn("text-4xl font-black", textColors[color])}>
          {value}
        </h2>
      </div>
    </motion.div>
  );
};

const TopicProgress = ({ label, percentage, color }: TopicProgressProps) => {
  const barColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  };
  const containerColors = {
    primary: 'bg-primary-container',
    secondary: 'bg-secondary-container',
  };
  const textColors = {
    primary: 'text-on-primary-container',
    secondary: 'text-on-secondary-container',
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="font-bold text-on-surface-variant">{label}</span>
        <span className={cn("px-3 py-1 rounded-full text-xs font-extrabold", containerColors[color], textColors[color])}>
          {percentage}%
        </span>
      </div>
      <div className="h-6 bg-white rounded-full overflow-hidden p-1 shadow-inner">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn("h-full rounded-full", barColors[color])}
        />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-primary/20">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 glass border-b-2 border-primary-container/20 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-primary italic tracking-tight">
            MathPlayground
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-primary font-bold border-b-4 border-primary pb-1">Analysis</a>
            <a href="#" className="text-on-surface-variant/60 font-medium hover:text-primary transition-colors">Parents</a>
            <a href="#" className="text-on-surface-variant/60 font-medium hover:text-primary transition-colors">Settings</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="bg-primary-container text-on-primary-container px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-sm">
              <Trophy className="w-5 h-5 fill-current" />
              <span>1,250 Points</span>
            </div>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <UserCircle className="w-10 h-10" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto flex relative">
        {/* Main Content */}
        <main className="flex-1 lg:mr-72 p-6 md:p-10 space-y-10">
          
          {/* Hero Section */}
          <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            {/* Profile Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="xl:col-span-5 bg-surface-container-lowest p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 border-2 border-primary-container/10 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-container/20 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-28 h-28 rounded-full border-4 border-secondary-container p-1 bg-white shadow-md overflow-hidden">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Siti&backgroundColor=ffdfbf" 
                    alt="Siti Avatar"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  LV. 12
                </div>
              </div>
              <div className="text-center md:text-left space-y-1">
                <h1 className="text-3xl font-black text-on-surface">Halo, Siti! 👋</h1>
                <p className="text-on-surface-variant font-semibold text-lg">Kelas 5 • Juara Berhitung</p>
                <div className="mt-4 inline-flex items-center gap-3 bg-tertiary-container text-on-tertiary-container px-5 py-2 rounded-full font-bold pill-shadow">
                  <Zap className="w-5 h-5 fill-current" />
                  <span>683 XP</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard 
                icon={<CheckCircle2 className="w-8 h-8 text-secondary" />}
                label="Kuis Selesai"
                value="24"
                color="secondary"
                delay={0.1}
              />
              <StatCard 
                icon={<TrendingUp className="w-8 h-8 text-primary" />}
                label="Akurasi Rata-rata"
                value="88%"
                color="primary"
                delay={0.2}
              />
              <StatCard 
                icon={<Coins className="w-8 h-8 text-tertiary" />}
                label="Koin"
                value="450"
                color="tertiary"
                delay={0.3}
              />
            </div>
          </section>

          {/* Middle Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Insights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-tertiary-container/40 to-surface-container p-8 rounded-3xl border-2 border-tertiary-container/20 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-5">
                <Bot className="w-32 h-32" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <Bot className="w-8 h-8 text-tertiary" />
                </div>
                <h3 className="text-2xl font-black text-on-tertiary-container">Insight from ibuguru.AI</h3>
              </div>
              <p className="text-lg text-on-tertiary-container/80 leading-relaxed mb-8 font-medium italic">
                "Wah, Siti hebat! Kemajuanmu di topik <span className="font-black text-tertiary">Bilangan</span> meningkat 15% minggu ini. Jangan lupa latihan perkalian hari ini ya!" 🚀
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/40">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black text-tertiary uppercase tracking-widest">Rekomendasi Hari Ini</span>
                  <Lightbulb className="w-5 h-5 text-tertiary" />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-tertiary text-on-tertiary rounded-2xl flex items-center justify-center font-black text-xl shadow-md">
                      ×
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">Tantangan Perkalian Cepat</h4>
                      <p className="text-sm text-on-surface-variant font-medium">Latihan 5 menit • +50 XP</p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto bg-tertiary text-on-tertiary px-8 py-3 rounded-full font-black hover:shadow-lg transition-all active:scale-95 pill-shadow">
                    Mulai
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Weekly Performance Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-surface-container-low p-8 rounded-3xl border-2 border-primary-container/20"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-on-surface">Performa Mingguan</h3>
                <div className="bg-white px-4 py-1.5 rounded-full text-sm font-bold text-primary flex items-center gap-2 shadow-sm">
                  <Calendar className="w-4 h-4" />
                  <span>7-14 Okt</span>
                </div>
              </div>
              
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#3c4758', fontSize: 12, fontWeight: 700 }}
                      dy={10}
                    />
                    <Bar dataKey="value" radius={[20, 20, 20, 20]} barSize={40}>
                      {weeklyData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.active ? '#0060a9' : '#d3e4ff'} 
                          className="transition-all duration-300 hover:fill-primary"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </section>

          {/* Bottom Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Topic Strength */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-7 bg-surface-container-highest p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-black text-on-surface mb-8 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-secondary" />
                Kekuatan Topik
              </h3>
              <div className="space-y-8">
                <TopicProgress label="Bilangan" percentage={50} color="secondary" />
                <TopicProgress label="Hitung Dasar" percentage={75} color="primary" />
              </div>
            </motion.div>

            {/* Weekly Summary */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="lg:col-span-5 bg-surface-container-low p-8 rounded-3xl flex flex-col justify-center gap-8"
            >
              <h3 className="text-xs font-black text-on-surface-variant text-center uppercase tracking-[0.2em]">
                Ringkasan Minggu Ini
              </h3>
              <div className="flex justify-around items-center">
                <div className="text-center group">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-xl transition-transform group-hover:scale-110">
                    <span className="text-3xl font-black text-green-600">13</span>
                    <span className="text-[10px] font-black text-green-800/40 uppercase">Benar</span>
                  </div>
                  <Smile className="w-8 h-8 text-green-500 mx-auto mt-4" />
                </div>
                <div className="text-center group">
                  <div className="w-24 h-24 bg-error-container rounded-full flex flex-col items-center justify-center border-4 border-white shadow-xl transition-transform group-hover:scale-110">
                    <span className="text-3xl font-black text-error">9</span>
                    <span className="text-[10px] font-black text-error/40 uppercase">Salah</span>
                  </div>
                  <Meh className="w-8 h-8 text-error mx-auto mt-4" />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Recent Activity Table */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-primary-container/10"
          >
            <div className="p-8 border-b border-surface-container">
              <h3 className="text-2xl font-black text-on-surface">Aktivitas Terbaru</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low text-on-surface-variant uppercase text-[10px] font-black tracking-widest">
                    <th className="px-8 py-4">Topik</th>
                    <th className="px-8 py-4">Tanggal</th>
                    <th className="px-8 py-4">Akurasi</th>
                    <th className="px-8 py-4">Poin Diperoleh</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {activities.map((item) => (
                    <tr key={item.id} className="hover:bg-primary-container/10 transition-colors group cursor-pointer">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-sm", item.iconBg, item.iconColor)}>
                            {item.icon}
                          </div>
                          <div>
                            <p className="font-bold text-on-surface">{item.topic}</p>
                            <p className="text-xs text-on-surface-variant font-medium">{item.subtopic}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-on-surface-variant font-bold text-sm">{item.date}</td>
                      <td className="px-8 py-6">
                        <span className={cn(
                          "px-4 py-1 rounded-full font-black text-xs",
                          item.accuracy >= 90 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        )}>
                          {item.accuracy}%
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-primary font-black">
                          <Zap className="w-4 h-4 fill-current" />
                          <span>+{item.xp} XP</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="p-2 rounded-full hover:bg-white transition-colors">
                          <ChevronRight className="w-5 h-5 text-on-surface-variant" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        </main>

        {/* Sidebar */}
        <aside className="hidden lg:flex fixed right-0 top-20 w-72 flex-col p-6 z-40 bg-surface-container-lowest rounded-l-[3rem] h-[calc(100vh-100px)] mt-4 shadow-2xl shadow-primary/5 border-l border-primary-container/10">
          <div className="flex flex-col items-center mb-10 px-4">
            <div className="w-24 h-24 bg-tertiary-container rounded-full mb-4 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://api.dicebear.com/7.x/bottts/svg?seed=MathBuddy&backgroundColor=eddcff" 
                alt="Math Buddy Mascot"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-black text-primary">Math Buddy</h3>
            <p className="text-sm font-bold text-on-surface-variant/60">Ready to Learn?</p>
          </div>

          <nav className="flex flex-col gap-2">
            <SidebarLink icon={<BookOpen className="w-5 h-5" />} label="Lessons" />
            <SidebarLink icon={<Puzzle className="w-5 h-5" />} label="Quizzes" />
            <SidebarLink icon={<Trophy className="w-5 h-5" />} label="Rewards" />
            <SidebarLink icon={<Bot className="w-5 h-5" />} label="AI Buddy" active />
          </nav>

          <div className="mt-auto">
            <button className="w-full bg-primary text-on-primary py-5 rounded-full font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-3 pill-shadow">
              <Rocket className="w-6 h-6" />
              Get Help!
            </button>
          </div>
        </aside>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-primary-container/20 py-3 px-6 flex justify-between items-center z-50">
        <MobileNavLink icon={<LayoutDashboard className="w-6 h-6" />} label="Analisis" active />
        <MobileNavLink icon={<BookOpen className="w-6 h-6" />} label="Belajar" />
        <div className="relative -mt-12">
          <button className="bg-primary text-on-primary p-5 rounded-full shadow-2xl shadow-primary/40 ring-8 ring-background pill-shadow">
            <Rocket className="w-6 h-6" />
          </button>
        </div>
        <MobileNavLink icon={<Trophy className="w-6 h-6" />} label="Hadiah" />
        <MobileNavLink icon={<Bot className="w-6 h-6" />} label="Robot" />
      </nav>
    </div>
  );
}

function SidebarLink({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a 
      href="#" 
      className={cn(
        "flex items-center gap-4 p-4 rounded-2xl transition-all group",
        active 
          ? "bg-primary-container text-primary font-black ring-2 ring-primary/10" 
          : "text-on-surface-variant/60 font-bold hover:text-primary hover:bg-primary-container/20"
      )}
    >
      <span className={cn("transition-transform group-hover:scale-110", active ? "fill-current" : "")}>
        {icon}
      </span>
      <span className="text-sm">{label}</span>
    </a>
  );
}

function MobileNavLink({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={cn(
      "flex flex-col items-center gap-1",
      active ? "text-primary" : "text-on-surface-variant/40"
    )}>
      {icon}
      <span className="text-[10px] font-black uppercase tracking-tighter">{label}</span>
    </button>
  );
}

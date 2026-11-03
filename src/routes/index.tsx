import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight, Play, BarChart3, LineChart, ShieldCheck, Calculator, Scale, Landmark, TrendingUp,
  TrendingDown, Target, Clapperboard, Image as ImageIcon, PenTool, QrCode, FileText, Music, Sparkles,
  Heart, MessageCircle, Share2, ImagePlus, Star, ShoppingCart, Crown, Dice5, Trophy, Car, Swords,
  Users, Menu, X, Check, Leaf, Wrench, Store, Gamepad2, Globe2, BadgeDollarSign,
} from "lucide-react";
import village from "@/assets/village-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChartVillage — Grow Your Trades in the Green Valley of Charts" },
      { name: "description", content: "Forex calculators, trader community, marketplace, games and live markets in one green valley." },
      { property: "og:title", content: "ChartVillage — Green Valley of Charts" },
      { property: "og:description", content: "Where nature meets finance — build, analyze, and thrive." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-display text-xl font-bold text-secondary-foreground">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
        <Leaf className="h-5 w-5" />
        <BarChart3 className="absolute -right-1 -bottom-1 h-4 w-4 rounded bg-accent p-0.5 text-accent-foreground" />
      </span>
      ChartVillage
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Features", "Markets", "Pricing", "About", "Blog"];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-foreground/80 transition hover:text-primary">{l}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary">Login</button>
          <button className="bg-cta shadow-soft rounded-lg px-5 py-2 text-sm font-bold text-accent-foreground">Get Started</button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="space-y-3 border-t border-border px-4 py-4 md:hidden">
          {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} className="block font-medium">{l}</a>)}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 rounded-lg border border-border py-2 font-semibold">Login</button>
            <button className="bg-cta flex-1 rounded-lg py-2 font-bold text-accent-foreground">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [demo, setDemo] = useState(false);
  return (
    <section id="features" className="bg-valley">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
            Grow Your Trades in the <span className="text-primary">Green Valley</span> of Charts
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">Where nature meets finance — build, analyze, and thrive.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#valley" className="shadow-soft inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">
              Start Exploring <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={() => setDemo(true)} className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-card px-6 py-3 font-semibold text-primary hover:bg-secondary">
              <Play className="h-4 w-4" /> Watch Demo <span className="text-xs text-muted-foreground">2:34</span>
            </button>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-bull" /> Live Market Data · <span className="text-primary">+2.4% Today</span>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[[BarChart3, "100+ Candlestick Villages"], [LineChart, "Real-time Analytics"], [ShieldCheck, "Secure & Reliable"]].map(([I, t]) => {
              const Icon = I as typeof BarChart3;
              return (
                <div key={t as string} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                  <Icon className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-sm font-semibold">{t as string}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <img src={village} alt="3D isometric green village with candlestick chart roofs" width={1280} height={1024} className="w-full rounded-3xl object-cover" />
        </div>
      </div>
      {demo && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-night/80 p-4" onClick={() => setDemo(false)}>
          <div className="aspect-video w-full max-w-3xl rounded-2xl bg-night text-night-foreground grid place-items-center border border-primary/40">
            <div className="text-center">
              <Play className="mx-auto h-14 w-14 text-accent" />
              <p className="mt-3 font-display text-lg">INTRO: How ChartVillage Works</p>
              <p className="text-sm opacity-70">Demo video · 2:34</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl font-bold text-secondary-foreground sm:text-3xl">{title}</h2>
      <p className="mt-1 text-muted-foreground">{sub}</p>
    </div>
  );
}

function ToolCard({ icon: Icon, name, desc }: { icon: typeof Calculator; name: string; desc: string }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></div>
      <h4 className="mt-4 font-semibold">{name}</h4>
      <p className="mt-1 flex-1 text-sm text-muted-foreground">{desc}</p>
      <button className="mt-4 rounded-lg bg-primary py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">Use Free</button>
    </div>
  );
}

function Tools() {
  const forex = [
    [Calculator, "Pip Calculator", "Find the pip value for any pair, account currency and lot size."],
    [Scale, "Lot Size Calculator", "Size positions from account balance, risk % and stop-loss pips."],
    [Landmark, "Margin Calculator", "Required margin for a trade at your broker's leverage."],
    [TrendingUp, "Profit Calculator", "Projected P/L from entry, exit and position size."],
    [TrendingDown, "Drawdown Calculator", "See how losing streaks hit equity and the gain needed to recover."],
    [Target, "Risk Reward Calculator", "Compare stop and target to plan trades at 1:2 or better."],
  ] as const;
  const other = [
    [Clapperboard, "SVGator-style Animation", "Animate SVG logos and icons free in the browser."],
    [ImageIcon, "Thumbnail Maker", "YouTube thumbnails for your chart breakdown videos."],
    [PenTool, "Logo Maker", "Build a clean brand mark for your trading channel."],
    [QrCode, "QR Generator", "QR codes for your signal group or payment link."],
    [FileText, "Image to PDF", "Merge chart screenshots into one trade journal PDF."],
    [Music, "Video to MP3", "Extract audio from market commentary videos."],
    [Sparkles, "AI Caption Generator", "Captions for your trade recap posts in seconds."],
  ] as const;
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <SectionTitle title="Forex Tools" sub="Plan every trade with precise risk numbers." />
        <div className="grid gap-4 sm:grid-cols-2">{forex.map(([i, n, d]) => <ToolCard key={n} icon={i} name={n} desc={d} />)}</div>
      </div>
      <div>
        <SectionTitle title="Other Tools" sub="Creator utilities for traders who publish." />
        <div className="grid gap-4 sm:grid-cols-2">{other.map(([i, n, d]) => <ToolCard key={n} icon={i} name={n} desc={d} />)}</div>
      </div>
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  return <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{name.split(" ").map((s) => s[0]).join("")}</div>;
}

function Community() {
  const traders = [
    { name: "Rafiq Hasan", tag: "XAUUSD swing trader", wr: "68%", f: "12.4k" },
    { name: "Nadia Islam", tag: "EURUSD scalper · London session", wr: "61%", f: "8.9k" },
    { name: "Tanvir Ahmed", tag: "Price action · H4 / Daily", wr: "72%", f: "21.1k" },
  ];
  const [following, setFollowing] = useState<Record<string, boolean>>({});
  const [posts, setPosts] = useState([
    { name: "Tanvir Ahmed", time: "2h", text: "GBPJPY broke the descending trendline on H4 and retested 191.20. Long with SL below 190.60, TP 193.00 — 1:3 RR.", likes: 214, chart: true },
    { name: "Nadia Islam", time: "5h", text: "NFP Friday: no trades 30 min before the release. Spreads widen and stops get hunted. Protect your capital first.", likes: 98, chart: false },
  ]);
  const [draft, setDraft] = useState("");
  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <aside className="space-y-4">
        <h3 className="font-display text-lg font-bold">Top Traders</h3>
        {traders.map((t) => (
          <div key={t.name} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <Avatar name={t.name} />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{t.name}</p>
              <p className="truncate text-xs text-muted-foreground">{t.tag}</p>
              <p className="text-xs text-primary">Win rate {t.wr} · {t.f} followers</p>
            </div>
            <button onClick={() => setFollowing({ ...following, [t.name]: !following[t.name] })}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold ${following[t.name] ? "border border-border" : "bg-primary text-primary-foreground"}`}>
              {following[t.name] ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </aside>
      <div className="space-y-5">
        <div className="rounded-2xl border border-border bg-card p-4">
          <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={3} placeholder="Share your trade idea, entry, SL and TP…"
            className="w-full resize-none rounded-xl bg-muted p-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <div className="mt-3 flex items-center justify-between">
            <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-primary">
              <ImagePlus className="h-4 w-4" /> Trading screenshot <input type="file" accept="image/*" className="hidden" />
            </label>
            <button onClick={() => { if (draft.trim()) { setPosts([{ name: "You", time: "now", text: draft, likes: 0, chart: false }, ...posts]); setDraft(""); } }}
              className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Post</button>
          </div>
        </div>
        {posts.map((p, i) => (
          <article key={i} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-3"><Avatar name={p.name} /><div><p className="font-semibold">{p.name}</p><p className="text-xs text-muted-foreground">{p.time} ago</p></div></div>
            <p className="mt-3 text-sm leading-relaxed">{p.text}</p>
            {p.chart && <MiniChart />}
            <div className="mt-4 flex gap-6 border-t border-border pt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Heart className="h-4 w-4" />{p.likes}</span>
              <span className="flex items-center gap-1.5"><MessageCircle className="h-4 w-4" />Comment</span>
              <span className="flex items-center gap-1.5"><Share2 className="h-4 w-4" />Share</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function MiniChart() {
  const c = [40, 52, 48, 60, 55, 70, 66, 78, 72, 88, 84, 95];
  return (
    <div className="mt-4 flex h-40 items-end gap-2 rounded-xl bg-night p-4">
      {c.map((h, i) => (
        <div key={i} className={`flex-1 rounded-sm ${i > 0 && h < (c[i - 1] ?? 0) ? "bg-bear" : "bg-bull"}`} style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

function Marketplace() {
  const [mode, setMode] = useState<"buyer" | "seller">("buyer");
  const [listed, setListed] = useState(0);
  const items = [
    ["Supply & Demand Zone Indicator (MT4/MT5)", "$19", 4.8, "1.2k sold"],
    ["Forex Risk Management eBook", "$5", 4.6, "3.4k sold"],
    ["Gold Signal Subscription — 30 days", "$29/mo", 4.7, "640 members"],
    ["London Breakout EA", "$49", 4.5, "410 sold"],
    ["Price Action Masterclass eBook", "$7", 4.9, "2.1k sold"],
    ["Crypto Swing Signals — 30 days", "$19/mo", 4.4, "380 members"],
  ] as const;
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <SectionTitle title="Marketplace" sub="Indicators, eBooks and signals from verified traders." />
        <div className="flex rounded-xl border border-border bg-card p-1">
          {(["buyer", "seller"] as const).map((m) => (
            <button key={m} onClick={() => setMode(m)} className={`rounded-lg px-4 py-2 text-sm font-semibold capitalize ${mode === m ? "bg-primary text-primary-foreground" : ""}`}>{m}</button>
          ))}
        </div>
      </div>
      {mode === "seller" && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/30 bg-secondary p-5">
          <p className="text-sm"><b>Free plan:</b> {3 - listed} of 3 free listings left.</p>
          <button disabled={listed >= 3} onClick={() => setListed(listed + 1)} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50">
            {listed >= 3 ? "Upgrade to list more" : "+ New Listing"}
          </button>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {items.map(([n, p, r, s]) => (
          <div key={n} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-soft">
            <div className="grid aspect-square place-items-center bg-secondary"><Store className="h-10 w-10 text-primary" /></div>
            <div className="flex flex-1 flex-col p-3">
              <p className="line-clamp-2 text-sm font-medium">{n}</p>
              <p className="mt-2 font-display text-lg font-bold text-primary">{p}</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground"><Star className="h-3 w-3 fill-accent text-accent" />{r} · {s}</p>
              <button className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-primary py-1.5 text-xs font-semibold text-primary-foreground"><ShoppingCart className="h-3.5 w-3.5" />Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CricketChase() {
  const [balls, setBalls] = useState<number[]>([]);
  const runs = balls.reduce((a, b) => a + b, 0);
  const done = balls.length >= 6 || runs >= 20;
  const hit = () => { const opts = [0, 1, 2, 4, 6, 1, 0, 4, 6]; setBalls([...balls, opts[Math.floor(Math.random() * opts.length)] ?? 0]); };
  return (
    <div className="mt-3 rounded-xl bg-muted p-3 text-sm">
      <p className="font-semibold">{runs}/20 runs · {6 - balls.length} balls left</p>
      <div className="my-2 flex gap-1">{Array.from({ length: 6 }).map((_, i) => <span key={i} className="grid h-7 w-7 place-items-center rounded-full bg-card text-xs font-bold">{balls[i] ?? "•"}</span>)}</div>
      {done ? (
        <div className="flex items-center justify-between"><b className={runs >= 20 ? "text-primary" : "text-destructive"}>{runs >= 20 ? "Target chased! 🏆" : "Fell short"}</b><button onClick={() => setBalls([])} className="text-xs font-semibold text-primary underline">Replay</button></div>
      ) : <button onClick={hit} className="w-full rounded-lg bg-primary py-1.5 font-semibold text-primary-foreground">Bat</button>}
    </div>
  );
}

function GameZone() {
  const games = [
    [Crown, "Chess", "Classic strategy — think like a position trader."],
    [Dice5, "Ludo", "Roll with friends, 2–4 players."],
    [Trophy, "Cricket Target Chase", "6 balls, 20 runs. Can you chase it?"],
    [Car, "Racing", "Beat the clock on Valley Highway."],
    [Swords, "Fighting", "Bulls vs Bears arena battles."],
    [Users, "Multiplayer", "Challenge a trader from the community."],
  ] as const;
  return (
    <div>
      <SectionTitle title="GameZone" sub="Take a break between sessions — no screen time on the charts, just fun." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map(([I, n, d]) => (
          <div key={n} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-xl bg-night text-accent"><I className="h-6 w-6" /></div><div><h4 className="font-semibold">{n}</h4><p className="text-xs text-muted-foreground">{d}</p></div></div>
            {n === "Cricket Target Chase" ? <CricketChase /> : (
              <button className="mt-4 w-full rounded-lg border border-primary/40 py-2 text-sm font-semibold text-primary hover:bg-secondary">Play Now</button>
            )}
          </div>
        ))}
      </div>
      <button className="bg-cta shadow-soft mx-auto mt-8 flex items-center gap-2 rounded-xl px-8 py-3 font-bold text-accent-foreground"><Swords className="h-5 w-5" />Multiplayer Challenge</button>
    </div>
  );
}

function Markets() {
  const pairs = [["EUR/USD", "1.0874", "+0.21%"], ["GBP/USD", "1.2691", "-0.08%"], ["XAU/USD", "2,384.50", "+0.94%"], ["BTC/USD", "68,210", "+2.40%"], ["USD/JPY", "151.32", "+0.12%"]];
  return (
    <div id="markets" className="rounded-3xl bg-night p-5 text-night-foreground sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-2xl font-bold">Live Markets</h2>
        <span className="flex items-center gap-2 text-sm"><span className="h-2 w-2 animate-pulse rounded-full bg-bull" />Streaming</span>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {pairs.map(([p, v, c]) => (
          <div key={p} className="rounded-xl border border-night-foreground/10 p-3">
            <p className="text-xs opacity-70">{p}</p><p className="font-display font-bold">{v}</p>
            <p className={`text-xs font-semibold ${c?.startsWith("+") ? "text-bull" : "text-bear"}`}>{c}</p>
          </div>
        ))}
      </div>
      <div className="grid aspect-[16/8] min-h-64 place-items-center rounded-2xl border border-dashed border-night-foreground/20">
        <div className="text-center"><Globe2 className="mx-auto h-10 w-10 text-accent" /><p className="mt-2 font-semibold">TradingView Advanced Chart</p><p className="text-sm opacity-60">Widget embed area · XAUUSD · 1H</p></div>
      </div>
    </div>
  );
}

function Pricing() {
  const plans = [
    ["Seedling", "Free", ["All forex calculators", "Community feed", "3 marketplace listings"]],
    ["Grower", "$9/mo", ["Everything in Seedling", "Unlimited listings", "Advanced live charts", "Ad-free GameZone"]],
    ["Harvest", "$29/mo", ["Everything in Grower", "Verified seller badge", "Priority signal alerts", "1:1 mentor session monthly"]],
  ] as const;
  return (
    <div id="pricing">
      <SectionTitle title="Pricing" sub="Plant free, grow when you're ready. Pay with bKash, Nagad or card." />
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map(([n, p, f], i) => (
          <div key={n} className={`rounded-2xl border p-6 ${i === 1 ? "border-primary bg-secondary shadow-soft" : "border-border bg-card"}`}>
            <h4 className="font-display text-lg font-bold">{n}</h4>
            <p className="mt-2 font-display text-3xl font-extrabold text-primary">{p}</p>
            <ul className="mt-5 space-y-2 text-sm">{f.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{x}</li>)}</ul>
            <button className={`mt-6 w-full rounded-lg py-2.5 font-semibold ${i === 1 ? "bg-cta text-accent-foreground" : "bg-primary text-primary-foreground"}`}>Choose {n}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const TABS: { id: string; label: string; icon: typeof Wrench; node: () => ReactNode }[] = [
  { id: "tools", label: "Tools", icon: Wrench, node: () => <Tools /> },
  { id: "community", label: "Community", icon: Users, node: () => <Community /> },
  { id: "marketplace", label: "Marketplace", icon: Store, node: () => <Marketplace /> },
  { id: "gamezone", label: "GameZone", icon: Gamepad2, node: () => <GameZone /> },
  { id: "markets", label: "Markets", icon: LineChart, node: () => <Markets /> },
  { id: "pricing", label: "Pricing", icon: BadgeDollarSign, node: () => <Pricing /> },
];

function Valley() {
  const [tab, setTab] = useState("tools");
  const active = TABS.find((t) => t.id === tab)!;
  return (
    <section id="valley" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="sticky top-[61px] z-30 -mx-4 mb-10 overflow-x-auto bg-background/90 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:border-border sm:px-2">
        <div className="flex min-w-max gap-2">
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${tab === t.id ? "bg-primary text-primary-foreground shadow-soft" : "text-foreground/70 hover:bg-secondary"}`}>
              <t.icon className="h-4 w-4" />{t.label}
            </button>
          ))}
        </div>
      </div>
      <div key={tab} className="animate-in fade-in slide-in-from-bottom-2 duration-300">{active.node()}</div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="about" className="bg-night text-night-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold"><Leaf className="h-6 w-6 text-accent" />ChartVillage</div>
          <p className="mt-3 text-sm opacity-70">Every great portfolio starts as a seed. Trade with patience, manage risk with discipline, and let your account grow like the Green Valley.</p>
        </div>
        <div id="blog" className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2"><p className="font-semibold">Platform</p><p className="opacity-70">Tools</p><p className="opacity-70">Community</p><p className="opacity-70">Marketplace</p></div>
          <div className="space-y-2"><p className="font-semibold">Company</p><p className="opacity-70">About</p><p className="opacity-70">Blog</p><p className="opacity-70">Risk Disclosure</p></div>
        </div>
        <div>
          <p className="text-sm font-semibold">We accept</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <span className="rounded-lg bg-bear px-4 py-2 font-display text-sm font-bold text-primary-foreground">bKash</span>
            <span className="rounded-lg bg-chart-1 px-4 py-2 font-display text-sm font-bold text-primary-foreground">Nagad</span>
            <span className="rounded-lg bg-card px-4 py-2 font-display text-sm font-bold text-secondary-foreground">Stripe</span>
          </div>
        </div>
      </div>
      <div className="border-t border-night-foreground/10 px-4 py-5 text-center text-xs opacity-60">
        © 2026 ChartVillage. Trading forex and CFDs carries high risk. Past performance does not guarantee future results.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Hero />
      <Valley />
      <Footer />
    </div>
  );
}

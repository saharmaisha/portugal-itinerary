import { useState } from "react";

const AIRBNB = "R. Heliodoro Salgado 81, Penha de França";

const days = [
  {
    day: 1, date: "Wed, June 3", title: "Arrival & Baixa", vibe: "Ease in, explore downtown", color: "#E8D5B7",
    transport: { label: "Airport → Airbnb", detail: "Metro: Red Line from Aeroporto → Alameda, transfer Green Line → Anjos. ~35 min, ~€1.50 + €0.50 Viva Viagem card. OR Uber/Bolt: ~€10–15, 20 min." },
    booking: null,
    items: [
      { time: "8:00 AM", text: "Land at Lisbon Airport (LIS)" },
      { time: "9:00 AM", text: "Metro or Uber to Airbnb — drop bags (check-in likely 3pm, but most hosts allow luggage drop)", tag: "transit" },
      { time: "9:30 AM", text: "Get a Viva Viagem card at Anjos metro (your home station), load with 'zapping' credit for all public transit" },
      { time: "10:30 AM", text: "Walk through Baixa — Lisbon's downtown grid. Green Line 2 stops to Rossio, or walk downhill ~20 min." },
      { time: "11:30 AM", text: "Praça do Comércio — grand waterfront square, coffee at the arcaded cafés" },
      { time: "1:00 PM", text: "Lunch — try pastéis de bacalhau (cod croquettes) or grilled fish on Rua Augusta" },
      { time: "2:30 PM", text: "Wander up to Rossio Square & Praça da Figueira" },
      { time: "3:00 PM", text: "Check into Airbnb, freshen up, maybe nap" },
      { time: "5:30 PM", text: "Evening stroll — Miradouro do Monte Agudo viewpoint is literally on your street" },
      { time: "7:00 PM", text: "Explore Martim Moniz / Intendente area (~10 min walk) — Rua do Benformoso is great for halal food if you want it. Also tons of cool bars and cafés." },
      { time: "9:00 PM", text: "Dinner — Cervejaria Ramiro (famous seafood, locals line up for the shrimp and crab) or Mezze at Arroios Market near your Airbnb (Syrian, halal, incredible kebabs and hummus)" },
    ],
    notes: "Your Airbnb is a 10-min walk from Martim Moniz / Rua do Benformoso — one of Lisbon's most vibrant food neighborhoods with tons of halal options. Cervejaria Ramiro is one of Lisbon's most legendary seafood spots — worth the wait.",
  },
  {
    day: 2, date: "Thu, June 4", title: "Belém + Vintage Shopping", vibe: "Age of Discovery, custard tarts, thrifting", color: "#C4D7A4",
    transport: { label: "Airbnb → Belém", detail: "Green Line: Anjos → Cais do Sodré (6 stops, ~12 min). Then tram 15E or bus 728 to Belém (~20 min). OR Uber ~€7 direct." },
    booking: { urgency: "now", text: "Book Jerónimos Monastery tickets — timed entry, sells out in June.\n→ patrimoniocultural.gov.pt" },
    items: [
      { time: "9:00 AM", text: "Green Line to Cais do Sodré → tram 15E to Belém (~35 min total)", tag: "transit" },
      { time: "9:30 AM", text: "Jerónimos Monastery — your friend's #1 highlight. Stunning Manueline architecture, tomb of Vasco da Gama." },
      { time: "11:00 AM", text: "Pastéis de Belém — the original bakery since 1837. Pastel de nata warm with cinnamon. Line moves fast." },
      { time: "11:45 AM", text: "Monument to the Discoveries — waterfront monument shaped like a ship's prow" },
      { time: "12:15 PM", text: "Torre de Belém — iconic riverside tower (worth seeing from outside, interior optional)" },
      { time: "1:00 PM", text: "Lunch in Belém — Ponto Final across the river is famous for cheap seafood with a view, or eat casual near the waterfront" },
      { time: "2:30 PM", text: "Tram 15E back toward central Lisbon. Get off near Chiado.", tag: "transit" },
      { time: "3:00 PM", text: "Calçada do Carmo vintage strip (between Chiado & Rossio) — Ás de Espadas for curated vintage, newJester for men's" },
      { time: "4:00 PM", text: "POP Closet (Chiado) — designer consignment, Prada/Gucci/Nike secondhand. Huge new warehouse." },
      { time: "5:00 PM", text: "Ride Santa Justa Elevator for rooftop views, browse Rua Garrett, coffee at A Brasileira" },
      { time: "7:00 PM", text: "Walk through Bairro Alto as it comes alive" },
      { time: "9:00 PM", text: "Dinner in Bairro Alto — Sea Me (seafood + sushi, great vibe) or O Velho Eurico (traditional, good grilled fish)" },
      { time: "10:30 PM", text: "Bars in Bairro Alto — the streets fill up late. Green Line Baixa-Chiado → Anjos when done.", tag: "transit" },
    ],
    notes: "The Calçada do Carmo stairs between Chiado and Rossio have several vintage shops clustered together — easy thrift crawl after Belém.",
  },
  {
    day: 3, date: "Fri, June 5", title: "Sintra Day Trip", vibe: "Fairytale palaces, mystical gardens", color: "#A8C5D6",
    transport: { label: "Airbnb → Sintra", detail: "Green Line: Anjos → Martim Moniz (1 stop). Walk 5 min to Rossio train station. Train to Sintra ~50 min, ~€5 roundtrip. In Sintra, bus 434 to palaces." },
    booking: { urgency: "now", text: "Book Pena Palace tickets (timed entry!) → parquesdesintra.pt\nBook Quinta da Regaleira tickets → rfregaleira.pt" },
    items: [
      { time: "8:00 AM", text: "Green Line Anjos → Martim Moniz (1 stop). Walk 5 min to Rossio Station. Train to Sintra.", tag: "transit" },
      { time: "9:00 AM", text: "Arrive Sintra — bus 434 up to Pena Palace (~20 min)", tag: "transit" },
      { time: "9:30 AM", text: "Palácio da Pena — colorful Romanticist palace. Terraces, staterooms, park. GO EARLY to beat crowds." },
      { time: "11:30 AM", text: "Walk to Castelo dos Mouros (~10 min from Pena) — ancient Moorish walls with panoramic views" },
      { time: "12:30 PM", text: "Bus 434 down to Sintra town center", tag: "transit" },
      { time: "1:00 PM", text: "Lunch in Sintra — try travesseiros (almond pastry) at Piriquita. Incomum (in town center) is great for a sit-down meal with seafood options." },
      { time: "2:30 PM", text: "Walk to Quinta da Regaleira (~10 min) — mysterious gardens, the famous Initiation Well, grottoes, tunnels" },
      { time: "4:30 PM", text: "Optional: Palácio Nacional de Sintra in the town square" },
      { time: "5:30 PM", text: "Walk to train station (~20 min). Train to Rossio, Green Line home.", tag: "transit" },
      { time: "7:00 PM", text: "Back in Lisbon — shower, rest a bit" },
      { time: "9:30 PM", text: "Dinner — Taberna do Sal Grosso (modern Portuguese, great octopus and fish) or grab something on Rua do Benformoso" },
    ],
    notes: "Wear comfortable shoes — very hilly. Bring water and sunscreen. The 434 bus can have long afternoon lines; consider walking down from palaces.",
  },
  {
    day: 4, date: "Sat, June 6", title: "Feira da Ladra + Alfama + Fado", vibe: "Flea market, old Lisbon, live music", color: "#D6A8C5",
    transport: { label: "Airbnb → Feira da Ladra → Alfama", detail: "Walk! Feira da Ladra at Campo de Santa Clara is ~10 min walk from your Airbnb. Then Castelo & Alfama are right there." },
    booking: { urgency: "soon", text: "Reserve Fado dinner for tonight — A Baiuca or Parreirinha de Alfama. Call/email a few days ahead, fills up Saturdays.\nOptional: Castelo de São Jorge tickets → castelodesaojorge.pt (skip the line)" },
    items: [
      { time: "9:00 AM", text: "Walk from Airbnb to Feira da Ladra flea market (~10 min to Campo de Santa Clara)", tag: "transit" },
      { time: "9:00 AM", text: "Feira da Ladra — Lisbon's oldest flea market (since 1272!). Vintage clothes, antiques, vinyl, azulejo tiles, art. Get there early for best finds. Bring cash." },
      { time: "11:00 AM", text: "Walk uphill to Castelo de São Jorge (~10 min from market)", tag: "transit" },
      { time: "11:15 AM", text: "Castelo de São Jorge — Lisbon's hilltop castle, best city views" },
      { time: "12:30 PM", text: "Wander down through Alfama — Lisbon's oldest neighborhood. Get intentionally lost." },
      { time: "12:45 PM", text: "Miradouro de Santa Luzia & Portas do Sol — stunning viewpoints over rooftops" },
      { time: "1:00 PM", text: "Sé de Lisboa (Lisbon Cathedral) — 12th-century fortress-church" },
      { time: "1:30 PM", text: "Lunch in Alfama — Chapitô à Mesa (great grilled fish with panoramic views) or any tasca with sardinhas" },
      { time: "3:00 PM", text: "Fado Museum — learn about Portugal's music before hearing it live tonight" },
      { time: "4:00 PM", text: "Malala Vintage — right on edge of Alfama (R. Arco da Graça 51). Curated vintage, great silk blouses." },
      { time: "5:00 PM", text: "National Tile Museum (Museu do Azulejo) — east of Alfama, ~10 min walk" },
      { time: "6:30 PM", text: "Walk home (uphill ~15 min or Uber ~€4). Rest and freshen up.", tag: "transit" },
      { time: "9:00 PM", text: "Fado dinner in Alfama — A Baiuca (amateur, locals sing) or Parreirinha de Alfama (classic). Both serve seafood and traditional dishes." },
      { time: "11:30 PM", text: "Walk or Uber home (~€4, 5 min)", tag: "transit" },
    ],
    notes: "SATURDAY = Feira da Ladra day! Arrive by 9am for best vintage finds, vendors pack up by 2pm. Your Airbnb location is perfect for this.",
  },
  {
    day: 5, date: "Sun, June 7", title: "Cascais Day Trip", vibe: "Beach, seafood, coastal charm", color: "#F2C879",
    transport: { label: "Airbnb → Cascais", detail: "Green Line: Anjos → Cais do Sodré (6 stops, ~12 min). Adjacent train station, Cascais commuter line (every 20 min, ~35 min, ~€4.50 roundtrip). Scenic ride!" },
    booking: null,
    items: [
      { time: "9:30 AM", text: "Green Line Anjos → Cais do Sodré. Adjacent train station, take Cascais line (~35 min).", tag: "transit" },
      { time: "10:15 AM", text: "Arrive Cascais — stroll town center, Praia da Rainha beach" },
      { time: "11:00 AM", text: "Walk or bike to Boca do Inferno (Hell's Mouth) — dramatic coastal cliffs, ~20 min walk" },
      { time: "12:00 PM", text: "Casa das Histórias Paula Rego — modern art museum (if interested)" },
      { time: "1:00 PM", text: "Lunch — Cascais is a seafood town. Try the grilled fish at any waterfront spot, or check the street arts district (Rua Alfonso Sanches) for more variety." },
      { time: "2:30 PM", text: "Beach time! Praia da Conceição or Praia da Rainha" },
      { time: "5:00 PM", text: "Gelato, walk the marina, browse shops" },
      { time: "6:00 PM", text: "Optional: get off return train at Estoril for the famous casino and gardens" },
      { time: "7:00 PM", text: "Train to Cais do Sodré, Green Line to Anjos", tag: "transit" },
      { time: "8:30 PM", text: "Dinner at Time Out Market (Mercado da Ribeira) — right at Cais do Sodré. Huge food hall, tons of seafood stalls." },
      { time: "10:30 PM", text: "Walk around Cais do Sodré / Pink Street for drinks if you're up for it" },
    ],
    notes: "Cascais is flat and relaxed. Sit on the right side of the train going out for ocean views. Bring sunscreen and swimsuit.",
  },
  {
    day: 6, date: "Mon, June 8", title: "Porto Day Trip", vibe: "Bridges, river views, bookstores", color: "#B8A9D4",
    transport: { label: "Airbnb → Porto", detail: "Green Line: Anjos → Alameda, transfer Red Line → Oriente (~20 min). Alfa Pendular train to Porto Campanhã (~2h 45min). In Porto: local train Campanhã → São Bento (5 min)." },
    booking: { urgency: "now", text: "Book Alfa Pendular round-trip ASAP → cp.pt\nPromo fares up to 50% off, sells out. ~€36/way full price.\nAlso: Livraria Lello ticket → livrarialello.pt (~€8, redeemable on a book)" },
    items: [
      { time: "6:30 AM", text: "Green Line Anjos → Alameda → Red Line → Oriente station", tag: "transit" },
      { time: "7:00 AM", text: "Alfa Pendular departs Oriente → Porto (~2h 45min). Bring snacks.", tag: "transit" },
      { time: "9:45 AM", text: "Arrive Campanhã. Local train to São Bento (5 min) — admire azulejo tiles inside", tag: "transit" },
      { time: "10:15 AM", text: "Walk through Ribeira — colorful waterfront, UNESCO World Heritage" },
      { time: "11:00 AM", text: "Cross Dom Luís I Bridge (upper deck) for stunning views" },
      { time: "11:30 AM", text: "Jardim do Morro — your friend's rec! Walk along the Cais de Gaia waterfront. Pop into a riverside bar." },
      { time: "1:00 PM", text: "Lunch — bacalhau à brás (shredded cod with eggs and potatoes), seafood rice, or grilled octopus. Adega São Nicolau in Ribeira is great for seafood." },
      { time: "2:30 PM", text: "Livraria Lello — one of the world's most beautiful bookstores" },
      { time: "3:15 PM", text: "Clérigos Tower — climb for panoramic views" },
      { time: "4:00 PM", text: "Wander — Igreja do Carmo tiles, Majestic Café for a coffee" },
      { time: "5:30 PM", text: "Walk or metro to Campanhã station", tag: "transit" },
      { time: "6:00 PM", text: "Train back (~2h 45min). Arrive Oriente ~8:45pm, Red+Green Line home.", tag: "transit" },
      { time: "9:30 PM", text: "Late dinner near Airbnb — Khayyam (Persian, halal, one of the top-rated restaurants in Lisbon) or something quick on Rua do Benformoso" },
    ],
    notes: "Long day (~5.5 hours on trains) but absolutely worth it. Book train tickets ASAP on cp.pt. Porto is walkable — no local transit needed beyond São Bento transfer.",
  },
  {
    day: 7, date: "Tue, June 9", title: "Óbidos + Thrift Crawl", vibe: "Medieval village, vintage shopping", color: "#E8B4A0",
    transport: { label: "Airbnb → Óbidos → Thrifting", detail: "Green Line: Anjos → Campo Grande (direct, ~10 min). Walk to bus terminal east side. Rápida Verde bus ~1 hr, ~€9/way. Buy from driver, cash only." },
    booking: null,
    items: [
      { time: "8:15 AM", text: "Green Line Anjos → Campo Grande. Walk to bus terminal east side.", tag: "transit" },
      { time: "8:30 AM", text: "Bus to Óbidos (~1 hour). Buy ticket from driver, cash only.", tag: "transit" },
      { time: "9:45 AM", text: "Arrive Óbidos — enter through Porta da Vila gate, admire blue tiles" },
      { time: "10:00 AM", text: "Walk the medieval town walls — panoramic views over rooftops and countryside" },
      { time: "10:45 AM", text: "Wander Rua Direita — shops, galleries, bookstore in old church (Livraria de Santiago)" },
      { time: "11:15 AM", text: "Try ginjinha in a chocolate cup — cherry liqueur in an edible chocolate shot glass" },
      { time: "12:00 PM", text: "Lunch in Óbidos — good grilled chicken and seafood options" },
      { time: "1:00 PM", text: "Bus back to Campo Grande (~1 hour)", tag: "transit" },
      { time: "2:30 PM", text: "Tuesday = Feira da Ladra again! Head to Campo de Santa Clara (~10 min walk from Airbnb) if you want round 2. Vendors start packing ~2pm so go quick." },
      { time: "3:30 PM", text: "Neighborhood thrift crawl — Retro City Vintage (Intendente, ~10 min walk from Airbnb) and Retrox (Rua dos Anjos 4C, practically next door)" },
      { time: "4:30 PM", text: "Humana Vintage (multiple locations) — biggest charity thrift chain in Lisbon. Budget-friendly, wide selection." },
      { time: "6:00 PM", text: "Uber to LX Factory (~€6) — converted industrial complex with indie shops, vintage stores, bookstores, street art", tag: "transit" },
      { time: "7:30 PM", text: "Dinner at LX Factory — Landeau Chocolate (famous chocolate cake) or any of the restaurants there" },
      { time: "9:30 PM", text: "Head to Bairro Alto for nightlife — bars open ~10pm, streets fill up. Green Line Baixa-Chiado → Anjos when done.", tag: "transit" },
    ],
    notes: "Tuesday is also a Feira da Ladra day — you might catch the tail end after Óbidos. Retro City and Retrox are both walkable from your Airbnb. Bring cash for Óbidos bus + flea market.",
  },
  {
    day: 8, date: "Wed, June 10", title: "Flex Day & Farewell", vibe: "Portugal Day holiday, revisit favorites", color: "#9DC5BB",
    transport: { label: "Explore freely", detail: "Metro, Uber, or walk. Your Airbnb is central — most places 15–25 min by metro. Tomorrow: Anjos → Alameda → Aeroporto (Red Line), ~30 min. Or Uber ~€10." },
    booking: null,
    items: [
      { time: "—", text: "June 10 = Dia de Portugal (national holiday). Some shops close but expect festivities!" },
      { time: "10:30 AM", text: "Sleep in! Revisit a favorite spot or hit anything you missed" },
      { time: "11:30 AM", text: "Ideas: Parque das Nações + Oceanário (Red Line → Oriente), Estrela Basilica (tram 28), Príncipe Real neighborhood" },
      { time: "12:00 PM", text: "More thrifting? São Bento vintage cluster — Trading Post (curated luxury vintage) and Pink Vintage Heart (playful, 80s/90s). Both on the same street." },
      { time: "1:30 PM", text: "Long farewell lunch — Cervejaria Ramiro if you didn't go Day 1, or Zaafran (upscale Indian, halal, Rua de São José 35) for a special meal" },
      { time: "3:30 PM", text: "Souvenir shopping — azulejo tiles, cork products, canned sardines (a legit Portuguese tradition), olive oil, vintage finds" },
      { time: "5:30 PM", text: "Golden hour at Miradouro do Monte Agudo (on your street!) or Miradouro da Graça for sunset photos" },
      { time: "7:00 PM", text: "Walk around Príncipe Real or revisit a favorite neighborhood" },
      { time: "9:30 PM", text: "Final dinner — go somewhere you loved or try somewhere new" },
      { time: "11:00 PM", text: "Pack up! Flight at 10am tomorrow. Set two alarms." },
    ],
    notes: "Tomorrow: airport by 7:30am. Green Line Anjos → Alameda, Red Line → Aeroporto (~30 min, ~€1.50). Or Uber ~€10, 15 min. Metro opens 6:30am. Some shops may be closed for Portugal Day.",
  },
];

const packingList = [
  { category: "Essentials", icon: "🎒", items: [
    { text: "Passport (valid 6+ months)", priority: true },
    { text: "Phone + charger + portable battery", priority: true },
    { text: "EU adapter plug (Type F, round 2-pin)", priority: true },
    { text: "Credit/debit card (no foreign transaction fee)", priority: true },
    { text: "Cash — euros for Óbidos bus, Feira da Ladra, tips", priority: true },
    { text: "Flight confirmations (DL0272 / DL0273)", priority: false },
    { text: "Airbnb address: R. Heliodoro Salgado 81", priority: false },
    { text: "All pre-booked tickets (monastery, palaces, train)", priority: false },
    { text: "Travel insurance docs", priority: false },
  ]},
  { category: "Clothing (8 days, early June)", icon: "👕", items: [
    { text: "Comfortable walking shoes — cobblestones + hills daily!", priority: true },
    { text: "Light layers — Lisbon is 75–85°F but evenings cool", priority: false },
    { text: "Sandals / flip-flops for Cascais beach day", priority: false },
    { text: "Swimsuit + quick-dry towel", priority: false },
    { text: "Light jacket or hoodie (evenings + Sintra is cooler)", priority: false },
    { text: "One nicer outfit for Fado dinner", priority: false },
    { text: "Hat + sunglasses", priority: false },
    { text: "Tote bag or foldable bag for thrift/market finds", priority: false },
  ]},
  { category: "Day Trip Bag", icon: "🧳", items: [
    { text: "Small daypack / backpack", priority: true },
    { text: "Reusable water bottle (refill everywhere)", priority: false },
    { text: "Sunscreen SPF 30+", priority: false },
    { text: "Snacks for Porto train ride (2h 45min each way)", priority: false },
    { text: "Compact umbrella or light rain jacket (just in case)", priority: false },
  ]},
  { category: "Nice to Have", icon: "✨", items: [
    { text: "Camera", priority: false },
    { text: "Book or Kindle for train rides", priority: false },
    { text: "Ziplock bags for toiletries / wet swimsuit", priority: false },
    { text: "Google Maps offline — download Lisbon, Sintra, Porto, Cascais", priority: false },
    { text: "Small notebook for recs from locals", priority: false },
  ]},
];

export default function PortugalItinerary() {
  const [activeTab, setActiveTab] = useState("day");
  const [activeDay, setActiveDay] = useState(0);
  const [checked, setChecked] = useState({});
  const current = days[activeDay];
  const toggleCheck = (key) => setChecked((p) => ({ ...p, [key]: !p[key] }));
  const tabs = [{ id: "day", label: "📅 Itinerary" }, { id: "book", label: "⚡ Book Ahead" }, { id: "pack", label: "🎒 Packing" }];

  return (
    <div style={{ fontFamily: "'Palatino Linotype','Book Antiqua',Palatino,Georgia,serif", background: "#FDFBF7", minHeight: "100vh", color: "#2C2416" }}>
      <div style={{ background: "linear-gradient(135deg,#1a3a4a 0%,#2d5a3f 50%,#4a6741 100%)", padding: "24px 20px 18px", color: "#FDFBF7", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", opacity: 0.6, marginBottom: 4 }}>Your Trip</div>
        <h1 style={{ fontSize: 30, fontWeight: 400, margin: "0 0 3px", letterSpacing: 1 }}>Portugal</h1>
        <div style={{ fontSize: 13, opacity: 0.75 }}>June 3–11, 2026 · Lisbon</div>
        <div style={{ fontSize: 11, opacity: 0.45, marginTop: 2 }}>📍 {AIRBNB} · 🚇 Anjos (Green Line) · ✈️ Delta</div>
      </div>
      <div style={{ display: "flex", background: "#22473a" }}>
        {tabs.map((t) => (<button key={t.id} type="button" onClick={() => setActiveTab(t.id)} style={{ flex: 1, padding: "10px 0 8px", border: "none", borderBottom: activeTab === t.id ? "3px solid #F2C879" : "3px solid transparent", background: activeTab === t.id ? "rgba(255,255,255,0.08)" : "transparent", color: activeTab === t.id ? "#fff" : "rgba(255,255,255,0.45)", cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: activeTab === t.id ? 700 : 400 }}>{t.label}</button>))}
      </div>
      {activeTab === "day" && (<div style={{ display: "flex", overflowX: "auto", background: "#F5F0E8", borderBottom: "1px solid #E0D8C8", WebkitOverflowScrolling: "touch" }}>
        {days.map((d, i) => (<button key={i} type="button" onClick={() => setActiveDay(i)} style={{ flex: "0 0 auto", padding: "10px 13px 8px", border: "none", borderBottom: activeDay === i ? `3px solid ${d.color}` : "3px solid transparent", background: activeDay === i ? "#FDFBF7" : "transparent", cursor: "pointer", fontFamily: "inherit", fontSize: 11, fontWeight: activeDay === i ? 700 : 400, color: activeDay === i ? "#2d5a3f" : "#8B7E6A", whiteSpace: "nowrap" }}><div style={{ fontSize: 9, opacity: 0.5 }}>Day {d.day}</div><div>{d.date.split(", ")[1]}</div></button>))}
      </div>)}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 18px 40px" }}>
        {activeTab === "day" && (<div>
          <div style={{ marginTop: 20, marginBottom: 14, paddingBottom: 14, borderBottom: `2px solid ${current.color}` }}>
            <div style={{ display: "inline-block", background: current.color, padding: "3px 10px", borderRadius: 4, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>Day {current.day} — {current.date}</div>
            <h2 style={{ fontSize: 24, fontWeight: 400, margin: "4px 0 2px" }}>{current.title}</h2>
            <div style={{ fontSize: 13, color: "#8B7E6A", fontStyle: "italic" }}>{current.vibe}</div>
          </div>
          <div style={{ padding: "12px 14px", background: "#EDF5FF", border: "1px solid #C8DDF5", borderRadius: 8, marginBottom: 12, fontSize: 12, lineHeight: 1.5 }}>
            <div style={{ fontWeight: 700, color: "#1a3a4a", marginBottom: 3, fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5 }}>🚇 {current.transport.label}</div>
            <div style={{ color: "#3a5a7a" }}>{current.transport.detail}</div>
          </div>
          {current.booking && (<div style={{ padding: "12px 14px", background: current.booking.urgency === "now" ? "#FFF5F5" : "#FFFBEB", border: `1px solid ${current.booking.urgency === "now" ? "#FCC" : "#F5E6A3"}`, borderRadius: 8, marginBottom: 12, fontSize: 12, lineHeight: 1.55 }}>
            <div style={{ fontWeight: 700, color: current.booking.urgency === "now" ? "#9B2C2C" : "#8B6914", marginBottom: 3, fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5 }}>{current.booking.urgency === "now" ? "⚡ Book Now" : "📅 Book Soon"}</div>
            <div style={{ color: "#444", whiteSpace: "pre-line" }}>{current.booking.text}</div>
          </div>)}
          {current.items.map((item, i) => { const t = item.tag === "transit"; return (
            <div key={i} style={{ display: "flex", gap: 12, padding: t ? "8px 6px" : "8px 0", borderBottom: i < current.items.length - 1 ? "1px solid #F0EBE1" : "none", background: t ? "#F6F9FF" : "transparent", margin: t ? "2px -6px" : 0, borderRadius: t ? 6 : 0, border: t ? "1px solid #e0eaf5" : "none" }}>
              <div style={{ flex: "0 0 64px", fontSize: 11, fontWeight: 600, paddingTop: 2, color: t ? "#4a7ab5" : "#8B7E6A", fontVariantNumeric: "tabular-nums" }}>{t && "🚇 "}{item.time}</div>
              <div style={{ flex: 1, fontSize: 13, lineHeight: 1.5, color: t ? "#3a5a7a" : "#2C2416" }}>{item.text}</div>
            </div>); })}
          {current.notes && (<div style={{ marginTop: 16, padding: "12px 14px", background: "#F5F0E8", borderLeft: `4px solid ${current.color}`, borderRadius: "0 6px 6px 0", fontSize: 12, lineHeight: 1.6, color: "#5A4E3A" }}>
            <strong style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Tips</strong>
            <div style={{ marginTop: 3 }}>{current.notes}</div>
          </div>)}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, paddingTop: 14, borderTop: "1px solid #E0D8C8" }}>
            <button type="button" onClick={() => setActiveDay(Math.max(0, activeDay - 1))} disabled={activeDay === 0} style={{ padding: "8px 16px", border: "1px solid #D0C8B8", borderRadius: 6, background: "#FDFBF7", cursor: activeDay === 0 ? "default" : "pointer", opacity: activeDay === 0 ? 0.3 : 1, fontFamily: "inherit", fontSize: 12 }}>← Prev</button>
            <button type="button" onClick={() => setActiveDay(Math.min(days.length - 1, activeDay + 1))} disabled={activeDay === days.length - 1} style={{ padding: "8px 16px", border: "none", borderRadius: 6, background: "#2d5a3f", color: "#fff", cursor: activeDay === days.length - 1 ? "default" : "pointer", opacity: activeDay === days.length - 1 ? 0.5 : 1, fontFamily: "inherit", fontSize: 12, fontWeight: 600 }}>Next →</button>
          </div>
        </div>)}
        {activeTab === "book" && (<div>
          <div style={{ marginTop: 20, marginBottom: 16 }}><h2 style={{ fontSize: 22, fontWeight: 400, margin: "0 0 3px" }}>Book Ahead of Time</h2><div style={{ fontSize: 13, color: "#8B7E6A", fontStyle: "italic" }}>June is peak season — don't wait</div></div>
          {[
            { label: "Book Now", color: "#9B2C2C", bg: "#FFF8F0", border: "#F0D8B8", items: [
              { text: "Jerónimos Monastery tickets", sub: "Timed entry, sells out · Day 2", url: "patrimoniocultural.gov.pt" },
              { text: "Pena Palace tickets (Sintra)", sub: "Timed morning slot · Day 3", url: "parquesdesintra.pt" },
              { text: "Quinta da Regaleira tickets", sub: "Timed entry · Day 3", url: "rfregaleira.pt" },
              { text: "Porto Alfa Pendular train", sub: "Round trip June 8. Promo fares 50% off · Day 6", url: "cp.pt" },
              { text: "Livraria Lello ticket", sub: "€8, redeemable on book · Day 6", url: "livrarialello.pt" },
            ]},
            { label: "Book 1 Week Before", color: "#8B6914", bg: "#FFFCF0", border: "#F0E8C0", items: [
              { text: "Fado dinner reservation", sub: "A Baiuca or Parreirinha de Alfama · Sat June 6 · Day 4", url: "" },
            ]},
            { label: "Optional (Skip the Line)", color: "#6B7F5E", bg: "#F8F6F2", border: "#E0D8C8", items: [
              { text: "Castelo de São Jorge tickets", sub: "Can buy on-site · Day 4", url: "castelodesaojorge.pt" },
            ]},
          ].map((s, si) => (<div key={si} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: s.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{s.label}</div>
            {s.items.map((item, ii) => (<label key={ii} onClick={() => toggleCheck(`b-${si}-${ii}`)} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 14px", marginBottom: 6, cursor: "pointer", background: checked[`b-${si}-${ii}`] ? "#F0F8F0" : s.bg, border: `1px solid ${checked[`b-${si}-${ii}`] ? "#A8D4A8" : s.border}`, borderRadius: 8, opacity: checked[`b-${si}-${ii}`] ? 0.7 : 1 }}>
              <input type="checkbox" checked={!!checked[`b-${si}-${ii}`]} readOnly style={{ marginTop: 2, accentColor: "#2d5a3f" }} />
              <div><div style={{ fontSize: 14, fontWeight: 600, textDecoration: checked[`b-${si}-${ii}`] ? "line-through" : "none" }}>{item.text}</div><div style={{ fontSize: 12, color: "#777", marginTop: 2 }}>{item.sub}</div>{item.url && <div style={{ fontSize: 11, color: "#2d5a3f", fontWeight: 600, marginTop: 3 }}>{item.url}</div>}</div>
            </label>))}
          </div>))}
          <div style={{ padding: "12px 14px", background: "#F5F0E8", borderLeft: "4px solid #B8A9D4", borderRadius: "0 6px 6px 0", fontSize: 12, lineHeight: 1.7, color: "#5A4E3A" }}>
            <strong style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>General Tips</strong>
            <div style={{ marginTop: 4 }}>
              <div>• <strong>Viva Viagem card</strong> — Anjos metro. Zapping credit for all transit.</div>
              <div>• <strong>Uber/Bolt</strong> — ~€5–8 most rides.</div>
              <div>• <strong>Home station</strong> — Anjos (Green Line), 5 min walk.</div>
              <div>• <strong>June 10</strong> — Portugal Day holiday, some closures.</div>
              <div>• <strong>June 11</strong> — 10am flight. Airport by 7:30am.</div>
            </div>
          </div>
        </div>)}
        {activeTab === "pack" && (<div>
          <div style={{ marginTop: 20, marginBottom: 16 }}><h2 style={{ fontSize: 22, fontWeight: 400, margin: "0 0 3px" }}>Packing List</h2><div style={{ fontSize: 13, color: "#8B7E6A", fontStyle: "italic" }}>8 days, early June — warm days, cool evenings</div></div>
          {packingList.map((cat, ci) => (<div key={ci} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#2d5a3f", padding: "6px 0", borderBottom: "2px solid #E0D8C8", marginBottom: 6 }}>{cat.icon} {cat.category}</div>
            {cat.items.map((item, ii) => { const key = `p-${ci}-${ii}`; return (
              <label key={ii} onClick={() => toggleCheck(key)} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "7px 4px", cursor: "pointer", fontSize: 13, lineHeight: 1.5, borderBottom: "1px solid #F5F0E8", opacity: checked[key] ? 0.5 : 1 }}>
                <input type="checkbox" checked={!!checked[key]} readOnly style={{ marginTop: 3, accentColor: "#2d5a3f", flexShrink: 0 }} />
                <span style={{ textDecoration: checked[key] ? "line-through" : "none" }}>{item.priority && <span style={{ color: "#9B2C2C", fontWeight: 700, fontSize: 11, marginRight: 4 }}>★</span>}{item.text}</span>
              </label>); })}
          </div>))}
          <div style={{ padding: "12px 14px", background: "#F5F0E8", borderLeft: "4px solid #C4D7A4", borderRadius: "0 6px 6px 0", fontSize: 12, lineHeight: 1.6, color: "#5A4E3A" }}>
            <strong style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 1 }}>Pro tip</strong>
            <div style={{ marginTop: 3 }}>Pack light — you'll want room for thrift finds and souvenirs (cork goods, tiles, canned sardines, olive oil). Bring a foldable tote for market days.</div>
          </div>
        </div>)}
      </div>
    </div>
  );
}

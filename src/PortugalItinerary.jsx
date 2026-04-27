import { useState } from "react";

const LISBON_AIRBNB = "Rua Actor Isidoro 35, Lisbon 1900-016";
const CARVOEIRO_VILLA = "Rua Alegre 121, Carvoeiro, Faro 8400";

const days = [
  {
    day: 1, date: "Wed, June 3", title: "Arrival → Carvoeiro", vibe: "Land in Lisbon, head to the Algarve", color: "#F2C879",
    transport: { label: "Lisbon Airport → Carvoeiro Villa", detail: "Land at Lisbon (LIS). Rede Expressos bus from Sete Rios station to Lagoa (~3 hours, ~€15–20). Metro Red Line: Aeroporto → Jardim Zoológico (~20 min), then 5 min walk to Sete Rios bus station. From Lagoa bus station, Uber to villa (~10 min, ~€8). OR Uber/Bolt direct from Lisbon: ~€180–220, ~2.5 hours." },
    booking: { urgency: "now", text: "Book Rede Expressos bus: Lisbon → Lagoa → rede-expressos.pt\nAim for 10:30am or 11am departure from Sete Rios" },
    items: [
      { time: "8:00 AM", text: "Land at Lisbon Airport (LIS) — DL0272 from JFK" },
      { time: "9:00 AM", text: "Clear customs, grab luggage" },
      { time: "9:30 AM", text: "Metro Red Line: Aeroporto → Jardim Zoológico (~20 min). Walk 5 min to Sete Rios bus station.", tag: "transit" },
      { time: "10:30 AM", text: "Rede Expressos bus to Lagoa (~3 hours). Relax, maybe nap!", tag: "transit" },
      { time: "1:30 PM", text: "Arrive Lagoa bus station — Uber to Carvoeiro villa (~10 min, ~€8)", tag: "transit" },
      { time: "2:00 PM", text: "Arrive at villa: " + CARVOEIRO_VILLA + " — villa with private pool!" },
      { time: "2:30 PM", text: "Settle in, freshen up, maybe a quick dip in the pool" },
      { time: "4:00 PM", text: "Walk to Praia de Carvoeiro — charming beach in a cliff cove, right in town" },
      { time: "5:30 PM", text: "Explore Carvoeiro village — small, picturesque with white-washed buildings and seaside cafés" },
      { time: "7:00 PM", text: "Sunset drinks at a clifftop bar — Boneca Bar or any terrace with views" },
      { time: "9:00 PM", text: "Dinner in Carvoeiro — O Barradas (fine dining seafood) or Rei das Praias (beachside)" },
    ],
    notes: "Travel day but you'll have a full afternoon/evening in Carvoeiro! The bus ride is scenic and a good chance to rest after the overnight flight. Your villa is at " + CARVOEIRO_VILLA + " — private pool included!",
  },
  {
    day: 2, date: "Thu, June 4", title: "Algarve Beaches & Caves", vibe: "Golden cliffs, sea caves, coastal magic", color: "#E8B4A0",
    transport: { label: "Carvoeiro → Albufeira (Uber ~30 min)", detail: "Uber/Bolt from villa to Albufeira Marina (~30–35 min, ~€25–30). Book boat tour to Benagil Cave from Albufeira Marina. Tours run 9am–5pm, ~€25–40/person. Uber back to villa in evening." },
    booking: { urgency: "now", text: "Book Benagil Cave boat tour — popular, sells out!\n→ Search 'Benagil Cave boat tour from Albufeira' on GetYourGuide or Viator" },
    items: [
      { time: "8:00 AM", text: "Breakfast at villa, enjoy the pool and morning sun" },
      { time: "9:00 AM", text: "Uber from Carvoeiro villa to Albufeira Marina (~30–35 min, ~€25–30)", tag: "transit" },
      { time: "10:00 AM", text: "Boat tour to Benagil Cave — iconic sea cave with sunlit dome ceiling, plus other grottos and rock formations along the coast (~2–3 hours)" },
      { time: "1:00 PM", text: "Lunch at the Marina — Restaurante Evaristo (beachfront, amazing seafood) or casual spots on the waterfront" },
      { time: "3:00 PM", text: "Praia de São Rafael — one of the most beautiful beaches in Algarve, dramatic rock formations, clear water" },
      { time: "5:30 PM", text: "Explore Albufeira Old Town — winding cobblestone streets, white-washed buildings, cafés" },
      { time: "7:00 PM", text: "Dinner in Albufeira — A Ruína (seafood on the beach) or Tasca do Kiko (tapas, great octopus)" },
      { time: "9:00 PM", text: "Uber back to Carvoeiro villa (~30 min, ~€25–30)", tag: "transit" },
      { time: "10:00 PM", text: "Night swim in the private pool!" },
    ],
    notes: "Benagil Cave is the #1 Algarve attraction — book early! Boat tours get you up close to the caves and grottos along the coast. Bring swimsuit, sunscreen, and waterproof bag for phone. Villa address: " + CARVOEIRO_VILLA,
  },
  {
    day: 3, date: "Fri, June 5", title: "Beach Day & Algarve Vibes", vibe: "Relax, swim, explore nearby beaches", color: "#C4D7A4",
    transport: { label: "Explore Algarve beaches from Carvoeiro", detail: "Uber/Bolt to beaches. Praia da Marinha is ~15 min from villa. Praia da Falésia (near Albufeira) is ~35 min. Or enjoy nearby Carvoeiro beaches!" },
    booking: null,
    items: [
      { time: "9:00 AM", text: "Leisurely breakfast at villa, morning pool time — last full day in Algarve!" },
      { time: "10:30 AM", text: "Uber to Praia da Marinha (~15 min from villa, ~€10) — often ranked top beach in Europe. Dramatic cliffs, crystal water, iconic double arches.", tag: "transit" },
      { time: "11:00 AM", text: "Beach time! Swim in the coves, take photos of the rock formations" },
      { time: "1:00 PM", text: "Lunch at the cliff-top restaurant or pack a picnic" },
      { time: "2:30 PM", text: "Walk the Seven Hanging Valleys Trail (Percurso dos Sete Vales Suspensos) — even a short section has incredible views" },
      { time: "4:00 PM", text: "Uber to Praia da Falésia near Albufeira (~35 min) — long golden beach with striking red/orange cliffs. Great for a final swim.", tag: "transit" },
      { time: "6:30 PM", text: "Uber back to Carvoeiro villa (~35 min, ~€25–30)", tag: "transit" },
      { time: "7:30 PM", text: "Freshen up, final pool time at sunset" },
      { time: "9:00 PM", text: "Farewell dinner in Carvoeiro — O Barradas (fine dining) or take Uber to Albufeira for Vila Joya Beach (Michelin-starred)" },
      { time: "11:00 PM", text: "Pack for Lisbon! Early-ish start tomorrow." },
    ],
    notes: "Praia da Marinha is stunning but has steep stairs down. Bring good shoes, water, sunscreen. Tomorrow you head to Lisbon — about 3 hours by bus from Lagoa. Villa: " + CARVOEIRO_VILLA,
  },
  {
    day: 4, date: "Sat, June 6", title: "Carvoeiro → Lisbon", vibe: "Travel day, explore downtown Lisbon", color: "#E8D5B7",
    transport: { label: "Carvoeiro Villa → Lisbon Airbnb", detail: "Uber from villa to Lagoa bus station (~10 min, ~€8). Rede Expressos bus: Lagoa → Lisbon Sete Rios (~3 hours, ~€15–20). Book ahead at rede-expressos.pt. From Sete Rios: Uber to Airbnb at " + LISBON_AIRBNB + " (~€10, 15 min). OR Uber/Bolt direct from villa: ~€180–220, ~2.5 hours." },
    booking: { urgency: "now", text: "Book Rede Expressos bus: Lagoa → Lisbon → rede-expressos.pt\nMorning departure recommended (9am or 10am)" },
    items: [
      { time: "7:30 AM", text: "Breakfast, final pack, check out of Carvoeiro villa (" + CARVOEIRO_VILLA + ")" },
      { time: "8:30 AM", text: "Uber from villa to Lagoa bus station (~10 min, ~€8)", tag: "transit" },
      { time: "9:00 AM", text: "Rede Expressos bus from Lagoa to Lisbon Sete Rios (~3 hours)", tag: "transit" },
      { time: "12:00 PM", text: "Arrive Lisbon Sete Rios. Uber to Airbnb (~€10, 15 min)", tag: "transit" },
      { time: "12:30 PM", text: "Arrive at Lisbon Airbnb: " + LISBON_AIRBNB + " — drop bags (check-in likely 3pm)" },
      { time: "1:00 PM", text: "Lunch nearby or head to Cervejaria Ramiro (famous seafood, locals line up for shrimp and crab)" },
      { time: "2:30 PM", text: "Metro or Uber to Baixa — Lisbon's downtown grid" },
      { time: "3:00 PM", text: "Check into Airbnb, quick refresh" },
      { time: "4:00 PM", text: "Praça do Comércio — grand waterfront square, coffee at the arcaded cafés" },
      { time: "5:00 PM", text: "Wander Rua Augusta, Rossio Square & Praça da Figueira" },
      { time: "6:30 PM", text: "Walk up to Chiado/Bairro Alto neighborhood" },
      { time: "8:00 PM", text: "Dinner in Bairro Alto — Sea Me (seafood + sushi, great vibe) or O Velho Eurico (traditional grilled fish)" },
      { time: "10:00 PM", text: "Explore Bairro Alto nightlife — streets fill up late! Uber home when done (~€6–8).", tag: "transit" },
    ],
    notes: "Your Lisbon Airbnb is at " + LISBON_AIRBNB + ". Get a Viva Viagem card at any metro station and load with 'zapping' credit for all public transit.",
  },
  {
    day: 5, date: "Sun, June 7", title: "Belém — The Highlight", vibe: "Age of Discovery, custard tarts, monasteries", color: "#A8C5D6",
    transport: { label: LISBON_AIRBNB + " → Belém", detail: "From " + LISBON_AIRBNB + ": Metro to Cais do Sodré, then tram 15E or bus 728 to Belém (~25–30 min total). OR Uber direct ~€8–10." },
    booking: { urgency: "now", text: "Book Jerónimos Monastery tickets — timed entry, sells out in June!\n→ patrimoniocultural.gov.pt" },
    items: [
      { time: "9:00 AM", text: "Metro to Cais do Sodré → tram 15E to Belém", tag: "transit" },
      { time: "9:30 AM", text: "Jerónimos Monastery — THE highlight of the trip! Stunning Manueline architecture, intricate cloisters, tomb of Vasco da Gama. Take your time here." },
      { time: "11:30 AM", text: "Pastéis de Belém — the original bakery since 1837. THE famous place for pastel de nata. Warm with cinnamon. Line moves fast, worth it!" },
      { time: "12:15 PM", text: "Monument to the Discoveries — waterfront monument shaped like a ship's prow. Great views, same area as monastery." },
      { time: "1:00 PM", text: "Torre de Belém — iconic riverside tower (worth seeing from outside, interior optional)" },
      { time: "1:30 PM", text: "Lunch in Belém — Ponto Final across the river (cheap seafood with views) or casual near the waterfront" },
      { time: "3:00 PM", text: "Tram 15E back toward central Lisbon. Get off at Chiado.", tag: "transit" },
      { time: "3:30 PM", text: "Walk through Chiado — Rua Garrett shops, coffee at A Brasileira, ride Santa Justa Elevator for rooftop views" },
      { time: "5:30 PM", text: "Head to Bairro Alto as it comes alive — browse streets, early dinner" },
      { time: "7:30 PM", text: "Dinner — try somewhere new or revisit a favorite" },
      { time: "9:30 PM", text: "Optional: Bairro Alto nightlife round 2, or rest up for Sintra tomorrow" },
    ],
    notes: "Belém is a must-do. Jerónimos Monastery and Pastéis de Belém are walking distance from each other. Monument to the Discoveries is on the waterfront nearby — do all three in the morning!",
  },
  {
    day: 6, date: "Mon, June 8", title: "Sintra Day Trip", vibe: "Fairytale palaces, mystical gardens", color: "#B8A9D4",
    transport: { label: "Airbnb → Sintra", detail: "Metro or Uber to Rossio train station. Train to Sintra ~50 min, ~€5 roundtrip. In Sintra, bus 434 to palaces." },
    booking: { urgency: "now", text: "Book Pena Palace tickets (timed entry!) → parquesdesintra.pt\nBook Quinta da Regaleira tickets → rfregaleira.pt\nGO EARLY — this is essential for Sintra!" },
    items: [
      { time: "7:30 AM", text: "Metro or Uber to Rossio Station. Train to Sintra (~50 min).", tag: "transit" },
      { time: "8:30 AM", text: "Arrive Sintra — bus 434 up to Pena Palace (~20 min)", tag: "transit" },
      { time: "9:00 AM", text: "Palácio da Pena — colorful Romanticist palace. Terraces, staterooms, park. Being early is key to beating crowds!" },
      { time: "11:00 AM", text: "Walk to Castelo dos Mouros (~10 min from Pena) — ancient Moorish walls with panoramic views" },
      { time: "12:00 PM", text: "Bus 434 down to Sintra town center", tag: "transit" },
      { time: "12:30 PM", text: "Lunch in Sintra — try travesseiros (almond pastry) at Piriquita. Incomum is great for a sit-down meal." },
      { time: "2:00 PM", text: "Walk to Quinta da Regaleira (~10 min) — mysterious gardens, the famous Initiation Well, grottoes, tunnels" },
      { time: "4:30 PM", text: "Optional: Palácio Nacional de Sintra in the town square" },
      { time: "5:30 PM", text: "Walk to train station (~20 min). Train to Rossio, metro or Uber home.", tag: "transit" },
      { time: "7:00 PM", text: "Back in Lisbon — shower, rest a bit" },
      { time: "9:00 PM", text: "Dinner — Taberna do Sal Grosso (modern Portuguese, great octopus) or explore near your Airbnb" },
    ],
    notes: "Wear comfortable shoes — Sintra is very hilly. Bring water and sunscreen. The 434 bus can have long afternoon lines; leaving early makes a huge difference!",
  },
  {
    day: 7, date: "Tue, June 9", title: "Alfama + Castle + Fado Night", vibe: "Old Lisbon, flea market, live music", color: "#D6A8C5",
    transport: { label: "Airbnb → Feira da Ladra → Alfama", detail: "Metro to Santa Apolónia (Blue Line) or Uber to Campo de Santa Clara for Feira da Ladra. Castelo & Alfama are walkable from there." },
    booking: { urgency: "soon", text: "Reserve Fado dinner — Solido (Alae's rec, great octopus!) or A Baiuca (amateur, locals sing) or Parreirinha de Alfama (classic). Call/email a few days ahead.\nOptional: Castelo de São Jorge tickets → castelodesaojorge.pt (skip the line)" },
    items: [
      { time: "9:00 AM", text: "Metro or Uber to Feira da Ladra flea market (Campo de Santa Clara)", tag: "transit" },
      { time: "9:00 AM", text: "Feira da Ladra — Lisbon's oldest flea market (Tuesdays & Saturdays). Vintage clothes, antiques, vinyl, azulejo tiles. Get there early, bring cash!" },
      { time: "11:00 AM", text: "Walk uphill to Castelo de São Jorge (~10 min from market)", tag: "transit" },
      { time: "11:15 AM", text: "Castelo de São Jorge — Lisbon's hilltop castle, best city views. Near downtown as your friend mentioned!" },
      { time: "12:30 PM", text: "Wander down through Alfama — Lisbon's oldest neighborhood. Get intentionally lost in the winding streets." },
      { time: "1:00 PM", text: "Miradouro de Santa Luzia & Portas do Sol — stunning viewpoints over rooftops" },
      { time: "1:30 PM", text: "Lunch in Alfama — Chapitô à Mesa (great grilled fish with panoramic views) or any tasca with sardinhas" },
      { time: "3:00 PM", text: "Sé de Lisboa (Lisbon Cathedral) — 12th-century fortress-church" },
      { time: "3:30 PM", text: "Optional: Fado Museum — learn about Portugal's music before hearing it live tonight" },
      { time: "5:00 PM", text: "Uber home (~€6–8). Rest and freshen up for Fado dinner.", tag: "transit" },
      { time: "8:30 PM", text: "Fado dinner in Alfama — Solido (Alae's favorite, amazing octopus!) or A Baiuca or Parreirinha de Alfama. Traditional food + live Fado music." },
      { time: "11:00 PM", text: "Uber home (~€6–8)", tag: "transit" },
    ],
    notes: "TUESDAY = Feira da Ladra day! Arrive by 9am for best vintage finds, vendors pack up by 2pm. Fado dinner is a must — book ahead, it's an unforgettable Lisbon experience.",
  },
  {
    day: 8, date: "Wed, June 10", title: "Flex Day — Portugal Day!", vibe: "National holiday, revisit favorites", color: "#9DC5BB",
    transport: { label: "Explore freely", detail: "Metro, Uber, or walk. Most places in Lisbon are 15–25 min by metro or ~€6–10 by Uber." },
    booking: null,
    items: [
      { time: "—", text: "June 10 = Dia de Portugal (national holiday). Some shops close but expect festivities and celebrations!" },
      { time: "10:00 AM", text: "Sleep in! Leisurely breakfast" },
      { time: "11:00 AM", text: "Revisit a favorite spot or hit anything you missed" },
      { time: "12:00 PM", text: "Ideas: Cascais beach day trip (train from Cais do Sodré, 35 min), Parque das Nações + Oceanário, Príncipe Real neighborhood, LX Factory" },
      { time: "1:30 PM", text: "Long leisurely lunch — Cervejaria Ramiro if you haven't yet (famous seafood!)" },
      { time: "3:30 PM", text: "Souvenir shopping — azulejo tiles, cork products, canned sardines (a legit Portuguese tradition), olive oil" },
      { time: "5:30 PM", text: "Golden hour at Miradouro do Monte Agudo (on your street!) or Miradouro da Graça for sunset photos" },
      { time: "7:30 PM", text: "Walk around Príncipe Real or revisit Bairro Alto" },
      { time: "9:30 PM", text: "Final dinner — go somewhere you loved or try somewhere new" },
      { time: "11:00 PM", text: "Pack up! Flight at 10am tomorrow. Set two alarms." },
    ],
    notes: "Portugal Day is a national holiday — enjoy the festive atmosphere! Some shops may be closed but restaurants are open. Good day for a beach trip to Cascais if weather is nice.",
  },
  {
    day: 9, date: "Thu, June 11", title: "Departure", vibe: "Até logo, Portugal!", color: "#E8D5B7",
    transport: { label: LISBON_AIRBNB + " → Lisbon Airport", detail: "From " + LISBON_AIRBNB + ": Uber to airport (~€10–15, 15–20 min). OR Metro Red Line → Aeroporto (~30 min, ~€1.50). Metro opens 6:30am." },
    booking: null,
    items: [
      { time: "6:30 AM", text: "Wake up at " + LISBON_AIRBNB + ", final pack, check you have passport + tickets" },
      { time: "7:00 AM", text: "Uber from Airbnb to Lisbon Airport (LIS) (~15–20 min, ~€10–15)", tag: "transit" },
      { time: "7:30 AM", text: "Arrive airport — aim for 2.5 hours before international flight" },
      { time: "10:00 AM", text: "DL0273 departs Lisbon → JFK (arrives 12:47pm same day)" },
    ],
    notes: "Don't forget: passport, all chargers, any souvenirs! Leaving from " + LISBON_AIRBNB + ". Até logo, Portugal — until next time!",
  },
];

const packingList = [
  { category: "Essentials", icon: "🎒", items: [
    { text: "Passport (valid 6+ months)", priority: true },
    { text: "Phone + charger + portable battery", priority: true },
    { text: "EU adapter plug (Type F, round 2-pin)", priority: true },
    { text: "Credit/debit card (no foreign transaction fee)", priority: true },
    { text: "Cash — euros for Ubers, Feira da Ladra, tips", priority: true },
    { text: "Flight confirmations (DL0272 out, DL0273 return)", priority: false },
    { text: "Carvoeiro Villa: " + CARVOEIRO_VILLA + " (June 3–6)", priority: false },
    { text: "Lisbon Airbnb: " + LISBON_AIRBNB + " (June 6–11)", priority: false },
    { text: "All pre-booked tickets (monastery, palaces, Benagil tour, bus)", priority: false },
    { text: "Travel insurance docs", priority: false },
  ]},
  { category: "Clothing (9 days, early June)", icon: "👕", items: [
    { text: "Comfortable walking shoes — cobblestones + hills daily!", priority: true },
    { text: "Light layers — 75–85°F days, cooler evenings", priority: false },
    { text: "Sandals / flip-flops for Algarve beaches", priority: false },
    { text: "Swimsuit + quick-dry towel (bring 2 for beach days)", priority: true },
    { text: "Light jacket or hoodie (evenings + Sintra is cooler)", priority: false },
    { text: "One nicer outfit for Fado dinner", priority: false },
    { text: "Hat + sunglasses", priority: true },
    { text: "Tote bag or foldable bag for market finds", priority: false },
    { text: "Beach cover-up / sarong", priority: false },
  ]},
  { category: "Beach & Day Trip Bag", icon: "🧳", items: [
    { text: "Small daypack / backpack", priority: true },
    { text: "Reusable water bottle (refill everywhere)", priority: false },
    { text: "Sunscreen SPF 30+ (essential for Algarve!)", priority: true },
    { text: "Waterproof phone pouch (for boat tours)", priority: false },
    { text: "Snacks for bus rides (Lagoa↔Lisbon is ~3 hours)", priority: false },
    { text: "Compact umbrella or light rain jacket (just in case)", priority: false },
  ]},
  { category: "Nice to Have", icon: "✨", items: [
    { text: "Camera (or just phone — the views are incredible)", priority: false },
    { text: "Book or Kindle for bus/beach", priority: false },
    { text: "Ziplock bags for toiletries / wet swimsuit", priority: false },
    { text: "Google Maps offline — download Algarve, Lisbon, Sintra", priority: false },
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
        <div style={{ fontSize: 13, opacity: 0.75 }}>June 3–11, 2026 · Algarve & Lisbon</div>
        <div style={{ fontSize: 11, opacity: 0.45, marginTop: 2 }}>✈️ DL0272/DL0273 JFK↔LIS · 🏖️ Carvoeiro (3–6) · 🏛️ Lisbon (6–11)</div>
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
          <div style={{ marginTop: 20, marginBottom: 16 }}><h2 style={{ fontSize: 22, fontWeight: 400, margin: "0 0 3px" }}>Book Ahead of Time</h2><div style={{ fontSize: 13, color: "#8B7E6A", fontStyle: "italic" }}>June is peak season — don't wait!</div></div>
          {[
            { label: "Book Now", color: "#9B2C2C", bg: "#FFF8F0", border: "#F0D8B8", items: [
              { text: "Rede Expressos bus: Lisbon → Lagoa", sub: "June 3, ~10:30am departure · Day 1", url: "rede-expressos.pt" },
              { text: "Benagil Cave boat tour", sub: "Sells out! From Albufeira Marina · Day 2", url: "getyourguide.com or viator.com" },
              { text: "Rede Expressos bus: Lagoa → Lisbon", sub: "June 6, morning departure · Day 4", url: "rede-expressos.pt" },
              { text: "Jerónimos Monastery tickets", sub: "Timed entry, sells out · Day 5", url: "patrimoniocultural.gov.pt" },
              { text: "Pena Palace tickets (Sintra)", sub: "Timed EARLY morning slot · Day 6", url: "parquesdesintra.pt" },
              { text: "Quinta da Regaleira tickets", sub: "Timed entry · Day 6", url: "rfregaleira.pt" },
            ]},
            { label: "Book 1 Week Before", color: "#8B6914", bg: "#FFFCF0", border: "#F0E8C0", items: [
              { text: "Fado dinner reservation", sub: "Solido (Alae's rec!), A Baiuca, or Parreirinha · Tue June 9 · Day 7", url: "" },
            ]},
            { label: "Optional (Skip the Line)", color: "#6B7F5E", bg: "#F8F6F2", border: "#E0D8C8", items: [
              { text: "Castelo de São Jorge tickets", sub: "Can buy on-site · Day 7", url: "castelodesaojorge.pt" },
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
              <div>• <strong>June 3</strong> — Land Lisbon 8am (DL0272). Bus to Lagoa (~3 hours), then Uber to Carvoeiro villa.</div>
              <div>• <strong>Carvoeiro Villa (June 3–6)</strong> — {CARVOEIRO_VILLA}. Private pool! Uber to Albufeira beaches ~30 min.</div>
              <div>• <strong>Lisbon Airbnb (June 6–11)</strong> — {LISBON_AIRBNB}. Bus from Lagoa (~3 hours).</div>
              <div>• <strong>Viva Viagem card</strong> — Get at any Lisbon metro. Zapping credit for all transit.</div>
              <div>• <strong>Uber/Bolt</strong> — Carvoeiro→Albufeira ~€25–30. Lisbon rides ~€6–10.</div>
              <div>• <strong>June 10</strong> — Portugal Day holiday, some closures.</div>
              <div>• <strong>June 11</strong> — DL0273 departs 10am. Uber from Airbnb to airport by 7am.</div>
            </div>
          </div>
        </div>)}
        {activeTab === "pack" && (<div>
          <div style={{ marginTop: 20, marginBottom: 16 }}><h2 style={{ fontSize: 22, fontWeight: 400, margin: "0 0 3px" }}>Packing List</h2><div style={{ fontSize: 13, color: "#8B7E6A", fontStyle: "italic" }}>9 days, early June — beach time + city exploring</div></div>
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
            <div style={{ marginTop: 3 }}>Pack light — you'll want room for souvenirs (cork goods, tiles, canned sardines, olive oil). Extra sunscreen for Algarve beaches! Bring a foldable tote for the Feira da Ladra flea market.</div>
          </div>
        </div>)}
      </div>
    </div>
  );
}

const S={screen:0,intent:"road",cart:[],cat:"apparel",open:false,bopis:"idle",stores:0,slot:"11:00",
 pdp:"clifton11",gal:0,size:"US 8",g:{turn:0,busy:false,q:""}};
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const usd=n=>"$"+n.toFixed(2).replace(/\.00$/,"");

function shoe(i,w=110){const[a,b]=C[i%C.length];return`<svg viewBox="0 0 220 100" width="${w}" height="${w*.455}" aria-hidden="true">
 <path d="M14 72 C14 61 25 55 42 53 L158 42 C182 40 203 49 207 62 C209 71 200 78 185 78 L38 81 C22 81 14 79 14 72 Z" fill="${a}"/>
 <path d="M16 74 C22 79 30 80 40 80 L185 78 C197 78 205 74 207 67 L16 74 Z" fill="${b}" opacity=".4"/>
 <path d="M38 53 C46 31 68 22 98 19 L130 17 C152 16 165 23 173 35 C177 42 174 45 165 46 L38 53 Z" fill="${b}"/>
 <ellipse cx="165" cy="27" rx="12" ry="9" fill="${a}" opacity=".85"/>
 <path d="M70 34 L80 47 M86 29 L95 44 M102 26 L111 41" stroke="${a}" stroke-width="3.2" fill="none" opacity=".75" stroke-linecap="round"/></svg>`;}
function img(key,fallbackIdx,w){return IMAGES[key]?`<img src="${IMAGES[key]}" alt="">`:shoe(fallbackIdx,w||110);}

/* ---------- chrome ---------- */
function chrome(){return`<div class="promo">Members: free expedited delivery before race day. <a href="#">Your benefits</a></div>
<header class="nav"><div class="nav-in"><div class="logo" data-nav="1">HOKA</div>
 <ul><li>Shoe Finder</li><li>New</li><li class="on">Women</li><li>Men</li><li>Trail</li><li>Race Day</li></ul>
 <div class="nav-r"><div class="search">Search</div>
  <button class="cartpill" data-nav="4">Bag · ${S.cart.length}</button><div class="avatar">${R.initials}</div></div></div></header>`;}
function rail(){const n=["Google AI Mode","Your store","Product","Category","Bag","Store pickup","After the race"];
 document.getElementById("rail").innerHTML=`<span class="lbl">Screen</span>`+
 n.map((x,i)=>`<button class="chip" data-nav="${i}" aria-current="${S.screen===i}">${i+1}. ${x}</button>`).join("");}

/* ---------- 1 · interactive AI mode ---------- */
function gCard(seller,name,price,hoka){
 return`<div class="g-c ${hoka?"h":""}"><div class="imgslot" style="aspect-ratio:4/2.4">${hoka?img("clifton11",0,120):shoe(3,110)}</div>
  <div class="pad"><div class="s">${esc(seller)}</div><h4>${esc(name)}</h4><div class="p">${esc(price)}</div></div>
  ${hoka?`<div class="g-perk"><b>Your HOKA membership:</b> free expedited delivery, guaranteed before 2 Nov.</div>`:""}</div>`;}
function sGoogle(){
 const t=S.g.turn;
 let body="";
 if(t===0){body=`<div class="g-turn"><div class="g-spark"></div><div class="g-txt">
   <p>Ask anything. Try a shoe question — this pane behaves like AI Mode with shopping results.</p></div></div>
   <div class="g-sugg">
    <button data-ask="I'm running the NYC marathon in 5 weeks, what shoes should I look at?">I'm running NYC in 5 weeks, what shoes should I look at?</button>
    <button data-ask="Best cushioned trainer for high mileage under $160">Best cushioned trainer under $160</button></div>`;}
 if(t>=1){body+=`<div class="g-turn"><div style="flex:1;text-align:right"><span class="g-you">${esc(S.g.q||"I'm running the NYC marathon in 5 weeks, what shoes should I look at?")}</span></div></div>
  <div class="g-turn"><div class="g-spark"></div><div class="g-txt">
   <p>Five weeks out, most runners split the decision in two: a plated shoe for race day, and a cushioned trainer for the long runs that are left. Anything new needs about 30 miles of breaking in before you race in it.</p>
   <p>Across retailers, these come up most often for a sub-3:45 road marathon:</p>
   <div class="g-cards">
    ${gCard("Fleet Feet","Brooks Hyperion Elite 4","$250")}
    ${gCard("On · official","Cloudboom Strike","$280")}
    ${gCard("HOKA · official","Clifton 11 · Rocket X 2","$154.95 · $249.95",true)}
   </div></div></div>`;}
 if(t===1&&!S.g.busy){body+=`<div class="g-sugg">
   <button data-ask2="1">Tell me more about the HOKA options</button>
   <button data-ask2="1">Which HOKA suits a 480-mile Clifton 10 replacement?</button></div>`;}
 if(S.g.busy){body+=`<div class="g-turn"><div class="g-spark"></div><div class="typing"><i></i><i></i><i></i></div></div>`;}
 if(t>=2){body+=`<div class="g-turn"><div style="flex:1;text-align:right"><span class="g-you">Tell me more about the HOKA options</span></div></div>
  <div class="g-turn"><div class="g-spark"></div><div class="g-txt">
   <p>HOKA's road range splits cleanly. The Clifton 11 is the daily trainer — 38/30 mm stack in a women's 8, 8 mm drop, compression-moulded EVA. The Rocket X 2 is the racer — 36/31 mm, 5 mm drop, PEBA foam around a spoon-shaped carbon plate.</p>
   <p>If you're replacing a worn Clifton 10, the 11 keeps the same last, so there's no adaptation cost this close to a race.</p>
   <div class="g-cards">
    ${gCard("HOKA · official","Clifton 11","$154.95",true)}
    ${gCard("HOKA · official","Rocket X 2","$249.95")}
    ${gCard("HOKA · official","Arahi 7","$145")}
   </div>
   <div style="margin-top:18px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
    <button class="btn blue" data-nav="1">Open HOKA and use my collection</button>
    <span style="font-size:12.5px;color:#5F6368">HOKA can see your rack, mileage and race. Google can't.</span></div>
   </div></div>
   <p class="g-note">Member benefit surfaced through account linking. HOKA receives the referral and query context — not the conversation.</p>`;}
 return`<div class="g-top"><div class="g-logo">G<span class="r">o</span><span class="y">o</span>g<span class="g">l</span><span class="r">e</span></div>
  <form class="g-form" data-gform="1"><input class="g-in" id="gq" placeholder="Ask about shoes for your race…" value="" autocomplete="off">
  <button class="btn blue sm" type="submit">Ask</button></form></div>
 <div class="g-tabs"><div class="on">AI Mode</div><div>All</div><div>Shopping</div><div>Images</div></div>
 <div class="g-wrap">${body}</div>`;}

/* ---------- widget + race list ---------- */
function widget(){const hoka=RACK.filter(p=>p.b==="HOKA").length;
 return`<div class="w"><div class="w-top"><strong class="t">Your collection</strong><span class="sv">Strava connected</span></div>
 <div class="w-body">
  <div class="w-race"><div><div class="n">${R.race.days}</div><div class="l">days out</div></div>
   <div><div class="r">${esc(R.race.n)}</div><div class="l">${R.race.d} · goal ${R.race.goal}</div></div></div>
  <div class="w-stats"><div class="w-stat"><b>${RACK.length}</b><span>pairs tracked</span></div>
   <div class="w-stat"><b>${hoka}</b><span>HOKA pairs</span></div></div>
  <div class="w-alert"><b>Clifton 10 is at 480 miles.</b> Three long runs left before race week — it won't see you to the start line.</div>
  ${S.open?`<div class="w-sub">All ten pairs</div>
   ${RACK.map(p=>`<div class="w-pair">${shoe(p.b==="HOKA"?0:3,44)}
    <div><div class="nm">${esc(p.n)} <span style="color:var(--slate);font-weight:500">${p.b==="HOKA"?"":esc(p.b)}</span></div>
    <div class="u">${esc(p.u)}</div><div class="bar ${p.m>=400?"worn":""}"><i style="width:${Math.min(100,p.m/6.5)}%"></i></div></div>
    <div class="m">${p.m}<em>mi</em></div></div>`).join("")}
   <div class="w-sub">Races and events</div>
   ${EVENTS.map(e=>`<div class="w-ev"><div class="d">${e.d}</div><div><div style="font-weight:600">${esc(e.t)}</div><div class="x">${esc(e.x)}</div></div></div>`).join("")}`:""}
 </div><button class="w-toggle" data-toggle="1">${S.open?"Show less":"Open your collection"}</button></div>`;}
function raceList(){const inC=c=>S.cart.filter(id=>P[id].cat===c).length;
 return`<div class="rl"><h4>Race-day list</h4>
  <p class="cap">Ordered by when you need it. Shoes first — they want miles on them before 2 November.</p>
  <div style="margin-top:6px">${CHECK.map(c=>{const have=inC(c.k),done=have>=c.need;
   return`<button class="rlrow" data-cat="${c.k}"><span class="ring ${done?"done":""}">${done?"✓":have||""}</span>
    <span><span class="t">${c.t}</span><span class="d" style="display:block">${esc(c.d)}</span></span>
    <span class="go">${done?"Covered":have?`${have}/${c.need}`:"Open"}</span></button>`;}).join("")}</div></div>`;}
function side(){return`<aside class="side">${widget()}${raceList()}<p class="w-foot">Mileage comes from Strava gear and is shown only to you. Recommendations are built from your HOKA history, not your training data.</p></aside>`;}

/* ---------- 2 · store ---------- */
function card(id){const p=P[id],inC=S.cart.includes(id);
 return`<article class="card" data-pdp="${id}"><div class="imgslot">${p.owned?'<span class="tagmini">In your collection</span>':p.partner?'<span class="tagmini">Partner brand</span>':''}${img(id,p.c)}</div>
  <div class="body"><div class="nm">${esc(p.n)}</div><div class="rsn">${esc(p.r)}</div>
  <div class="ft"><span class="pr">${p.owned?'<span style="color:var(--slate)">In your collection</span>':usd(p.pr)}</span>
  ${p.owned?'<span style="font-size:12.5px;color:var(--slate)">38 miles</span>':
   `<button class="btn sm ${inC?"ghost":"blue"}" data-add="${id}">${inC?"In bag":"Add"}</button>`}</div></div></article>`;}
function profileStrip(){return`<div class="profile">
 <div class="f"><span>Shopping</span><b>${R.gender}</b></div>
 <div class="f"><span>Age</span><b>${R.age}</b></div>
 <div class="f" style="min-width:210px"><span>Running gait</span><b>${esc(R.gait)}</b></div>
 <div class="f"><span>Size</span><b>${R.sizes.shoe} · ${R.sizes.width}</b></div>
 <div class="cta"><p>Gait assessed ${esc(R.assessed)}</p>
  <button class="btn ghost sm" data-nav="5">Book a new assessment at 579 Fifth Ave</button></div></div>`;}
function sStore(){const road=S.intent==="road";
 return`<section class="hero"><img class="heroimg" src="${road?IMAGES.hero_nyc:IMAGES.hero_trail}" alt=""><div class="scrim"></div>
  
  <div class="hero-in"><div class="eyebrow">${road?"Your race":"Your next start"}</div>
   <h1>${road?"You + 26.2":"Rain, rock, 21 km"}</h1>
   <div class="days"><b>${road?R.race.days:21}</b><span>days to ${road?"New York":"Breakneck Point"}</span></div>
   <p>${road?`Morning Maya. Your <b>Clifton 10 is at 480 miles</b> with three long runs to go. Everything below is built around getting you to the start line.`
    :`Rain all weekend, and your <b>Speedgoat 6 is at 95 miles</b>. The kit list needs a taped shell.`}</p>
   <div class="row"><span class="pill-stat">${road?R.race.w:"11°C, rain"}</span>
    <span class="pill-stat">Goal ${road?R.race.goal:"finish upright"}</span><span class="pill-stat">4,180 members racing</span></div></div></section>
 <div class="intent"><strong>Built around one thing:</strong>
  <span style="color:var(--slate)">${road?"the start line in New York on 2 November.":"a wet trail half on 19 October."}</span>
  <div class="seg"><button data-intent="road" aria-pressed="${road}">NYC Marathon</button>
  <button data-intent="trail" aria-pressed="${!road}">Trail half, rain</button></div></div>
 ${profileStrip()}
 <section class="sec"><div class="sec-h"><div><h2>What we'd get you</h2>
  <p>Grouped by the reason, not the department — from your collection, your Chicago kit and the forecast.</p></div></div>
  ${CL[S.intent].map(c=>`<div class="cluster"><div class="ch"><div><h3>${esc(c.h)}</h3><div class="sub">${esc(c.s)}</div></div>
   <button class="btn ghost sm" data-cat="${c.cat}">Show all ${c.cat}</button></div>
   <div class="grid">${c.i.map(card).join("")}</div></div>`).join("")}
 </section>`;}

/* ---------- 3 · PDP ---------- */
function sPDP(){const id=S.pdp,p=P[id];const sizes=["US 7","US 7.5","US 8","US 8.5","US 9"];
 return`<button class="link" data-nav="1" style="margin-bottom:14px">← Back to your store</button>
 <div class="pdp"><div class="gal">
  <div class="main">${img(id+(S.gal?"_"+(S.gal+1):""),p.c,260)}</div>
  <div class="thumbs">${[0,1,2,3].map(i=>`<button data-gal="${i}" aria-pressed="${S.gal===i}">${img(id+(i?"_"+(i+1):""),p.c,70)}</button>`).join("")}</div>
 </div>
 <div><h1>${esc(p.n)}</h1>
  <p style="color:var(--slate);font-size:13.5px;margin-top:5px">${esc(p.color)} · ${R.gender}</p>
  <div class="price">${p.owned?"In your collection":usd(p.pr)}</div>
  <div class="why"><b>Why this, for your race</b>${esc(p.why)}</div>
  <p class="desc">${esc(p.desc)}</p>
  <div class="specs">${p.specs.map(s=>`<div><span>${esc(s[0])}</span><span>${esc(s[1])}</span></div>`).join("")}</div>
  <p style="font-size:12.5px;color:var(--slate);margin-top:14px">Size — ★ is the size on your last three orders</p>
  <div class="sizes">${sizes.map(s=>`<button data-size="${s}" aria-pressed="${S.size===s}" class="${s===R.sizes.shoe?"mine":""}">${s}</button>`).join("")}</div>
  <div class="actions">
   ${p.owned?`<button class="btn ghost" disabled>Already in your collection</button>`:
    `<button class="btn blue" data-add="${id}">${S.cart.includes(id)?"Added to bag":"Add to bag"}</button>`}
   <button class="btn ghost" data-nav="5">Check 579 Fifth Ave</button></div>
  <p style="font-size:12.5px;color:var(--slate);margin-top:12px">Free expedited delivery as a member. Order by 28 October for race day.</p>
 </div></div>`;}

/* ---------- 4 · category ---------- */

function sCat(){const[t,d]=CAT[S.cat];const items=Object.keys(P).filter(k=>P[k].cat===S.cat);
 return`<section class="sec" style="margin-top:4px"><div class="sec-h">
  <div><p style="font-size:12.5px;font-weight:600;color:var(--blue)">Race-day list · ${S.intent==="road"?"NYC Marathon":"Trail half"}</p>
  <h2 style="font-size:30px;margin-top:6px">${t}</h2><p>${d}</p></div>
  <div style="font-size:13px;color:var(--slate)">Sized to you · ${R.sizes.shoe} · top ${R.sizes.top}</div></div>
 <div class="grid">${items.map(card).join("")}</div>
 <div style="display:flex;gap:10px;margin-top:22px"><button class="btn ghost" data-nav="1">Back to your store</button>
  <button class="btn blue" data-nav="4" ${S.cart.length?"":"disabled"}>Go to bag · ${S.cart.length}</button></div></section>`;}

/* ---------- 5 · bag ---------- */
function readiness(){const need={shoes:1,apparel:2,accessories:2,nutrition:1,recovery:1},owned={shoes:1};
 let score=2,total=2,gaps=[];
 for(const k in need){total+=need[k];const have=S.cart.filter(id=>P[id].cat===k).length+(owned[k]||0);
  score+=Math.min(need[k],have);if(need[k]-Math.min(need[k],have)>0)gaps.push(k);}
 return{score,total,gaps};}

function sCart(){const sum=S.cart.reduce((a,id)=>a+P[id].pr,0);
 return`<section class="sec" style="margin-top:4px"><div class="sec-h"><div><h2 style="font-size:30px">Your bag</h2>
  <p>You came for a marathon shoe. Here's where the rest of race day stands.</p></div></div>
  ${S.cart.length?S.cart.map(id=>`<div class="line"><div class="im">${img(id,P[id].c,90)}</div>
   <div><div style="font-weight:700">${esc(P[id].n)}</div>
   <div style="font-size:12.5px;color:var(--slate);margin-top:2px">${esc(P[id].r)}</div>
   <div style="font-size:12px;color:var(--slate);margin-top:4px">Size ${S.size}</div></div>
   <div style="text-align:right"><div style="font-weight:700">${usd(P[id].pr)}</div>
   <button class="link" style="font-size:12.5px;margin-top:4px" data-rm="${id}">Remove</button></div></div>`).join("")
  :`<div class="empty">Your bag is empty. Add something from your store or the race-day list.<br>
   <button class="btn blue sm" style="margin-top:14px" data-nav="1">Back to your store</button></div>`}
  <div class="line" style="border-style:dashed"><div class="im">${img("rocketx",1,90)}</div>
   <div><div style="font-weight:700">Rocket X 2 · in your collection</div>
   <div style="font-size:12.5px;color:var(--slate);margin-top:2px">Counted as your race pair — 38 miles, ready.</div></div>
   <div style="font-weight:700;color:var(--slate)">$0</div></div>
  ${S.cart.length?`<div style="display:flex;justify-content:space-between;padding:16px 4px;font-weight:700;font-size:17px">
   <span>Subtotal</span><span>${usd(sum)}</span></div>`:""}
  <div style="display:flex;gap:10px"><button class="btn ghost" data-nav="1">Keep building the list</button>
   <button class="btn blue" data-nav="5" ${S.cart.length?"":"disabled"}>Check store pickup</button></div></section>`;}
function cartPanel(){const{score,total,gaps}=readiness();
 return`<aside class="side"><div class="panel">
  <p style="font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--slate)">Race-day readiness</p>
  <div class="score" style="margin-top:8px"><b>${score}</b><span>of ${total}</span></div>
  <div class="bars">${Array.from({length:total},(_,i)=>`<i class="${i<score?"on":""}"></i>`).join("")}</div>
  <p style="font-size:12.5px;color:var(--slate);margin:8px 0 14px">Counts what's already in your collection, not just what's in the bag.</p>
  ${gaps.length?gaps.map(g=>`<div class="gap"><span class="gdot"></span><div><div class="t">${GAPC[g][0]}</div><div class="c">${GAPC[g][1]}</div></div></div>`).join("")
   :`<div class="gap"><div><div class="t">Everything's covered</div><div class="c">Nothing left to buy for 2 November.</div></div></div>`}
  <div class="deadline">Order by <b>28 October</b> for delivery before race day. New shoes want 30 miles first — that's your next two long runs.</div>
  <div class="promobox"><span class="code">NYC26</span>
   <div style="color:var(--slate);margin-top:4px">For everyone racing New York: expedited delivery and bib engraving at 579 Fifth Ave. Same offer on every channel.</div></div>
 </div>${raceList()}</aside>`;}

/* ---------- 6 · pickup ---------- */
function stockFor(i){const c=S.cart.length?S.cart:["clifton11"];
 if(i===0)return{has:c,miss:[]};
 if(i===1)return{has:c.slice(0,Math.max(1,c.length-1)),miss:c.slice(Math.max(1,c.length-1))};
 if(i===2)return{has:c.slice(-1),miss:c.slice(0,-1)};
 return{has:c.slice(0,1),miss:c.slice(1)};}
function sBopis(){const done=S.bopis==="done",shown=done?STORES.length:S.stores,n=S.cart.length||1;
 return`<section class="sec" style="margin-top:4px"><div class="sec-h"><div><h2 style="font-size:30px">Where you can pick this up</h2>
  <p>Checking the whole bag at once, across our stores and partners who carry HOKA.</p></div></div>
 <div class="agent"><div class="aline">${done?"":'<span class="pulse"></span>'}
  <span>${done?"Checked 4 stores within 8 km. Fifth Avenue covers the whole bag.":`Asking 4 stores near Brooklyn for ${n} item${n>1?"s":""}…`}</span></div>
  ${done?`<div class="aline" style="color:#8FA6BF">Partner stock comes from their systems — we show when it was last checked, and pass your name and pickup time only when you confirm.</div>`:""}</div>
 ${STORES.map((s,i)=>{const v=i<shown,st=stockFor(i);return`<div class="store ${i===0&&done?"best":""} ${v?"":"pend"}">
  <div><div class="nm">${esc(s.n)}</div><div class="mt">${esc(s.t)} · <span class="badge ${s.live?"live":""}">${v?esc(s.f):"checking"}</span></div>
   <div class="it">${v?st.has.map(id=>esc(P[id].n)).join(" · ")+(st.miss.length?" · "+st.miss.map(id=>`<s>${esc(P[id].n)}</s>`).join(" · "):""):"…"}</div></div>
  <div style="text-align:right">${v?`<div style="font-weight:700">${st.has.length} of ${n}</div>
   ${i===0&&done?`<div class="slots">${["11:00","15:30","18:00"].map(t=>`<button data-slot="${t}" aria-pressed="${S.slot===t}">${t}</button>`).join("")}</div>`:""}`:""}</div></div>`;}).join("")}
 ${done?`<div class="confirm"><h3 style="font-size:20px">Pick up ${n} of ${n} at Fifth Avenue, ${S.slot} today</h3>
  <p>Held under your name for four hours. The team will have your size ${S.size} ready to try, and your bib engraving is in the same visit.</p>
  <div style="margin-top:14px;display:flex;gap:10px"><button class="btn" style="background:#fff;color:var(--blue)" data-nav="6">Confirm pickup</button>
  <button class="btn ghost" style="border-color:#fff;color:#fff" data-nav="4">Back to bag</button></div></div>`
 :`<div style="margin-top:18px"><button class="btn blue" data-run="1">${S.bopis==="running"?"Checking…":"Check nearby stores"}</button></div>`}</section>`;}

/* ---------- 7 · after ---------- */
function sAfter(){return`<section class="result">
 <p style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9FB4CC">Sun 2 November · New York</p>
 <div class="time" style="margin-top:10px">3:41:18</div>
 <p style="margin-top:12px;color:#DCE7F4;max-width:50ch">Under 3:45. The Clifton 11 did 31 miles of breaking in, and the Rocket X 2 finished at 64.</p>
 <div class="d"><div><span>Finish</span><b>3:41:18</b></div><div><span>PB by</span><b>10:48</b></div>
  <div><span>Rocket X 2</span><b>64 mi</b></div><div><span>Clifton 11</span><b>31 mi</b></div></div></section>
 <section class="sec"><div class="sec-h"><div><h2>The next 48 hours</h2>
  <p>Your store has switched out of race prep. This is what it shows now.</p></div></div>
  <div class="newpair">${img("clifton11",0,90)}<div><div style="font-weight:700">Clifton 11 added to your collection</div>
   <div style="font-size:13px;color:var(--slate)">31 miles. We'll tell you at 400 — around March at your volume.</div></div></div>
  <div class="cluster"><div class="ch"><div><h3>For the walk back to the subway</h3>
   <div class="sub">4 km between the finish and your bag, and stairs after that.</div></div>
   <button class="btn ghost sm" data-cat="recovery">Show all recovery</button></div>
   <div class="grid">${["slide","comp","hoodie"].map(card).join("")}</div></div></section>`;}

/* ---------- render ---------- */
function render(){
 let main,aside="",one=false;
 switch(S.screen){
  case 0: main=sGoogle(); one=true; break;
  case 1: main=sStore(); aside=side(); break;
  case 2: main=sPDP(); aside=side(); break;
  case 3: main=sCat(); aside=side(); break;
  case 4: main=sCart(); aside=cartPanel(); break;
  case 5: main=sBopis(); aside=side(); break;
  default: main=sAfter(); aside=side();
 }
 document.getElementById("app").innerHTML = one? main : chrome()+`<div class="shell"><div>${main}</div>${aside}</div>`;
 rail(); window.scrollTo({top:0,behavior:"instant"});
}
document.addEventListener("submit",e=>{
 if(!e.target.closest("[data-gform]"))return; e.preventDefault();
 const v=document.getElementById("gq").value.trim(); if(!v)return;
 if(S.g.turn===0){S.g.q=v;askStep(1);} else {askStep(2);} });
document.addEventListener("click",e=>{
 const t=e.target.closest("[data-nav],[data-intent],[data-cat],[data-add],[data-rm],[data-run],[data-slot],[data-toggle],[data-ask],[data-ask2],[data-pdp],[data-gal],[data-size]");
 if(!t)return;
 if(t.dataset.ask!==undefined){S.g.q=t.dataset.ask;askStep(1);return;}
 if(t.dataset.ask2!==undefined){askStep(2);return;}
 if(t.dataset.nav!==undefined){S.screen=+t.dataset.nav;if(S.screen!==5){S.bopis="idle";S.stores=0;}render();}
 else if(t.dataset.pdp&&!e.target.closest("[data-add]")){S.pdp=t.dataset.pdp;S.gal=0;S.screen=2;render();}
 else if(t.dataset.intent){S.intent=t.dataset.intent;render();}
 else if(t.dataset.cat){S.cat=t.dataset.cat;S.screen=3;render();}
 else if(t.dataset.add){if(!S.cart.includes(t.dataset.add))S.cart.push(t.dataset.add);render();}
 else if(t.dataset.rm){S.cart=S.cart.filter(x=>x!==t.dataset.rm);render();}
 else if(t.dataset.gal!==undefined){S.gal=+t.dataset.gal;render();}
 else if(t.dataset.size){S.size=t.dataset.size;render();}
 else if(t.dataset.slot){S.slot=t.dataset.slot;render();}
 else if(t.dataset.toggle){S.open=!S.open;render();}
 else if(t.dataset.run){runAgent();}
});
function askStep(n){S.g.busy=true;render();setTimeout(()=>{S.g.busy=false;S.g.turn=n;render();},900);}
function runAgent(){if(S.bopis==="running")return;S.bopis="running";S.stores=0;render();
 const step=()=>{S.stores++;if(S.stores>=STORES.length){S.bopis="done";render();}else{render();setTimeout(step,620);}};
 setTimeout(step,700);}
render();

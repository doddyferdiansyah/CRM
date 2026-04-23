// ═══════════════════════════════════════
//  NAV
// ═══════════════════════════════════════
const PAGES=['home','assess','roadmap','lp','fw','res','cert','career'];
function go(n){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.ntab').forEach(t=>t.classList.remove('on'));
  document.getElementById('page-'+n).classList.add('on');
  document.querySelectorAll('.ntab')[PAGES.indexOf(n)].classList.add('on');
  window.scrollTo(0,0);
}

// ═══════════════════════════════════════
//  ASSESSMENT — 12 Questions
// ═══════════════════════════════════════
const Qs=[
  {cat:'Latar Belakang',text:'Apa latar belakang pendidikan atau pekerjaan kamu saat ini?',hint:'Ini menentukan titik start belajarmu.',
   opts:[{em:'💻',l:'IT / Tech',s:'Developer, sysadmin, networking, dsb.',v:'bg_it'},
         {em:'🎓',l:'Non-IT — Akademis',s:'Mahasiswa non-IT, dosen, peneliti.',v:'bg_academic'},
         {em:'💼',l:'Non-IT — Profesional',s:'Bisnis, hukum, keuangan, HR, dsb.',v:'bg_biz'},
         {em:'🌱',l:'Belum berpengalaman kerja',s:'Fresh graduate atau masih sekolah.',v:'bg_fresh'}]},
  {cat:'Kemampuan Teknis',text:'Seberapa nyaman kamu dengan command line / terminal komputer?',hint:'Terminal adalah alat wajib cybersecurity.',
   opts:[{em:'🚀',l:'Sangat nyaman',s:'Sering pakai terminal untuk kerja harian.',v:'cli_yes'},
         {em:'🤔',l:'Pernah pakai, tapi jarang',s:'Tahu cara buka terminal, tapi tidak rutin.',v:'cli_maybe'},
         {em:'😨',l:'Belum pernah sama sekali',s:'Terminal terasa asing dan menakutkan.',v:'cli_no'}]},
  {cat:'Pengetahuan Dasar',text:'Apakah kamu sudah memahami konsep CIA Triad, IP address, dan cara kerja internet?',hint:'Ini mengukur fondasi teknis kamu saat ini.',
   opts:[{em:'✅',l:'Ya, saya paham semua itu',s:'Sudah familiar dan bisa menjelaskannya.',v:'know_high'},
         {em:'🤷',l:'Sebagian, tidak semuanya',s:'Pernah dengar tapi tidak yakin semuanya.',v:'know_mid'},
         {em:'❓',l:'Belum, ini baru untuk saya',s:'Ini pertama kali saya dengar istilah-istilah itu.',v:'know_low'}]},
  {cat:'Tujuan Belajar',text:'Apa tujuan utamamu belajar cybersecurity?',hint:'Tujuan yang berbeda membutuhkan Learning Path yang berbeda.',
   opts:[{em:'💼',l:'Berkarier atau pindah karier ke cybersecurity',s:'Ingin mendapat pekerjaan di bidang ini.',v:'goal_career'},
         {em:'🤖',l:'Mengamankan sistem / produk AI yang saya bangun',s:'Developer atau data scientist yang butuh security.',v:'goal_ai'},
         {em:'🛡️',l:'Melindungi bisnis atau organisasi saya',s:'Pemilik usaha, manajer IT, atau decision maker.',v:'goal_biz'},
         {em:'📚',l:'Akademis, riset, atau mengajar',s:'Mahasiswa, dosen, atau peneliti.',v:'goal_academic'}]},
  {cat:'Minat Spesifik',text:'Aspek cybersecurity mana yang paling menarik untukmu saat ini?',hint:'Jika belum tahu, pilih "Eksplorasi dulu".',
   opts:[{em:'🔴',l:'Hacking & Penetration Testing',s:'Menemukan celah secara etis.',v:'int_red'},
         {em:'🔵',l:'Pertahanan & SOC / Blue Team',s:'Mendeteksi dan merespons ancaman.',v:'int_blue'},
         {em:'🤖',l:'AI Security & Agentic AI',s:'Mengamankan sistem AI, LLM, dan agen AI.',v:'int_ai'},
         {em:'⚖️',l:'Governance, Risk & Compliance',s:'Regulasi, audit, kebijakan, ISO.',v:'int_grc'},
         {em:'🧭',l:'Belum tahu, eksplorasi dulu',s:'Mau lihat semuanya sebelum pilih.',v:'int_explore'}]},
  {cat:'Waktu Belajar',text:'Berapa jam per minggu yang bisa kamu dedikasikan secara konsisten?',hint:'Jawab realistis — bukan ideal.',
   opts:[{em:'🔥',l:'15 jam+ per minggu',s:'Saya bisa fulltime atau intensif.',v:'time_high'},
         {em:'⏰',l:'5–15 jam per minggu',s:'Ada waktu di luar kerja / kuliah.',v:'time_mid'},
         {em:'🌙',l:'Kurang dari 5 jam per minggu',s:'Waktu sangat terbatas.',v:'time_low'}]},
  {cat:'Target Waktu',text:'Kapan kamu ingin mulai bekerja atau menerapkan ilmu cybersecurity ini?',hint:'Menentukan prioritas dan kecepatan belajar.',
   opts:[{em:'⚡',l:'Dalam 6 bulan',s:'Butuh hasil cepat.',v:'urgency_fast'},
         {em:'📅',l:'Dalam 1–2 tahun',s:'Ingin fondasi kuat, tidak terburu-buru.',v:'urgency_normal'},
         {em:'🌱',l:'Tidak ada target waktu',s:'Belajar santai sesuai kecepatan sendiri.',v:'urgency_slow'}]},
  {cat:'AI & Teknologi',text:'Apakah kamu sudah menggunakan atau membangun produk berbasis AI (ChatGPT, LLM, API AI, dsb.)?',hint:'Relevan untuk menentukan apakah Fase AI Security diprioritaskan.',
   opts:[{em:'🤖',l:'Ya, saya aktif pakai dan membangun dengan AI',s:'Pakai API, fine-tune model, atau deploy AI agent.',v:'ai_high'},
         {em:'👋',l:'Pakai sebagai user, belum membangun',s:'Pakai ChatGPT, Copilot, dsb. tapi tidak develop.',v:'ai_mid'},
         {em:'🙅',l:'Belum atau sangat jarang',s:'Hampir tidak pernah pakai AI tools.',v:'ai_low'}]},
  {cat:'Regulasi & Compliance',text:'Apakah pekerjaanmu atau organisasimu berkaitan dengan data pribadi, keuangan, atau kesehatan?',hint:'Menentukan apakah Fase GRC diprioritaskan.',
   opts:[{em:'🏦',l:'Ya — keuangan / fintech / perbankan',s:'Terikat PCI DSS, regulasi OJK.',v:'reg_finance'},
         {em:'🏥',l:'Ya — kesehatan / healthcare',s:'Terikat HIPAA, data medis.',v:'reg_health'},
         {em:'🏢',l:'Ya — bisnis umum dengan data pelanggan',s:'Terikat UU PDP, GDPR.',v:'reg_general'},
         {em:'🙅',l:'Tidak, atau belum relevan sekarang',s:'Belum ada konteks regulasi spesifik.',v:'reg_none'}]},
  {cat:'Gaya Belajar',text:'Bagaimana cara belajar yang paling efektif untukmu?',hint:'Membantu kami merekomendasikan sumber yang tepat.',
   opts:[{em:'🎯',l:'Langsung praktik dan hands-on',s:'Belajar dengan coba-coba sendiri.',v:'style_hands'},
         {em:'📖',l:'Baca teori dulu, baru praktik',s:'Perlu paham konsep sebelum coba.',v:'style_theory'},
         {em:'🎥',l:'Video dan kelas terstruktur',s:'Lebih mudah dengan instruktur.',v:'style_video'}]},
  {cat:'Komitmen',text:'Seberapa serius kamu berkomitmen menyelesaikan program belajar ini?',hint:'Jujurlah — ini hanya untuk kamu.',
   opts:[{em:'🏆',l:'Sangat serius, ini prioritas utama',s:'Siap investasi penuh waktu dan tenaga.',v:'commit_high'},
         {em:'👌',l:'Serius, tapi ada prioritas lain',s:'Konsisten tapi tidak bisa fulltime.',v:'commit_mid'},
         {em:'🤷',l:'Masih menjajaki',s:'Belum pasti, ingin tahu dulu.',v:'commit_low'}]},
  {cat:'Soft Skills',text:'Apakah kamu nyaman menulis laporan teknis atau presentasi kepada non-teknis?',hint:'Security communication adalah skill kritis yang sering diabaikan.',
   opts:[{em:'✍️',l:'Ya, saya terbiasa menulis dan presentasi',s:'Sering buat laporan, deck, atau proposal.',v:'comm_high'},
         {em:'📝',l:'Bisa, tapi perlu banyak latihan',s:'Sudah pernah tapi tidak terlalu percaya diri.',v:'comm_mid'},
         {em:'😓',l:'Ini kelemahan saya',s:'Lebih nyaman dengan hal teknis daripada komunikasi.',v:'comm_low'}]},
];

let answers={}, curQ=0;

function buildAssess(){
  const area=document.getElementById('qArea');
  area.innerHTML=Qs.map((q,i)=>`
    <div class="qcard ${i===0?'on':''}" id="qc${i}">
      <div class="q-cat">${q.cat} · ${i+1}/12</div>
      <div class="q-text">${q.text}</div>
      <div class="q-hint">${q.hint}</div>
      <div class="q-opts">${q.opts.map(o=>`
        <div class="q-opt" onclick="pickOpt(${i},'${o.v}',this)">
          <div class="q-opt-em">${o.em}</div>
          <div><div class="q-opt-label">${o.l}</div><div class="q-opt-sub">${o.s}</div></div>
        </div>`).join('')}
      </div>
      <div class="q-foot">
        <div class="q-ctr">Pertanyaan ${i+1} / ${Qs.length}</div>
        ${i>0?`<button class="btn btn-g" style="padding:5px 14px;font-size:9px" onclick="prevQ(${i})">← Kembali</button>`:'<div></div>'}
      </div>
    </div>`).join('');
}

function pickOpt(qi,val,el){
  answers[qi]=val;
  document.querySelectorAll(`#qc${qi} .q-opt`).forEach(o=>o.classList.remove('sel'));
  el.classList.add('sel');
  setTimeout(()=>nextQ(qi),380);
}
function nextQ(qi){
  if(qi<Qs.length-1){
    document.getElementById('qc'+qi).classList.remove('on');
    document.getElementById('qc'+(qi+1)).classList.add('on');
    curQ=qi+1; updProg();
  } else { updProg(true); showResult(); }
}
function prevQ(qi){
  document.getElementById('qc'+qi).classList.remove('on');
  document.getElementById('qc'+(qi-1)).classList.add('on');
  curQ=qi-1; updProg();
}
function updProg(done=false){
  const pct=done?100:Math.round(((curQ+1)/Qs.length)*100);
  document.getElementById('pFill').style.width=pct+'%';
  document.getElementById('pLabel').textContent=done?`Selesai — ${Qs.length} pertanyaan dijawab`:`Pertanyaan ${curQ+1} dari ${Qs.length}`;
  document.getElementById('pPct').textContent=pct+'%';
}

// ── PROFILE CALCULATOR ──
function calcProfile(){
  const a=answers;
  // Determine profile type
  let track='explorer';
  if(a[4]==='int_red') track='red';
  else if(a[4]==='int_blue') track='blue';
  else if(a[4]==='int_ai'||a[3]==='goal_ai') track='ai';
  else if(a[4]==='int_grc') track='grc';

  // Determine if can skip early phases
  const isIT = a[0]==='bg_it';
  const knowHigh = a[2]==='know_high';
  const cliYes = a[1]==='cli_yes';
  const skipL0 = isIT && knowHigh && cliYes;
  const skipL1partial = isIT && knowHigh;

  // Pace
  const pace = (a[5]==='time_high'&&a[10]==='commit_high') ? 'intensif' :
               (a[5]==='time_low'||a[10]==='commit_low') ? 'santai' : 'normal';

  // AI priority
  const aiPriority = a[7]==='ai_high' || a[4]==='int_ai' || a[3]==='goal_ai';

  // GRC priority
  const grcPriority = a[8]!=='reg_none' || a[4]==='int_grc';

  // Comm need
  const needComm = a[11]==='comm_low';

  // Urgency
  const urgent = a[6]==='urgency_fast';

  const profiles = {
    red:{emoji:'🔴',color:'var(--L5)',name:'Calon Red Teamer / Ethical Hacker',badge:'Red Team Track',
         desc:`Kamu punya minat offensif yang kuat. Learning Path-mu akan fokus pada exploitation, pentesting methodology, dan persiapan OSCP. Phase AI Security akan mengajarkan cara menyerang sistem AI secara etis.`},
    blue:{emoji:'🔵',color:'var(--L1)',name:'Calon Blue Teamer / SOC Analyst',badge:'Blue Team Track',
          desc:`Peran SOC Analyst adalah posisi paling banyak tersedia di Indonesia. Learning Path-mu akan memprioritaskan SIEM, threat hunting, dan incident response. Termasuk AI-powered SOC automation.`},
    ai:{emoji:'🤖',color:'var(--red)',name:'Calon AI Security Engineer',badge:'AI Security Track —',
        desc:`Ini jalur paling langka dan paling banyak dicari. Skills gap AI Security adalah yang terbesar secara global. Learning Path-mu akan memprioritaskan OWASP LLM Top 10, prompt injection, model security, dan agentic AI defense.`},
    grc:{emoji:'⚖️',color:'var(--L4)',name:'Calon GRC / Compliance Analyst',badge:'GRC Track',
         desc:`GRC sangat relevan di era UU PDP dan regulasi AI. Learning Path-mu fokus pada ISO 27001, manajemen risiko, dan kepatuhan regulasi Indonesia.`},
    explorer:{emoji:'🧭',color:'var(--L2)',name:'Explorer — Full Foundation Track',badge:'Full Exploration Track',
              desc:`Kamu belum punya minat spesifik, atau ingin lihat semua area dulu. Ini keputusan terbaik! Learning Path-mu mencakup semua domain secara seimbang sebelum memilih spesialisasi.`},
  };

  const prof = profiles[track];

  // Build personalized phase list
  const paceLabel = {intensif:'Intensif (~15h+/minggu)',normal:'Normal (5–15h/minggu)',santai:'Santai (<5h/minggu)'}[pace];

  const phases = [
    {n:'0',name:'Pra-Fondasi: Literasi Digital',c:'var(--L1)',
     skip:skipL0,
     dur:pace==='intensif'?'1 mgg':pace==='santai'?'4 mgg':'2–3 mgg'},
    {n:'1',name:'Fondasi Teknis',c:'var(--L1)',skip:false,
     dur:pace==='intensif'?'4 mgg':pace==='santai'?'12 mgg':'6–8 mgg'},
    {n:'2',name:'Kriptografi & Post-Quantum',c:'var(--L1)',skip:false,
     dur:pace==='intensif'?'3 mgg':pace==='santai'?'8 mgg':'4–6 mgg'},
    {n:'3',name:'Serangan & Pertahanan',c:'var(--L2)',skip:false,
     dur:pace==='intensif'?'5 mgg':pace==='santai'?'14 mgg':'8–10 mgg'},
    {n:'4',name:'Infrastruktur & Cloud',c:'var(--L2)',skip:false,
     dur:pace==='intensif'?'4 mgg':pace==='santai'?'10 mgg':'6–8 mgg'},
    {n:'5',name:'Governance, Risk & Regulasi',c:'var(--L3)',skip:track==='red'&&!grcPriority,
     dur:pace==='intensif'?'3 mgg':pace==='santai'?'8 mgg':'4–6 mgg'},
    {n:'6',name:'SOC & Operasi Keamanan',c:'var(--L3)',skip:track==='grc'&&!urgent,
     dur:pace==='intensif'?'4 mgg':pace==='santai'?'10 mgg':'6–8 mgg'},
    {n:'7',name:'AI Security & Agentic AI',c:'var(--L3)',skip:!aiPriority&&urgent&&track==='grc',
     dur:pace==='intensif'?'3 mgg':pace==='santai'?'8 mgg':'4–6 mgg'},
    {n:'8',name:'Security Communication',c:'var(--L2)',skip:false,
     dur:pace==='intensif'?'2 mgg':pace==='santai'?'5 mgg':'3–4 mgg'},
    {n:'9',name:'Spesialisasi & Karier',c:'var(--L4)',skip:false,
     dur:pace==='intensif'?'12 mgg':'6–12 bln'},
  ];
  // Find first non-skipped phase as start
  const startIdx = phases.findIndex(p=>!p.skip);

  return {prof,phases,paceLabel,aiPriority,grcPriority,needComm,urgent,isIT};
}

function showResult(){
  document.getElementById('qArea').style.display='none';
  document.getElementById('rArea').style.display='block';
  const {prof,phases,paceLabel,aiPriority,grcPriority,needComm,urgent,isIT}=calcProfile();

  const notes=[];
  if(isIT) notes.push('✓ Background IT kamu memungkinkan melewati beberapa fase awal');
  if(aiPriority) notes.push('→ Fase AI Security diprioritaskan dalam jalurmu');
  if(grcPriority) notes.push('📋 Fase GRC & Regulasi diprioritaskan berdasarkan konteks kerjamu');
  if(needComm) notes.push('💬 Security Communication direkomendasikan sebagai fokus tambahan');
  if(urgent) notes.push('⚡ Mode cepat: fokus pada topik MUST terlebih dahulu');

  document.getElementById('rArea').innerHTML=`
    <div class="result-card on" style="border-color:${prof.color}">
      <div class="res-top">
        <div class="res-emoji">${prof.emoji}</div>
        <div>
          <div class="res-badge" style="border-color:${prof.color};color:${prof.color}">${prof.badge}</div>
          <div class="res-name">${prof.name}</div>
          <div class="res-desc">${prof.desc}</div>
          <div style="margin-top:8px;font-size:10px;color:var(--text2)">Tempo: <strong style="color:var(--white)">${paceLabel}</strong></div>
          ${notes.length?`<div style="margin-top:10px;display:flex;flex-direction:column;gap:4px">${notes.map(n=>`<div style="font-size:10px;color:var(--text2)">${n}</div>`).join('')}</div>`:''}
        </div>
      </div>
      <div class="res-path-title">Learning Path Personalisasi Kamu</div>
      <div class="rp-list">
        ${phases.map((p,i)=>`
          <div class="rp-row ${p.skip?'skip':''}">
            <div class="rp-n" style="color:${p.c};border-color:${p.c}">${p.n}</div>
            <div class="rp-name">${p.name}</div>
            <div class="rp-dur">${p.skip?'Dapat dilewati':p.dur}</div>
            ${p.skip?`<span class="rp-tag" style="border-color:var(--text2);color:var(--text2)">SKIP</span>`:
              i===startIdx?`<span class="rp-tag" style="border-color:${p.c};color:${p.c}">MULAI SINI</span>`:''}
          </div>`).join('')}
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-p" onclick="go('lp')">Lihat Learning Path Lengkap →</button>
        <button class="btn btn-g" onclick="go('roadmap')">Lihat Roadmap Detail</button>
        <button class="btn btn-g" onclick="resetAssess()">↩ Ulangi</button>
      </div>
    </div>`;
}

function resetAssess(){
  answers={};curQ=0;
  document.getElementById('qArea').style.display='block';
  document.getElementById('rArea').style.display='none';
  document.querySelectorAll('.qcard').forEach((c,i)=>{c.classList.toggle('on',i===0);c.querySelectorAll('.q-opt').forEach(o=>o.classList.remove('sel'))});
  document.getElementById('pFill').style.width='0%';
  document.getElementById('pLabel').textContent='Pertanyaan 1 dari 12';
  document.getElementById('pPct').textContent='0%';
}

// ═══════════════════════════════════════
//  ROADMAP DATA
// ═══════════════════════════════════════
const phases=[
  // ── L0 ──
  {id:'p0',label:'L0 Pra-Fondasi',lvl:'Dasar',color:'var(--L1)',
   title:'Fase 0 — Pra-Fondasi: Literasi Digital',dur:'2–4 Minggu',target:'Semua background, terutama Non-IT',
   desc:'Titik masuk untuk siapa pun yang belum pernah sentuh dunia IT secara serius. Tujuannya bukan mahir — tapi membangun rasa percaya diri bahwa cybersecurity bisa dipelajari siapa pun.',
   fw:[{c:'cy',l:'CyBOK v1.1'},{c:'ni',l:'NIST CSF'}],
   qw:'Buka terminal (atau Command Prompt). Ketik "ping google.com" dan enter. Kamu baru saja mengirim paket data ke server Google — itu jaringan komputer nyata pertamamu!',
   gate:{title:'Siap lanjut ke Fase 1 jika kamu bisa…',items:['Menjelaskan CIA Triad (Confidentiality, Integrity, Availability) dengan kata-katamu sendiri','Membedakan HTTP dan HTTPS dan menjelaskan mengapa perbedaan itu penting','Menjalankan terminal dan mengetik minimal 3 perintah dasar (ping, ls/dir, cd)','Menyebutkan minimal 3 jenis ancaman siber yang umum terjadi di Indonesia']},
   nodes:[
     {icon:'💻',lv:'must',lvl:'MUST',t:'Literasi Komputer & Internet',ref:'CyBOK: Introduction',
      topics:['Cara kerja komputer, OS, dan internet secara konseptual','File system: folder, ekstensi, path absolut vs relatif','HTTP vs HTTPS — perbedaan nyata dan kenapa penting','Browser, cookie, cache, dan jejak digital yang kamu tinggalkan'],
      tools:['Google','YouTube','MDN Web Docs']},
     {icon:'🌐',lv:'must',lvl:'MUST',t:'Jaringan Internet Dasar',ref:'CyBOK: Network Security Intro',
      topics:['IP address: apa itu dan kenapa setiap perangkat punya','Domain name dan cara DNS bekerja (penerjemah nama ke IP)','Router, WiFi, dan bagaimana data bergerak di internet','Apa itu firewall secara awam'],
      tools:['Cisco NetAcad Free','Khan Academy']},
     {icon:'🧠',lv:'must',lvl:'MUST',t:'Mindset & Ekosistem Keamanan',ref:'CyBOK: Human Factors',
      topics:['CIA Triad mendalam: Confidentiality, Integrity, Availability','Threat actor dan motivasinya: finansial, ideologi, nation-state','Etika digital dan konsekuensi hukum tindakan siber','Cara membaca dan memahami berita keamanan terkini'],
      tools:['BSSN.go.id','Krebs on Security','Dark Reading']},
   ]},

  // ── L1 Fase 1 ──
  {id:'p1',label:'L1 Fondasi',lvl:'Dasar',color:'var(--L1)',
   title:'Fase 1 - Fondasi: Pemahaman Dasar',dur:'6–8 Minggu',target:'Semua background',
   desc:'Fondasi yang kuat adalah segalanya. Jangan terburu-buru dalam belajar dan tidak ada cara instan. Semua topik di fase berikutnya bergantung pada pemahaman yang dibangun di fase fondasi ini.',
   fw:[{c:'cy',l:'CyBOK v1.1'},{c:'ni',l:'NIST SP 800-12'},{c:'ni',l:'NIST CSF'}],
   qw:'Install Ubuntu di VirtualBox dan jalankan perintah "uname -a". Screenshot hasilnya. Kamu resmi menjadi Linux user pertama kali!',
   gate:{title:'Siap lanjut ke Fase 2 jika kamu bisa…',items:['Melakukan subnetting manual dari /24 ke /26 tanpa kalkulator','Menjalankan Wireshark dan mengidentifikasi setidaknya 3 protokol dari packet capture','Membuat script Python yang membaca file teks dan mencari kata kunci tertentu','Menjelaskan perbedaan Authentication vs Authorization dengan contoh konkret']},
   nodes:[
     {icon:'🖥️',lv:'must',lvl:'MUST',t:'Sistem Operasi Linux',ref:'CyBOK: OS & Virtualisation Security',
      topics:['Navigasi terminal: ls, cd, cat, grep, find, chmod, chown','User management: useradd, passwd, sudoers, /etc/shadow','Package manager: apt/yum, update, upgrade, install','Proses: ps aux, top, htop, kill, systemctl, journalctl','File permissions: rwx, numeric notation, SUID/SGID'],
      tools:['Linux Journey','OverTheWire: Bandit','TryHackMe Pre-Security']},
     {icon:'🌐',lv:'must',lvl:'MUST',t:'Jaringan Komputer',ref:'CyBOK: Network Security',
      topics:['Model OSI 7 layer — fungsi tiap layer dan contoh protokolnya','TCP/IP, UDP, ICMP — perbedaan dan kapan digunakan','IP addressing & subnetting CIDR — praktek sampai mahir','DNS, DHCP, ARP, NAT — cara kerja di jaringan nyata','Wireshark: capture, filter, dan baca packet secara dasar'],
      tools:['Professor Messer Net+','Wireshark Docs','Cisco Packet Tracer']},
     {icon:'🐍',lv:'must',lvl:'MUST',t:'Python & Bash Scripting',ref:'CyBOK: Software Security',
      topics:['Python: variabel, kondisi, loop, fungsi, modul, file I/O','String manipulation dan regex dasar untuk parsing log','requests library: GET/POST ke API dan scraping dasar','Bash: variabel, loop, kondisi, pipe, redirect, cron job','Buat tools kecil: port scanner, log parser, file encryptor'],
      tools:['Automate the Boring Stuff','HackerRank Python','TCM Python for Hackers']},
     {icon:'🔒',lv:'must',lvl:'MUST',t:'Konsep Keamanan Inti',ref:'CyBOK: Security Foundations',
      topics:['CIA Triad mendalam dengan kasus nyata Indonesia','AAA framework: Authentication, Authorization, Accounting','Threat vs Vulnerability vs Risk vs Exploit — definisi presisi','Defense in Depth, Least Privilege, Fail-Safe Defaults','Attack surface, threat modeling konsep, kill chain'],
      tools:['CompTIA Security+ Study','SANS Reading Room']},
     {icon:'🗄️',lv:'should',lvl:'SHOULD',t:'Database & Web Dasar',ref:'CyBOK: Software Security',
      topics:['SQL dasar: SELECT, INSERT, UPDATE, DELETE, JOIN, WHERE','Client-server model dan request-response cycle','REST API: method, endpoint, header, body, status code','HTTP methods dan developer tools browser','Cara aplikasi web modern bekerja dari browser ke database'],
      tools:['SQLZoo','Postman','W3Schools']},
   ]},

  // ── L1 Fase 2 — Kriptografi + PQC ──
  {id:'p2',label:'L1 Kriptografi',lvl:'Dasar',color:'var(--L1)',
   title:'Fase 2 — Kriptografi & Post-Quantum Cryptography',dur:'5–7 Minggu',target:'Semua background',
   desc:'Kriptografi adalah tulang punggung keamanan digital. Versi  ini ditambahkan Post-Quantum Cryptography (PQC) — bukan teori masa depan, tapi kebutuhan implementasi nyata hari ini.',
   fw:[{c:'cy',l:'CyBOK v1.1'},{c:'ni',l:'NIST FIPS'},{c:'is',l:'ISO/IEC 18033'},{c:'ni',l:'NIST PQC'}],
   qw:'Gunakan OpenSSL untuk enkripsi dan dekripsi sebuah file teks dengan AES-256. Kemudian hitung SHA-256 dari file tersebut. Dua operasi kriptografi nyata dalam 10 menit!',
   gate:{title:'Siap lanjut ke Fase 3 jika kamu bisa…',items:['Menjelaskan perbedaan enkripsi simetris vs asimetris dengan analogi yang tepat dan kapan masing-masing digunakan','Menggunakan OpenSSL CLI untuk generate RSA key pair, enkripsi, dan dekripsi file','Menjelaskan TLS handshake step-by-step dari ClientHello sampai data transfer','Menjelaskan apa itu "harvest now, decrypt later" dan mengapa PQC menjadi urgent sekarang']},
   nodes:[
     {icon:'🔐',lv:'must',lvl:'MUST',t:'Kriptografi Klasik',ref:'CyBOK: Cryptography',
      topics:['Enkripsi simetris: AES-128/256, DES (kelemahan), 3DES','Enkripsi asimetris: RSA, ECC, Diffie-Hellman key exchange','Hashing: SHA-256, SHA-3, MD5 (broken), BLAKE2','MAC & HMAC untuk integritas dan autentikasi pesan','Cryptographic randomness dan kenapa PRNG bisa berbahaya'],
      tools:['CryptoHack.org','Practical Cryptography for Devs','OpenSSL CLI']},
     {icon:'📜',lv:'must',lvl:'MUST',t:'PKI, TLS & Sertifikat',ref:'CyBOK: Cryptography',
      topics:['Public Key Infrastructure (PKI) — arsitektur dan chain of trust','Certificate Authority, X.509, dan validasi sertifikat','TLS 1.3 handshake lengkap step-by-step','HTTPS: certificate pinning, HSTS, OCSP stapling','Common TLS misconfigurations: weak cipher, expired cert, MITM'],
      tools:["Let's Encrypt Docs",'SSL Labs','Wireshark TLS']},
     {icon:'🔮',lv:'must',lvl:'MUST',t:'Post-Quantum Cryptography (PQC)',ref:'NIST FIPS 203/204/205 (2024) —',
      topics:['Kenapa RSA dan ECC akan "broken" oleh quantum computer','Konsep "Harvest Now, Decrypt Later" (HNDL) — ancaman nyata hari ini','NIST PQC Standards: ML-KEM (FIPS 203), ML-DSA (FIPS 204), SLH-DSA','Lattice-based cryptography — prinsip dasar yang membuatnya quantum-safe','PQC migration planning: inventarisasi enkripsi dan roadmap transisi'],
      tools:['NIST PQC Project','PQC Migration Guide','Cloudflare PQC Blog']},
     {icon:'🗝️',lv:'should',lvl:'SHOULD',t:'Autentikasi & Token Modern',ref:'CyBOK: Authentication',
      topics:['Password hashing: bcrypt, Argon2, PBKDF2 — jangan MD5/SHA1!','Multi-Factor Authentication: TOTP, FIDO2, Passkeys','JSON Web Token (JWT): struktur, signing, validasi, dan risiko','OAuth 2.0 & OpenID Connect — authorization flow lengkap','Passkeys dan masa depan passwordless authentication'],
      tools:['jwt.io','NIST SP 800-63B','FIDO Alliance Docs']},
   ]},

  // ── L2 Fase 3 ──
  {id:'p3',label:'L2 Serangan & Pertahanan',lvl:'Menengah',color:'var(--L2)',
   title:'Fase 3 — Serangan & Pertahanan',dur:'8–10 Minggu',target:'Semua background',
   desc:'Untuk bertahan dari serangan, kamu harus memahami cara serangan bekerja. Ini filosofi universal semua profesional cybersecurity — dan alasan utama ethical hacking ada.',
   fw:[{c:'cy',l:'CyBOK v1.1'},{c:'ow',l:'OWASP Top 10'},{c:'ni',l:'NIST SP 800-61'},{c:'ow',l:'MITRE ATT&CK'}],
   qw:'Setup DVWA di VirtualBox dan eksploitasi SQL Injection pertama kali. Screenshot tulisan "Welcome admin". Itu milestone pentester nyata pertamamu!',
   gate:{title:'Siap lanjut ke Fase 4 jika kamu bisa…',items:['Menjalankan Nmap scan terhadap target lab dan menginterpretasikan hasilnya dengan benar','Mengeksploitasi manual setidaknya 3 dari OWASP Top 10 di DVWA atau PortSwigger labs','Menulis vulnerability report sederhana dengan CVSS score dan rekomendasi remediation','Mengkonfigurasi Snort/Suricata rule dasar untuk mendeteksi port scan']},
   nodes:[
     {icon:'🦠',lv:'must',lvl:'MUST',t:'Malware & Ancaman Modern',ref:'CyBOK: Malware & Attack Technologies',
      topics:['Virus, Worm, Trojan, RAT, Backdoor — cara kerja & bedanya','Ransomware : double extortion, RaaS (Ransomware-as-a-Service)','Spyware, Adware, Rootkit, Bootkit, Fileless malware','Supply chain attacks: SolarWinds, XZ Utils, npm poisoning','APT (Advanced Persistent Threat) dan nation-state actors'],
      tools:['VirusTotal','ANY.RUN','MalwareBazaar','Hybrid Analysis']},
     {icon:'🎭',lv:'must',lvl:'MUST',t:'Social Engineering & AI-Powered Attacks',ref:'CyBOK: Human Factors',
      topics:['Phishing, Spear Phishing, Whaling — evolusi ','AI-generated phishing: deepfake voice, hyper-realistic email','Vishing & Smishing yang makin canggih dengan AI','Business Email Compromise (BEC) — kerugian terbesar secara finansial','Defense: security awareness training dan email security (SPF, DKIM, DMARC)'],
      tools:['GoPhish','KnowBe4 Resources','PhishTank']},
     {icon:'🌐',lv:'must',lvl:'MUST',t:'Serangan & Pertahanan Jaringan',ref:'CyBOK: Network Security',
      topics:['MITM: ARP spoofing, DNS poisoning, SSL stripping','DoS & DDoS: volumetric, protocol, application layer (L7)','Port scanning dengan Nmap — timing, stealth, service detection','Sniffing & packet injection — Scapy basics','Pertahanan: Firewall next-gen, IDS/IPS Snort/Suricata, network segmentation'],
      tools:['Nmap','Ettercap','Wireshark','Snort','pfSense']},
     {icon:'🌍',lv:'must',lvl:'MUST',t:'Web App Security — OWASP Top 10',ref:'OWASP Top 10 2021 + CyBOK: Web Security',
      topics:['A01 Broken Access Control — IDOR, privilege escalation, path traversal','A03 SQL Injection — error-based, blind, time-based, out-of-band','A07 XSS — stored, reflected, DOM-based; cara eksploitasi & mitigasi','CSRF, SSRF, XXE, Insecure Deserialization','Burp Suite Community: intercept, repeater, intruder, scanner'],
      tools:['PortSwigger Web Academy','DVWA','Burp Suite Community','OWASP ZAP']},
     {icon:'🔍',lv:'should',lvl:'SHOULD',t:'Vulnerability Assessment',ref:'CyBOK: Adversarial Behaviors',
      topics:['CVE database dan CVSS v3.1 scoring — cara baca dan interpretasi','OpenVAS / Nessus Essentials — setup, scan, dan laporan','ExploitDB dan cara menemukan PoC yang relevan','Patch management lifecycle dan risk-based prioritization','Vulnerability report writing: executive summary + technical detail'],
      tools:['OpenVAS','Nessus Essentials','ExploitDB','NVD NIST']},
   ]},

  // ── L2 Fase 4 ──
  {id:'p4',label:'L2 Infrastruktur',lvl:'Menengah',color:'var(--L2)',
   title:'Fase 4 — Infrastruktur & Cloud',dur:'6–8 Minggu',target:'Semua background',
   desc:'Amankan sistem yang menjalankan bisnis dan cloud yang menyimpan data. Fase ini adalah fondasi untuk masuk ke peran Blue Team, Cloud Security Engineer, dan DevSecOps.',
   fw:[{c:'cy',l:'CyBOK v1.1'},{c:'ni',l:'NIST SP 800-123'},{c:'is',l:'ISO 27001'}],
   qw:'Jalankan Lynis di sistem Linux kamu. Lihat hardening score. Perbaiki 5 temuan. Jalankan ulang dan bandingkan skor — ini cara kerja nyata security hardening!',
   gate:{title:'Siap lanjut ke Fase 5 jika kamu bisa…',items:['Melakukan hardening Linux dengan mengimplementasikan minimal 10 kontrol dari CIS Benchmarks Level 1','Mengkonfigurasi AWS IAM policy dengan least privilege dan menjelaskan mengapa setiap permission diberikan','Melakukan container image scanning dengan Trivy dan mengidentifikasi serta mitigasi 2 critical CVE','Mengkonfigurasi auditd untuk monitor sudo usage dan failed SSH attempts']},
   nodes:[
     {icon:'⚙️',lv:'must',lvl:'MUST',t:'Hardening Sistem Operasi',ref:'CyBOK: OS & Virtualisation Security',
      topics:['CIS Benchmarks Level 1 & 2 — implementasi langkah per langkah','Disable unnecessary services, ports, dan SUID binaries','SELinux / AppArmor — mandatory access control','Windows GPO, Local Security Policy, dan PowerShell hardening','auditd, syslog, dan log forwarding ke remote server'],
      tools:['CIS-CAT Lite','Lynis','OpenSCAP','Microsoft Security Compliance Toolkit']},
     {icon:'☁️',lv:'must',lvl:'MUST',t:'Cloud Security Dasar',ref:'CyBOK: Infrastructure Security',
      topics:['Shared Responsibility Model — siapa bertanggung jawab untuk apa','IAM: users, roles, policies, permission boundaries, least privilege','S3/Storage bucket misconfiguration — kasus nyata dan cara deteksi','VPC, security groups, NACLs, dan network segmentation di cloud','Cloud logging: CloudTrail, CloudWatch, Azure Monitor, GCP Audit Logs'],
      tools:['AWS Free Tier','ScoutSuite','Prowler','Cloud Security Alliance']},
     {icon:'🐳',lv:'should',lvl:'SHOULD',t:'Container & DevSecOps',ref:'CyBOK: OS & Virtualisation',
      topics:['Docker security: non-root user, read-only filesystem, capabilities','Container image scanning: vulnerability dan malware detection','Kubernetes RBAC, network policies, pod security standards','CI/CD pipeline security: SAST, secrets scanning, dependency check','Infrastructure as Code security: Terraform, Ansible hardening'],
      tools:['Trivy','Docker Bench','Checkov','Falco','GitHub Advanced Security']},
     {icon:'🏰',lv:'should',lvl:'SHOULD',t:'Active Directory & IAM Enterprise',ref:'CyBOK: Authentication & Authorisation',
      topics:['Active Directory: forest, domain, OU, trust relationships','Kerberos authentication — AS-REQ, TGT, TGS, service ticket','Kerberoasting, AS-REP Roasting, Pass-the-Hash (defensive perspective)','Privileged Access Management (PAM) dan Just-In-Time access','Zero Trust Architecture — prinsip "never trust, always verify"'],
      tools:['Microsoft AD Lab','PingCastle','BloodHound (defensive)']},
   ]},

// ── L2 Fase 5 — Security Communication NEW ──
  {id:'p5',label:'L2 Komunikasi',lvl:'Menengah',color:'var(--L2)',
   title:'Fase 5 — Security Communication',dur:'3–4 Minggu',target:'Semua background — Terutama yang lemah di komunikasi',
   desc:'Fase yang paling sering diabaikan tapi paling kritis untuk karier jangka panjang. Kemampuan komunikasi keamanan kepada non-teknis sama pentingnya dengan keahlian teknis. Profesional yang bisa menjelaskan risiko kepada CEO sama berharganya dengan yang bisa hack sistem.',
   fw:[{c:'cy',l:'CyBOK v1.1'},{c:'ni',l:'NIST CSF 2.0'},{c:'is',l:'ISO 27001'}],
   qw:'Tulis 1 paragraf penjelasan tentang SQL Injection untuk CEO yang tidak paham IT. Tidak boleh ada jargon teknis. Minta teman non-IT baca dan nilai apakah mereka paham — itu adalah security communication test nyata!',
   gate:{title:'Siap menuju Fase 9 (Spesialisasi) jika kamu bisa…',items:['Menulis vulnerability report yang bisa dibaca dan dipahami oleh manager non-teknis','Membuat presentasi 10-slide tentang risk cybersecurity kepada "board imajiner" dengan bahasa bisnis','Menulis incident report formal yang memenuhi standar dokumentasi IR','Menjelaskan trade-off antara security dan usability kepada stakeholder yang berbeda latar belakang']},
   nodes:[
     {icon:'📝',lv:'must',lvl:'MUST',t:'Security Report Writing',ref:'CyBOK: Human Factors + NIST CSF',
      topics:['Vulnerability report structure: executive summary, findings, CVSS, remediation','Incident report: timeline, impact, root cause, lessons learned, prevention','Risk report untuk board: bahasa bisnis, angka, dan rekomendasi actionable','Technical documentation: runbook, playbook, SOP yang bisa dieksekusi orang lain','Visual communication: diagram arsitektur, attack flow, risk matrix'],
      tools:['SANS Report Templates','Dradis Framework','PlantUML']},
     {icon:'🎤',lv:'must',lvl:'MUST',t:'Komunikasi Risiko kepada Stakeholder',ref:'ISO 27001 Klausul 7.4',
      topics:['Bahasa risiko vs bahasa teknis — cara terjemahkan untuk audience berbeda','Risk communication kepada C-level: ROI security investment, business impact','Security awareness presentation yang engaging dan tidak membosankan','Menjelaskan keputusan security kepada tim developer (empati, bukan intimidasi)','Negosiasi: meyakinkan manajemen untuk investasi security'],
      tools:['Canva','Google Slides','Toastmasters Cybersecurity']},
     {icon:'🤝',lv:'should',lvl:'SHOULD',t:'Kolaborasi & Security Culture',ref:'CyBOK: Human Factors',
      topics:['Membangun security culture tanpa menciptakan fear dan paranoia','Security champion program: cara embed security di tim development','Tabletop exercise facilitation: simulasi insiden untuk manajemen','Cross-departemen komunikasi: IT, legal, HR, finance dalam konteks security','Vendor dan third-party security communication'],
      tools:['NIST Cybersecurity Workforce Framework','ISACA COBIT']},
     {icon:'💼',lv:'should',lvl:'SHOULD',t:'Career Communication & Personal Branding',ref:'Soft Skills for Cybersecurity',
      topics:['Menulis write-up CTF dan security blog yang membangun reputasi','LinkedIn optimization untuk cybersecurity professional','Presentasi di conference atau meetup — cara pitch talk proposal','Membangun portfolio yang terlihat oleh recruiter','Networking di komunitas cybersecurity Indonesia dan global'],
      tools:['LinkedIn','Medium/Hashnode','OWASP Chapter Indonesia','DEF CON CFP']},
   ]},

  // ── L3 Fase 6 — GRC ──
  {id:'p6',label:'L3 Governance',lvl:'Tinggi',color:'var(--L3)',
   title:'Fase 6 — Governance, Risk & Compliance',dur:'5–7 Minggu',target:'Semua background',
   desc:'GRC bukan hanya untuk manajer. Setiap profesional cybersecurity harus memahami kerangka regulasi pekerjaannya — terutama di Indonesia yang kini punya UU PDP aktif dan memasuki era regulasi AI.',
   fw:[{c:'cy',l:'CyBOK v1.1'},{c:'ni',l:'NIST CSF 2.0'},{c:'is',l:'ISO 27001'},{c:'rg',l:'GDPR'},{c:'rg',l:'UU PDP'},{c:'rg',l:'UU ITE'},{c:'rg',l:'PCI DSS'},{c:'rg',l:'HIPAA'},{c:'is',l:'ISO 42001'}],
   qw:'Download template ISO 27001:2022 Summary (gratis). Pilih 5 kontrol dari Annex A dan tulis cara implementasi untuk "perusahaan imajiner" kamu. Portfolio GRC pertamamu dimulai!',
   gate:{title:'Siap lanjut ke Fase 7 jika kamu bisa…',items:['Menjelaskan perbedaan UU PDP dan GDPR serta siapa yang terikat masing-masing','Membuat risk register 10 risiko lengkap dengan likelihood, impact, dan treatment plan','Melakukan gap analysis ISO 27001 sederhana menggunakan checklist publik','Menjelaskan 12 PCI DSS requirements secara garis besar dan siapa yang wajib mematuhinya']},
   nodes:[
     {icon:'⚖️',lv:'must',lvl:'MUST',t:'Manajemen Risiko',ref:'CyBOK: Risk Management + ISO 31000',
      topics:['Risk identification: aset, ancaman, kerentanan, dan dampak','Qualitative vs quantitative risk analysis — FAIR model','NIST RMF: Categorize, Select, Implement, Assess, Authorize, Monitor','Risk treatment: mitigate, transfer (asuransi), accept, avoid','Risk register dan continuous monitoring'],
      tools:['NIST RMF Docs','FAIR Institute','RiskLens']},
     {icon:'📋',lv:'must',lvl:'MUST',t:'ISO/IEC 27001:2022',ref:'ISO/IEC 27001:2022',
      topics:['PDCA cycle dan klausul 4–10 secara mendalam','Annex A: 93 kontrol dalam 4 tema (organizational, people, physical, technological)','Statement of Applicability (SoA) — dokumen jantung ISMS','Internal audit ISO 27001: planning, fieldwork, nonconformity','Management review dan continual improvement'],
      tools:['ISO 27001 Academy','IT Governance Resources','Tugboat Logic']},
     {icon:'🇮🇩',lv:'must',lvl:'MUST',t:'UU ITE & UU PDP Indonesia',ref:'UU No.19/2016 & UU No.27/2022',
      topics:['UU ITE: kejahatan siber, konten ilegal, dan jerat hukumnya','UU PDP: 11 hak subjek data, kewajiban pengendali vs prosesor','Perbedaan kritis UU PDP Indonesia vs GDPR Eropa','Sanksi pidana dan administratif pelanggaran UU PDP','BSSN, Kominfo, dan Komdigi — peran regulator siber Indonesia'],
      tools:['BSSN.go.id','Kominfo.go.id','LexID']},
     {icon:'🌍',lv:'must',lvl:'MUST',t:'GDPR & Privasi Data Global',ref:'GDPR 2016/679 + CyBOK: Privacy',
      topics:['7 prinsip GDPR lengkap dengan contoh implementasi','11 hak subjek data dan bagaimana memfasilitasinya','DPO (Data Protection Officer): kapan wajib dan apa tugasnya','DPIA: kapan wajib, cara lakukan, dan dokumentasi','Breach notification: 72 jam, kepada siapa, apa isinya'],
      tools:['GDPR.eu','ICO Resources','CNIL Guidelines']},
     {icon:'💳',lv:'should',lvl:'SHOULD',t:'PCI DSS v4.0 & HIPAA',ref:'PCI SSC + HIPAA Security Rule',
      topics:['12 PCI DSS requirements — dari network security sampai policy','Cardholder Data Environment (CDE) scoping dan network segmentation','SAQ types: A, B, C, D — mana yang relevan untuk bisnis kamu','HIPAA Security Rule: administrative, physical, technical safeguards','PHI definition dan 18 identifier yang harus dilindungi'],
      tools:['PCI SSC Website','HHS.gov HIPAA','PCI DSS v4 Quick Ref']},
     {icon:'🤖',lv:'should',lvl:'SHOULD',t:'Regulasi AI & ISO 42001',ref:'ISO/IEC 42001:2023 + EU AI Act ',
      topics:['ISO/IEC 42001:2023 — AI Management System, kontrol, dan audit','EU AI Act: prohibited AI, high-risk AI, transparency obligations','NIST AI RMF: Govern, Map, Measure, Manage','Indonesia: Peraturan Presiden AI dan peta jalan AI nasional','AI impact assessment dan cara dokumentasinya'],
      tools:['ISO 42001 Overview','EU AI Act Tracker','NIST AI RMF']},
   ]},

  // ── L3 Fase 7 — SOC ──
  {id:'p7',label:'L3 SOC',lvl:'Tinggi',color:'var(--L3)',
   title:'Fase 7 — SOC & Operasi Keamanan',dur:'6–8 Minggu',target:'Semua background',
   desc:'Security Operations Center adalah jantung pertahanan organisasi modern. Di , SOC semakin diperkuat AI untuk mengatasi alert fatigue dan kekurangan tenaga manusia.',
   fw:[{c:'cy',l:'CyBOK v1.1'},{c:'ni',l:'NIST SP 800-61'},{c:'ow',l:'MITRE ATT&CK'},{c:'ow',l:'MITRE D3FEND'}],
   qw:'Setup Splunk Free. Ingest Windows Event Log sistem kamu. Buat query untuk temukan failed login attempts dalam 24 jam terakhir. Screenshot dashboard — kamu baru bangun mini-SOC!',
   gate:{title:'Siap lanjut ke Fase 8 jika kamu bisa…',items:['Mengoperasikan SIEM dan membuat correlation rule yang trigger alert pada 3 skenario berbeda','Menyelesaikan minimal 1 skenario IR end-to-end dari detection hingga laporan final','Menggunakan Volatility 3 untuk analisis memory dump dan menemukan proses mencurigakan','Melakukan threat hunting menggunakan MITRE ATT&CK Navigator di atas log SIEM']},
   nodes:[
     {icon:'📡',lv:'must',lvl:'MUST',t:'SIEM & Log Management',ref:'CyBOK: Security Operations',
      topics:['SIEM architecture: collector, normalizer, correlator, dashboard','Log sources: Windows Event Log, Syslog, EDR, firewall, cloud logs','SPL (Splunk) atau KQL (Elastic/Sentinel) query dasar sampai menengah','Correlation rules: tuning untuk kurangi false positive','Log retention, archiving, dan compliance requirements'],
      tools:['Splunk Free','Elastic SIEM','Microsoft Sentinel','Splunk BOTS']},
     {icon:'🚨',lv:'must',lvl:'MUST',t:'Incident Response & Playbook',ref:'CyBOK: Incident Management + NIST SP 800-61r3',
      topics:['PICERL lifecycle: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned','Incident classification: severity P1–P4, escalation matrix','Playbook: ransomware, phishing, data breach, insider threat, DDoS','Evidence preservation: order of volatility, imaging, chain of custody','SOAR integration: automasi triage dan response dengan AI assist'],
      tools:['TheHive','Shuffle SOAR','DFIR.training','CyberDefenders']},
     {icon:'🔬',lv:'must',lvl:'MUST',t:'Digital Forensics Dasar',ref:'CyBOK: Forensics',
      topics:['Order of volatility dan kenapa urutan collection penting','Disk imaging: dd, FTK Imager, dcfldd — best practices','Memory forensics: Volatility 3 — proses, network, artifacts','Log analysis dan timeline reconstruction menggunakan plaso/log2timeline','Network forensics: analisis PCAP, extract artifacts dari capture'],
      tools:['Autopsy','Volatility 3','FTK Imager','Plaso','NetworkMiner']},
     {icon:'🎯',lv:'should',lvl:'SHOULD',t:'Threat Intelligence & Hunting',ref:'MITRE ATT&CK + CyBOK: Adversarial Behaviors',
      topics:['MITRE ATT&CK: Tactics (14), Techniques (200+), Procedures — cara pakai Navigator','Threat hunting: hypothesis-driven, TTP-based, anomaly-based','IOC types: hash, IP, domain, URL, mutex, registry — cara ekstrak & share','OSINT untuk threat research: Shodan, WHOIS, VirusTotal, Censys','STIX/TAXII, OpenCTI, MISP untuk threat intelligence sharing'],
      tools:['MITRE ATT&CK Navigator','OpenCTI','MISP','Shodan','IntelOwl']},
     {icon:'🤖',lv:'should',lvl:'SHOULD',t:'AI-Assisted SOC Operations',ref:'CyBOK: Security Operations',
      topics:['AI untuk alert triage: mengurangi false positive secara otomatis','LLM-assisted threat hunting: natural language query ke log','Agentic AI dalam SOAR: autonomous containment dan response','AI-powered threat intelligence summarization','Human-in-the-loop: kapan tetap butuh keputusan manusia'],
      tools:['Microsoft Copilot for Security','Google Chronicle AI','CrowdStrike Charlotte AI']},
   ]},

// ── L3 Fase 8 — AI Security NEW ──
  {id:'p8',label:'L3 AI Security',lvl:'Tinggi',color:'var(--L3)',
   title:'Fase 8 — AI Security & Agentic AI',dur:'4–6 Minggu',target:'Semua background — Diprioritaskan untuk AI track & Developer',
   desc:'Domain yang saat ini paling cepat berkembang dan paling banyak membutuhkan tenaga ahli. Mencakup cara menyerang dan mempertahankan sistem AI, LLM, dan agentic AI. Salah satu prospek yang besar untuk saat ini dan masa depan.',
   fw:[{c:'ow',l:'OWASP LLM'},{c:'ow',l:'OWASP Agentic AI'},{c:'is',l:'ISO 42001'},{c:'ai',l:'EU AI Act'},{c:'ni',l:'NIST AI RMF'}],
   qw:'Coba kirim prompt injection ke ChatGPT atau Claude: "Ignore previous instructions and..." — amati responsnya. Kamu baru saja mencoba serangan AI security yang nyata dan legal!',
   gate:{title:'Siap lanjut ke Fase 6 jika kamu bisa…',items:['Menjelaskan setidaknya 5 dari OWASP LLM Top 10 dengan contoh serangan nyata','Melakukan prompt injection attack di lingkungan lab yang legal (GANDALF AI, dsb.)','Menjelaskan perbedaan risiko keamanan antara AI tradisional, LLM, dan Agentic AI','Mengidentifikasi potensi data leakage dalam arsitektur RAG (Retrieval-Augmented Generation)','Menjelaskan apa itu ISO/IEC 42001 dan kapan sebuah organisasi wajib mematuhinya']},
   nodes:[
     {icon:'🤖',lv:'must',lvl:'MUST',t:'OWASP LLM Top 10 & AI Threats',ref:'OWASP Top 10 for LLM Applications ',
      topics:['LLM01: Prompt Injection — direct dan indirect, cara kerja & eksploitasi','LLM02: Sensitive Information Disclosure — PII leakage, training data exposure','LLM06: Excessive Agency — AI yang melakukan lebih dari yang seharusnya','LLM07: System Prompt Leakage — cara ekstrak instruksi tersembunyi','LLM09: Misinformation — hallucination dan dampak keamanan'],
      tools:['GANDALF AI (Lakera)','PortSwigger AI Labs','OWASP LLM Guide']},
     {icon:'🕸️',lv:'must',lvl:'MUST',t:'Agentic AI Security',ref:'OWASP Top 10 for Agentic AI ',
      topics:['Apa itu Agentic AI: autonomous decision-making dan tool use','Agent goal hijacking — cara manipulasi tujuan agen','Tool misuse & identity abuse dalam multi-agent systems','Memory poisoning — injeksi memori jangka panjang agen','MCP (Model Context Protocol) security — attack surface baru '],
      tools:['GitHub Secure Code Game Season 4','OWASP AI Exchange','Anthropic Red Team Resources']},
     {icon:'🔬',lv:'must',lvl:'MUST',t:'Model Security & Data Poisoning',ref:'NIST AI RMF + CyBOK Update',
      topics:['Adversarial attacks: input perturbation untuk manipulasi output model','Data poisoning: corrupting training data — "Harvest Now, Corrupt Later"','Model extraction dan model inversion attacks','AI supply chain security: model dan dataset integrity','AI SBOM (Software Bill of Materials) untuk AI components'],
      tools:['Adversarial Robustness Toolbox','CleverHans','AI Verify Foundation']},
     {icon:'📋',lv:'should',lvl:'SHOULD',t:'AI Governance & Regulasi',ref:'ISO/IEC 42001 + EU AI Act + NIST AI RMF',
      topics:['ISO/IEC 42001:2023 — AI Management System standard','EU AI Act: risk-based classification, prohibited AI, GPAI regulations','NIST AI RMF: Govern, Map, Measure, Manage','AI Impact Assessment dan Algorithmic Auditing','Indonesia: kebijakan AI nasional dan implikasinya'],
      tools:['ISO 42001 Guide','EU AI Act Portal','NIST AI RMF Docs']},
     {icon:'🛡️',lv:'nice',lvl:'NICE',t:'Securing AI Infrastructure',ref:'Cloud Security Alliance AI Security',
      topics:['Securing LLM API: rate limiting, input validation, output filtering','RAG pipeline security: vector database poisoning prevention','AI model access control dan authentication','Monitoring dan observability untuk AI systems','DSPM & AI-SPM (AI Security Posture Management)'],
      tools:['Wiz AI Security','Lakera Guard','Portkey AI Gateway']},
   ]},

  // ── L4-L5 Fase 9 ──
  {id:'p9',label:'L4 Spesialisasi',lvl:'Ahli / Spesialis',color:'var(--L4)',
   title:'Fase 9 — Spesialisasi & Karier',dur:'6–12 Bulan (ongoing)',target:'Pilih 1 jalur sesuai minat dan tujuan karier',
   desc:'Selamat sudah menyelesaikan seluruh level dasar, menengah, dan tinggi! Sekarang saatnya memilih spesialisasi. Fase ini adalah awal dari keahlian yang sesungguhnya — bukan akhir belajar.',
   fw:[{c:'cy',l:'CyBOK v1.1'},{c:'ow',l:'OWASP'},{c:'ni',l:'NIST SP 800-115'},{c:'ow',l:'MITRE ATT&CK'},{c:'ow',l:'OffSec AI-300'}],
   qw:'Publish write-up pertama CTF challenge di LinkedIn atau blog — bahkan dari challenge paling mudah sekalipun. Visibilitas profesional kamu dimulai dari sini!',
   gate:{title:'Kamu dianggap Profesional jika kamu bisa…',items:['Memiliki minimal 1 sertifikasi industri yang diakui sesuai jalur spesialisasi','Memiliki portfolio nyata: write-ups, bug bounty, open source contribution, atau proyek klien','Lulus technical interview entry-level di bidang spesialisasi yang dipilih','Aktif berkontribusi di komunitas: OWASP, ID-SIRTII, conference, atau open source']},
   nodes:[
     {icon:'🔴',lv:'must',lvl:'PILIH 1',t:'Red Team / Penetration Testing',ref:'CyBOK: Adversarial Behaviors + PTES',
      topics:['Pentesting methodology: PTES, OSSTMM, OWASP Testing Guide','Exploitation: Metasploit, manual exploits, custom payload','Post-exploitation: pivoting, persistence, lateral movement, exfiltration','AD attacks: Kerberoasting, Pass-the-Hash, DCSync, Golden Ticket','Report writing profesional: executive summary + technical findings'],
      tools:['Kali Linux','Metasploit','BloodHound','HackTheBox Pro Labs']},
     {icon:'🔵',lv:'must',lvl:'PILIH 1',t:'Blue Team / SOC Analyst',ref:'CyBOK: Security Operations',
      topics:['Advanced SIEM correlation dan tuning untuk reduce false positives','EDR/XDR: CrowdStrike, Microsoft Defender, SentinelOne — cara operasikan','Threat hunting frameworks: PEAK, TaHiTI, hypothesis-driven','Malware triage: sandbox analysis, IOC extraction, YARA rules','AI-assisted SOC: Copilot for Security, Chronicle AI'],
      tools:['Splunk Enterprise','CrowdStrike Falcon','Microsoft Sentinel','Blue Team Labs Online']},
     {icon:'🤖',lv:'must',lvl:'PILIH 1 —',t:'AI Security Engineer',ref:'OWASP LLM + OffSec OSAI + NIST AI RMF',
      topics:['AI red teaming: attack dan assessment AI systems secara metodis','LLM security testing: prompt injection, jailbreaking, data extraction','Agentic AI defense: guardrails, input validation, output filtering','AI security architecture: secure LLM pipeline design','AI SBOM dan supply chain security untuk AI components'],
      tools:['OffSec AI-300','OWASP LLM Labs','Garak LLM Scanner','Rebuff']},
     {icon:'🟣',lv:'should',lvl:'PILIH 1',t:'Cloud Security Engineer',ref:'CyBOK: Infrastructure + CSA STAR',
      topics:['Multi-cloud security architecture (AWS + Azure + GCP)','CSPM: Cloud Security Posture Management — Wiz, Prisma, Orca','DevSecOps pipeline dari dev hingga production','Container & Kubernetes security di produksi','Cloud compliance: SOC 2, FedRAMP, ISO 27017'],
      tools:['Prowler','Wiz','Prisma Cloud','Checkov']},
     {icon:'🟢',lv:'should',lvl:'PILIH 1',t:'Application Security (AppSec)',ref:'CyBOK: Software Security + OWASP SAMM',
      topics:['Secure SDLC dan threat modeling: STRIDE, PASTA, LINDDUN','SAST/DAST/IAST tools dan cara interpretasi hasil','API security: OWASP API Top 10, testing, dan defense','Security code review: Python, JavaScript, Java, Go','Supply chain security: dependency scanning, SBOM, Sigstore'],
      tools:['SonarQube','Semgrep','OWASP ZAP','Checkmarx']},
     {icon:'⚖️',lv:'nice',lvl:'PILIH 1',t:'GRC / Compliance Analyst',ref:'CyBOK: Law & Regulation + ISO 27001',
      topics:['Audit methodology: planning, fieldwork, reporting, follow-up','Policy lifecycle management: drafting, review, approval, training','Vendor risk management program end-to-end','AI governance dan compliance dengan ISO 42001','Regulatory reporting dan hubungan dengan BSSN, OJK, Kominfo'],
      tools:['ServiceNow GRC','OneTrust','Drata','Vanta']},
   ]},
];

function renderRoadmap(){
  const nav=document.getElementById('phaseNav');
  const content=document.getElementById('phaseContent');

  nav.innerHTML=phases.map((p,i)=>`
    <button class="ptab ${i===0?'on':''}" onclick="switchPhase('${p.id}',this)">
      <span class="ptab-pip" style="background:${p.color}"></span>${p.label}
    </button>`).join('');

  const levelBanners={p0:'DASAR',p1:'DASAR',p2:'DASAR',p3:'MENENGAH',p4:'MENENGAH',p5:'MENENGAH',p6:'TINGGI',p7:'TINGGI',p8:'TINGGI',p9:'AHLI/SPESIALIS'};
  const lvlColors={p0:'var(--L1)',p1:'var(--L1)',p2:'var(--L1)',p3:'var(--L2)',p4:'var(--L2)',p5:'var(--L2)',p6:'var(--L3)',p7:'var(--L3)',p8:'var(--L3)',p9:'var(--L4)'};

  content.innerHTML=phases.map((p,i)=>{
    const banner=levelBanners[p.id]?`
      <div class="lvl-banner" style="background:${lvlColors[p.id]}15;border-color:${lvlColors[p.id]}44;color:${lvlColors[p.id]}">
        <div class="lvl-line" style="background:${lvlColors[p.id]};opacity:.4"></div>
        ● ${levelBanners[p.id]}
        <div class="lvl-line" style="background:${lvlColors[p.id]};opacity:.4"></div>
      </div>`:'';

    const fwHtml=p.fw.map(f=>`<span class="fwr ${f.c}">${f.l}</span>`).join('');

    const nodesHtml=p.nodes.map(n=>`
      <div class="node " style="border-top-color:${p.color}">
        <div class="nt">
          <div class="ni">${n.icon}</div>
          <span class="must-t ${n.lv}">${n.lvl}</span>
        </div>
        <h3>${n.t}</h3>
        <div class="node-ref">${n.ref}</div>
        <ul class="node-topics">${n.topics.map(t=>`<li style="--c:${p.color}">${t}</li>`).join('')}</ul>
        <div class="node-tools">${n.tools.map(t=>`<span class="tool">${t}</span>`).join('')}</div>
      </div>`).join('');

    return `
      <div class="pmap ${i===0?'on':''}" id="map-${p.id}">
        ${banner}
        <div class="ph" style="border-left-color:${p.color}">
          <div class="ph-n" style="color:${p.color}">${String(i).padStart(2,'0')}</div>
          <div class="ph-info">
            <h2>${p.title}</h2>
            <div class="ph-meta">
              <span class="ph-tag">⏱ ${p.dur}</span>
              <span class="ph-tag">👤 ${p.target}</span>
              <span class="ph-tag" style="border-color:${p.color};color:${p.color}">● ${p.lvl}</span>
            </div>
            <div class="ph-desc">${p.desc}</div>
          </div>
        </div>
        <div class="fw-row">${fwHtml}</div>
        <div class="qw-box">
          <div class="qw-em">⚡</div>
          <div>
            <div class="qw-lbl">Quick Win — Bisa Dicapai Hari Ini</div>
            <div class="qw-txt">${p.qw}</div>
          </div>
        </div>
        <div class="nodes">${nodesHtml}</div>
        <div class="gate">
          <div class="gate-head">
            <span style="font-size:20px">🔒</span>
            <div>
              <div class="gate-lbl">Gerbang Kompetensi</div>
              <div class="gate-title">${p.gate.title}</div>
            </div>
          </div>
          <ul class="gate-list">${p.gate.items.map(it=>`<li><span class="gc">□</span>${it}</li>`).join('')}</ul>
          <div class="gate-foot" style="color:${p.color}">Centang semua sebelum lanjut ke fase berikutnya</div>
        </div>
      </div>`;
  }).join('');
}

function switchPhase(id,btn){
  document.querySelectorAll('.ptab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.pmap').forEach(m=>m.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('map-'+id).classList.add('on');
}

// ═══════════════════════════════════════
//  LEARNING PATH
// ═══════════════════════════════════════
const lpItems=[
  {c:'var(--L1)',em:'🌱',t:'Fase 0 — Pra-Fondasi: Literasi Digital',d:'2–4 Minggu',
   out:'Mampu mengoperasikan komputer, memahami cara kerja internet, dan menjelaskan konsep keamanan dasar.',
   mods:[
     {week:'Minggu 1–2',title:'Cara Kerja Internet & Jaringan',
      topics:['Komputer, OS, dan cara kerja internet','IP address, domain, dan DNS','HTTP vs HTTPS — perbedaan nyata','Router, WiFi, dan firewall dasar'],
      res:['Cisco NetAcad Intro','Khan Academy','MDN Web Docs']},
     {week:'Minggu 3–4',title:'Konsep Keamanan & Terminal Pertama',
      topics:['CIA Triad: Confidentiality, Integrity, Availability','Threat, Vulnerability, Risk — definisi presisi','Membuka terminal dan perintah dasar (ls, cd, ping)','Jenis ancaman siber yang umum di Indonesia'],
      res:['TryHackMe Pre-Security','Linux Journey','BSSN.go.id']},
   ]},

  {c:'var(--L1)',em:'🔧',t:'Fase 1 — Fondasi: Pemahaman Dasar',d:'6–8 Minggu',
   out:'Mampu mengoperasikan Linux, memahami jaringan TCP/IP, menulis script Python sederhana, dan memahami konsep keamanan inti.',
   mods:[
     {week:'Minggu 1–2',title:'Sistem Operasi Linux',
      topics:['Navigasi terminal: ls, cd, cat, grep, find','File permissions: chmod, chown, sudoers','User management: useradd, passwd, grup','Package manager: apt/yum, systemctl, journalctl'],
      res:['Linux Journey','OverTheWire: Bandit','TryHackMe']},
     {week:'Minggu 3–4',title:'Jaringan Komputer',
      topics:['Model OSI 7 layer — fungsi tiap layer','TCP/IP, UDP, ICMP — perbedaan penggunaan','IP addressing & subnetting CIDR','DNS, DHCP, ARP, NAT — cara kerja','Wireshark: capture dan baca paket dasar'],
      res:['Professor Messer Net+','Wireshark Docs','Cisco Packet Tracer']},
     {week:'Minggu 5–6',title:'Python & Bash Scripting',
      topics:['Python: variabel, kondisi, loop, fungsi, file I/O','Requests library dan parsing data','Bash: variabel, loop, pipe, cron job','Buat tools kecil: port scanner, log parser'],
      res:['Automate the Boring Stuff','HackerRank Python','TCM Python for Hackers']},
     {week:'Minggu 7–8',title:'Konsep Keamanan Inti & Database',
      topics:['AAA: Authentication, Authorization, Accounting','Defense in Depth dan Least Privilege','SQL dasar: SELECT, JOIN, WHERE','REST API, HTTP methods, developer tools'],
      res:['CompTIA Security+ Study','SQLZoo','Postman']},
   ]},

  {c:'var(--L1)',em:'🔐',t:'Fase 2 — Kriptografi & Post-Quantum',d:'4–6 Minggu',
   out:'Memahami dan menerapkan kriptografi klasik dan modern, PKI/TLS, autentikasi token, dan dasar Post-Quantum Cryptography.',
   mods:[
     {week:'Minggu 1–2',title:'Kriptografi Simetris & Asimetris',
      topics:['Enkripsi simetris: AES-128/256, DES, 3DES','Enkripsi asimetris: RSA, ECC, Diffie-Hellman','Hashing: SHA-256, SHA-3, MD5 (risiko)','MAC & HMAC untuk integritas pesan'],
      res:['CryptoHack.org','Practical Cryptography','OpenSSL CLI']},
     {week:'Minggu 3–4',title:'PKI, TLS & Sertifikat Digital',
      topics:['Public Key Infrastructure (PKI) — arsitektur','Certificate Authority dan chain of trust','TLS 1.3 handshake step-by-step','HTTPS: certificate pinning, HSTS, OCSP'],
      res:["Let's Encrypt Docs",'SSL Labs','Wireshark TLS']},
     {week:'Minggu 5–6',title:'Post-Quantum & Autentikasi Modern',
      topics:['Ancaman quantum: mengapa RSA dan ECC rentan','NIST PQC Standards: ML-KEM, ML-DSA, SLH-DSA','Password hashing: bcrypt, Argon2, PBKDF2','JWT, OAuth 2.0, OpenID Connect, Passkeys'],
      res:['NIST PQC Project','jwt.io','FIDO Alliance Docs']},
   ]},

  {c:'var(--L2)',em:'⚔️',t:'Fase 3 — Serangan & Pertahanan',d:'8–10 Minggu',
   out:'Mampu mengeksploitasi OWASP Top 10, melakukan network attack dan defense, menganalisis malware, dan menulis vulnerability report.',
   mods:[
     {week:'Minggu 1–2',title:'Malware & Social Engineering',
      topics:['Virus, Worm, Trojan, RAT, Ransomware — cara kerja','Supply chain attacks dan APT','Phishing, Spear Phishing, Vishing, Smishing','Business Email Compromise (BEC)'],
      res:['VirusTotal','ANY.RUN','GoPhish Lab']},
     {week:'Minggu 3–4',title:'Serangan & Pertahanan Jaringan',
      topics:['MITM: ARP spoofing, DNS poisoning','DoS & DDoS — volumetric, protocol, L7','Port scanning dengan Nmap — stealth mode','Firewall next-gen, IDS/IPS dengan Snort'],
      res:['Nmap Docs','Snort','pfSense','Ettercap']},
     {week:'Minggu 5–7',title:'Web App Security — OWASP Top 10',
      topics:['A01 Broken Access Control — IDOR, privilege escalation','A03 SQL Injection — error, blind, time-based','A07 XSS — stored, reflected, DOM-based','CSRF, SSRF, XXE, Insecure Deserialization','Burp Suite: intercept, repeater, intruder'],
      res:['PortSwigger Web Academy','DVWA','Burp Suite Community']},
     {week:'Minggu 8–10',title:'Vulnerability Assessment & Reporting',
      topics:['CVE database dan CVSS v3.1 scoring','OpenVAS / Nessus Essentials — scan dan laporan','Patch management lifecycle','Menulis vulnerability report profesional'],
      res:['OpenVAS','Nessus Essentials','ExploitDB']},
   ]},

  {c:'var(--L2)',em:'🏗️',t:'Fase 4 — Infrastruktur & Cloud',d:'6–8 Minggu',
   out:'Mampu melakukan hardening OS, mengamankan cloud AWS/Azure, scanning container image, dan memahami Active Directory secara defensif.',
   mods:[
     {week:'Minggu 1–3',title:'Hardening Sistem Operasi',
      topics:['CIS Benchmarks Level 1 & 2 — implementasi nyata','Disable unnecessary services dan SUID binaries','SELinux / AppArmor — mandatory access control','auditd, syslog, log forwarding ke remote server'],
      res:['CIS Benchmarks','Lynis','OpenSCAP']},
     {week:'Minggu 4–6',title:'Cloud Security',
      topics:['Shared Responsibility Model — siapa tanggung jawab apa','IAM: users, roles, policies, least privilege','S3/storage bucket misconfiguration — deteksi & fix','VPC, security groups, NACLs, logging CloudTrail'],
      res:['AWS Free Tier','ScoutSuite','Prowler','A Cloud Guru']},
     {week:'Minggu 7–8',title:'Container & Active Directory',
      topics:['Docker security: non-root, read-only, image scanning','Trivy: scan image, identifikasi CVE, remediation','Kubernetes RBAC basics dan network policy','Active Directory: Kerberos, GPO, PAM dasar'],
      res:['Trivy Docs','Docker Bench','Microsoft AD Lab']},
   ]},

{c:'var(--L2)',em:'💬',t:'Fase 5 — Security Communication',d:'3–4 Minggu',
   out:'Mampu menulis vulnerability report yang dipahami non-teknis, mempresentasikan risiko ke stakeholder, dan memulai personal branding di komunitas.',
   mods:[
     {week:'Minggu 1–2',title:'Security Report Writing',
      topics:['Vulnerability report: executive summary, CVSS, remediation','Incident report: timeline, impact, root cause, prevention','Risk report untuk board: bahasa bisnis, angka, rekomendasi','Technical documentation: runbook, playbook, SOP'],
      res:['SANS Report Templates','Dradis Framework','PlantUML']},
     {week:'Minggu 3–4',title:'Komunikasi & Personal Branding',
      topics:['Menjelaskan risiko teknis kepada CEO dan board','Security awareness yang engaging, bukan menakutkan','Menulis write-up CTF dan security blog','LinkedIn optimization untuk cybersecurity professional'],
      res:['Medium/Hashnode','LinkedIn','OWASP Indonesia']},
   ]},

  {c:'var(--L3)',em:'📋',t:'Fase 6 — Governance, Risk & Regulasi',d:'5–7 Minggu',
   out:'Memahami dan menerapkan ISO 27001, manajemen risiko, regulasi Indonesia (UU PDP, UU ITE), GDPR, PCI DSS, dan AI governance.',
   mods:[
     {week:'Minggu 1–2',title:'Manajemen Risiko',
      topics:['Risk identification: aset, ancaman, kerentanan','Qualitative vs quantitative risk analysis','NIST RMF: Categorize, Select, Implement, Assess','Risk register dan treatment plan'],
      res:['NIST RMF Docs','FAIR Institute','ISO 31000']},
     {week:'Minggu 3–4',title:'ISO/IEC 27001:2022',
      topics:['PDCA cycle dan klausul 4–10','Annex A: 93 kontrol dalam 4 tema','Statement of Applicability (SoA)','Internal audit dan management review'],
      res:['ISO 27001 Academy','IT Governance','Tugboat Logic']},
     {week:'Minggu 5–6',title:'Regulasi Indonesia & Global',
      topics:['UU PDP: hak subjek data, kewajiban pengendali','UU ITE: kejahatan siber dan jerat hukum','GDPR: 7 prinsip, 11 hak, DPO, DPIA, breach notif','PCI DSS v4: 12 requirements dan SAQ types'],
      res:['GDPR.eu','Kominfo UU PDP','PCI SSC','BSSN.go.id']},
     {week:'Minggu 7',title:'AI Governance',
      topics:['ISO/IEC 42001:2023 — AI Management System','EU AI Act: prohibited AI, high-risk AI, obligations','NIST AI RMF: Govern, Map, Measure, Manage','AI impact assessment dan dokumentasinya'],
      res:['ISO 42001 Guide','EU AI Act Portal','NIST AI RMF']},
   ]},

  {c:'var(--L3)',em:'🚨',t:'Fase 7 — SOC & Operasi Keamanan',d:'6–8 Minggu',
   out:'Siap bekerja sebagai SOC Analyst Tier 1/2 — mampu mengoperasikan SIEM, melakukan incident response, digital forensics dasar, dan threat hunting.',
   mods:[
     {week:'Minggu 1–3',title:'SIEM & Log Management',
      topics:['SIEM architecture: collector, normalizer, correlator','Log sources: Windows Event, Syslog, EDR, cloud logs','SPL (Splunk) atau KQL (Elastic) query dasar–menengah','Correlation rules — tuning untuk reduce false positive'],
      res:['Splunk Free','Elastic SIEM','Splunk BOTS']},
     {week:'Minggu 4–5',title:'Incident Response',
      topics:['PICERL lifecycle: Preparation → Lessons Learned','Incident classification: severity P1–P4','Playbook: ransomware, phishing, data breach','Evidence preservation dan chain of custody'],
      res:['TheHive','DFIR.training','Shuffle SOAR']},
     {week:'Minggu 6–7',title:'Digital Forensics',
      topics:['Order of volatility dan disk imaging (dd, FTK Imager)','Memory forensics: Volatility 3 — proses, network, artifacts','Log analysis dan timeline reconstruction','Network forensics: analisis PCAP'],
      res:['Autopsy','Volatility 3','FTK Imager','NetworkMiner']},
     {week:'Minggu 8',title:'Threat Intelligence & Hunting',
      topics:['MITRE ATT&CK: Tactics, Techniques — cara pakai Navigator','Threat hunting: hypothesis-driven methodology','IOC types dan cara ekstrak dari malware','OSINT untuk threat research: Shodan, VirusTotal'],
      res:['MITRE ATT&CK Navigator','OpenCTI','MISP','Shodan']},
   ]},

  {c:'var(--L3)',em:'🤖',t:'Fase 8 — AI Security & Agentic AI',d:'4–6 Minggu',
   out:'Mampu mengidentifikasi dan mengeksploitasi kerentanan AI/LLM, memahami risiko agentic AI, dan menerapkan prinsip keamanan untuk sistem AI.',
   mods:[
     {week:'Minggu 1–2',title:'OWASP LLM Top 10',
      topics:['LLM01: Prompt Injection — direct dan indirect','LLM02: Sensitive Information Disclosure','LLM06: Excessive Agency — AI yang bertindak berlebihan','LLM07: System Prompt Leakage','LLM09: Misinformation dan hallucination'],
      res:['GANDALF (Lakera)','OWASP LLM Guide','PortSwigger AI Labs']},
     {week:'Minggu 3–4',title:'Agentic AI Security',
      topics:['Agentic AI: autonomous decision-making dan tool use','Agent goal hijacking dan tool misuse','Memory poisoning dalam long-term agent','MCP (Model Context Protocol) attack surface','Multi-agent trust boundaries'],
      res:['GitHub Secure Code Game S4','OWASP AI Exchange']},
     {week:'Minggu 5–6',title:'Model Security & AI Governance Teknis',
      topics:['Adversarial attacks dan data poisoning','Model extraction dan model inversion attacks','AI supply chain security dan AI SBOM','Securing LLM API: rate limiting, output filtering','AI Security Posture Management (AI-SPM)'],
      res:['Adversarial Robustness Toolbox','Garak Scanner','Lakera Guard']},
   ]},

  {c:'var(--L4)',em:'🎯',t:'Fase 9 — Spesialisasi & Karier',d:'6–12 Bulan',
   out:'Cybersecurity professional dengan spesialisasi, sertifikasi industri, portfolio nyata, dan jaringan komunitas yang aktif.',
   mods:[
     {week:'Pilihan A',title:'Red Team / Penetration Testing',
      topics:['Pentesting methodology: PTES, OSSTMM','Exploitation: Metasploit, manual exploits, custom payload','AD attacks: Kerberoasting, Pass-the-Hash, DCSync','Report writing profesional — executive + technical'],
      res:['TCM Academy','HackTheBox Pro Labs','OSCP']},
     {week:'Pilihan B',title:'Blue Team / SOC Analyst',
      topics:['Advanced SIEM correlation dan tuning','EDR/XDR: CrowdStrike, Microsoft Defender, SentinelOne','Threat hunting frameworks: PEAK, TaHiTI','AI-assisted SOC: Copilot for Security'],
      res:['Splunk Enterprise','Blue Team Labs Online','CySA+']},
     {week:'Pilihan C',title:'Cloud Security Engineer',
      topics:['Multi-cloud security architecture (AWS + Azure + GCP)','CSPM: Cloud Security Posture Management','DevSecOps pipeline dari dev ke production','Container & Kubernetes security di produksi'],
      res:['AWS Security Specialty','Prowler','Wiz','Checkov']},
     {week:'Pilihan D',title:'GRC / AppSec / AI Security / DFIR',
      topics:['GRC: ISO 27001 Lead Auditor, CISM, risk framework','AppSec: SAST/DAST, secure code review, API security','AI Security: OffSec AI-300, CAISP, AI red teaming','DFIR: memory forensics, malware RE, chain of custody'],
      res:['ISACA','OffSec','Practical DevSecOps','GIAC']},
   ]},
];

function renderLP(){
  const container=document.getElementById('lpContent');
  container.innerHTML=lpItems.map((item,i)=>`
    <div class="lp-item" style="animation-delay:${i*.06}s">
      <div class="lp-dot" style="color:${item.c};border-color:${item.c};box-shadow:0 0 10px ${item.c}44">${item.em}</div>
      <div class="lp-body" style="border-left-color:${item.c}">
        <div class="lp-head"><div class="lp-title">${item.t}</div><div class="lp-dur">⏱ ${item.d}</div></div>
        <div class="lp-modules">
          ${item.mods.map(m=>`
            <div class="lp-mod" style="border-left-color:${item.c}88">
              <div class="lp-mod-week">${m.week}</div>
              <div class="lp-mod-title">${m.title}</div>
              <ul class="lp-mod-topics">${m.topics.map(t=>`<li>${t}</li>`).join('')}</ul>
              <div class="lp-mod-res">${m.res.map(r=>`<span class="lp-mod-chip">${r}</span>`).join('')}</div>
            </div>`).join('')}
        </div>
        <div class="lp-out">${item.out}</div>
      </div>
    </div>`).join('');
}


// ═══════════════════════════════════════
//  FRAMEWORKS
// ═══════════════════════════════════════
const fwData=[
  {c:'var(--L1)',icon:'📚',type:'Core Academic Framework',name:'CyBOK v1.1',desc:'Cybersecurity Body of Knowledge — backbone utama kurikulum ini. 21 knowledge area dari University of Bristol & NCSC UK. Referensi akademik paling terpercaya dan komprehensif.',tags:['21 Knowledge Areas','Academic','Free PDF']},
  {c:'var(--L2)',icon:'🏛️',type:'Government Framework',name:'NIST CSF 2.0',desc:'NIST Cybersecurity Framework versi terbaru — standar de facto global. Fungsi Govern ditambahkan di v2.0. Diadopsi oleh ribuan organisasi dari semua sektor.',tags:['6 Functions: Govern + IPDRR','Free','Global Standard']},
  {c:'var(--L3)',icon:'🌐',type:'Application Security',name:'OWASP Top 10 & Projects',desc:'Open Worldwide Application Security Project — referensi keamanan aplikasi paling dikenal. OWASP LLM Top 10 untuk AI security kini menjadi referensi utama industri.',tags:['Web Top 10','LLM Top 10 NEW','API Top 10','Mobile','Free']},
  {c:'var(--L4)',icon:'🏆',type:'International Standard',name:'ISO/IEC 27001:2022',desc:'Standar ISMS internasional yang dapat disertifikasi. 93 kontrol dalam 4 tema. Paling banyak diminta dalam tender enterprise dan pemerintah.',tags:['93 Controls','Certifiable','Global','Auditable']},
  {c:'var(--gold)',icon:'🇪🇺',type:'Privacy Regulation',name:'GDPR',desc:'Regulasi privasi data Uni Eropa yang berdampak global. Berlaku untuk siapa pun yang memproses data warga EU. Denda hingga €20 juta atau 4% global revenue.',tags:['Privacy','Data Rights','Global Impact','Mandatory']},
  {c:'var(--L5)',icon:'🇮🇩',type:'Regulasi Indonesia',name:'UU PDP No. 27/2022',desc:'Undang-Undang Perlindungan Data Pribadi Indonesia — wajib dipatuhi semua organisasi yang beroperasi di Indonesia. Aktif penuh sejak 2024.',tags:['Indonesia','PDPA','Mandatory','Active 2024']},
  {c:'var(--L4)',icon:'⚖️',type:'Regulasi Indonesia',name:'UU ITE No. 19/2016',desc:'Mengatur kejahatan siber, konten ilegal, dan transaksi elektronik di Indonesia. Revisi 2016 mempertegas beberapa pasal.',tags:['Cybercrime','Indonesia','Electronic Law']},
  {c:'var(--green)',icon:'💳',type:'Payment Standard',name:'PCI DSS v4.0',desc:'Standar keamanan data kartu pembayaran yang wajib dipatuhi. 12 requirements utama. Diaudit tahunan. Sangat relevan untuk fintech dan e-commerce Indonesia.',tags:['Payment','12 Requirements','Annual Audit','Mandatory']},
  {c:'var(--L1)',icon:'🏥',type:'Healthcare Regulation',name:'HIPAA',desc:'Regulasi AS untuk keamanan dan privasi Protected Health Information. Relevan untuk platform kesehatan digital Indonesia yang beroperasi secara internasional.',tags:['Healthcare','PHI','US Law','Security Rule']},
  {c:'var(--red)',icon:'🤖',type:'AI Framework —',name:'ISO/IEC 42001:2023',desc:'Standar AI Management System pertama di dunia. Sertifikasi untuk organisasi yang mengembangkan atau menggunakan AI. Makin wajib seiring EU AI Act aktif .',tags:['AI Governance','NEW','Certifiable','ISO']},
  {c:'var(--red)',icon:'🎯',type:'Threat Framework',name:'MITRE ATT&CK v15',desc:'Knowledge base teknik serangan threat actor nyata yang terus diperbarui. Kini mencakup ATT&CK for Enterprise, Mobile, ICS, dan Cloud. Standar industri untuk threat intel.',tags:['TTPs','Red Team','Blue Team','Free','Continuously Updated']},
];

function renderFW(){
  document.getElementById('fwGrid').innerHTML=fwData.map(f=>`
    <div class="fw-card " style="border-top-color:${f.c}">
      <div class="fw-icon">${f.icon}</div>
      <div class="fw-type" style="color:${f.c}">${f.type}</div>
      <div class="fw-name">${f.name}</div>
      <div class="fw-desc">${f.desc}</div>
      <div class="fw-tags">${f.tags.map(t=>`<span class="fw-tag">${t}</span>`).join('')}</div>
    </div>`).join('');
}

// ═══════════════════════════════════════
//  RESOURCES
// ═══════════════════════════════════════
const resData={
  'Platform Latihan Interaktif':[
    {icon:'🟩',type:'Platform Lab',name:'TryHackMe',desc:'Paling ramah pemula. Jalur Pre-Security → SOC Level 1 → Red Teaming. Ideal untuk mulai dari nol.',pr:'mix',prl:'Gratis+'},
    {icon:'⬛',type:'Platform Lab',name:'Hack The Box',desc:'CTF & enterprise labs realistic. Pro Labs simulasi jaringan korporat nyata untuk intermediate–advanced.',pr:'mix',prl:'Gratis+'},
    {icon:'🔵',type:'Platform Lab',name:'PortSwigger Web Academy',desc:'Lab web security terbaik dunia — 100% gratis. Mencakup semua OWASP Top 10 + API security + advanced.',pr:'free',prl:'Gratis'},
    {icon:'🟦',type:'Platform Lab',name:'Blue Team Labs Online',desc:'Defensive: forensics, SIEM, threat hunting. Sangat relevan untuk SOC analyst track.',pr:'mix',prl:'Gratis+'},
    {icon:'🟡',type:'Platform Lab',name:'CyberDefenders',desc:'Blue team challenges skenario nyata: malware, forensics, network. Community-driven dan terus diperbarui.',pr:'free',prl:'Gratis'},
    {icon:'🔴',type:'Platform Lab',name:'VulnHub',desc:'VM yang bisa didownload dan diattack secara lokal. Ratusan vulnerable machines untuk berbagai level.',pr:'free',prl:'Gratis'},
    {icon:'🟠',type:'Platform Lab',name:'PentesterLab',desc:'Web app & code review. Badge system yang memotivasi. Ada jalur gratis yang cukup dalam.',pr:'mix',prl:'Gratis+'},
    {icon:'🤖',type:'Platform Lab ',name:'GANDALF AI (Lakera)',desc:'Platform AI red teaming gratis. Challenge prompt injection dengan 7 level kesulitan meningkat..',pr:'free',prl:'Gratis'},
  ],
  'Kursus & Akademi Online':[
    {icon:'🎓',type:'Akademi',name:'TCM Security Academy',desc:'Kursus hacking & defense berkualitas tinggi dengan harga terjangkau. Pengembang sertifikasi PNPT.',pr:'paid',prl:'Berbayar'},
    {icon:'🎓',type:'Akademi',name:'INE / eLearnSecurity',desc:'eJPT (entry), eCPPT, eWPT. Sertifikasi lab-based dengan harga kompetitif.',pr:'paid',prl:'Berbayar'},
    {icon:'🎓',type:'Akademi',name:'OffSec (OSCP + AI-300)',desc:'OSCP: raja pentesting. AI-300 (OSAI): sertifikasi AI red teaming pertama dari OffSec —.',pr:'paid',prl:'Berbayar'},
    {icon:'🎓',type:'Akademi',name:'SANS / GIAC',desc:'Training tier tertinggi industri. GSEC, GCIH, GPEN, FOR508. SEC598 AI security terbaru.',pr:'paid',prl:'Berbayar'},
    {icon:'🎓',type:'Akademi',name:'Antisyphon Training',desc:'Pay-what-you-can training dari praktisi aktif. Banyak kelas gratis atau sangat murah.',pr:'mix',prl:'Gratis+'},
    {icon:'🎓',type:'Akademi',name:'Practical DevSecOps',desc:'AI Security Engineer roadmap + CAISP certification. Fokus pada AI security hands-on..',pr:'paid',prl:'Berbayar'},
    {icon:'🎓',type:'Akademi',name:'Cybrary',desc:'Library kursus cybersecurity besar dengan career path terstruktur.',pr:'mix',prl:'Gratis+'},
    {icon:'🎓',type:'Akademi',name:'Google Cybersecurity (Coursera)',desc:'Program entry-level dari Google. 6 bulan, cocok untuk pemula absolut non-IT.',pr:'paid',prl:'Berbayar'},
  ],
  'Dokumentasi & Referensi Gratis':[
    {icon:'📖',type:'Docs',name:'CyBOK (cybok.org)',desc:'PDF seluruh 21 knowledge area — gratis open access. Referensi akademik utama roadmap ini.',pr:'free',prl:'Gratis'},
    {icon:'📖',type:'Docs',name:'NIST SP 800-Series + AI RMF',desc:'Seluruh publikasi NIST gratis: SP 800-61, 115, 123, dan NIST AI RMF untuk AI security.',pr:'free',prl:'Gratis'},
    {icon:'📖',type:'Docs',name:'OWASP LLM Top 10 + Testing Guide',desc:'OWASP LLM Top 10 + Web Testing Guide + API Security — semua gratis.',pr:'free',prl:'Gratis'},
    {icon:'📖',type:'Docs',name:'MITRE ATT&CK + D3FEND',desc:'ATT&CK v15 dan D3FEND untuk defensive techniques. Gratis dan terus diperbarui.',pr:'free',prl:'Gratis'},
    {icon:'📖',type:'Docs',name:'SANS Reading Room',desc:'Ribuan paper penelitian keamanan dari praktisi aktif. Gratis setelah registrasi.',pr:'free',prl:'Gratis'},
    {icon:'📖',type:'Docs',name:'BSSN, Kominfo & Komdigi Indonesia',desc:'Regulasi, panduan, dan alert keamanan siber resmi Indonesia.',pr:'free',prl:'Gratis'},
  ],
  'YouTube & Media Gratis':[
    {icon:'📺',type:'YouTube',name:'Professor Messer',desc:'Persiapan CompTIA terlengkap dan gratis: A+, Net+, Sec+, CySA+, PenTest+.',pr:'free',prl:'Gratis'},
    {icon:'📺',type:'YouTube',name:'John Hammond',desc:'CTF walkthroughs, malware analysis, AI security coverage. Level intermediate–advanced.',pr:'free',prl:'Gratis'},
    {icon:'📺',type:'YouTube',name:'NetworkChuck',desc:'Networking & cybersecurity engaging. Cocok untuk pemula. Topik AI security makin sering.',pr:'free',prl:'Gratis'},
    {icon:'📺',type:'YouTube',name:'IppSec',desc:'HackTheBox retired machine walkthroughs mendalam. Wajib untuk Red Team aspirant.',pr:'free',prl:'Gratis'},
    {icon:'📺',type:'YouTube',name:'David Bombal',desc:'Networking, Python, Kali Linux, dan AI security topics.',pr:'free',prl:'Gratis'},
  ],
  'AI Security Resources ':[
    {icon:'🤖',type:'AI Security',name:'OWASP AI Exchange',desc:'Hub AI security global: guidance, research, dan community. Pusat OWASP LLM Top 10.',pr:'free',prl:'Gratis'},
    {icon:'🤖',type:'AI Security',name:'GitHub Secure Code Game',desc:'Season 4: agentic AI vulnerabilities. Hands-on, gratis, 5 progressive levels.',pr:'free',prl:'Gratis'},
    {icon:'🤖',type:'AI Security',name:'Lakera AI Security Hub',desc:'Resources AI security: red teaming guide, GANDALF platform, research papers.',pr:'free',prl:'Gratis'},
    {icon:'🤖',type:'AI Security',name:'OffSec AI-300 Course',desc:'AI red teaming hands-on: LLM, multi-agent, RAG, AI infrastructure attacks.',pr:'paid',prl:'Berbayar'},
    {icon:'🤖',type:'AI Security',name:'Garak (LLM Scanner)',desc:'Open source LLM vulnerability scanner. Cek model kamu untuk prompt injection, dll.',pr:'free',prl:'Gratis'},
    {icon:'🤖',type:'AI Security',name:'NIST AI RMF Playbook',desc:'Panduan implementasi NIST AI Risk Management Framework. Gratis dari NIST.',pr:'free',prl:'Gratis'},
  ],
  'Komunitas Indonesia & Global':[
    {icon:'🇮🇩',type:'Komunitas',name:'OWASP Chapter Indonesia',desc:'Komunitas application security Indonesia. Meetup, webinar, dan resources gratis.',pr:'free',prl:'Gratis'},
    {icon:'🇮🇩',type:'Komunitas',name:'ID-SIRTII/CC',desc:'Indonesia Security Incident Response Team. Alert, forum, dan program nasional.',pr:'free',prl:'Gratis'},
    {icon:'🇮🇩',type:'Komunitas',name:'Komunitas IT Security ID',desc:'Komunitas Telegram cybersecurity terbesar Indonesia. Info kerja, diskusi, tanya jawab.',pr:'free',prl:'Gratis'},
    {icon:'🌐',type:'Komunitas',name:'Discord: TryHackMe & HTB',desc:'Komunitas aktif global untuk belajar bersama dan networking.',pr:'free',prl:'Gratis'},
    {icon:'🌐',type:'Komunitas',name:'Reddit r/netsec + r/AISecurityNews',desc:'Diskusi global keamanan dan AI security terbaru.',pr:'free',prl:'Gratis'},
  ],
};

function renderRes(){
  const c=document.getElementById('resContent');
  c.innerHTML=Object.entries(resData).map(([s,items])=>`
    <div class="res-sec">
      <div class="res-sec-hd">${s} <span>${items.length} resources</span></div>
      <div class="res-grid">${items.map(r=>`
        <div class="res-card">
          <div class="res-icon">${r.icon}</div>
          <div><div class="res-type">${r.type}</div><div class="res-name">${r.name}</div>
          <div class="res-desc">${r.desc}</div>
          <span class="res-pr rp-${r.pr==='free'?'free':r.pr==='paid'?'paid':'mix'}">${r.prl}</span></div>
        </div>`).join('')}</div>
    </div>`).join('');
}

// ═══════════════════════════════════════
//  CERTIFICATIONS
// ═══════════════════════════════════════
const certs=[
  // DASAR
  {lv:'d',lvLabel:'Dasar',vendor:'ISC2',name:'CC — Certified in Cybersecurity',desc:'GRATIS dari ISC2 — nilai terbaik untuk pemula. Exam gratis, materi gratis. Diakui global.',price:'free',pl:'Gratis',track:['all'],rec:true,c:'var(--L1)'},
  {lv:'d',lvLabel:'Dasar',vendor:'Google',name:'Google Cybersecurity Certificate',desc:'Program entry-level via Coursera. 6 bulan, cocok pemula absolut non-IT. Disiapkan untuk SOC level 1.',price:'paid',pl:'~$49/bln Coursera',track:['all'],rec:true,c:'var(--L1)'},
  {lv:'d',lvLabel:'Dasar',vendor:'CompTIA',name:'CompTIA Security+',desc:'Entry-level paling diakui industri global. Vendor-neutral, DoD approved. Pintu masuk semua karier cybersecurity.',price:'paid',pl:'~$392 USD',track:['all'],rec:true,c:'var(--L1)'},
  {lv:'d',lvLabel:'Dasar',vendor:'CompTIA',name:'CompTIA Network+',desc:'Fondasi jaringan sebelum Security+. Direkomendasikan untuk non-IT yang belum punya networking background.',price:'paid',pl:'~$338 USD',track:['all'],rec:false,c:'var(--L1)'},
  {lv:'d',lvLabel:'Dasar',vendor:'INE',name:'eJPT — Junior Penetration Tester',desc:'Entry-level pentesting dari eLearnSecurity. Ujian 3 hari lab-based. Terbaik sebelum OSCP.',price:'paid',pl:'~$200 USD',track:['red'],rec:true,c:'var(--L1)'},
  {lv:'d',lvLabel:'Dasar',vendor:'Cisco',name:'Cisco CyberOps Associate',desc:'SOC operations: monitoring, threat analysis, incident response. Materi gratis di Cisco NetAcad.',price:'paid',pl:'~$330 USD',track:['blue'],rec:false,c:'var(--L1)'},
  // MENENGAH
  {lv:'m',lvLabel:'Menengah',vendor:'CompTIA',name:'CompTIA CySA+',desc:'Blue team/SOC analyst certification. Threat detection, behavioral analytics, dan IR. Direkomendasikan setelah Security+.',price:'paid',pl:'~$392 USD',track:['blue'],rec:true,c:'var(--L2)'},
  {lv:'m',lvLabel:'Menengah',vendor:'TCM Security',name:'PNPT — Practical Network Penetration Tester',desc:'Pentesting praktis dari TCM. 5 hari ujian hands-on. Harga terjangkau, kualitas sangat tinggi.',price:'paid',pl:'~$399 USD',track:['red'],rec:true,c:'var(--L2)'},
  {lv:'m',lvLabel:'Menengah',vendor:'Security Blue Team',name:'BTL1 — Blue Team Level 1',desc:'Blue team certification praktis: phishing, SIEM, threat intel, digital forensics, IR.',price:'paid',pl:'~$599 USD',track:['blue'],rec:true,c:'var(--L2)'},
  {lv:'m',lvLabel:'Menengah',vendor:'EC-Council',name:'CEH — Certified Ethical Hacker',desc:'Sertifikasi pentesting dikenal luas. Lebih teoritis dari OSCP. Diakui di banyak tender pemerintah.',price:'paid',pl:'~$1,199 USD',track:['red'],rec:false,c:'var(--L2)'},
  {lv:'m',lvLabel:'Menengah',vendor:'AWS',name:'AWS Certified Security — Specialty',desc:'Cloud security AWS. Paling diakui untuk cloud security engineer. Butuh pengalaman AWS.',price:'paid',pl:'~$300 USD',track:['cloud'],rec:true,c:'var(--L2)'},
  {lv:'m',lvLabel:'Menengah',vendor:'INE',name:'eWPT — Web App Penetration Tester',desc:'Web application pentesting lab-based. Cocok untuk AppSec track sebelum GWEB.',price:'paid',pl:'~$400 USD',track:['red','appsec'],rec:false,c:'var(--L2)'},
  {lv:'m',lvLabel:'Menengah',vendor:'Microsoft',name:'SC-200 — Security Operations Analyst',desc:'Microsoft Defender & Sentinel operations. Relevan untuk SOC dengan ekosistem Microsoft.',price:'paid',pl:'~$165 USD',track:['blue'],rec:false,c:'var(--L2)'},
  {lv:'m',lvLabel:'Menengah',vendor:'Splunk',name:'Splunk Core Certified Power User',desc:'Sertifikasi resmi Splunk untuk SIEM operations. Sangat dicari di perusahaan Splunk-deployed.',price:'paid',pl:'~$130 USD',track:['blue'],rec:false,c:'var(--L2)'},
  // TINGGI
  {lv:'t',lvLabel:'Tinggi',vendor:'OffSec',name:'OSCP — Offensive Security Certified Professional',desc:'Raja semua sertifikasi pentesting. 24 jam ujian hands-on total. "Try Harder". Dikenal semua perusahaan.',price:'paid',pl:'~$1,499 USD',track:['red'],rec:true,c:'var(--L3)'},
  {lv:'t',lvLabel:'Tinggi',vendor:'GIAC',name:'GCIH — GIAC Certified Incident Handler',desc:'Incident response dan handling dari GIAC. Sangat dihargai untuk peran SOC senior dan IR Lead.',price:'paid',pl:'~$949 USD',track:['blue'],rec:false,c:'var(--L3)'},
  {lv:'t',lvLabel:'Tinggi',vendor:'GIAC',name:'GWEB — GIAC Web App Penetration Tester',desc:'Spesialisasi web application security dari GIAC. Mendalam di modern web attacks.',price:'paid',pl:'~$949 USD',track:['appsec'],rec:false,c:'var(--L3)'},
  {lv:'t',lvLabel:'Tinggi',vendor:'GIAC',name:'GCFE — GIAC Certified Forensic Examiner',desc:'Digital forensics dari GIAC. Windows forensics, browser artifacts, registry analysis.',price:'paid',pl:'~$949 USD',track:['dfir'],rec:false,c:'var(--L3)'},
  {lv:'t',lvLabel:'Tinggi',vendor:'ISACA',name:'CISM — Certified Information Security Manager',desc:'Security management dari ISACA. Untuk security manager, GRC specialist, CISO aspirant.',price:'paid',pl:'~$760 USD',track:['grc'],rec:true,c:'var(--L3)'},
  {lv:'t',lvLabel:'Tinggi',vendor:'ISO',name:'ISO 27001 Lead Auditor',desc:'Sertifikasi auditor ISO 27001 diakui global. Wajib untuk GRC professional yang melakukan audit ISMS.',price:'paid',pl:'~$1,000–2,000 USD',track:['grc'],rec:true,c:'var(--L3)'},
  {lv:'t',lvLabel:'Tinggi',vendor:'CCSP',name:'CCSP — Cloud Security Professional',desc:'Cloud security premium dari ISC2. Vendor-neutral, mendalam di cloud architecture & governance.',price:'paid',pl:'~$599 USD',track:['cloud'],rec:false,c:'var(--L3)'},
  {lv:'t',lvLabel:'Tinggi ',vendor:'Practical DevSecOps',name:'CAISP — Certified AI Security Professional',desc:'Sertifikasi AI Security pertama yang komprehensif. Mencakup AI threat modeling, LLM security, ISO 42001. NEW .',price:'paid',pl:'~$500 USD',track:['ai'],rec:true,c:'var(--red)'},
  {lv:'t',lvLabel:'Tinggi ',vendor:'OffSec',name:'OSAI — OffSec AI Red Teamer',desc:'Sertifikasi AI red teaming dari OffSec. 24 jam ujian hands-on pada AI systems, LLM, multi-agent..',price:'paid',pl:'~$1,499 USD',track:['ai','red'],rec:true,c:'var(--red)'},
  // AHLI
  {lv:'a',lvLabel:'Ahli',vendor:'ISC2',name:'CISSP — Certified Information Systems Security Professional',desc:'Mahkota semua sertifikasi cybersecurity. 5 tahun pengalaman required. Untuk senior manager, architect, CISO.',price:'paid',pl:'~$749 USD',track:['all'],rec:true,c:'var(--L4)'},
  {lv:'a',lvLabel:'Ahli',vendor:'OffSec',name:'OSED / OSEP / OSWE — OffSec Advanced Trilogy',desc:'Exploit Dev, Evasion, Web Expert. Untuk red teamer senior yang ingin mastery.',price:'paid',pl:'~$1,499+ USD each',track:['red'],rec:false,c:'var(--L4)'},
  {lv:'a',lvLabel:'Ahli',vendor:'ISACA',name:'CGEIT — Certified in Governance of Enterprise IT',desc:'Enterprise IT governance. Untuk senior GRC, CIO, dan CISO level governance strategy.',price:'paid',pl:'~$760 USD',track:['grc'],rec:false,c:'var(--L4)'},
  {lv:'a',lvLabel:'Ahli ',vendor:'ISO',name:'ISO 42001 Lead Implementer / Auditor',desc:'Sertifikasi AI Management System. Untuk organisasi yang develop atau deploy AI systems. NEW 2024–.',price:'paid',pl:'~$1,500–2,500 USD',track:['ai','grc'],rec:true,c:'var(--red)'},
  // GRATIS
  {lv:'f',lvLabel:'Gratis',vendor:'Cisco NetAcad',name:'Cisco Introduction to Cybersecurity',desc:'Kursus gratis dari Cisco. Certificate of completion. Titik awal yang sangat baik untuk pemula.',price:'free',pl:'Gratis',track:['all'],rec:false,c:'var(--green)'},
  {lv:'f',lvLabel:'Gratis',vendor:'Microsoft',name:'SC-900 — Security Fundamentals',desc:'Fondasi Microsoft security, compliance, identity. Ujian relatif mudah dan terjangkau.',price:'paid',pl:'~$165 USD',track:['all'],rec:false,c:'var(--green)'},
  {lv:'f',lvLabel:'Gratis',vendor:'CISA',name:'CISA Cybersecurity Training (Free)',desc:'Training gratis dari Cybersecurity and Infrastructure Security Agency AS. Relevan untuk GRC dan ICS/OT.',price:'free',pl:'Gratis',track:['grc'],rec:false,c:'var(--green)'},
];

let cf='all';
const cfOpts=[
  {v:'all',l:'Semua'},{v:'d',l:'Dasar'},{v:'m',l:'Menengah'},{v:'t',l:'Tinggi'},{v:'a',l:'Ahli'},{v:'f',l:'Gratis'},
  {v:'ai',l:'AI Security'},{v:'red',l:'Red Team'},{v:'blue',l:'Blue Team'},{v:'cloud',l:'Cloud'},{v:'grc',l:'GRC'},{v:'appsec',l:'AppSec'},{v:'dfir',l:'DFIR'}
];

function renderCerts(){
  document.getElementById('certFilter').innerHTML=cfOpts.map(o=>`
    <button class="cf-btn ${cf===o.v?'on':''}" onclick="setCF('${o.v}')">${o.l}</button>`).join('');
  const filtered=certs.filter(c=>{
    if(cf==='all') return true;
    if(cf==='f') return c.price==='free'||c.lv==='f';
    if(['d','m','t','a','f'].includes(cf)) return c.lv===cf||c.lv.startsWith(cf);
    return c.track.includes(cf);
  });
  document.getElementById('certGrid').innerHTML=filtered.length?filtered.map(c=>`
    <div class="cert-card " style="border-top-color:${c.c}">
      <div class="cert-top">
        <div><div class="cert-vendor">${c.vendor}</div><div class="cert-name">${c.name}</div></div>
        <div class="cert-price ${c.price==='free'?'c-free':c.price==='mix'?'c-mix':'c-paid'}">${c.pl}</div>
      </div>
      <div class="cert-desc">${c.desc}</div>
      <div class="cert-meta">
        <span class="cert-lvl" style="border-color:${c.c};color:${c.c}">${c.lvLabel}</span>
        ${c.track.map(t=>`<span class="cert-track">${t}</span>`).join('')}
      </div>
    </div>`).join(''):'<div style="color:var(--text2);padding:20px;font-size:12px">Tidak ada sertifikasi untuk filter ini.</div>';
}
function setCF(v){cf=v;renderCerts()}

// ═══════════════════════════════════════
//  CAREER
// ═══════════════════════════════════════
const careers=[
  {c:'#f43f5e',icon:'🔴',t:'Penetration Tester',en:'Ethical Hacker / Red Teamer',
   desc:'Mensimulasikan serangan untuk menemukan kelemahan sebelum attacker nyata. Peran paling ikonik dengan salary sangat kompetitif.',
   skills:[{n:'Web App Testing',p:90},{n:'Network Pentesting',p:85},{n:'Exploit Development',p:75},{n:'Report Writing',p:72}],
   certs:['OSCP','PNPT','CEH','eJPT'],demand:'Stabil Tinggi'},
  {c:'#38bdf8',icon:'🔵',t:'SOC Analyst',en:'Security Operations Center Analyst',
   desc:'Memantau, mendeteksi, dan merespons insiden. Posisi paling banyak tersedia di Indonesia. AI membantu tapi tidak menggantikan peran ini.',
   skills:[{n:'SIEM Operations',p:90},{n:'Log Analysis',p:87},{n:'Incident Response',p:82},{n:'Threat Intel',p:70}],
   certs:['CySA+','BTL1','Splunk Core','SC-200'],demand:'Sangat Tinggi'},
  {c:'#f43f5e',icon:'🤖',t:'AI Security Engineer',en:'AI Red Teamer / AI Security Specialist',
   desc:'Posisi paling langka dan paling dicari . Skills gap 41% secara global. Menguji dan mengamankan sistem LLM, agentic AI, dan AI infrastructure.',
   skills:[{n:'LLM Attack & Defense',p:92},{n:'Prompt Engineering',p:88},{n:'Python & API',p:85},{n:'AI Governance',p:75}],
   certs:['OSAI (OffSec)','CAISP','ISO 42001 LA','CISSP'],demand:'Paling Dicari'},
  {c:'#a855f7',icon:'🟣',t:'Cloud Security Engineer',en:'Cloud Security Architect',
   desc:'Merancang dan mengamankan infrastruktur cloud. Permintaan sangat tinggi seiring adopsi cloud massif dan AI cloud workloads di Indonesia.',
   skills:[{n:'AWS/Azure/GCP',p:90},{n:'IAM & Zero Trust',p:87},{n:'DevSecOps',p:82},{n:'Cloud Compliance',p:76}],
   certs:['AWS Security Spec','CCSP','CCSK','AZ-500'],demand:'Sangat Tinggi'},
  {c:'#22c55e',icon:'🟢',t:'AppSec Engineer',en:'Application Security Specialist',
   desc:'Memastikan aplikasi aman sejak awal. Kolaborasi erat dengan developer. Makin kritis seiring maraknya penggunaan AI dalam development.',
   skills:[{n:'SAST/DAST Tools',p:88},{n:'Secure Code Review',p:90},{n:'API Security',p:85},{n:'Threat Modeling',p:80}],
   certs:['GWEB','eWPT','CSSLP','OSWE'],demand:'Tinggi'},
  {c:'#ec4899',icon:'⚖️',t:'GRC Analyst',en:'Governance, Risk & Compliance',
   desc:'Memastikan kepatuhan regulasi. Sangat relevan era UU PDP dan regulasi AI . Peran makin strategis karena AI governance.',
   skills:[{n:'ISO 27001',p:90},{n:'Risk Management',p:87},{n:'Audit',p:85},{n:'AI Governance',p:78}],
   certs:['CISM','CRISC','ISO 27001 LA','ISO 42001'],demand:'Tinggi & Tumbuh'},
  {c:'#f97316',icon:'🔍',t:'DFIR Investigator',en:'Digital Forensics & Incident Response',
   desc:'Investigasi insiden siber dan kumpulkan bukti digital. Permintaan meningkat karena kompleksitas serangan AI-powered.',
   skills:[{n:'Memory Forensics',p:90},{n:'Malware Analysis',p:83},{n:'Log Analysis',p:87},{n:'Legal / CoC',p:73}],
   certs:['GCFE','GCFA','EnCE','FOR508'],demand:'Stabil'},
  {c:'#eab308',icon:'🧠',t:'Threat Intelligence Analyst',en:'Cyber Threat Intelligence (CTI)',
   desc:'Menganalisis ancaman dan profil threat actor. Salah satu dari 3 peran paling sulit diisi secara global (WEF ).',
   skills:[{n:'MITRE ATT&CK',p:92},{n:'OSINT',p:87},{n:'Malware Analysis',p:76},{n:'Intel Reporting',p:85}],
   certs:['GCTI','GCTIA','CTI Analyst','FOR578'],demand:'Krisis Global'},
  {c:'#06b6d4',icon:'🏗️',t:'DevSecOps Engineer',en:'Security in DevOps / Platform Security',
   desc:'Salah satu dari 3 peran paling sulit diisi global (ISC2 ). Mengintegrasikan security ke seluruh pipeline development dan deployment.',
   skills:[{n:'CI/CD Security',p:90},{n:'Container Security',p:88},{n:'IaC Security',p:85},{n:'SAST/DAST Tooling',p:82}],
   certs:['AWS DevOps Pro','CKS (Kubernetes)','CSSLP','Checkov Certified'],demand:'Sangat Langka'},
  {c:'#8b5cf6',icon:'🏛️',t:'Security Architect / CISO',en:'Senior Leadership Track',
   desc:'Merancang strategi keamanan menyeluruh. Level senior 7–10 tahun pengalaman lintas domain. Tertinggi dalam karier cybersecurity.',
   skills:[{n:'Enterprise Architecture',p:92},{n:'Risk Strategy',p:90},{n:'Leadership',p:87},{n:'All Domains',p:88}],
   certs:['CISSP','CISM','SABSA','TOGAF+Sec'],demand:'Premium'},
];

function renderCareers(){
  document.getElementById('careerGrid').innerHTML=careers.map(c=>`
    <div class="career-card " style="border-top-color:${c.c}">
      <div class="cc-icon">${c.icon}</div>
      <div class="demand-tag" style="border-color:${c.c};color:${c.c}">Demand: ${c.demand}</div>
      <div class="cc-title">${c.t}</div>
      <div class="cc-en" style="color:${c.c}">${c.en}</div>
      <div class="cc-desc">${c.desc}</div>
      <div class="cc-skills">${c.skills.map(s=>`
        <div class="cs-row" style="color:${c.c}">
          <span style="min-width:125px;font-size:9px;color:var(--text2)">${s.n}</span>
          <div class="cs-bar"><div class="cs-fill" style="width:${s.p}%;background:${c.c}"></div></div>
          <span style="min-width:25px;text-align:right;font-size:9px">${s.p}%</span>
        </div>`).join('')}</div>
      <div class="cc-certs">${c.certs.map(cert=>`<span class="cc-cert">${cert}</span>`).join('')}</div>
    </div>`).join('');
}

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
if (document.getElementById('qArea')) buildAssess();
if (document.getElementById('phaseNav') && document.getElementById('phaseContent')) renderRoadmap();
if (document.getElementById('lpContent')) renderLP();
if (document.getElementById('fwGrid')) renderFW();
if (document.getElementById('resContent')) renderRes();
if (document.getElementById('certFilter') && document.getElementById('certGrid')) renderCerts();
if (document.getElementById('careerGrid')) renderCareers();

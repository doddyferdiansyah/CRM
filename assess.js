// Assessment page only — sharpened version

const Qs = [
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
  {cat:'Tujuan Belajar',text:'Apa tujuan utamamu belajar cybersecurity?',hint:'Tujuan yang berbeda membutuhkan learning path yang berbeda.',
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
  {cat:'AI & Teknologi',text:'Apakah kamu sudah menggunakan atau membangun produk berbasis AI (ChatGPT, LLM, API AI, dsb.)?',hint:'Relevan untuk menentukan apakah fase AI Security diprioritaskan.',
   opts:[{em:'🤖',l:'Ya, saya aktif pakai dan membangun dengan AI',s:'Pakai API, fine-tune model, atau deploy AI agent.',v:'ai_high'},
         {em:'👋',l:'Pakai sebagai user, belum membangun',s:'Pakai ChatGPT, Copilot, dsb. tapi tidak develop.',v:'ai_mid'},
         {em:'🙅',l:'Belum atau sangat jarang',s:'Hampir tidak pernah pakai AI tools.',v:'ai_low'}]},
  {cat:'Regulasi & Compliance',text:'Apakah pekerjaanmu atau organisasimu berkaitan dengan data pribadi, keuangan, atau kesehatan?',hint:'Menentukan apakah fase GRC diprioritaskan.',
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

const TRACK_CONFIG = {
  red: {
    profile: {
      emoji:'🔴',
      color:'var(--L5)',
      name:'Calon Red Teamer / Ethical Hacker',
      badge:'Red Team Track',
      desc:'Kamu punya minat offensif yang kuat. Jalurmu akan fokus pada fondasi teknis, web security, network attack, dan pembiasaan berpikir seperti attacker secara etis.'
    },
    primaryCareer:'Red Team / Penetration Tester',
    altCareer:'Application Security Engineer',
    phase9NormalWeeks:[20, 28],
    phase9Name:'Spesialisasi Red Team & Karier',
    topicsStartEarly:['Sistem Operasi Linux','Jaringan Komputer','Web App Security — OWASP Top 10'],
    topicsStartMid:['Web App Security — OWASP Top 10','Serangan & Pertahanan Jaringan','Vulnerability Assessment']
  },
  blue: {
    profile: {
      emoji:'🔵',
      color:'var(--L1)',
      name:'Calon Blue Teamer / SOC Analyst',
      badge:'Blue Team Track',
      desc:'Kamu paling cocok ke jalur pertahanan. Fokusmu akan condong ke monitoring, incident response, analisis log, dan operasi keamanan harian.'
    },
    primaryCareer:'Blue Team / SOC Analyst',
    altCareer:'Threat Hunter / Incident Responder',
    phase9NormalWeeks:[16, 24],
    phase9Name:'Spesialisasi Blue Team & Karier',
    topicsStartEarly:['Jaringan Komputer','Konsep Keamanan Inti','Serangan & Pertahanan Jaringan'],
    topicsStartMid:['Serangan & Pertahanan Jaringan','SOC & Operasi Keamanan','Digital Forensics Dasar']
  },
  ai: {
    profile: {
      emoji:'🤖',
      color:'var(--red)',
      name:'Calon AI Security Engineer',
      badge:'AI Security Track',
      desc:'Kamu cocok masuk ke domain AI Security. Fokusmu akan bergerak dari fondasi security ke OWASP LLM, model security, prompt injection, dan agentic AI.'
    },
    primaryCareer:'AI Security Engineer',
    altCareer:'AI AppSec / Security Researcher',
    phase9NormalWeeks:[20, 30],
    phase9Name:'Spesialisasi AI Security & Karier',
    topicsStartEarly:['Kriptografi Klasik','Konsep Keamanan Inti','OWASP LLM Top 10 & AI Threats'],
    topicsStartMid:['OWASP LLM Top 10 & AI Threats','Agentic AI Security','Model Security & Data Poisoning']
  },
  grc: {
    profile: {
      emoji:'⚖️',
      color:'var(--L4)',
      name:'Calon GRC / Compliance Analyst',
      badge:'GRC Track',
      desc:'Kamu paling dekat dengan governance, risk, dan compliance. Jalurmu akan fokus pada risk thinking, ISO 27001, regulasi, dan komunikasi keamanan.'
    },
    primaryCareer:'GRC / Compliance Analyst',
    altCareer:'Risk Analyst / Security Awareness Lead',
    phase9NormalWeeks:[12, 20],
    phase9Name:'Spesialisasi GRC & Karier',
    topicsStartEarly:['Konsep Keamanan Inti','Security Communication','Manajemen Risiko'],
    topicsStartMid:['Security Communication','Manajemen Risiko','ISO/IEC 27001:2022']
  },
  explorer: {
    profile: {
      emoji:'🧭',
      color:'var(--L2)',
      name:'Explorer — Full Foundation Track',
      badge:'Full Exploration Track',
      desc:'Kamu belum memilih minat spesifik, dan itu bagus. Jalurmu akan memprioritaskan fondasi luas supaya nanti bisa memilih spesialisasi dengan lebih yakin.'
    },
    primaryCareer:'SOC Analyst / Generalist Security Starter',
    altCareer:'Application Security / GRC (setelah eksplorasi)',
    phase9NormalWeeks:[20, 28],
    phase9Name:'Spesialisasi & Karier',
    topicsStartEarly:['Literasi Komputer & Internet','Jaringan Internet Dasar','Mindset & Ekosistem Keamanan'],
    topicsStartMid:['Sistem Operasi Linux','Jaringan Komputer','Konsep Keamanan Inti']
  }
};

const PHASE_LIBRARY = [
  {id:'p0', level:'Level Dasar', name:'Pra-Fondasi: Literasi Digital', normalWeeks:[2,4]},
  {id:'p1', level:'Level Dasar', name:'Fondasi Teknis', normalWeeks:[6,8]},
  {id:'p2', level:'Level Dasar', name:'Kriptografi & Post-Quantum', normalWeeks:[5,7]},
  {id:'p3', level:'Level Menengah', name:'Serangan & Pertahanan', normalWeeks:[8,10]},
  {id:'p4', level:'Level Menengah', name:'Infrastruktur & Cloud', normalWeeks:[6,8]},
  {id:'p5', level:'Level Menengah', name:'Security Communication', normalWeeks:[3,4]},
  {id:'p6', level:'Level Tinggi', name:'Governance, Risk & Regulasi', normalWeeks:[5,7]},
  {id:'p7', level:'Level Tinggi', name:'SOC & Operasi Keamanan', normalWeeks:[6,8]},
  {id:'p8', level:'Level Tinggi', name:'AI Security & Agentic AI', normalWeeks:[4,6]}
];

const PACE_CONFIG = {
  intensif: {label:'Intensif (~15 jam+/minggu)', factor:0.65},
  normal:   {label:'Normal (5–15 jam/minggu)', factor:1.00},
  santai:   {label:'Santai (<5 jam/minggu)', factor:1.60}
};

let answers = {};
let curQ = 0;

function buildAssess(){
  const area = document.getElementById('qArea');
  if (!area) return;

  area.innerHTML = Qs.map((q,i)=>`
    <div class="qcard ${i===0?'on':''}" id="qc${i}">
      <div class="q-cat">${q.cat} · ${i+1}/${Qs.length}</div>
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
        ${i>0 ? `<button class="btn btn-g" style="padding:5px 14px;font-size:9px" onclick="prevQ(${i})">← Kembali</button>` : '<div></div>'}
      </div>
    </div>`).join('');
}

function pickOpt(qi,val,el){
  answers[qi] = val;
  document.querySelectorAll(`#qc${qi} .q-opt`).forEach(o=>o.classList.remove('sel'));
  el.classList.add('sel');
  setTimeout(()=>nextQ(qi),380);
}

function nextQ(qi){
  if(qi < Qs.length - 1){
    document.getElementById('qc' + qi).classList.remove('on');
    document.getElementById('qc' + (qi + 1)).classList.add('on');
    curQ = qi + 1;
    updProg();
  } else {
    updProg(true);
    showResult();
  }
}

function prevQ(qi){
  document.getElementById('qc' + qi).classList.remove('on');
  document.getElementById('qc' + (qi - 1)).classList.add('on');
  curQ = qi - 1;
  updProg();
}

function updProg(done=false){
  const pct = done ? 100 : Math.round(((curQ + 1) / Qs.length) * 100);
  document.getElementById('pFill').style.width = pct + '%';
  document.getElementById('pLabel').textContent = done
    ? `Selesai — ${Qs.length} pertanyaan dijawab`
    : `Pertanyaan ${curQ + 1} dari ${Qs.length}`;
  document.getElementById('pPct').textContent = pct + '%';
}

function weeksToMonths(weeks){
  return weeks / 4.3;
}

function fmtMonths(minW, maxW){
  const minM = weeksToMonths(minW);
  const maxM = weeksToMonths(maxW);
  if (Math.abs(minM - maxM) < 0.3) {
    return `${maxM.toFixed(1)} bulan`;
  }
  return `${minM.toFixed(1)}–${maxM.toFixed(1)} bulan`;
}

function fmtWeeks(minW, maxW){
  const a = Math.round(minW);
  const b = Math.round(maxW);
  if (a === b) return `${a} mgg`;
  return `${a}–${b} mgg`;
}

function calcProfile(){
  const a = answers;

  let track = 'explorer';
  if(a[4] === 'int_red') track = 'red';
  else if(a[4] === 'int_blue') track = 'blue';
  else if(a[4] === 'int_ai' || a[3] === 'goal_ai') track = 'ai';
  else if(a[4] === 'int_grc') track = 'grc';

  const isIT = a[0] === 'bg_it';
  const knowHigh = a[2] === 'know_high';
  const knowMid = a[2] === 'know_mid';
  const cliYes = a[1] === 'cli_yes';
  const cliMaybe = a[1] === 'cli_maybe';

  const paceKey =
    (a[5] === 'time_high' && a[10] === 'commit_high') ? 'intensif' :
    (a[5] === 'time_low' || a[10] === 'commit_low') ? 'santai' : 'normal';

  const pace = PACE_CONFIG[paceKey];
  const aiPriority = a[7] === 'ai_high' || a[4] === 'int_ai' || a[3] === 'goal_ai';
  const grcPriority = a[8] !== 'reg_none' || a[4] === 'int_grc';
  const needComm = a[11] === 'comm_low';
  const urgent = a[6] === 'urgency_fast';

  let startPhaseId = 'p0';
  if (isIT && knowHigh && cliYes) startPhaseId = 'p1';
  else if (isIT && (knowHigh || knowMid) && (cliYes || cliMaybe)) startPhaseId = 'p1';
  else if ((a[3] === 'goal_biz' || track === 'grc') && !isIT && a[2] !== 'know_low') startPhaseId = 'p0';

  const startPhaseIndex = PHASE_LIBRARY.findIndex(p => p.id === startPhaseId);

  const phasePlan = PHASE_LIBRARY.map((phase, idx) => {
    let skip = idx < startPhaseIndex;
    if (phase.id === 'p8' && !aiPriority && track === 'grc' && urgent) skip = true;
    if (phase.id === 'p6' && track === 'red' && !grcPriority) skip = true;

    const minWeeks = phase.normalWeeks[0] * pace.factor;
    const maxWeeks = phase.normalWeeks[1] * pace.factor;

    return {
      ...phase,
      skip,
      minWeeks,
      maxWeeks,
      durLabel: fmtWeeks(minWeeks, maxWeeks)
    };
  });

  const phase9Base = TRACK_CONFIG[track].phase9NormalWeeks;
  const phase9 = {
    id:'p9',
    level:'Level Ahli / Spesialis',
    name:TRACK_CONFIG[track].phase9Name,
    skip:false,
    minWeeks:phase9Base[0] * pace.factor,
    maxWeeks:phase9Base[1] * pace.factor
  };
  phase9.durLabel = fmtWeeks(phase9.minWeeks, phase9.maxWeeks);
  phasePlan.push(phase9);

  const activePhases = phasePlan.filter(p => !p.skip);
  const totalMinWeeks = activePhases.reduce((sum, p) => sum + p.minWeeks, 0);
  const totalMaxWeeks = activePhases.reduce((sum, p) => sum + p.maxWeeks, 0);

  const startPhase = phasePlan.find(p => p.id === startPhaseId);
  const startLevel = startPhase.level;

  let priorityTopics = TRACK_CONFIG[track].topicsStartEarly;
  if (startPhaseId !== 'p0') {
    priorityTopics = TRACK_CONFIG[track].topicsStartMid;
  }

  if (track === 'explorer' && startPhaseId === 'p1') {
    priorityTopics = ['Sistem Operasi Linux','Jaringan Komputer','Konsep Keamanan Inti'];
  }

  if (track === 'grc' && grcPriority && startPhaseId === 'p0') {
    priorityTopics = ['Mindset & Ekosistem Keamanan','Security Communication','Manajemen Risiko'];
  }

  const notes = [];
  if (startPhaseId === 'p1') notes.push('✓ Fondasi digital dasar bisa dipadatkan; kamu bisa langsung masuk ke fase teknis.');
  if (aiPriority) notes.push('→ Topik AI Security sebaiknya tidak ditunda terlalu lama.');
  if (grcPriority) notes.push('📋 Konteks kerja/regulasi membuat jalur GRC perlu diprioritaskan.');
  if (needComm) notes.push('💬 Security Communication perlu dijadikan fokus penguat, bukan pelengkap.');
  if (urgent) notes.push('⚡ Gunakan pendekatan cepat: fokus pada topik MUST, jangan buka terlalu banyak jalur sekaligus.');

  return {
    prof: TRACK_CONFIG[track].profile,
    paceLabel: pace.label,
    track,
    startLevel,
    startPhase: startPhase.name,
    startPhaseId,
    priorityTopics,
    primaryCareer: TRACK_CONFIG[track].primaryCareer,
    altCareer: TRACK_CONFIG[track].altCareer,
    phasePlan,
    totalMinWeeks,
    totalMaxWeeks,
    totalMonthsLabel: fmtMonths(totalMinWeeks, totalMaxWeeks),
    notes
  };
}

function showResult(){
  const qArea = document.getElementById('qArea');
  const rArea = document.getElementById('rArea');
  if (!qArea || !rArea) return;

  qArea.style.display = 'none';
  rArea.style.display = 'block';

  const result = calcProfile();

  rArea.innerHTML = `
    <div class="result-card on" style="border-color:${result.prof.color}">
      <div class="res-top">
        <div class="res-emoji">${result.prof.emoji}</div>
        <div>
          <div class="res-badge" style="border-color:${result.prof.color};color:${result.prof.color}">${result.prof.badge}</div>
          <div class="res-name">${result.prof.name}</div>
          <div class="res-desc">${result.prof.desc}</div>
          <div class="res-pace">Tempo belajar: <strong>${result.paceLabel}</strong></div>
          ${result.notes.length ? `<div class="res-notes">${result.notes.map(n => `<div class="res-note">${n}</div>`).join('')}</div>` : ''}
        </div>
      </div>

      <div class="res-summary">
        <div class="res-summary-card">
          <div class="res-summary-label">Rekomendasi Level Awal</div>
          <div class="res-summary-value"><strong>${result.startLevel}</strong></div>
        </div>
        <div class="res-summary-card">
          <div class="res-summary-label">Fase Awal</div>
          <div class="res-summary-value"><strong>${result.startPhase}</strong></div>
        </div>
        <div class="res-summary-card">
          <div class="res-summary-label">Karier Utama</div>
          <div class="res-summary-value">${result.primaryCareer}</div>
        </div>
        <div class="res-summary-card">
          <div class="res-summary-label">Karier Alternatif</div>
          <div class="res-summary-value">${result.altCareer}</div>
        </div>
        <div class="res-summary-card">
          <div class="res-summary-label">Estimasi Total Belajar</div>
          <div class="res-summary-value"><strong>${result.totalMonthsLabel}</strong></div>
        </div>
        <div class="res-summary-card">
          <div class="res-summary-label">Estimasi Mingguan</div>
          <div class="res-summary-value">${Math.round(result.totalMinWeeks)}–${Math.round(result.totalMaxWeeks)} minggu</div>
        </div>
      </div>

      <div class="res-topics">
        <div class="res-section-title">3 Topik Utama untuk Dimulai</div>
        <div class="res-topic-list">
          ${result.priorityTopics.map(item => `<div class="res-topic-item">${item}</div>`).join('')}
        </div>
      </div>

      <div class="res-path-title">Learning Path Personalisasi Kamu</div>
      <div class="rp-list">
        ${result.phasePlan.map((p,i)=>`
          <div class="rp-row ${p.skip ? 'skip' : ''}">
            <div class="rp-n" style="color:${i <= 2 ? 'var(--L1)' : i <= 5 ? 'var(--L2)' : i <= 8 ? 'var(--L3)' : 'var(--L4)'};border-color:${i <= 2 ? 'var(--L1)' : i <= 5 ? 'var(--L2)' : i <= 8 ? 'var(--L3)' : 'var(--L4)'}">${p.id.replace('p','')}</div>
            <div class="rp-name">${p.name}</div>
            <div class="rp-dur">${p.skip ? 'Dapat dilewati' : p.durLabel}</div>
            ${p.skip
              ? `<span class="rp-tag" style="border-color:var(--text2);color:var(--text2)">SKIP</span>`
              : p.id === result.startPhaseId
                ? `<span class="rp-tag" style="border-color:var(--L1);color:var(--L1)">MULAI SINI</span>`
                : ''
            }
          </div>`).join('')}
      </div>

      <div class="res-actions">
        <button class="btn btn-p" onclick="window.location.href='lp.html'">Lihat Learning Path Lengkap →</button>
        <button class="btn btn-g" onclick="window.location.href='roadmap.html'">Lihat Roadmap Detail</button>
        <button class="btn btn-g" onclick="resetAssess()">↩ Ulangi</button>
      </div>
    </div>`;
}

function resetAssess(){
  answers = {};
  curQ = 0;
  document.getElementById('qArea').style.display = 'block';
  document.getElementById('rArea').style.display = 'none';
  document.querySelectorAll('.qcard').forEach((c,i)=>{
    c.classList.toggle('on', i === 0);
    c.querySelectorAll('.q-opt').forEach(o=>o.classList.remove('sel'));
  });
  document.getElementById('pFill').style.width = '0%';
  document.getElementById('pLabel').textContent = 'Pertanyaan 1 dari 12';
  document.getElementById('pPct').textContent = '0%';
}

document.addEventListener('DOMContentLoaded', () => {
  buildAssess();
  updProg();
});

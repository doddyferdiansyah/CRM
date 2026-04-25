// Assessment page only

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

function calcProfile(){
  const a = answers;

  let track = 'explorer';
  if(a[4] === 'int_red') track = 'red';
  else if(a[4] === 'int_blue') track = 'blue';
  else if(a[4] === 'int_ai' || a[3] === 'goal_ai') track = 'ai';
  else if(a[4] === 'int_grc') track = 'grc';

  const isIT = a[0] === 'bg_it';
  const knowHigh = a[2] === 'know_high';
  const cliYes = a[1] === 'cli_yes';
  const skipL0 = isIT && knowHigh && cliYes;

  const pace =
    (a[5] === 'time_high' && a[10] === 'commit_high') ? 'intensif' :
    (a[5] === 'time_low' || a[10] === 'commit_low') ? 'santai' : 'normal';

  const aiPriority = a[7] === 'ai_high' || a[4] === 'int_ai' || a[3] === 'goal_ai';
  const grcPriority = a[8] !== 'reg_none' || a[4] === 'int_grc';
  const needComm = a[11] === 'comm_low';
  const urgent = a[6] === 'urgency_fast';

  const profiles = {
    red:{
      emoji:'🔴',
      color:'var(--L5)',
      name:'Calon Red Teamer / Ethical Hacker',
      badge:'Red Team Track',
      desc:'Kamu punya minat offensif yang kuat. Learning path-mu akan fokus pada exploitation, pentesting methodology, dan fondasi untuk jalur pentest.'
    },
    blue:{
      emoji:'🔵',
      color:'var(--L1)',
      name:'Calon Blue Teamer / SOC Analyst',
      badge:'Blue Team Track',
      desc:'Peran SOC Analyst sangat relevan untuk kebutuhan industri. Learning path-mu memprioritaskan SIEM, threat hunting, dan incident response.'
    },
    ai:{
      emoji:'🤖',
      color:'var(--red)',
      name:'Calon AI Security Engineer',
      badge:'AI Security Track',
      desc:'Kamu paling cocok masuk ke jalur AI Security. Fokus utamamu akan mengarah ke OWASP LLM, prompt injection, model security, dan agentic AI.'
    },
    grc:{
      emoji:'⚖️',
      color:'var(--L4)',
      name:'Calon GRC / Compliance Analyst',
      badge:'GRC Track',
      desc:'Kamu cocok ke jalur governance, risk, dan compliance. Learning path-mu fokus pada ISO 27001, manajemen risiko, serta regulasi.'
    },
    explorer:{
      emoji:'🧭',
      color:'var(--L2)',
      name:'Explorer — Full Foundation Track',
      badge:'Full Exploration Track',
      desc:'Kamu belum memilih minat spesifik, dan itu keputusan yang baik. Learning path-mu akan memberi fondasi menyeluruh sebelum memilih spesialisasi.'
    },
  };

  const prof = profiles[track];
  const paceLabel = {
    intensif:'Intensif (~15 jam+/minggu)',
    normal:'Normal (5–15 jam/minggu)',
    santai:'Santai (<5 jam/minggu)'
  }[pace];

  const phases = [
    {n:'0',name:'Pra-Fondasi: Literasi Digital',c:'var(--L1)',skip:skipL0,dur:pace==='intensif'?'1 mgg':pace==='santai'?'4 mgg':'2–3 mgg'},
    {n:'1',name:'Fondasi Teknis',c:'var(--L1)',skip:false,dur:pace==='intensif'?'4 mgg':pace==='santai'?'12 mgg':'6–8 mgg'},
    {n:'2',name:'Kriptografi & Post-Quantum',c:'var(--L1)',skip:false,dur:pace==='intensif'?'3 mgg':pace==='santai'?'8 mgg':'4–6 mgg'},
    {n:'3',name:'Serangan & Pertahanan',c:'var(--L2)',skip:false,dur:pace==='intensif'?'5 mgg':pace==='santai'?'14 mgg':'8–10 mgg'},
    {n:'4',name:'Infrastruktur & Cloud',c:'var(--L2)',skip:false,dur:pace==='intensif'?'4 mgg':pace==='santai'?'10 mgg':'6–8 mgg'},
    {n:'5',name:'Governance, Risk & Regulasi',c:'var(--L3)',skip:track==='red' && !grcPriority,dur:pace==='intensif'?'3 mgg':pace==='santai'?'8 mgg':'4–6 mgg'},
    {n:'6',name:'SOC & Operasi Keamanan',c:'var(--L3)',skip:track==='grc' && !urgent,dur:pace==='intensif'?'4 mgg':pace==='santai'?'10 mgg':'6–8 mgg'},
    {n:'7',name:'AI Security & Agentic AI',c:'var(--L3)',skip:!aiPriority && urgent && track==='grc',dur:pace==='intensif'?'3 mgg':pace==='santai'?'8 mgg':'4–6 mgg'},
    {n:'8',name:'Security Communication',c:'var(--L2)',skip:false,dur:pace==='intensif'?'2 mgg':pace==='santai'?'5 mgg':'3–4 mgg'},
    {n:'9',name:'Spesialisasi & Karier',c:'var(--L4)',skip:false,dur:pace==='intensif'?'12 mgg':'6–12 bln'},
  ];

  const startIdx = phases.findIndex(p=>!p.skip);

  return {prof, phases, paceLabel, aiPriority, grcPriority, needComm, urgent, isIT, startIdx};
}

function showResult(){
  const qArea = document.getElementById('qArea');
  const rArea = document.getElementById('rArea');
  if (!qArea || !rArea) return;

  qArea.style.display = 'none';
  rArea.style.display = 'block';

  const {prof, phases, paceLabel, aiPriority, grcPriority, needComm, urgent, isIT, startIdx} = calcProfile();

  const notes = [];
  if(isIT) notes.push('✓ Background IT kamu memungkinkan melewati beberapa fase awal');
  if(aiPriority) notes.push('→ Fase AI Security diprioritaskan dalam jalurmu');
  if(grcPriority) notes.push('📋 Fase GRC & Regulasi diprioritaskan berdasarkan konteks kerjamu');
  if(needComm) notes.push('💬 Security Communication direkomendasikan sebagai fokus tambahan');
  if(urgent) notes.push('⚡ Mode cepat: fokus pada topik MUST terlebih dahulu');

  rArea.innerHTML = `
    <div class="result-card on" style="border-color:${prof.color}">
      <div class="res-top">
        <div class="res-emoji">${prof.emoji}</div>
        <div>
          <div class="res-badge" style="border-color:${prof.color};color:${prof.color}">${prof.badge}</div>
          <div class="res-name">${prof.name}</div>
          <div class="res-desc">${prof.desc}</div>
          <div class="res-pace">Tempo: <strong>${paceLabel}</strong></div>
          ${notes.length ? `<div class="res-notes">${notes.map(n=>`<div class="res-note">${n}</div>`).join('')}</div>` : ''}
        </div>
      </div>

      <div class="res-path-title">Learning Path Personalisasi Kamu</div>
      <div class="rp-list">
        ${phases.map((p,i)=>`
          <div class="rp-row ${p.skip?'skip':''}">
            <div class="rp-n" style="color:${p.c};border-color:${p.c}">${p.n}</div>
            <div class="rp-name">${p.name}</div>
            <div class="rp-dur">${p.skip ? 'Dapat dilewati' : p.dur}</div>
            ${p.skip
              ? `<span class="rp-tag" style="border-color:var(--text2);color:var(--text2)">SKIP</span>`
              : i===startIdx
                ? `<span class="rp-tag" style="border-color:${p.c};color:${p.c}">MULAI SINI</span>`
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
    c.classList.toggle('on', i===0);
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

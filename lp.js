const BACKGROUNDS = [
  {
    id:'nonit',
    label:'Non-IT Beginner',
    desc:'Belum punya fondasi teknis yang kuat',
    forcePrep:true
  },
  {
    id:'student',
    label:'Student / Fresh Grad',
    desc:'Masih membangun fondasi dan portfolio',
    forcePrep:true
  },
  {
    id:'dev',
    label:'IT / Developer',
    desc:'Sudah akrab dengan coding dan sistem',
    forcePrep:false
  },
  {
    id:'infra',
    label:'IT Ops / Infra / Network',
    desc:'Lebih dekat ke jaringan, sistem, dan operasi',
    forcePrep:false
  },
  {
    id:'biz',
    label:'Business / Management / Compliance',
    desc:'Fokus pada tata kelola, risiko, dan strategi',
    forcePrep:true
  }
];

const PACES = [
  {id:'santai', label:'Santai (<5 jam / minggu)', factor:1.5},
  {id:'normal', label:'Normal (5–15 jam / minggu)', factor:1.0},
  {id:'intensif', label:'Intensif (15+ jam / minggu)', factor:0.75}
];

const PHASES = {
  p0:{
    id:'p0',
    n:'0',
    level:'Level Dasar',
    title:'Pra-Fondasi: Literasi Digital',
    base:[2,4],
    desc:'Membangun literasi digital, rasa percaya diri, dan bahasa dasar cybersecurity.',
    modules:['Literasi Komputer & Internet','Jaringan Internet Dasar','Mindset & Ekosistem Keamanan'],
    outcome:'Paham konsep dasar komputer, internet, dan keamanan sebelum masuk ke fondasi teknis.'
  },
  p1:{
    id:'p1',
    n:'1',
    level:'Level Dasar',
    title:'Fondasi Teknis',
    base:[6,8],
    desc:'Membangun pondasi Linux, jaringan, scripting, konsep keamanan, dan dasar web.',
    modules:['Sistem Operasi Linux','Jaringan Komputer','Python & Bash Scripting','Konsep Keamanan Inti','Database & Web Dasar'],
    outcome:'Siap belajar teknis dengan bahasa, tools, dan fondasi yang benar.'
  },
  p2:{
    id:'p2',
    n:'2',
    level:'Level Dasar',
    title:'Kriptografi & Post-Quantum',
    base:[5,7],
    desc:'Memahami kriptografi klasik, TLS/PKI, dan arah masa depan kriptografi modern.',
    modules:['Kriptografi Klasik','PKI, TLS & Sertifikat','Post-Quantum Cryptography (PQC)','Autentikasi & Token Modern'],
    outcome:'Paham cara kerja perlindungan data, identitas, sertifikat, dan transisi menuju PQC.'
  },
  p3:{
    id:'p3',
    n:'3',
    level:'Level Menengah',
    title:'Serangan & Pertahanan',
    base:[8,10],
    desc:'Memahami teknik serangan utama sekaligus dasar pertahanannya.',
    modules:['Malware & Ancaman Modern','Social Engineering & AI-Powered Attacks','Serangan & Pertahanan Jaringan','Web App Security — OWASP Top 10','Vulnerability Assessment'],
    outcome:'Mampu memahami attack surface, pola serangan, dan kontrol mitigasi yang relevan.'
  },
  p4:{
    id:'p4',
    n:'4',
    level:'Level Menengah',
    title:'Infrastruktur & Cloud',
    base:[6,8],
    desc:'Mengamankan sistem, cloud, container, dan identitas perusahaan modern.',
    modules:['Hardening Sistem Operasi','Cloud Security Dasar','Container & DevSecOps','Active Directory & IAM Enterprise'],
    outcome:'Paham keamanan sistem nyata di lingkungan server, cloud, dan pipeline modern.'
  },
  p5:{
    id:'p5',
    n:'5',
    level:'Level Menengah',
    title:'Security Communication',
    base:[3,4],
    desc:'Membangun kemampuan komunikasi keamanan kepada stakeholder teknis maupun non-teknis.',
    modules:['Security Report Writing','Komunikasi Risiko kepada Stakeholder','Kolaborasi & Security Culture','Career Communication & Personal Branding'],
    outcome:'Mampu menjelaskan risiko, menulis laporan, dan mengkomunikasikan security dengan lebih efektif.'
  },
  p6:{
    id:'p6',
    n:'6',
    level:'Level Tinggi',
    title:'Governance, Risk & Compliance',
    base:[5,7],
    desc:'Mendalami risiko, kepatuhan, regulasi Indonesia/global, dan governance keamanan.',
    modules:['Manajemen Risiko','ISO/IEC 27001:2022','UU ITE & UU PDP Indonesia','GDPR & Privasi Data Global','PCI DSS v4.0 & HIPAA','Regulasi AI & ISO 42001'],
    outcome:'Mampu memetakan kontrol, risiko, dan kepatuhan ke konteks organisasi nyata.'
  },
  p7:{
    id:'p7',
    n:'7',
    level:'Level Tinggi',
    title:'SOC & Operasi Keamanan',
    base:[6,8],
    desc:'Membangun kapabilitas monitoring, deteksi, IR, forensic, dan threat hunting.',
    modules:['SIEM & Log Management','Incident Response & Playbook','Digital Forensics Dasar','Threat Intelligence & Hunting','AI-Assisted SOC Operations'],
    outcome:'Siap masuk jalur SOC, IR, DFIR, dan operasi keamanan modern.'
  },
  p8:{
    id:'p8',
    n:'8',
    level:'Level Tinggi',
    title:'AI Security & Agentic AI',
    base:[4,6],
    desc:'Mengamankan sistem AI, LLM, agentic workflows, dan infrastruktur AI.',
    modules:['OWASP LLM Top 10 & AI Threats','Agentic AI Security','Model Security & Data Poisoning','AI Governance & Regulasi','Securing AI Infrastructure'],
    outcome:'Memahami risiko AI modern dan kontrol keamanan yang relevan secara praktis.'
  },
  p9:{
    id:'p9',
    n:'9',
    level:'Level Ahli / Spesialis',
    title:'Spesialisasi & Karier',
    base:[12,20],
    desc:'Fase spesialisasi untuk mengubah fondasi menjadi jalur karier yang nyata.',
    modules:['Red Team / Penetration Testing','Blue Team / SOC Analyst','AI Security Engineer','Cloud Security Engineer','Application Security (AppSec)','GRC / Compliance Analyst'],
    outcome:'Mulai fokus ke jalur karier target melalui portfolio, sertifikasi, dan proyek nyata.'
  }
};

const CAREERS = {
  pentest:{
    id:'pentest',
    color:'#f43f5e',
    icon:'🔴',
    title:'Penetration Tester',
    subtitle:'Ethical Hacker / Red Teamer',
    demand:'Stabil Tinggi',
    desc:'Mensimulasikan serangan untuk menemukan kelemahan sebelum attacker nyata. Peran paling ikonik dengan salary sangat kompetitif.',
    alt:['appsec','dfir'],
    priorities:['Web App Security — OWASP Top 10','Serangan & Pertahanan Jaringan','Vulnerability Assessment'],
    basePhases:['p1','p2','p3','p4','p5','p9'],
    p9:[20,28],
    focus:{
      p1:['Sistem Operasi Linux','Jaringan Komputer','Python & Bash Scripting'],
      p2:['Kriptografi Klasik','PKI, TLS & Sertifikat'],
      p3:['Web App Security — OWASP Top 10','Serangan & Pertahanan Jaringan','Vulnerability Assessment'],
      p4:['Hardening Sistem Operasi','Active Directory & IAM Enterprise'],
      p5:['Security Report Writing','Komunikasi Risiko kepada Stakeholder'],
      p9:['Red Team / Penetration Testing']
    },
    certs:['OSCP','PNPT','CEH','eJPT']
  },
  soc:{
    id:'soc',
    color:'#38bdf8',
    icon:'🔵',
    title:'SOC Analyst',
    subtitle:'Security Operations Center Analyst',
    demand:'Sangat Tinggi',
    desc:'Memantau, mendeteksi, dan merespons insiden. Posisi sangat banyak tersedia dan cocok untuk jalur awal blue team.',
    alt:['dfir','cti'],
    priorities:['SIEM & Log Management','Incident Response & Playbook','Threat Intelligence & Hunting'],
    basePhases:['p1','p2','p3','p4','p5','p7','p9'],
    p9:[12,18],
    focus:{
      p1:['Sistem Operasi Linux','Jaringan Komputer','Konsep Keamanan Inti'],
      p2:['Autentikasi & Token Modern','PKI, TLS & Sertifikat'],
      p3:['Malware & Ancaman Modern','Social Engineering & AI-Powered Attacks','Serangan & Pertahanan Jaringan'],
      p4:['Hardening Sistem Operasi','Cloud Security Dasar'],
      p5:['Security Report Writing','Komunikasi Risiko kepada Stakeholder'],
      p7:['SIEM & Log Management','Incident Response & Playbook','Threat Intelligence & Hunting','AI-Assisted SOC Operations'],
      p9:['Blue Team / SOC Analyst']
    },
    certs:['CySA+','BTL1','Splunk Core','SC-200']
  },
  ai_sec:{
    id:'ai_sec',
    color:'#f43f5e',
    icon:'🤖',
    title:'AI Security Engineer',
    subtitle:'AI Red Teamer / AI Security Specialist',
    demand:'Paling Dicari',
    desc:'Jalur paling langka dan paling dicari untuk menguji dan mengamankan sistem LLM, agentic AI, dan AI infrastructure.',
    alt:['appsec','devsecops'],
    priorities:['OWASP LLM Top 10 & AI Threats','Agentic AI Security','Model Security & Data Poisoning'],
    basePhases:['p1','p2','p3','p4','p6','p8','p9'],
    p9:[18,28],
    focus:{
      p1:['Python & Bash Scripting','Database & Web Dasar','Konsep Keamanan Inti'],
      p2:['Kriptografi Klasik','Autentikasi & Token Modern','Post-Quantum Cryptography (PQC)'],
      p3:['Web App Security — OWASP Top 10','Social Engineering & AI-Powered Attacks','Malware & Ancaman Modern'],
      p4:['Cloud Security Dasar','Container & DevSecOps'],
      p6:['Regulasi AI & ISO 42001','Manajemen Risiko'],
      p8:['OWASP LLM Top 10 & AI Threats','Agentic AI Security','Model Security & Data Poisoning','AI Governance & Regulasi','Securing AI Infrastructure'],
      p9:['AI Security Engineer']
    },
    certs:['OSAI (OffSec)','CAISP','ISO 42001 LA','CISSP']
  },
  cloud:{
    id:'cloud',
    color:'#a855f7',
    icon:'🟣',
    title:'Cloud Security Engineer',
    subtitle:'Cloud Security Architect',
    demand:'Sangat Tinggi',
    desc:'Merancang dan mengamankan infrastruktur cloud. Sangat relevan untuk organisasi modern dan workloads AI.',
    alt:['devsecops','soc'],
    priorities:['Cloud Security Dasar','Hardening Sistem Operasi','IAM & Zero Trust mindset'],
    basePhases:['p1','p2','p4','p5','p6','p9'],
    p9:[16,24],
    focus:{
      p1:['Sistem Operasi Linux','Jaringan Komputer','Python & Bash Scripting'],
      p2:['Autentikasi & Token Modern','PKI, TLS & Sertifikat'],
      p4:['Hardening Sistem Operasi','Cloud Security Dasar','Container & DevSecOps','Active Directory & IAM Enterprise'],
      p5:['Komunikasi Risiko kepada Stakeholder'],
      p6:['Manajemen Risiko','ISO/IEC 27001:2022'],
      p9:['Cloud Security Engineer']
    },
    certs:['AWS Security Spec','CCSP','CCSK','AZ-500']
  },
  appsec:{
    id:'appsec',
    color:'#22c55e',
    icon:'🟢',
    title:'AppSec Engineer',
    subtitle:'Application Security Specialist',
    demand:'Tinggi',
    desc:'Memastikan aplikasi aman sejak awal dan berkolaborasi erat dengan developer sepanjang SDLC.',
    alt:['devsecops','pentest'],
    priorities:['Web App Security — OWASP Top 10','Database & Web Dasar','Threat Modeling mindset'],
    basePhases:['p1','p2','p3','p4','p5','p9'],
    p9:[16,24],
    focus:{
      p1:['Database & Web Dasar','Python & Bash Scripting','Konsep Keamanan Inti'],
      p2:['Autentikasi & Token Modern','Kriptografi Klasik'],
      p3:['Web App Security — OWASP Top 10','Vulnerability Assessment'],
      p4:['Container & DevSecOps','Cloud Security Dasar'],
      p5:['Security Report Writing','Komunikasi Risiko kepada Stakeholder'],
      p9:['Application Security (AppSec)']
    },
    certs:['GWEB','eWPT','CSSLP','OSWE']
  },
  grc:{
    id:'grc',
    color:'#ec4899',
    icon:'⚖️',
    title:'GRC Analyst',
    subtitle:'Governance, Risk & Compliance',
    demand:'Tinggi & Tumbuh',
    desc:'Memastikan organisasi memenuhi regulasi, memahami risiko, dan membangun kontrol tata kelola yang tepat.',
    alt:['architect','soc'],
    priorities:['Manajemen Risiko','ISO/IEC 27001:2022','UU ITE & UU PDP Indonesia'],
    basePhases:['p0','p1','p5','p6','p9'],
    p9:[12,20],
    focus:{
      p0:['Mindset & Ekosistem Keamanan'],
      p1:['Konsep Keamanan Inti','Database & Web Dasar'],
      p5:['Komunikasi Risiko kepada Stakeholder','Security Report Writing','Kolaborasi & Security Culture'],
      p6:['Manajemen Risiko','ISO/IEC 27001:2022','UU ITE & UU PDP Indonesia','GDPR & Privasi Data Global','Regulasi AI & ISO 42001'],
      p9:['GRC / Compliance Analyst']
    },
    certs:['CISM','CRISC','ISO 27001 LA','ISO 42001']
  },
  dfir:{
    id:'dfir',
    color:'#f97316',
    icon:'🔍',
    title:'DFIR Investigator',
    subtitle:'Digital Forensics & Incident Response',
    demand:'Stabil',
    desc:'Investigasi insiden siber dan pengumpulan bukti digital. Relevan untuk organisasi yang butuh respon insiden serius.',
    alt:['soc','cti'],
    priorities:['Incident Response & Playbook','Digital Forensics Dasar','Malware & Ancaman Modern'],
    basePhases:['p1','p2','p3','p4','p5','p7','p9'],
    p9:[16,24],
    focus:{
      p1:['Sistem Operasi Linux','Jaringan Komputer','Python & Bash Scripting'],
      p2:['Kriptografi Klasik','PKI, TLS & Sertifikat'],
      p3:['Malware & Ancaman Modern','Serangan & Pertahanan Jaringan'],
      p4:['Hardening Sistem Operasi','Cloud Security Dasar'],
      p5:['Security Report Writing'],
      p7:['Incident Response & Playbook','Digital Forensics Dasar','SIEM & Log Management'],
      p9:['Blue Team / SOC Analyst']
    },
    certs:['GCFE','GCFA','EnCE','FOR508']
  },
  cti:{
    id:'cti',
    color:'#eab308',
    icon:'🧠',
    title:'Threat Intelligence Analyst',
    subtitle:'Cyber Threat Intelligence (CTI)',
    demand:'Krisis Global',
    desc:'Menganalisis ancaman, threat actor, TTP, dan memberikan konteks intelijen untuk keputusan pertahanan.',
    alt:['soc','dfir'],
    priorities:['Threat Intelligence & Hunting','MITRE ATT&CK mindset','Malware & Ancaman Modern'],
    basePhases:['p1','p2','p3','p5','p7','p9'],
    p9:[16,24],
    focus:{
      p1:['Jaringan Komputer','Konsep Keamanan Inti'],
      p2:['Kriptografi Klasik'],
      p3:['Malware & Ancaman Modern','Social Engineering & AI-Powered Attacks','Serangan & Pertahanan Jaringan'],
      p5:['Security Report Writing'],
      p7:['Threat Intelligence & Hunting','SIEM & Log Management','Digital Forensics Dasar'],
      p9:['Blue Team / SOC Analyst']
    },
    certs:['GCTI','GCTIA','CTI Analyst','FOR578']
  },
  devsecops:{
    id:'devsecops',
    color:'#06b6d4',
    icon:'🏗️',
    title:'DevSecOps Engineer',
    subtitle:'Security in DevOps / Platform Security',
    demand:'Sangat Langka',
    desc:'Mengintegrasikan security ke seluruh pipeline development dan deployment, dari code sampai production.',
    alt:['cloud','appsec'],
    priorities:['Container & DevSecOps','Cloud Security Dasar','Python & Bash Scripting'],
    basePhases:['p1','p2','p4','p5','p9'],
    p9:[16,24],
    focus:{
      p1:['Python & Bash Scripting','Sistem Operasi Linux','Database & Web Dasar'],
      p2:['Autentikasi & Token Modern','PKI, TLS & Sertifikat'],
      p4:['Container & DevSecOps','Cloud Security Dasar','Hardening Sistem Operasi'],
      p5:['Komunikasi Risiko kepada Stakeholder','Career Communication & Personal Branding'],
      p9:['Cloud Security Engineer','Application Security (AppSec)']
    },
    certs:['AWS DevOps Pro','CKS (Kubernetes)','CSSLP','Checkov Certified']
  },
  architect:{
    id:'architect',
    color:'#8b5cf6',
    icon:'🏛️',
    title:'Security Architect / CISO',
    subtitle:'Senior Leadership Track',
    demand:'Premium',
    desc:'Merancang strategi keamanan menyeluruh. Ini bukan role entry-level, tetapi arah jangka panjang setelah pengalaman lintas domain.',
    alt:['grc','cloud','appsec'],
    priorities:['Manajemen Risiko','Security Communication','Cloud Security Dasar'],
    basePhases:['p0','p1','p3','p4','p5','p6','p7','p8','p9'],
    p9:[104,156],
    focus:{
      p0:['Mindset & Ekosistem Keamanan'],
      p1:['Konsep Keamanan Inti','Jaringan Komputer','Sistem Operasi Linux'],
      p3:['Malware & Ancaman Modern','Web App Security — OWASP Top 10'],
      p4:['Cloud Security Dasar','Active Directory & IAM Enterprise'],
      p5:['Komunikasi Risiko kepada Stakeholder','Security Report Writing','Kolaborasi & Security Culture'],
      p6:['Manajemen Risiko','ISO/IEC 27001:2022','Regulasi AI & ISO 42001'],
      p7:['SIEM & Log Management','Incident Response & Playbook'],
      p8:['AI Governance & Regulasi','Securing AI Infrastructure'],
      p9:['GRC / Compliance Analyst','Cloud Security Engineer','Application Security (AppSec)']
    },
    certs:['CISSP','CISM','SABSA','TOGAF+Sec']
  }
};

const state = {
  career:'soc',
  bg:'student',
  pace:'normal',
  source:'manual'
};

function normalizeCareerId(career){
  const aliases = {
    cloud_sec:'cloud'
  };
  return aliases[career] || career;
}

function normalizeBgId(bg){
  const aliases = {
    bg_it:'dev',
    bg_biz:'biz',
    bg_academic:'student',
    bg_fresh:'student'
  };
  return aliases[bg] || bg;
}

function toTitle(str){
  return str.replace(/_/g,' ').replace(/\b\w/g, s => s.toUpperCase());
}

function formatRange(min, max, unit){
  if (min === max) return `${min} ${unit}`;
  return `${min}–${max} ${unit}`;
}

function weeksToMonths(weeks){
  return Math.max(1, Math.round(weeks / 4.3));
}

function paceObj(){
  return PACES.find(p => p.id === state.pace);
}

function bgObj(){
  return BACKGROUNDS.find(b => b.id === state.bg);
}

function careerObj(){
  return CAREERS[state.career];
}

function getCareerTitle(id){
  return CAREERS[id] ? CAREERS[id].title : id;
}

function estimatePhaseRange(phaseId, career){
  const phase = PHASES[phaseId];
  const base = phaseId === 'p9' ? career.p9 : phase.base;
  const factor = paceObj().factor;
  return {
    min: Math.max(1, Math.round(base[0] * factor)),
    max: Math.max(1, Math.round(base[1] * factor))
  };
}

function buildPath(){
  const career = careerObj();
  const bg = bgObj();

  let ids = [...career.basePhases];

  if (bg.forcePrep && !ids.includes('p0')) ids.unshift('p0');

  if (state.bg === 'biz' && state.career === 'grc') {
    ids = ['p0','p1','p5','p6','p9'];
  }

  if (state.bg === 'dev' && ['appsec','devsecops','ai_sec'].includes(state.career)) {
    ids = ids.filter(id => id !== 'p0');
  }

  if (state.bg === 'infra' && ['soc','cloud','dfir','cti'].includes(state.career)) {
    ids = ids.filter((id, idx) => !(id === 'p0' && idx === 0));
  }

  const uniqueIds = [...new Set(ids)];
  const startPhase = PHASES[uniqueIds[0]];
  const levelStart = startPhase.level;

  let priorities = [...career.priorities];
  if (bg.forcePrep && !priorities.includes('Literasi Komputer & Internet')) {
    priorities = ['Literasi Komputer & Internet', ...priorities].slice(0, 3);
  } else if (state.bg === 'biz' && state.career === 'grc') {
    priorities = ['Mindset & Ekosistem Keamanan','Manajemen Risiko','ISO/IEC 27001:2022'];
  } else {
    priorities = priorities.slice(0, 3);
  }

  const path = uniqueIds.map(id => {
    const phase = PHASES[id];
    const range = estimatePhaseRange(id, career);
    const focusModules = (career.focus[id] || []).slice(0, 4);
    return {
      ...phase,
      range,
      focusModules,
      reason: buildReason(career.id, id, state.bg)
    };
  });

  const totalMinWeeks = path.reduce((sum, item) => sum + item.range.min, 0);
  const totalMaxWeeks = path.reduce((sum, item) => sum + item.range.max, 0);
  const totalMinMonths = weeksToMonths(totalMinWeeks);
  const totalMaxMonths = weeksToMonths(totalMaxWeeks);

  const architectNote = state.career === 'architect'
    ? 'Catatan: Security Architect / CISO bukan role entry-level. Jalur ini adalah arah jangka panjang setelah pengalaman lintas domain 3–5+ tahun.'
    : '';

  return {
    career,
    bg,
    path,
    startPhase,
    levelStart,
    priorities,
    totalMinWeeks,
    totalMaxWeeks,
    totalMinMonths,
    totalMaxMonths,
    architectNote
  };
}

function buildReason(careerId, phaseId, bgId){
  const reasons = {
    p0:{
      default:'Dipakai untuk memperkuat literasi digital dan bahasa dasar sebelum masuk materi teknis.',
      biz:'Penting agar istilah teknis tidak terasa asing saat masuk ke governance atau strategi.'
    },
    p1:{
      default:'Fondasi teknis dipakai agar jalur spesialisasi tidak rapuh dan tetap bisa mengikuti istilah inti cybersecurity.',
      biz:'Diambil secukupnya agar paham konteks sistem, data, aplikasi, dan risiko bisnis.'
    },
    p2:{
      default:'Fase ini membangun pemahaman keamanan identitas, enkripsi, dan trust modern yang hampir selalu relevan.'
    },
    p3:{
      default:'Dipakai untuk memahami cara serangan bekerja, sehingga pertahanan, assessment, atau secure design jadi lebih tajam.'
    },
    p4:{
      default:'Dibutuhkan untuk memahami sistem nyata: server, cloud, IAM, container, dan infrastruktur modern.'
    },
    p5:{
      default:'Masuk agar kamu bisa menulis laporan, menjelaskan risiko, dan berkomunikasi lintas stakeholder.'
    },
    p6:{
      default:'Diprioritaskan untuk memahami governance, risk, compliance, dan regulasi yang memengaruhi keputusan keamanan.'
    },
    p7:{
      default:'Dipakai untuk membangun kemampuan operasi keamanan, monitoring, investigasi, dan response.'
    },
    p8:{
      default:'Fase ini mempercepat kesiapan menghadapi sistem AI modern, LLM, agentic workflows, dan governance AI.'
    },
    p9:{
      default:'Fase spesialisasi untuk mengubah fondasi menjadi jalur karier yang lebih nyata, portfolio, dan sertifikasi.'
    }
  };

  if (phaseId === 'p0' && bgId === 'biz') return reasons.p0.biz;
  if (phaseId === 'p1' && bgId === 'biz') return reasons.p1.biz;
  return (reasons[phaseId] && reasons[phaseId].default) || reasons.p1.default;
}

function renderCareerGrid(){
  const el = document.getElementById('careerGrid');
  if (!el) return;
  el.innerHTML = Object.values(CAREERS).map(c => `
    <button class="lpv-career-btn ${state.career === c.id ? 'active' : ''}"
            style="color:${c.color}"
            data-career="${c.id}">
      <div class="lpv-career-top">
        <span class="lpv-career-icon">${c.icon}</span>
        <span class="lpv-demand">${c.demand}</span>
      </div>
      <div class="lpv-career-title">${c.title}</div>
      <div class="lpv-career-sub">${c.subtitle}</div>
    </button>
  `).join('');

  el.querySelectorAll('[data-career]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.career = btn.dataset.career;
      renderAll();
      syncUrl();
    });
  });
}

function renderPills(containerId, items, stateKey){
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(item => `
    <button class="lpv-pill ${state[stateKey] === item.id ? 'active' : ''}" data-value="${item.id}">
      ${item.label}
    </button>
  `).join('');

  el.querySelectorAll('[data-value]').forEach(btn => {
    btn.addEventListener('click', () => {
      state[stateKey] = btn.dataset.value;
      renderAll();
      syncUrl();
    });
  });
}

function renderSummary(data){
  const el = document.getElementById('lpSummary');
  if (!el) return;

  const altHtml = data.career.alt.map(id => `<span>${getCareerTitle(id)}</span>`).join('');
  const certHtml = data.career.certs.map(c => `<span class="lpv-chip">${c}</span>`).join('');

  el.innerHTML = `
    <div class="lpv-summary">
      <div class="lpv-summary-top">
        <div class="lpv-hero" style="color:${data.career.color}">
          <div class="lpv-hero-icon">${data.career.icon}</div>
          <div>
            <div class="lpv-badge">${data.career.title}</div>
            <div class="lpv-title">${data.career.subtitle}</div>
            <div class="lpv-subtitle">Background: ${data.bg.label} · Tempo: ${paceObj().label}</div>
            <div class="lpv-desc">${data.career.desc}</div>
            ${data.architectNote ? `<div class="lpv-note-warn">${data.architectNote}</div>` : ''}
          </div>
        </div>

        <div class="lpv-meta">
          <div class="lpv-meta-card">
            <div class="lpv-meta-label">Rekomendasi Level Awal</div>
            <div class="lpv-meta-value">${data.levelStart}</div>
          </div>
          <div class="lpv-meta-card">
            <div class="lpv-meta-label">Fase Awal</div>
            <div class="lpv-meta-value">${data.startPhase.title}</div>
          </div>
          <div class="lpv-meta-card">
            <div class="lpv-meta-label">Estimasi Total</div>
            <div class="lpv-meta-value">${formatRange(data.totalMinMonths, data.totalMaxMonths, 'bulan')}<br><span style="color:var(--text2)">${formatRange(data.totalMinWeeks, data.totalMaxWeeks, 'minggu')}</span></div>
          </div>
          <div class="lpv-meta-card">
            <div class="lpv-meta-label">Demand Karier</div>
            <div class="lpv-meta-value">${data.career.demand}</div>
          </div>
        </div>
      </div>

      ${state.source === 'assessment' ? `
        <div class="lpv-assess-banner">
          Jalur ini dibuka dari hasil assessment kamu. Kamu tetap bisa mengganti karier, background, dan tempo belajar di halaman ini untuk membandingkan skenario lain.
        </div>
      ` : ''}

      <div class="lpv-grid">
        <div class="lpv-box">
          <div class="lpv-box-head">3 Topik Utama</div>
          <div class="lpv-chip-wrap">
            ${data.priorities.map(item => `<span class="lpv-chip">${item}</span>`).join('')}
          </div>
        </div>

        <div class="lpv-box">
          <div class="lpv-box-head">Karier Alternatif</div>
          <div class="lpv-alt">${altHtml}</div>
        </div>

        <div class="lpv-box">
          <div class="lpv-box-head">Kenapa Jalur Ini Cocok</div>
          <ul class="lpv-list">
            <li>Jalur dipilih berdasarkan kombinasi tujuan karier dan background yang kamu pilih.</li>
            <li>Roadmap tidak ditampilkan penuh; hanya fase dan modul yang paling relevan untuk jalur ini.</li>
            <li>Learning Path ini menjaga fondasi tetap cukup, sambil mempercepat masuk ke spesialisasi target.</li>
          </ul>
        </div>

        <div class="lpv-box">
          <div class="lpv-box-head">Sertifikasi yang Relevan</div>
          <div class="lpv-chip-wrap">${certHtml}</div>
        </div>
      </div>
    </div>
  `;
}

function renderTimeline(data){
  const el = document.getElementById('lpContent');
  if (!el) return;

  el.innerHTML = data.path.map(item => `
    <div class="lp-item">
      <div class="lp-dot" style="border-color:${PHASES[item.id].level.includes('Dasar') ? 'var(--L1)' : PHASES[item.id].level.includes('Menengah') ? 'var(--L2)' : PHASES[item.id].level.includes('Tinggi') ? 'var(--L3)' : 'var(--L4)'}">${item.n}</div>
      <div class="lp-body" style="border-left-color:${PHASES[item.id].level.includes('Dasar') ? 'var(--L1)' : PHASES[item.id].level.includes('Menengah') ? 'var(--L2)' : PHASES[item.id].level.includes('Tinggi') ? 'var(--L3)' : 'var(--L4)'}">
        <div class="lp-head">
          <div>
            <div class="lp-title">${item.title}</div>
            <div class="lpv-phase-reason">${item.reason}</div>
          </div>
          <div class="lp-dur">${formatRange(item.range.min, item.range.max, 'minggu')}</div>
        </div>

        <div class="lpv-phase-tags">
          <span class="lpv-phase-tag">${item.level}</span>
          <span class="lpv-phase-tag">${item.modules.length} modul tersedia</span>
          <span class="lpv-phase-tag">${item.focusModules.length} modul prioritas</span>
        </div>

        <div class="lp-modules">
          ${item.focusModules.map((mod, idx) => `
            <div class="lp-mod" style="border-left-color:${PHASES[item.id].level.includes('Dasar') ? 'var(--L1)' : PHASES[item.id].level.includes('Menengah') ? 'var(--L2)' : PHASES[item.id].level.includes('Tinggi') ? 'var(--L3)' : 'var(--L4)'}">
              <div class="lp-mod-week">Prioritas ${idx + 1}</div>
              <div class="lp-mod-title">${mod}</div>
              <ul class="lp-mod-topics">
                <li>Ambil modul ini lebih dulu pada fase ${item.n}.</li>
                <li>Gunakan roadmap untuk masuk ke materi dan resource detailnya.</li>
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="lp-out">${item.outcome}</div>
      </div>
    </div>
  `).join('');
}

function renderAll(){
  renderCareerGrid();
  renderPills('bgOptions', BACKGROUNDS, 'bg');
  renderPills('paceOptions', PACES, 'pace');
  const data = buildPath();
  renderSummary(data);
  renderTimeline(data);
}

function syncUrl(){
  const params = new URLSearchParams(window.location.search);
  params.set('career', state.career);
  params.set('bg', state.bg);
  params.set('pace', state.pace);
  if (state.source) params.set('source', state.source);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

function hydrateFromUrl(){
  const params = new URLSearchParams(window.location.search);
  const career = normalizeCareerId(params.get('career'));
  const bg = normalizeBgId(params.get('bg'));
  const pace = params.get('pace');
  const source = params.get('source');

  if (career && CAREERS[career]) state.career = career;
  if (bg && BACKGROUNDS.some(b => b.id === bg)) state.bg = bg;
  if (pace && PACES.some(p => p.id === pace)) state.pace = pace;
  if (source) state.source = source;
}

document.addEventListener('DOMContentLoaded', () => {
  hydrateFromUrl();
  renderAll();
});

// Assessment v3 — sharper recommendation engine with 10 careers
const CAREERS = {
  "pentest": {
    "c": "#f43f5e",
    "icon": "🔴",
    "t": "Penetration Tester",
    "en": "Ethical Hacker / Red Teamer",
    "desc": "Mensimulasikan serangan untuk menemukan kelemahan sebelum attacker nyata. Peran paling ikonik dengan salary sangat kompetitif.",
    "certs": [
      "OSCP",
      "PNPT",
      "CEH",
      "eJPT"
    ],
    "demand": "Stabil Tinggi"
  },
  "soc": {
    "c": "#38bdf8",
    "icon": "🔵",
    "t": "SOC Analyst",
    "en": "Security Operations Center Analyst",
    "desc": "Memantau, mendeteksi, dan merespons insiden. Posisi paling banyak tersedia di Indonesia. AI membantu tapi tidak menggantikan peran ini.",
    "certs": [
      "CySA+",
      "BTL1",
      "Splunk Core",
      "SC-200"
    ],
    "demand": "Sangat Tinggi"
  },
  "ai_sec": {
    "c": "#f43f5e",
    "icon": "🤖",
    "t": "AI Security Engineer",
    "en": "AI Red Teamer / AI Security Specialist",
    "desc": "Posisi paling langka dan paling dicari. Menguji dan mengamankan sistem LLM, agentic AI, dan AI infrastructure.",
    "certs": [
      "OSAI (OffSec)",
      "CAISP",
      "ISO 42001 LA",
      "CISSP"
    ],
    "demand": "Paling Dicari"
  },
  "cloud_sec": {
    "c": "#a855f7",
    "icon": "🟣",
    "t": "Cloud Security Engineer",
    "en": "Cloud Security Architect",
    "desc": "Merancang dan mengamankan infrastruktur cloud. Permintaan sangat tinggi seiring adopsi cloud dan AI cloud workloads.",
    "certs": [
      "AWS Security Spec",
      "CCSP",
      "CCSK",
      "AZ-500"
    ],
    "demand": "Sangat Tinggi"
  },
  "appsec": {
    "c": "#22c55e",
    "icon": "🟢",
    "t": "AppSec Engineer",
    "en": "Application Security Specialist",
    "desc": "Memastikan aplikasi aman sejak awal. Kolaborasi erat dengan developer. Makin kritis seiring maraknya penggunaan AI dalam development.",
    "certs": [
      "GWEB",
      "eWPT",
      "CSSLP",
      "OSWE"
    ],
    "demand": "Tinggi"
  },
  "grc": {
    "c": "#ec4899",
    "icon": "⚖️",
    "t": "GRC Analyst",
    "en": "Governance, Risk & Compliance",
    "desc": "Memastikan kepatuhan regulasi. Sangat relevan di era UU PDP dan regulasi AI. Peran makin strategis karena AI governance.",
    "certs": [
      "CISM",
      "CRISC",
      "ISO 27001 LA",
      "ISO 42001"
    ],
    "demand": "Tinggi & Tumbuh"
  },
  "dfir": {
    "c": "#f97316",
    "icon": "🔍",
    "t": "DFIR Investigator",
    "en": "Digital Forensics & Incident Response",
    "desc": "Investigasi insiden siber dan kumpulkan bukti digital. Permintaan meningkat karena kompleksitas serangan modern.",
    "certs": [
      "GCFE",
      "GCFA",
      "EnCE",
      "FOR508"
    ],
    "demand": "Stabil"
  },
  "cti": {
    "c": "#eab308",
    "icon": "🧠",
    "t": "Threat Intelligence Analyst",
    "en": "Cyber Threat Intelligence (CTI)",
    "desc": "Menganalisis ancaman dan profil threat actor. Salah satu peran yang paling sulit diisi secara global.",
    "certs": [
      "GCTI",
      "GCTIA",
      "CTI Analyst",
      "FOR578"
    ],
    "demand": "Krisis Global"
  },
  "devsecops": {
    "c": "#06b6d4",
    "icon": "🏗️",
    "t": "DevSecOps Engineer",
    "en": "Security in DevOps / Platform Security",
    "desc": "Mengintegrasikan security ke seluruh pipeline development dan deployment. Salah satu peran paling sulit diisi secara global.",
    "certs": [
      "AWS DevOps Pro",
      "CKS (Kubernetes)",
      "CSSLP",
      "Checkov Certified"
    ],
    "demand": "Sangat Langka"
  },
  "architect": {
    "c": "#8b5cf6",
    "icon": "🏛️",
    "t": "Security Architect / CISO",
    "en": "Senior Leadership Track",
    "desc": "Merancang strategi keamanan menyeluruh. Ini jalur senior 7–10 tahun pengalaman lintas domain, bukan titik masuk tercepat.",
    "certs": [
      "CISSP",
      "CISM",
      "SABSA",
      "TOGAF+Sec"
    ],
    "demand": "Premium"
  }
};
const PHASE_CATALOG = [
  {
    "id": 0,
    "name": "Pra-Fondasi: Literasi Digital",
    "level": "Dasar",
    "min": 2,
    "max": 4,
    "color": "var(--L1)"
  },
  {
    "id": 1,
    "name": "Fondasi Teknis",
    "level": "Dasar",
    "min": 6,
    "max": 8,
    "color": "var(--L1)"
  },
  {
    "id": 2,
    "name": "Kriptografi & Post-Quantum",
    "level": "Dasar",
    "min": 5,
    "max": 7,
    "color": "var(--L1)"
  },
  {
    "id": 3,
    "name": "Serangan & Pertahanan",
    "level": "Menengah",
    "min": 8,
    "max": 10,
    "color": "var(--L2)"
  },
  {
    "id": 4,
    "name": "Infrastruktur & Cloud",
    "level": "Menengah",
    "min": 6,
    "max": 8,
    "color": "var(--L2)"
  },
  {
    "id": 5,
    "name": "Security Communication",
    "level": "Menengah",
    "min": 3,
    "max": 4,
    "color": "var(--L2)"
  },
  {
    "id": 6,
    "name": "Governance, Risk & Compliance",
    "level": "Tinggi",
    "min": 5,
    "max": 7,
    "color": "var(--L3)"
  },
  {
    "id": 7,
    "name": "SOC & Operasi Keamanan",
    "level": "Tinggi",
    "min": 6,
    "max": 8,
    "color": "var(--L3)"
  },
  {
    "id": 8,
    "name": "AI Security & Agentic AI",
    "level": "Tinggi",
    "min": 4,
    "max": 6,
    "color": "var(--L3)"
  }
];
const SPECIALIZATION = {
  "pentest": {
    "min": 16,
    "max": 24
  },
  "soc": {
    "min": 12,
    "max": 20
  },
  "ai_sec": {
    "min": 20,
    "max": 32
  },
  "cloud_sec": {
    "min": 16,
    "max": 24
  },
  "appsec": {
    "min": 16,
    "max": 24
  },
  "grc": {
    "min": 12,
    "max": 20
  },
  "dfir": {
    "min": 16,
    "max": 24
  },
  "cti": {
    "min": 16,
    "max": 24
  },
  "devsecops": {
    "min": 16,
    "max": 24
  },
  "architect": {
    "min": 32,
    "max": 52
  }
};
const CAREER_TOPICS = {
  "pentest": [
    "Sistem Operasi Linux",
    "Jaringan Komputer",
    "Web App Security — OWASP Top 10"
  ],
  "soc": [
    "Jaringan Komputer",
    "Serangan & Pertahanan Jaringan",
    "SIEM & Log Management"
  ],
  "ai_sec": [
    "Python & Bash Scripting",
    "Web App Security — OWASP Top 10",
    "OWASP LLM Top 10 & AI Threats"
  ],
  "cloud_sec": [
    "Hardening Sistem Operasi",
    "Cloud Security Dasar",
    "Container & DevSecOps"
  ],
  "appsec": [
    "Python & Bash Scripting",
    "Database & Web Dasar",
    "Web App Security — OWASP Top 10"
  ],
  "grc": [
    "Security Communication",
    "Manajemen Risiko",
    "ISO/IEC 27001:2022"
  ],
  "dfir": [
    "Malware & Ancaman Modern",
    "Incident Response & Playbook",
    "Digital Forensics Dasar"
  ],
  "cti": [
    "Mindset & Ekosistem Keamanan",
    "Malware & Ancaman Modern",
    "Threat Intelligence & Hunting"
  ],
  "devsecops": [
    "Python & Bash Scripting",
    "Cloud Security Dasar",
    "Container & DevSecOps"
  ],
  "architect": [
    "Konsep Keamanan Inti",
    "Security Communication",
    "Governance, Risk & Compliance"
  ]
};
const FOUNDATION_TOPICS = {
  "0": [
    "Literasi Komputer & Internet",
    "Jaringan Internet Dasar",
    "Mindset & Ekosistem Keamanan"
  ],
  "1": [
    "Sistem Operasi Linux",
    "Jaringan Komputer",
    "Konsep Keamanan Inti"
  ],
  "2": [
    "Kriptografi Klasik",
    "PKI, TLS & Sertifikat",
    "Autentikasi & Token Modern"
  ],
  "6": [
    "Security Communication",
    "Manajemen Risiko",
    "ISO/IEC 27001:2022"
  ]
};
const Qs = [
  {
    "cat": "Latar Belakang",
    "text": "Apa latar belakang pendidikan atau pekerjaan kamu saat ini?",
    "hint": "Ini membantu menentukan seberapa jauh fondasi teknis kamu sudah terbentuk.",
    "opts": [
      {
        "em": "💻",
        "l": "IT / Tech",
        "s": "Developer, sysadmin, networking, DevOps, dsb.",
        "v": "bg_it",
        "score": {
          "pentest": 3,
          "soc": 3,
          "cloud_sec": 3,
          "appsec": 3,
          "devsecops": 3,
          "dfir": 2,
          "cti": 2,
          "ai_sec": 2,
          "architect": 1
        }
      },
      {
        "em": "🎓",
        "l": "Non-IT — Akademis",
        "s": "Mahasiswa non-IT, dosen, peneliti.",
        "v": "bg_academic",
        "score": {
          "ai_sec": 3,
          "cti": 2,
          "grc": 2,
          "architect": 1,
          "appsec": 1
        }
      },
      {
        "em": "💼",
        "l": "Non-IT — Profesional",
        "s": "Bisnis, hukum, keuangan, HR, compliance, dsb.",
        "v": "bg_biz",
        "score": {
          "grc": 4,
          "architect": 3,
          "cloud_sec": 1,
          "soc": 1
        }
      },
      {
        "em": "🌱",
        "l": "Belum berpengalaman kerja",
        "s": "Masih sekolah, fresh graduate, atau baru eksplorasi.",
        "v": "bg_fresh",
        "score": {
          "pentest": 1,
          "soc": 1,
          "appsec": 1,
          "ai_sec": 1
        }
      }
    ]
  },
  {
    "cat": "Kemampuan Teknis",
    "text": "Seberapa nyaman kamu dengan command line / terminal komputer?",
    "hint": "Terminal adalah alat penting untuk banyak jalur cybersecurity teknis.",
    "opts": [
      {
        "em": "🚀",
        "l": "Sangat nyaman",
        "s": "Sering pakai terminal untuk kerja harian.",
        "v": "cli_yes",
        "score": {
          "pentest": 3,
          "soc": 2,
          "cloud_sec": 3,
          "appsec": 2,
          "dfir": 2,
          "cti": 1,
          "devsecops": 3,
          "ai_sec": 2
        }
      },
      {
        "em": "🤔",
        "l": "Pernah pakai, tapi jarang",
        "s": "Tahu cara buka terminal, tapi tidak rutin.",
        "v": "cli_maybe",
        "score": {
          "pentest": 1,
          "soc": 1,
          "cloud_sec": 1,
          "appsec": 1,
          "dfir": 1,
          "devsecops": 1,
          "ai_sec": 1
        }
      },
      {
        "em": "😨",
        "l": "Belum pernah sama sekali",
        "s": "Terminal masih terasa asing.",
        "v": "cli_no",
        "score": {
          "grc": 2,
          "architect": 1
        }
      }
    ]
  },
  {
    "cat": "Pengetahuan Dasar",
    "text": "Apakah kamu sudah memahami konsep CIA Triad, IP address, dan cara kerja internet?",
    "hint": "Ini mengukur apakah kamu perlu mulai dari fondasi paling awal.",
    "opts": [
      {
        "em": "✅",
        "l": "Ya, saya paham semua itu",
        "s": "Sudah familiar dan cukup percaya diri menjelaskannya.",
        "v": "know_high",
        "score": {
          "pentest": 3,
          "soc": 3,
          "cloud_sec": 2,
          "appsec": 2,
          "dfir": 2,
          "cti": 2,
          "devsecops": 2,
          "ai_sec": 2,
          "architect": 2
        }
      },
      {
        "em": "🤷",
        "l": "Sebagian, tidak semuanya",
        "s": "Pernah dengar, tapi belum mantap.",
        "v": "know_mid",
        "score": {
          "pentest": 1,
          "soc": 1,
          "cloud_sec": 1,
          "appsec": 1,
          "dfir": 1,
          "cti": 1,
          "devsecops": 1,
          "ai_sec": 1,
          "grc": 1
        }
      },
      {
        "em": "❓",
        "l": "Belum, ini baru untuk saya",
        "s": "Istilah-istilah itu masih baru.",
        "v": "know_low",
        "score": {
          "grc": 1
        }
      }
    ]
  },
  {
    "cat": "Tujuan Belajar",
    "text": "Apa tujuan utamamu belajar cybersecurity?",
    "hint": "Tujuan yang berbeda biasanya berujung pada jalur karier yang berbeda.",
    "opts": [
      {
        "em": "💼",
        "l": "Berkarier atau pindah karier ke cybersecurity",
        "s": "Saya ingin punya jalur kerja yang jelas di bidang ini.",
        "v": "goal_career",
        "score": {
          "pentest": 2,
          "soc": 2,
          "cloud_sec": 2,
          "appsec": 2,
          "dfir": 2,
          "cti": 2,
          "devsecops": 2
        }
      },
      {
        "em": "🤖",
        "l": "Mengamankan sistem / produk AI yang saya bangun",
        "s": "Saya bekerja dekat dengan AI atau ingin fokus ke AI security.",
        "v": "goal_ai",
        "score": {
          "ai_sec": 5,
          "appsec": 2,
          "cloud_sec": 1,
          "devsecops": 1
        }
      },
      {
        "em": "🛡️",
        "l": "Melindungi bisnis atau organisasi saya",
        "s": "Saya ingin mengamankan operasi, data, dan risiko organisasi.",
        "v": "goal_biz",
        "score": {
          "grc": 4,
          "architect": 4,
          "cloud_sec": 2,
          "soc": 1
        }
      },
      {
        "em": "📚",
        "l": "Akademis, riset, atau mengajar",
        "s": "Saya tertarik di kajian, riset, dan pengajaran.",
        "v": "goal_academic",
        "score": {
          "cti": 4,
          "ai_sec": 3,
          "grc": 2
        }
      }
    ]
  },
  {
    "cat": "Minat Utama",
    "text": "Bidang mana yang paling membuatmu penasaran saat ini?",
    "hint": "Pilih yang paling menggambarkan rasa ingin tahu terkuatmu.",
    "opts": [
      {
        "em": "🔴",
        "l": "Simulasi serangan / ethical hacking",
        "s": "Saya suka mencari celah dan berpikir seperti attacker.",
        "v": "int_pentest",
        "score": {
          "pentest": 5,
          "appsec": 3,
          "dfir": 1
        }
      },
      {
        "em": "🔵",
        "l": "Monitoring, deteksi, dan respon insiden",
        "s": "Saya suka memantau sistem dan menangani alert.",
        "v": "int_soc",
        "score": {
          "soc": 5,
          "dfir": 3,
          "cti": 2
        }
      },
      {
        "em": "🤖",
        "l": "LLM, agentic AI, dan AI security",
        "s": "Saya paling tertarik ke keamanan AI modern.",
        "v": "int_ai",
        "score": {
          "ai_sec": 6,
          "appsec": 1,
          "devsecops": 1
        }
      },
      {
        "em": "☁️",
        "l": "Cloud, platform, dan infrastructure security",
        "s": "Saya tertarik mengamankan environment cloud dan platform.",
        "v": "int_cloud",
        "score": {
          "cloud_sec": 4,
          "devsecops": 4,
          "architect": 1
        }
      },
      {
        "em": "🟢",
        "l": "Secure coding / application security",
        "s": "Saya tertarik menjaga aplikasi aman sejak awal.",
        "v": "int_appsec",
        "score": {
          "appsec": 5,
          "devsecops": 4,
          "pentest": 1
        }
      },
      {
        "em": "⚖️",
        "l": "Audit, regulasi, risiko, dan kebijakan",
        "s": "Saya tertarik pada governance dan compliance.",
        "v": "int_grc",
        "score": {
          "grc": 6,
          "architect": 3
        }
      },
      {
        "em": "🔍",
        "l": "Forensik, malware, dan investigasi",
        "s": "Saya ingin menganalisis insiden dan bukti digital.",
        "v": "int_dfir",
        "score": {
          "dfir": 6,
          "cti": 3,
          "soc": 2
        }
      },
      {
        "em": "🏛️",
        "l": "Arsitektur dan strategi keamanan",
        "s": "Saya tertarik pada pandangan big picture dan desain menyeluruh.",
        "v": "int_arch",
        "score": {
          "architect": 5,
          "grc": 2,
          "cloud_sec": 2,
          "devsecops": 1
        }
      }
    ]
  },
  {
    "cat": "Aktivitas Harian",
    "text": "Kalau harus memilih aktivitas kerja harian, mana yang paling kamu nikmati?",
    "hint": "Ini membantu membedakan karier yang kelihatannya mirip tapi ritme kerjanya berbeda.",
    "opts": [
      {
        "em": "🧪",
        "l": "Eksperimen hands-on di lab",
        "s": "Saya suka mencoba tool, exploit, sample, atau lab teknis.",
        "v": "daily_lab",
        "score": {
          "pentest": 4,
          "dfir": 2,
          "appsec": 2
        }
      },
      {
        "em": "🚨",
        "l": "Monitoring alert dan insiden",
        "s": "Saya suka melihat sinyal, pola, dan respons cepat.",
        "v": "daily_monitor",
        "score": {
          "soc": 4,
          "dfir": 4,
          "cti": 2
        }
      },
      {
        "em": "⚙️",
        "l": "Membangun automation, pipeline, dan tooling",
        "s": "Saya suka integrasi sistem dan pengamanan otomatis.",
        "v": "daily_build",
        "score": {
          "devsecops": 5,
          "cloud_sec": 4,
          "appsec": 2,
          "ai_sec": 1
        }
      },
      {
        "em": "🧠",
        "l": "Riset, analisis, dan intelijen ancaman",
        "s": "Saya suka menganalisis aktor, pola serangan, dan tren.",
        "v": "daily_research",
        "score": {
          "cti": 5,
          "ai_sec": 3,
          "dfir": 1
        }
      },
      {
        "em": "📝",
        "l": "Dokumentasi, kebijakan, dan presentasi",
        "s": "Saya nyaman menyusun laporan dan menjelaskan risiko.",
        "v": "daily_docs",
        "score": {
          "grc": 4,
          "architect": 5,
          "soc": 1
        }
      },
      {
        "em": "💻",
        "l": "Review code, API, dan desain aplikasi",
        "s": "Saya suka menyentuh software secara dekat.",
        "v": "daily_code",
        "score": {
          "appsec": 5,
          "devsecops": 2,
          "pentest": 2
        }
      }
    ]
  },
  {
    "cat": "Waktu Belajar",
    "text": "Berapa jam per minggu yang bisa kamu dedikasikan secara konsisten?",
    "hint": "Jawab realistis — ini akan memengaruhi estimasi total durasi.",
    "opts": [
      {
        "em": "🔥",
        "l": "15 jam+ per minggu",
        "s": "Saya bisa belajar intensif dan konsisten.",
        "v": "time_high",
        "score": {}
      },
      {
        "em": "⏰",
        "l": "5–15 jam per minggu",
        "s": "Saya punya waktu rutin tapi tidak penuh.",
        "v": "time_mid",
        "score": {}
      },
      {
        "em": "🌙",
        "l": "Kurang dari 5 jam per minggu",
        "s": "Waktu saya sangat terbatas.",
        "v": "time_low",
        "score": {}
      }
    ]
  },
  {
    "cat": "Target Waktu",
    "text": "Kapan kamu ingin mulai menerapkan atau bekerja di bidang ini?",
    "hint": "Ini membantu sistem memilih jalur yang lebih agresif atau lebih landai.",
    "opts": [
      {
        "em": "⚡",
        "l": "Dalam 6 bulan",
        "s": "Saya butuh progres yang relatif cepat.",
        "v": "urgency_fast",
        "score": {
          "soc": 3,
          "grc": 3,
          "cloud_sec": 2,
          "pentest": 1,
          "appsec": 1,
          "devsecops": 1
        }
      },
      {
        "em": "📅",
        "l": "Dalam 1–2 tahun",
        "s": "Saya ingin berkembang stabil dengan fondasi kuat.",
        "v": "urgency_normal",
        "score": {}
      },
      {
        "em": "🌱",
        "l": "Tidak ada target waktu ketat",
        "s": "Saya rela menempuh jalur yang lebih panjang.",
        "v": "urgency_slow",
        "score": {
          "architect": 2,
          "cti": 1,
          "ai_sec": 1
        }
      }
    ]
  },
  {
    "cat": "AI & Teknologi",
    "text": "Apakah kamu sudah menggunakan atau membangun produk berbasis AI (ChatGPT, LLM, API AI, dsb.)?",
    "hint": "Pertanyaan ini penting untuk menilai apakah AI Security perlu diprioritaskan.",
    "opts": [
      {
        "em": "🤖",
        "l": "Ya, aktif memakai dan membangun dengan AI",
        "s": "Saya dekat dengan API AI, agent, automation, atau produk AI.",
        "v": "ai_high",
        "score": {
          "ai_sec": 5,
          "appsec": 2,
          "devsecops": 2,
          "cloud_sec": 1
        }
      },
      {
        "em": "👋",
        "l": "Pakai sebagai user, belum membangun",
        "s": "Saya sering menggunakan AI, tapi belum develop serius.",
        "v": "ai_mid",
        "score": {
          "ai_sec": 2
        }
      },
      {
        "em": "🙅",
        "l": "Belum atau sangat jarang",
        "s": "AI belum banyak saya sentuh.",
        "v": "ai_low",
        "score": {}
      }
    ]
  },
  {
    "cat": "Regulasi & Compliance",
    "text": "Apakah pekerjaan atau organisasimu berkaitan erat dengan data pribadi, keuangan, atau kesehatan?",
    "hint": "Ini menentukan apakah jalur governance dan compliance perlu diprioritaskan.",
    "opts": [
      {
        "em": "🏦",
        "l": "Ya — keuangan / fintech / perbankan",
        "s": "Banyak tuntutan kepatuhan dan risk management.",
        "v": "reg_finance",
        "score": {
          "grc": 4,
          "architect": 2,
          "cloud_sec": 1,
          "soc": 1
        }
      },
      {
        "em": "🏥",
        "l": "Ya — kesehatan / healthcare",
        "s": "Ada isu privasi, data sensitif, dan tata kelola.",
        "v": "reg_health",
        "score": {
          "grc": 4,
          "architect": 2,
          "cloud_sec": 1,
          "soc": 1
        }
      },
      {
        "em": "🏢",
        "l": "Ya — bisnis umum dengan data pelanggan",
        "s": "Privasi dan kepatuhan mulai relevan.",
        "v": "reg_general",
        "score": {
          "grc": 3,
          "architect": 2,
          "appsec": 1
        }
      },
      {
        "em": "🙅",
        "l": "Tidak, atau belum relevan sekarang",
        "s": "Belum ada konteks regulasi spesifik.",
        "v": "reg_none",
        "score": {}
      }
    ]
  },
  {
    "cat": "Gaya Belajar",
    "text": "Bagaimana cara belajar yang paling efektif untukmu?",
    "hint": "Ini membantu memperkaya konteks, meski bukan penentu tunggal karier.",
    "opts": [
      {
        "em": "🎯",
        "l": "Langsung praktik dan hands-on",
        "s": "Saya belajar paling cepat saat mencoba sendiri.",
        "v": "style_hands",
        "score": {
          "pentest": 2,
          "soc": 1,
          "dfir": 1,
          "appsec": 1
        }
      },
      {
        "em": "📖",
        "l": "Baca teori dulu, baru praktik",
        "s": "Saya butuh konsep yang rapi sebelum mencoba.",
        "v": "style_theory",
        "score": {
          "grc": 2,
          "cti": 2,
          "architect": 1,
          "ai_sec": 1
        }
      },
      {
        "em": "🎥",
        "l": "Video dan kelas terstruktur",
        "s": "Saya paling nyaman dengan penjelasan bertahap.",
        "v": "style_video",
        "score": {
          "soc": 1,
          "cloud_sec": 1
        }
      }
    ]
  },
  {
    "cat": "Komitmen",
    "text": "Seberapa serius kamu berkomitmen menyelesaikan program belajar ini?",
    "hint": "Jujurlah — ini hanya untuk membantu rekomendasi yang realistis.",
    "opts": [
      {
        "em": "🏆",
        "l": "Sangat serius, ini prioritas utama",
        "s": "Saya siap konsisten dan berinvestasi waktu.",
        "v": "commit_high",
        "score": {
          "pentest": 1,
          "soc": 1,
          "ai_sec": 1,
          "cloud_sec": 1,
          "appsec": 1,
          "grc": 1,
          "dfir": 1,
          "cti": 1,
          "devsecops": 1,
          "architect": 1
        }
      },
      {
        "em": "👌",
        "l": "Serius, tapi ada prioritas lain",
        "s": "Saya akan jalan konsisten, tapi tidak penuh waktu.",
        "v": "commit_mid",
        "score": {}
      },
      {
        "em": "🤷",
        "l": "Masih menjajaki",
        "s": "Saya ingin menguji kecocokan dulu.",
        "v": "commit_low",
        "score": {
          "grc": 1
        }
      }
    ]
  },
  {
    "cat": "Komunikasi",
    "text": "Apakah kamu nyaman menulis laporan teknis atau presentasi kepada non-teknis?",
    "hint": "Beberapa karier sangat diuntungkan oleh kekuatan komunikasi.",
    "opts": [
      {
        "em": "✍️",
        "l": "Ya, saya terbiasa menulis dan presentasi",
        "s": "Saya nyaman menjelaskan hal kompleks dengan sederhana.",
        "v": "comm_high",
        "score": {
          "grc": 4,
          "architect": 5,
          "cti": 2,
          "soc": 1
        }
      },
      {
        "em": "📝",
        "l": "Bisa, tapi perlu banyak latihan",
        "s": "Saya bisa, walau belum jadi kekuatan utama.",
        "v": "comm_mid",
        "score": {
          "grc": 2,
          "architect": 2
        }
      },
      {
        "em": "😓",
        "l": "Ini kelemahan saya",
        "s": "Saya jauh lebih nyaman dengan hal teknis.",
        "v": "comm_low",
        "score": {
          "pentest": 1,
          "dfir": 1,
          "appsec": 1,
          "devsecops": 1
        }
      }
    ]
  },
  {
    "cat": "Lingkungan Utama",
    "text": "Lingkungan atau aset mana yang paling ingin kamu amankan?",
    "hint": "Pilihan ini sangat membantu membedakan jalur teknis yang sering terlihat mirip.",
    "opts": [
      {
        "em": "🌍",
        "l": "Aplikasi web, API, dan software",
        "s": "Saya tertarik pada keamanan aplikasi dan logic bisnis.",
        "v": "env_web",
        "score": {
          "appsec": 5,
          "pentest": 3,
          "devsecops": 1
        }
      },
      {
        "em": "🖥️",
        "l": "Endpoint, jaringan, log, dan sistem operasi",
        "s": "Saya tertarik ke observabilitas dan pertahanan sistem.",
        "v": "env_ops",
        "score": {
          "soc": 4,
          "dfir": 4,
          "cti": 2
        }
      },
      {
        "em": "☁️",
        "l": "Cloud, container, CI/CD, dan platform",
        "s": "Saya tertarik pada keamanan infra modern.",
        "v": "env_cloud",
        "score": {
          "cloud_sec": 5,
          "devsecops": 5,
          "appsec": 1
        }
      },
      {
        "em": "📋",
        "l": "Data, privasi, governance, dan kepatuhan",
        "s": "Saya tertarik pada kontrol, audit, dan risiko.",
        "v": "env_data",
        "score": {
          "grc": 5,
          "architect": 3
        }
      },
      {
        "em": "🤖",
        "l": "LLM, agentic AI, dan AI workflow",
        "s": "Saya ingin fokus mengamankan sistem AI.",
        "v": "env_ai",
        "score": {
          "ai_sec": 6,
          "appsec": 1,
          "cloud_sec": 1
        }
      },
      {
        "em": "🏛️",
        "l": "Strategi enterprise lintas domain",
        "s": "Saya tertarik pada gambaran menyeluruh dan arah organisasi.",
        "v": "env_arch",
        "score": {
          "architect": 6,
          "grc": 2,
          "cloud_sec": 1,
          "soc": 1
        }
      }
    ]
  },
  {
    "cat": "Aspirasi Jangka Panjang",
    "text": "Apakah kamu tertarik pada jalur kepemimpinan dan strategi keamanan jangka panjang?",
    "hint": "Ini tidak harus jadi target awal, tapi bisa memengaruhi arah karier alternatifmu.",
    "opts": [
      {
        "em": "🏛️",
        "l": "Ya, saya tertarik ke arah arsitektur / leadership",
        "s": "Saya ingin berkembang ke desain strategi keamanan lintas domain.",
        "v": "lead_yes",
        "score": {
          "architect": 6,
          "grc": 2,
          "cloud_sec": 1
        }
      },
      {
        "em": "🧭",
        "l": "Mungkin nanti, tapi bukan fokus awal",
        "s": "Saya terbuka, tapi ingin kuat dulu secara fondasi.",
        "v": "lead_maybe",
        "score": {
          "architect": 3,
          "grc": 1
        }
      },
      {
        "em": "🛠️",
        "l": "Tidak, saya lebih suka jalur teknis hands-on",
        "s": "Saya lebih tertarik jadi spesialis teknis.",
        "v": "lead_no",
        "score": {
          "pentest": 1,
          "soc": 1,
          "ai_sec": 1,
          "cloud_sec": 1,
          "appsec": 1,
          "dfir": 1,
          "cti": 1,
          "devsecops": 1
        }
      }
    ]
  }
];

let answers = {};
let curQ = 0;

function careerKeys() {
  return Object.keys(CAREERS);
}

function addScore(bucket, scoreMap) {
  Object.entries(scoreMap || {}).forEach(([k, v]) => {
    bucket[k] = (bucket[k] || 0) + v;
  });
}

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
  setTimeout(()=>nextQ(qi),340);
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
  const fill = document.getElementById('pFill');
  const label = document.getElementById('pLabel');
  const pctEl = document.getElementById('pPct');
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = done ? `Selesai — ${Qs.length} pertanyaan dijawab` : `Pertanyaan ${curQ + 1} dari ${Qs.length}`;
  if (pctEl) pctEl.textContent = pct + '%';
}

function getAnswerValue(index) {
  return answers[index];
}

function getPace() {
  if (getAnswerValue(6) === 'time_high' && getAnswerValue(11) === 'commit_high') return 'intensif';
  if (getAnswerValue(6) === 'time_low' || getAnswerValue(11) === 'commit_low') return 'santai';
  return 'normal';
}

function getPaceLabel(pace) {
  return {
    intensif:'Intensif (~15 jam+/minggu)',
    normal:'Normal (5–15 jam/minggu)',
    santai:'Santai (<5 jam/minggu)'
  }[pace];
}

function monthRangeFromWeeks(minWeeks, maxWeeks) {
  const minMonths = Math.max(1, Math.ceil(minWeeks / 4.345));
  const maxMonths = Math.max(minMonths, Math.ceil(maxWeeks / 4.345));
  return {
    minWeeks: Math.round(minWeeks),
    maxWeeks: Math.round(maxWeeks),
    minMonths,
    maxMonths,
    label: minMonths === maxMonths ? `${minMonths} bulan` : `${minMonths}–${maxMonths} bulan`,
    weeksLabel: minWeeks === maxWeeks ? `${Math.round(minWeeks)} minggu` : `${Math.round(minWeeks)}–${Math.round(maxWeeks)} minggu`
  };
}

function computeScores() {
  const scores = {};
  careerKeys().forEach(k => scores[k] = 0);
  Qs.forEach((q, i) => {
    const picked = q.opts.find(o => o.v === answers[i]);
    if (picked) addScore(scores, picked.score);
  });

  const isIT = getAnswerValue(0) === 'bg_it';
  const strongBasics = getAnswerValue(1) === 'cli_yes' && getAnswerValue(2) === 'know_high';
  const commHigh = getAnswerValue(12) === 'comm_high';
  const strongRiskContext = ['reg_finance', 'reg_health', 'reg_general'].includes(getAnswerValue(9));
  if (!(isIT || strongBasics || commHigh || strongRiskContext)) {
    scores.architect -= 4;
  }

  return scores;
}

function sortedCareerKeys(scores) {
  return Object.entries(scores)
    .sort((a,b) => b[1] - a[1])
    .map(([k]) => k);
}

function determinePrimaryCareer() {
  const scores = computeScores();
  return sortedCareerKeys(scores)[0];
}

function determineCareerPair() {
  const scores = computeScores();
  const ranked = sortedCareerKeys(scores);
  let primaryKey = ranked[0];
  let altKey = ranked[1];

  const commHigh = getAnswerValue(12) === 'comm_high';
  const bizGoal = getAnswerValue(3) === 'goal_biz';
  const strongRiskContext = getAnswerValue(9) !== 'reg_none';
  const matureForArchitect = commHigh && (bizGoal || strongRiskContext);
  if (primaryKey === 'architect' && !matureForArchitect) {
    primaryKey = ranked.find(k => k !== 'architect') || 'grc';
    altKey = 'architect';
  }

  if (!altKey || altKey === primaryKey) {
    altKey = ranked.find(k => k !== primaryKey) || primaryKey;
  }

  return {scores, primaryKey, altKey};
}

function determineStart() {
  const bg = getAnswerValue(0);
  const cli = getAnswerValue(1);
  const know = getAnswerValue(2);
  const primary = determinePrimaryCareer();

  if ((primary === 'grc' || primary === 'architect') &&
      ['goal_biz','goal_academic'].includes(getAnswerValue(3)) &&
      ['comm_high','comm_mid'].includes(getAnswerValue(12)) &&
      getAnswerValue(9) !== 'reg_none') {
    return {level:'Tinggi', phaseId:6};
  }

  if (bg === 'bg_it' && cli === 'cli_yes' && know === 'know_high') {
    return {level:'Dasar', phaseId:2};
  }
  if ((bg === 'bg_it' && cli !== 'cli_no') || know === 'know_mid') {
    return {level:'Dasar', phaseId:1};
  }
  return {level:'Dasar', phaseId:0};
}

function buildPhasePlan(primaryKey, startPhaseId, pace) {
  const include = new Set(PHASE_CATALOG.map(p => p.id));

  if (primaryKey === 'grc') {
    include.delete(7);
    if (getAnswerValue(8) !== 'ai_high') include.delete(8);
  }
  if (primaryKey === 'architect') {
    if (getAnswerValue(8) === 'ai_low') include.delete(8);
  }
  if (primaryKey === 'pentest') {
    if (getAnswerValue(9) === 'reg_none') include.delete(6);
    if (getAnswerValue(8) !== 'ai_high') include.delete(8);
  }
  if (primaryKey === 'soc' || primaryKey === 'dfir' || primaryKey === 'cti') {
    if (getAnswerValue(8) !== 'ai_high') include.delete(8);
  }
  if (primaryKey === 'cloud_sec' || primaryKey === 'devsecops') {
    if (getAnswerValue(9) === 'reg_none') include.delete(6);
  }
  if (primaryKey === 'appsec') {
    if (getAnswerValue(8) !== 'ai_high') include.delete(8);
  }

  const phaseRows = [];
  let totalMin = 0;
  let totalMax = 0;

  PHASE_CATALOG.forEach(phase => {
    const skippedByStart = phase.id < startPhaseId;
    const skippedByTrack = !include.has(phase.id);
    const skip = skippedByStart || skippedByTrack;

    if (!skip) {
      let paceMin = phase.min;
      let paceMax = phase.max;
      if (pace === 'intensif') {
        paceMin *= 0.75;
        paceMax *= 0.80;
      } else if (pace === 'santai') {
        paceMin *= 1.55;
        paceMax *= 1.65;
      }
      totalMin += paceMin;
      totalMax += paceMax;
      phaseRows.push({
        id: phase.id,
        name: phase.name,
        color: phase.color,
        skip: false,
        dur: monthRangeFromWeeks(paceMin, paceMax).weeksLabel
      });
    } else {
      phaseRows.push({
        id: phase.id,
        name: phase.name,
        color: phase.color,
        skip: true,
        dur: 'Dapat dilewati'
      });
    }
  });

  const spec = SPECIALIZATION[primaryKey];
  let specMin = spec.min;
  let specMax = spec.max;
  if (pace === 'intensif') {
    specMin *= 0.80;
    specMax *= 0.85;
  } else if (pace === 'santai') {
    specMin *= 1.35;
    specMax *= 1.50;
  }

  totalMin += specMin;
  totalMax += specMax;

  phaseRows.push({
    id: 9,
    name: 'Spesialisasi & Karier',
    color: 'var(--L4)',
    skip: false,
    dur: monthRangeFromWeeks(specMin, specMax).weeksLabel
  });

  return {
    phaseRows,
    total: monthRangeFromWeeks(totalMin, totalMax)
  };
}

function buildTopTopics(startPhaseId, primaryKey) {
  const foundation = FOUNDATION_TOPICS[String(startPhaseId)] || [];
  const careerSpecific = CAREER_TOPICS[primaryKey] || [];
  const merged = [];
  [...foundation, ...careerSpecific].forEach(item => {
    if (!merged.includes(item)) merged.push(item);
  });
  return merged.slice(0, 3);
}

function buildNotes(primaryKey, altKey, startPhaseId, totalLabel) {
  const notes = [];
  if (startPhaseId === 0) notes.push('✓ Kamu disarankan membangun fondasi dari level paling dasar terlebih dahulu.');
  if (startPhaseId === 1) notes.push('→ Kamu bisa langsung masuk fondasi teknis tanpa terlalu lama di pra-fondasi.');
  if (startPhaseId === 2) notes.push('→ Fondasimu cukup baik, jadi kamu bisa mulai dari materi dasar lanjutan.');
  if (startPhaseId === 6) notes.push('📋 Karena konteksmu dekat dengan risiko/regulasi, jalur governance diprioritaskan lebih cepat.');
  if (primaryKey === 'architect') notes.push('🏛️ Jalur Security Architect / CISO adalah aspirasi jangka panjang, bukan target entry-level tercepat.');
  if (altKey === 'architect') notes.push('🧭 Security Architect / CISO cocok dijadikan arah jangka panjang setelah fondasi lintas domain terbentuk.');
  notes.push(`⏳ Dengan tempo belajarmu saat ini, estimasi total realistis berada di kisaran ${totalLabel}.`);
  return notes;
}

function calcProfile() {
  const {scores, primaryKey, altKey} = determineCareerPair();
  const pace = getPace();
  const paceLabel = getPaceLabel(pace);
  const start = determineStart();
  const phasePlan = buildPhasePlan(primaryKey, start.phaseId, pace);
  const topTopics = buildTopTopics(start.phaseId, primaryKey);
  const primary = CAREERS[primaryKey];
  const alternative = CAREERS[altKey];
  const notes = buildNotes(primaryKey, altKey, start.phaseId, phasePlan.total.label);

  return {
    primaryKey,
    altKey,
    primary,
    alternative,
    scores,
    paceLabel,
    startLevel: start.level,
    startPhaseId: start.phaseId,
    startPhaseName: [...PHASE_CATALOG, {id:9, name:'Spesialisasi & Karier'}].find(p => p.id === start.phaseId)?.name || 'Pra-Fondasi: Literasi Digital',
    topTopics,
    phasePlan,
    totalLabel: phasePlan.total.label,
    totalWeeksLabel: phasePlan.total.weeksLabel,
    paceId: pace,
    notes
  };
}

function mapCareerToLearningPath(primaryKey) {
  const map = {
    cloud_sec: 'cloud'
  };
  return map[primaryKey] || primaryKey;
}

function mapBackgroundToLearningPath(primaryKey) {
  const rawBg = answers[0];
  const cli = answers[1];
  const knowledge = answers[2];

  if (rawBg === 'bg_biz') return 'biz';

  if (rawBg === 'bg_it') {
    if (['soc', 'cloud', 'dfir', 'cti'].includes(mapCareerToLearningPath(primaryKey))) return 'infra';
    return 'dev';
  }

  if (rawBg === 'bg_academic' || rawBg === 'bg_fresh') {
    if (cli === 'cli_no' && knowledge === 'know_low') return 'nonit';
    return 'student';
  }

  return 'nonit';
}

function buildLearningPathUrl(profile) {
  const career = mapCareerToLearningPath(profile.primaryKey);
  const bg = mapBackgroundToLearningPath(profile.primaryKey);
  const pace = profile.paceId || 'normal';
  const params = new URLSearchParams({
    career,
    bg,
    pace,
    source: 'assessment'
  });
  return `lp.html?${params.toString()}`;
}

function renderCareerCard(label, career) {
  const certs = (career.certs || []).slice(0, 3);
  return `
    <div class="res-career-card">
      <div class="res-career-kicker">${label}</div>
      <div class="res-career-title" style="color:${career.c}">${career.icon} ${career.t}</div>
      <div class="res-career-sub">${career.en} · Demand: ${career.demand}</div>
      <div class="res-career-desc">${career.desc}</div>
      <div class="res-chips">${certs.map(cert => `<span class="res-chip">${cert}</span>`).join('')}</div>
    </div>`;
}

function showResult(){
  const qArea = document.getElementById('qArea');
  const rArea = document.getElementById('rArea');
  if (!qArea || !rArea) return;

  qArea.style.display = 'none';
  rArea.style.display = 'block';

  const profile = calcProfile();
  const learningPathUrl = buildLearningPathUrl(profile);

  rArea.innerHTML = `
    <div class="result-card on" style="border-color:${profile.primary.c}">
      <div class="res-top">
        <div class="res-emoji">${profile.primary.icon}</div>
        <div>
          <div class="res-badge" style="border-color:${profile.primary.c};color:${profile.primary.c}">Assessment v3 — hasil utama</div>
          <div class="res-name">${profile.primary.t}</div>
          <div class="res-desc">${profile.primary.desc}</div>
          <div class="res-pace">Tempo belajar: <strong>${profile.paceLabel}</strong></div>
          <div class="res-notes">${profile.notes.map(n => `<div class="res-note">${n}</div>`).join('')}</div>
        </div>
      </div>

      <div class="res-summary">
        <div class="res-box">
          <div class="res-box-label">Rekomendasi level awal</div>
          <div class="res-box-value"><strong>${profile.startLevel}</strong></div>
        </div>
        <div class="res-box">
          <div class="res-box-label">Fase awal</div>
          <div class="res-box-value"><strong>Fase ${profile.startPhaseId}</strong> — ${profile.startPhaseName}</div>
        </div>
        <div class="res-box">
          <div class="res-box-label">Estimasi total durasi</div>
          <div class="res-box-value"><strong>${profile.totalLabel}</strong><br>${profile.totalWeeksLabel}</div>
        </div>
        <div class="res-box">
          <div class="res-box-label">Karier alternatif</div>
          <div class="res-box-value"><strong>${profile.alternative.t}</strong></div>
        </div>
      </div>

      <div class="res-path-title">3 Topik Utama untuk Mulai</div>
      <div class="res-topics">
        ${profile.topTopics.map((topic, index) => `<div class="res-topic">${index + 1}. ${topic}</div>`).join('')}
      </div>

      <div class="res-path-title" style="margin-top:18px">Karier yang Paling Dekat dengan Profilmu</div>
      <div class="res-career-grid">
        ${renderCareerCard('Karier utama', profile.primary)}
        ${renderCareerCard('Karier alternatif', profile.alternative)}
      </div>

      <div class="res-path-title">Learning Path Personalisasi Kamu</div>
      <div class="rp-list">
        ${profile.phasePlan.phaseRows.map((p) => `
          <div class="rp-row ${p.skip?'skip':''}">
            <div class="rp-n" style="color:${p.color};border-color:${p.color}">${p.id}</div>
            <div class="rp-name">${p.name}</div>
            <div class="rp-dur">${p.dur}</div>
            ${p.skip
              ? `<span class="rp-tag" style="border-color:var(--text2);color:var(--text2)">SKIP</span>`
              : p.id === profile.startPhaseId
                ? `<span class="rp-tag" style="border-color:${p.color};color:${p.color}">MULAI SINI</span>`
                : ''
            }
          </div>`).join('')}
      </div>

      <div class="res-actions">
        <button class="btn btn-p" onclick="window.location.href='${learningPathUrl}'">Lihat Learning Path Saya →</button>
        <button class="btn btn-g" onclick="window.location.href='roadmap.html'">Lihat Roadmap Detail</button>
        <button class="btn btn-g" onclick="resetAssess()">↩ Ulangi</button>
      </div>
    </div>`;
}

function resetAssess(){
  answers = {};
  curQ = 0;
  const qArea = document.getElementById('qArea');
  const rArea = document.getElementById('rArea');
  if (qArea) qArea.style.display = 'block';
  if (rArea) rArea.style.display = 'none';
  document.querySelectorAll('.qcard').forEach((c,i)=>{
    c.classList.toggle('on', i===0);
    c.querySelectorAll('.q-opt').forEach(o=>o.classList.remove('sel'));
  });
  updProg();
}

document.addEventListener('DOMContentLoaded', () => {
  buildAssess();
  updProg();
});

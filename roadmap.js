// Roadmap Explorer — khusus halaman roadmap
// Konten roadmap dan resource diambil dari source asli, lalu dirender ulang
// dalam bentuk hirarki interaktif kiri ke kanan.

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
       topics:[
         {
           title:'Cara kerja komputer, OS, dan internet secara konseptual',
           resources:[
             'Youtube: Cara kerja komputer',
             'YouTube: Cara kerja OS',
             'Youtube: Cara kerja internet'
           ]
         },
         {
           title:'File system: folder, ekstensi, path absolut vs relatif',
           resources:[
             'YouTube: File system dasar',
             'YouTube: Pengenalan folder',
             'Youtube: Pengenalan Ekstensi',
             'Youtube: Path absolut vs realtif'
           ]
         },
         {
           title:'HTTP vs HTTPS — perbedaan nyata dan kenapa penting',
           resources:[
             'YouTube: HTTP vs HTTPS'
           ]
         },
         {
           title:'Browser, cookie, cache, dan jejak digital yang kamu tinggalkan',
           resources:[
             'YouTube: Browser cookie cache'
           ]
         }
       ]},
     {icon:'🌐',lv:'must',lvl:'MUST',t:'Jaringan Internet Dasar',ref:'CyBOK: Network Security Intro',
       topics:[
         {
           title:'IP address: apa itu dan kenapa setiap perangkat punya',
           resources:[
             'Youtube: Apa itu IP Address',
             'Artikel: Kenapa perangkat punya alamat'
           ]
         },
         {
           title:'Domain name dan cara DNS bekerja (penerjemah nama ke IP)',
           resources:[
             'Youtube: Apa itu Domain Name',
             'Artikel: Bagaimana DNS bekerja'
           ]
         },
         {
           title:'Router, WiFi, dan bagaimana data bergerak di internet',
           resources:[
             'Youtube: LAN Switching',
             'Youtube: IP Routing',
             'Youtube: Gimana data bergerak di internet',
             'Artikel: Perbedaan Router dan Switch'
           ]
         },
         {
           title:'Apa itu firewall secara awam',
           resources:[
             'Youtube: Apa itu Firewall',
             'Artikel: Cara kerja Firewall'
           ]
         }
       ]},
      {icon:'🧠',lv:'must',lvl:'MUST',t:'Mindset & Ekosistem Keamanan',ref:'CyBOK: Human Factors',
       topics:[
         {
           title:'CIA Triad mendalam: Confidentiality, Integrity, Availability',
           resources:[
             'Youtube: CIA Triad'
           ]
         },
         {
           title:'Threat actor dan motivasinya: finansial, ideologi, nation-state',
           resources:[
             'Youtube: Apa itu Threat actor',
             'Youtube: Motivasi dari Threat actor',
             'Artikel: Threat actor dan ancaman'
           ]
         },
         {
           title:'Etika digital dan konsekuensi hukum tindakan siber',
           resources:[
             'Youtube: Literasi Digital',
             'Youtube: Etika di Dunia Digital',
             'Artikel: Undang-Undang tentang Keamanan data',
             'Artikel: Perlindungan Data Pribadi'
           ]
         },
         {
           title:'Cara membaca dan memahami berita keamanan terkini',
           resources:[
             'Situs Berita: The Hacker News',
             'Situs Berita: Cyber News',
             'Situs Berita: Sindonews'
           ]
         }
       ]},

  // ── L1 Fase 1 ──
  {id:'p1',label:'L1 Fondasi',lvl:'Dasar',color:'var(--L1)',
   title:'Fase 1 — Fondasi: Pemahaman Dasar',dur:'6–8 Minggu',target:'Semua background',
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
     {icon:'🤖',lv:'must',lvl:'PILIH 1',t:'AI Security Engineer',ref:'OWASP LLM + OffSec OSAI + NIST AI RMF',
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


const LEVEL_ORDER = [
  { id:'dasar', title:'Level Dasar', match:'Dasar', color:'var(--L1)' },
  { id:'menengah', title:'Level Menengah', match:'Menengah', color:'var(--L2)' },
  { id:'tinggi', title:'Level Tinggi', match:'Tinggi', color:'var(--L3)' },
  { id:'ahli', title:'Level Ahli / Spesialis', match:'Ahli / Spesialis', color:'var(--L4)' },
];

const RESOURCE_LINKS = {
  // Isi URL di sini jika sudah siap.
  // Contoh:
  // 'Linux Journey':'https://linuxjourney.com/'
  'Youtube: Cara kerja komputer':'https://youtu.be/oe45WyD4chg?si=OCPxy7QOV_ZRA_Gu',
  'YouTube: Cara kerja OS':'https://youtu.be/aTX6zxP1N5M?si=xj93Okc-GhT-GKDE',
  'Youtube: Cara kerja internet':'https://youtu.be/zKNi-lqYEKA?si=lx0PEAWH-WwICSQe',
  'YouTube: File system dasar':'https://youtu.be/hV4xxRu0CGo?si=JzD2V5HUoKfOb9e3',
  'YouTube: Pengenalan folder':'https://youtu.be/gT8ZrtZjZek?si=qyC4ncN5VKOzKNKP',
  'Youtube: Pengenalan Ekstensi':'https://youtu.be/39oArGcGyKY?si=nbf28V3xt-YNGvEd',
  'Youtube: Path absolut vs realtif':'https://youtu.be/ephId3mYu9o?si=opOtEUUnVKoTJ87z',
  'YouTube: HTTP vs HTTPS':'https://youtu.be/ClkMk4m2MRA?si=BQ2LFIf41KA3ksX8',
  'YouTube: Browser cookie cache':'https://youtu.be/teNgS8jS-CI?si=KHF6pZEhaRTQ4zWh',
  'Youtube: Apa itu IP Address':'https://youtu.be/J-dh-MgKl-M?si=LJ3HUAFznDmhhdy9',
  'Artikel: Kenapa perangkat punya alamat':'https://csirt.teknokrat.ac.id/mengapa-setiap-perangkat-memiliki-ip-address-sendiri/',
  'Youtube: Apa itu Domain Name':'https://youtu.be/DUWgPIdcpcY?si=gwtmBoeZAchYVDV6',
  'Artikel: Bagaimana DNS bekerja':'https://nordvpn.com/id/blog/apa-itu-dns/?srsltid=AfmBOoqnoqerK5X27qAyxMJMveacM2k6tYu3R1p9TnZZj1_Ri2Tj5GKd',
  'Youtube: LAN Switching':'https://youtu.be/sxmhYUKMXdg?si=C5fW6Glw6OmrW-we',
  'Youtube: IP Routing':'https://youtu.be/9IfL1C51KpQ?si=yiJdARlijyUJAFXi',
  'Youtube: Gimana data bergerak di internet':'https://youtu.be/_fl7wWbV604?si=s5cs7YJNzrQhEJyj',
  'Artikel: Perbedaan Router dan Switch':'https://www.cloudeka.id/id/berita/teknologi/perbedaan-router-dan-switch/',
  'Youtube: Apa itu Firewall':'https://youtu.be/VoHvL7mvlM0?si=Y7Rz1JuxbnDc1GKe',
  'Artikel: Cara kerja Firewall':'https://sis.binus.ac.id/2023/05/01/apa-itu-firewall-dan-bagaimana-cara-kerjanya/',
  'Youtube: CIA Triad':'https://youtu.be/hD97QM3MVvs?si=3ts7BnWuG6MQvffu',
  'Youtube: Apa itu Threat actor':'https://youtu.be/ESi-4n02zaQ?si=uAcR_nWdnwPYOiJH',
  'Youtube: Motivasi dari Threat actor':'https://youtu.be/5iF7uklBFjk?si=bNY_zGzDsux6NUyb',
  'Artikel: Threat actor dan ancaman':'https://aplikas.com/blog/threat-actor/',
  'Youtube: Literasi Digital':'https://youtu.be/ThCcmEbBLc8?si=8qbc-JflL-Q-xoKW',
  'Youtube: Etika di Dunia Digital':'https://youtu.be/qNskX8A5I90?si=pXBBpAKW28kmJTKM',
  'Artikel: Undang-Undang tentang Keamanan data':'https://csirt.ipkindonesia.or.id/peraturan-perundang-undangan-terkait-keamanan-data/',
  'Artikel: Perlindungan Data Pribadi':'https://fh.untar.ac.id/2025/09/11/perlindungan-data-pribadi-implementasi-uu-no-27-tahun-2022-dan-tantangan-penegakannya/',
  'Situs Berita: The Hacker News':'https://thehackernews.com/',
  'Situs Berita: Cyber News':'https://cybernews.com/',
  'Situs Berita: Sindonews':'https://www.sindonews.com/topic/53184/keamanan-siber'
};

const state = {
  rootOpen:false,
  levelId:null,
  phaseId:null,
  moduleId:null,
  topicId:null,
  resourceId:null,
};

function normalizeText(v) {
  return String(v || '')
    .toLowerCase()
    .replace(/[–—-]/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function buildResourceIndex() {
  const index = new Map();
  Object.entries(resData).forEach(([section, items]) => {
    items.forEach(item => {
      index.set(normalizeText(item.name), { ...item, section });
    });
  });
  return index;
}

const RESOURCE_INDEX = buildResourceIndex();

function getResourceMeta(name) {
  const exact = RESOURCE_INDEX.get(normalizeText(name));
  if (exact) return exact;

  const target = normalizeText(name);
  for (const [key, value] of RESOURCE_INDEX.entries()) {
    if (key.includes(target) || target.includes(key)) return value;
  }

  return {
    icon:'🔗',
    type:'Sumber Belajar',
    name,
    desc:'Sumber belajar ini dapat digunakan untuk memperdalam materi yang sedang Anda pilih.',
    pr:'mix',
    prl:'Referensi',
    section:'Referensi'
  };
}

function buildRoadmapTree() {
  return {
    id:'root',
    title:'Roadmap Belajar Cybersecurity',
    levels: LEVEL_ORDER.map(level => {
      const phaseItems = phases.filter(phase => phase.lvl === level.match);
      return {
        ...level,
        phases: phaseItems.map(phase => {
          const phaseSlug = phase.id;
          return {
            ...phase,
            modules: phase.nodes.map((node, nodeIndex) => {
              const moduleId = `${phaseSlug}-m-${nodeIndex}`;
              return {
                id: moduleId,
                phaseId: phaseSlug,
                ...node,
                topics: node.topics.map((topic, topicIndex) => {
                  const topicId = `${moduleId}-t-${topicIndex}`;
                
                  const topicTitle = typeof topic === 'string' ? topic : topic.title;
                  const topicResources = typeof topic === 'string'
                    ? (node.tools || [])
                    : (topic.resources || []);
                
                  return {
                    id: topicId,
                    title: topicTitle,
                    moduleId,
                    resources: topicResources.map((toolName, resourceIndex) => {
                      const meta = getResourceMeta(toolName);
                      const url = RESOURCE_LINKS[toolName] || '';
                      return {
                        id: `${topicId}-r-${resourceIndex}`,
                        title: toolName,
                        url,
                        ...meta
                      };
                    })
                  };
                })
              };
            })
          };
        })
      };
    })
  };
}

const roadmapTree = buildRoadmapTree();

function getSelectedLevel() {
  return roadmapTree.levels.find(level => level.id === state.levelId) || null;
}

function getSelectedPhase() {
  const level = getSelectedLevel();
  return level?.phases.find(phase => phase.id === state.phaseId) || null;
}

function getSelectedModule() {
  const phase = getSelectedPhase();
  return phase?.modules.find(module => module.id === state.moduleId) || null;
}

function getSelectedTopic() {
  const module = getSelectedModule();
  return module?.topics.find(topic => topic.id === state.topicId) || null;
}

function getSelectedResource() {
  const topic = getSelectedTopic();
  return topic?.resources.find(resource => resource.id === state.resourceId) || null;
}

function resetBelow(level) {
  if (level === 'root') {
    state.levelId = null;
    state.phaseId = null;
    state.moduleId = null;
    state.topicId = null;
    state.resourceId = null;
  }
  if (level === 'level') {
    state.phaseId = null;
    state.moduleId = null;
    state.topicId = null;
    state.resourceId = null;
  }
  if (level === 'phase') {
    state.moduleId = null;
    state.topicId = null;
    state.resourceId = null;
  }
  if (level === 'module') {
    state.topicId = null;
    state.resourceId = null;
  }
  if (level === 'topic') {
    state.resourceId = null;
  }
}

function openRoot() {
  state.rootOpen = true;
  resetBelow('root');
  renderRoadmapExplorer();
}

function selectLevel(levelId) {
  state.rootOpen = true;
  state.levelId = levelId;
  resetBelow('level');
  renderRoadmapExplorer();
}

function selectPhase(phaseId) {
  state.phaseId = phaseId;
  resetBelow('phase');
  renderRoadmapExplorer();
}

function selectModule(moduleId) {
  state.moduleId = moduleId;
  resetBelow('module');
  renderRoadmapExplorer();
}

function selectTopic(topicId) {
  state.topicId = topicId;
  resetBelow('topic');
  renderRoadmapExplorer();
}

function selectResource(resourceId) {
  state.resourceId = resourceId;
  renderRoadmapExplorer();
}

function cardClass(isActive) {
  return isActive ? 'rm-card rm-card-active' : 'rm-card';
}

function renderRootColumn() {
  return `
    <section class="rm-column rm-column-root">
      <div class="rm-column-head">Mulai</div>
      <button class="${cardClass(state.rootOpen)} rm-root-btn" onclick="openRoot()">
        <span class="rm-card-kicker">Root</span>
        <span class="rm-card-title">Roadmap Belajar Cybersecurity</span>
        <span class="rm-card-meta">Klik untuk membuka struktur level</span>
      </button>
    </section>`;
}

function renderLevelColumn() {
  if (!state.rootOpen) return '';

  return `
    <section class="rm-column">
      <div class="rm-column-head">Level</div>
      <div class="rm-stack">
        ${roadmapTree.levels.map(level => `
          <button class="${cardClass(state.levelId === level.id)}" onclick="selectLevel('${level.id}')" style="--rm-accent:${level.color}">
            <span class="rm-card-kicker">${level.match}</span>
            <span class="rm-card-title">${level.title}</span>
            <span class="rm-card-meta">${level.phases.length} fase</span>
          </button>`).join('')}
      </div>
    </section>`;
}

function renderPhaseColumn() {
  const level = getSelectedLevel();
  if (!level) return '';

  return `
    <section class="rm-column">
      <div class="rm-column-head">Fase</div>
      <div class="rm-stack">
        ${level.phases.map(phase => `
          <button class="${cardClass(state.phaseId === phase.id)}" onclick="selectPhase('${phase.id}')" style="--rm-accent:${phase.color}">
            <span class="rm-card-kicker">${phase.label}</span>
            <span class="rm-card-title">${phase.title}</span>
            <span class="rm-card-meta">${phase.nodes.length} modul · ${phase.dur}</span>
          </button>`).join('')}
      </div>
    </section>`;
}

function renderModuleColumn() {
  const phase = getSelectedPhase();
  if (!phase) return '';

  return `
    <section class="rm-column">
      <div class="rm-column-head">Modul</div>
      <div class="rm-stack">
        ${phase.modules.map(module => `
          <button class="${cardClass(state.moduleId === module.id)}" onclick="selectModule('${module.id}')" style="--rm-accent:${phase.color}">
            <span class="rm-card-kicker">${module.lvl}</span>
            <span class="rm-card-title">${module.t}</span>
            <span class="rm-card-meta">${module.topics.length} materi</span>
          </button>`).join('')}
      </div>
    </section>`;
}

function renderTopicColumn() {
  const module = getSelectedModule();
  const phase = getSelectedPhase();
  if (!module || !phase) return '';

  return `
    <section class="rm-column">
      <div class="rm-column-head">Materi</div>
      <div class="rm-stack">
        ${module.topics.map(topic => `
          <button class="${cardClass(state.topicId === topic.id)}" onclick="selectTopic('${topic.id}')" style="--rm-accent:${phase.color}">
            <span class="rm-card-kicker">Materi</span>
            <span class="rm-card-title rm-card-title-sm">${topic.title}</span>
            <span class="rm-card-meta">${topic.resources.length} sumber belajar</span>
          </button>`).join('')}
      </div>
    </section>`;
}

function renderResourceColumn() {
  const topic = getSelectedTopic();
  const phase = getSelectedPhase();
  if (!topic || !phase) return '';

  return `
    <section class="rm-column">
      <div class="rm-column-head">Sumber Belajar</div>
      <div class="rm-stack rm-stack-resources">
        ${topic.resources.map(resource => {
          const isActive = state.resourceId === resource.id;
          const hasLink = Boolean(resource.url);

          return `
            <a class="${cardClass(isActive)} rm-resource-card ${hasLink ? '' : 'is-disabled'}"
               href="${hasLink ? resource.url : '#'}"
               onclick="selectResource('${resource.id}')"
               style="--rm-accent:${phase.color}"
               ${hasLink ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true" tabindex="-1"'}>
              <span class="rm-card-kicker">Referensi</span>
              <span class="rm-card-title rm-resource-title">${resource.title}</span>
            </a>`;
        }).join('')}
      </div>
    </section>`;
}

function renderDetailPanel() {
  const rootMessage = `
    <div class="rm-empty-detail">
      <div class="rm-empty-title">Mulai dari roadmap</div>
      <div class="rm-empty-text">Klik <strong>Roadmap Belajar Cybersecurity</strong>, lalu telusuri level, fase, modul, materi, dan sumber belajar dari kiri ke kanan.</div>
    </div>`;

  if (!state.rootOpen) return rootMessage;

  const level = getSelectedLevel();
  const phase = getSelectedPhase();
  const module = getSelectedModule();
  const topic = getSelectedTopic();
  const resource = getSelectedResource();

  if (resource) {
    const resourceDesc = resource.desc && resource.desc.trim()
      ? resource.desc
      : 'Sumber belajar ini dapat digunakan untuk memperdalam materi yang sedang Anda pilih.';

    return `
      <div class="rm-detail-card">
        <div class="rm-detail-kicker">Sumber Belajar</div>
        <div class="rm-detail-title">${resource.title}</div>
        <div class="rm-detail-desc">${resourceDesc}</div>
        <div class="rm-detail-actions">
          <a class="rm-detail-link ${resource.url ? '' : 'is-disabled'}"
             href="${resource.url || '#'}"
             ${resource.url ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true" tabindex="-1"'}>
            ${resource.url ? 'Buka Sumber Belajar' : 'Link belum tersedia'}
          </a>
        </div>
      </div>`;
  }

  if (topic) {
    return `
      <div class="rm-detail-card">
        <div class="rm-detail-kicker">Materi</div>
        <div class="rm-detail-title">${topic.title}</div>
        <div class="rm-detail-desc">Materi ini memiliki ${topic.resources.length} sumber belajar yang dapat Anda buka untuk memperdalam pemahaman secara bertahap.</div>
        <div class="rm-detail-list-head">Sumber belajar terkait</div>
        <ul class="rm-detail-list">
          ${topic.resources.map(resource => `<li>${resource.title}</li>`).join('')}
        </ul>
      </div>`;
  }

  if (module) {
    const moduleResourceCount = module.topics.reduce((total, item) => total + item.resources.length, 0);

    return `
      <div class="rm-detail-card">
        <div class="rm-detail-kicker">Modul</div>
        <div class="rm-detail-title">${module.t}</div>
        <div class="rm-detail-desc">${module.ref || 'Modul ini berisi kumpulan materi yang saling terhubung dalam satu topik pembelajaran.'}</div>
        <div class="rm-detail-tags">
          <span class="rm-tag">${module.lvl}</span>
          <span class="rm-tag">${module.topics.length} materi</span>
          <span class="rm-tag">${moduleResourceCount} sumber belajar</span>
        </div>
        <div class="rm-detail-list-head">Daftar materi</div>
        <ul class="rm-detail-list">
          ${module.topics.map(item => `<li>${item.title}</li>`).join('')}
        </ul>
      </div>`;
  }

  if (phase) {
    return `
      <div class="rm-detail-card">
        <div class="rm-detail-kicker">Fase</div>
        <div class="rm-detail-title">${phase.title}</div>
        <div class="rm-detail-desc">${phase.desc}</div>
        <div class="rm-detail-tags">
          <span class="rm-tag">${phase.label}</span>
          <span class="rm-tag">${phase.dur}</span>
          <span class="rm-tag">${phase.target}</span>
        </div>
        <div class="rm-detail-split">
          <div>
            <div class="rm-detail-list-head">Framework</div>
            <div class="rm-detail-tags">
              ${phase.fw.map(item => `<span class="rm-tag">${item.l}</span>`).join('')}
            </div>
          </div>
          <div>
            <div class="rm-detail-list-head">Quick Win</div>
            <div class="rm-quick-win">${phase.qw}</div>
          </div>
        </div>
        <div class="rm-detail-list-head">Gerbang Kompetensi</div>
        <ul class="rm-detail-list">
          ${phase.gate.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>`;
  }

  if (level) {
    return `
      <div class="rm-detail-card">
        <div class="rm-detail-kicker">Level</div>
        <div class="rm-detail-title">${level.title}</div>
        <div class="rm-detail-desc">Level ini berisi ${level.phases.length} fase yang dapat Anda pelajari secara bertahap dari kiri ke kanan.</div>
        <div class="rm-detail-tags">
          <span class="rm-tag">${level.match}</span>
          <span class="rm-tag">${level.phases.length} fase</span>
        </div>
      </div>`;
  }

  return rootMessage;
}

function renderBreadcrumb() {
  const crumbs = ['Roadmap Belajar Cybersecurity'];
  const level = getSelectedLevel();
  const phase = getSelectedPhase();
  const module = getSelectedModule();
  const topic = getSelectedTopic();
  const resource = getSelectedResource();

  if (level) crumbs.push(level.title);
  if (phase) crumbs.push(phase.title);
  if (module) crumbs.push(module.t);
  if (topic) crumbs.push(topic.title);
  if (resource) crumbs.push(resource.title);

  return crumbs.map(item => `<span>${item}</span>`).join('<span class="rm-breadcrumb-sep">→</span>');
}

function renderRoadmapExplorer() {
  const explorer = document.getElementById('roadmapExplorer');
  const detail = document.getElementById('roadmapDetail');
  const breadcrumb = document.getElementById('roadmapBreadcrumb');
  if (!explorer || !detail || !breadcrumb) return;

  explorer.innerHTML = [
    renderRootColumn(),
    renderLevelColumn(),
    renderPhaseColumn(),
    renderModuleColumn(),
    renderTopicColumn(),
    renderResourceColumn(),
  ].join('');

  breadcrumb.innerHTML = renderBreadcrumb();
  
  if (detail) {
    detail.innerHTML = renderDetailPanel();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderRoadmapExplorer();
});

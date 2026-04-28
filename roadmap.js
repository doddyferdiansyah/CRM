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
       topics:[
         {
           title:'Navigasi terminal: ls, cd, cat, grep, find, chmod, chown',
           resources:[
             'Youtube: Pengenalan Sistem Operasi',
             'Youtube: Playlist Linux Command',
             'Artikel: Cara Navigasi di Terminal'
           ]
         },
         {
           title:'User management: useradd, passwd, sudoers, /etc/shadow',
           resources:[
             'Youtube: Manajemen user',
             'Artikel: Manajemen user di Linux',
             'Artikel: Mengenal /etc/shadow'
           ]
         },
         {
           title:'Package manager: apt/yum, update, upgrade, install',
           resources:[
             'Youtube: Apa itu Package Manager',
             'Artikel: Mengenal Package Manager',
             'Artikel: Panduan YUM dan APT'
           ]
         },
         {
           title:'Proses: ps aux, top, htop, kill, systemctl, journalctl',
           resources:[
             'Youtube: Manajemen Proses di linux',
             'Artikel: Proses dan Job',
             'Artikel: Baca log lewat journalctl'
           ]
         },
         {
           title:'File permissions: rwx, numeric notation, SUID/SGID',
           resources:[
             'Youtube: Rahasia manajemen file',
             'Artikel: Penjelasan manajemen file'
           ]
         }
       ]},
      {icon:'🌐',lv:'must',lvl:'MUST',t:'Jaringan Komputer',ref:'CyBOK: Network Security',
       topics:[
         {
           title:'Model OSI 7 layer — fungsi tiap layer dan contoh protokolnya',
           resources:[
             'Youtube: Model OSI Layer'
           ]
         },
         {
           title:'TCP/IP, UDP, ICMP — perbedaan dan kapan digunakan',
           resources:[
             'Youtube: TCP/IP Layer',
             'Youtube: TCP/IP',
             'Youtube: UDP',
             'Youtube: ICMP'
           ]
         },
         {
           title:'IP addressing & subnetting CIDR — praktek sampai mahir',
           resources:[
             'Youtube: IP Address',
             'Youtube: Subneting PART 1',
             'Youtube: Subneting PART 2'
           ]
         },
         {
           title:'DNS, DHCP, ARP, NAT — cara kerja di jaringan nyata',
           resources:[
             'Youtube: DNS',
             'Youtube: DHCP',
             'Youtube: ARP',
             'Youtube: ICMP'
           ]
         },
         {
           title:'Wireshark: capture, filter, dan baca packet secara dasar',
           resources:[
             'Youtube: Packet analysis',
             'Artikel: Wireshark Guide'
           ]
         }
       ]},
      {icon:'🐍',lv:'must',lvl:'MUST',t:'Python & Bash Scripting',ref:'CyBOK: Software Security',
       topics:[
         {
           title:'Python: variabel, kondisi, loop, fungsi, modul, file I/O',
           resources:[
             'Youtube: Python Full Course'
           ]
         },
         {
           title:'String manipulation dan regex dasar untuk parsing log',
           resources:[
             'Artikel: Regex',
             'Artikel: Manipulasi String Bash',
             'Youtube: Parsing file log pakai regex'
           ]
         },
         {
           title:'requests library: GET/POST ke API dan scraping dasar',
           resources:[
             'Youtube: Web Scraping',
             'Artikel: Membuat Web Scraper'
           ]
         },
         {
           title:'Bash: variabel, loop, kondisi, pipe, redirect, cron job',
           resources:[
             'Youtube: Bash dan Cron Job',
             'Artikel: 6 Tips nulis bash'
           ]
         },
         {
           title:'Buat tools kecil: port scanner, log parser, file encryptor',
           resources:[
             'Youtube: Bikin Port Scanner',
             'Youtube: Bikin Log Parser',
             'Youtube: Bikin File Encryptor'
           ]
         }
       ]},
      {icon:'🔒',lv:'must',lvl:'MUST',t:'Konsep Keamanan Inti',ref:'CyBOK: Security Foundations',
       topics:[
         {
           title:'CIA Triad mendalam dengan kasus nyata Indonesia',
           resources:[
             'Artikel: 10 Kasus cyber crime di indonesia',
             'Jurnal: Analisis keamanan data Tokopedia 2020',
             'Artikel: Penyalahgunaan situs peduli lindungi',
             'Youtube: Serangan Pusat Data Indonesia',
             'Jurnal: Tantangan Etika dan Privasi',
             'Jurnal: Implementasi cyber security'
           ]
         },
         {
           title:'AAA framework: Authentication, Authorization, Accounting',
           resources:[
             'Youtube: Penjelasan AAA Framework',
             'Jurnal: Penerapan AAA',
             'Artikel: Server AAA'
           ]
         },
         {
           title:'Threat vs Vulnerability vs Risk vs Exploit — definisi presisi',
           resources:[
             'Youtube: Risk, Threat, & Vulnerability',
             'Youtube: Threat, Vulnerabilities, Exploit',
             'Youtube: Payload, Exploit, Vulnerability'
           ]
         },
         {
           title:'Defense in Depth, Least Privilege, Fail-Safe Defaults',
           resources:[
             'Youtube: Defense in Depth',
             'Youtube: Least Privilege',
             'Youtube: Fail-Safe Default'
           ]
         },
         {
           title:'Attack surface, threat modeling konsep, kill chain',
           resources:[
             'Youtube: Attack Surface',
             'Youtube: Threat Modeling',
             'Youtube: Kill Chain'
           ]
         }
       ]},
      {icon:'🗄️',lv:'should',lvl:'SHOULD',t:'Database & Web Dasar',ref:'CyBOK: Software Security',
       topics:[
         {
           title:'SQL dasar: SELECT, INSERT, UPDATE, DELETE, JOIN, WHERE',
           resources:[
             'Youtube: Pengenalan SQL',
             'Artikel: SQL Cheat Sheet'
           ]
         },
         {
           title:'Client-server model dan request-response cycle',
           resources:[
             'Youtube: Model Client-Server',
             'Youtube: Arsitektur Web',
             'Youtube: Request Response Cycle',
             'Youtube: Properti HTTP'
           ]
         },
         {
           title:'REST API: method, endpoint, header, body, status code',
           resources:[
             'Youtube: Apa itu REST API',
             'Youtube: REST API method',
             'Artikel: HTTP status code'
           ]
         },
         {
           title:'HTTP methods dan developer tools browser',
           resources:[
             'Youtube: HTTP Method',
             'Youtube: Browser developer tools basic',
             'Youtube: Postman Beginer'
           ]
         },
         {
           title:'Cara aplikasi web modern bekerja dari browser ke database',
           resources:[
             'Youtube: Cara kerja aplikasi web',
             'Youtube: Cara kerja Backend',
             'Chapter: Web Application Basic'
           ]
         }
       ]},
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
       topics:[
         {
           title:'Enkripsi simetris: AES-128/256, DES (kelemahan), 3DES',
           resources:[
             'Youtube: Playlist Kriptografi Klasik',
             'Youtube: AES 128/256',
             'Youtube: DES',
             'Artikel: Symetric Encryption',
             'Tools: Cryptool',
             'Tools: Dcode'
           ]
         },
         {
           title:'Enkripsi asimetris: RSA, ECC, Diffie-Hellman key exchange',
           resources:[
             'Youtube: Penjelasan Enkripsi Asimetris',
             'Youtube: Apa itu kriptografi',
             'Youtube: 5 Tempat belajar kriptografi',
             'Artikel: Asymetric Encryption',
             'Youtube: RSA',
             'Youtube: ECC',
             'Youtube: Diffie-Hellman'
           ]
         },
         {
           title:'Hashing: SHA-256, SHA-3, MD5 (broken), BLAKE2',
           resources:[
             'Youtube: Pengenalan Hashing',
             'Artikel: MD5 vs SHA3-256',
             'Artikel: Perbandingan SHA-1,2, dan 3',
             'Artikel: SHA 256',
             'Artikel: BLAKE2',
             'Artikel: Cara penggunaan BLAKE2'
           ]
         },
         {
           title:'MAC & HMAC untuk integritas dan autentikasi pesan',
           resources:[
             'Youtube: MAC dan HMAC',
             'Youtube: Kenapa Hashing saja tidak cukup'
           ]
         },
         {
           title:'Cryptographic randomness dan kenapa PRNG bisa berbahaya',
           resources:[
             'Youtube: Randomness dan Pseudorandomness',
             'Youtube: Secure random numbers',
             'Youtube: Cara memprediksi random numbers',
             'Youtube: PRNG',
             'Artikel: Randomness Pseudorandomness'
           ]
         }
       ]},
      {icon:'📜',lv:'must',lvl:'MUST',t:'PKI, TLS & Sertifikat',ref:'CyBOK: Cryptography',
       topics:[
         {
           title:'Public Key Infrastructure (PKI) — arsitektur dan chain of trust',
           resources:[
             'Youtube: Pengenalan PKI',
             'Youtube: Chain of trust',
             'Artikel: Kriptografi Kunci Publik'
           ]
         },
         {
           title:'Certificate Authority, X.509, dan validasi sertifikat',
           resources:[
             'Youtube: Certificate Authority',
             'Youtube: Certificate chain validation',
             'Youtube: X.509',
             'RFC 5820 X.509'
           ]
         },
         {
           title:'TLS 1.3 handshake lengkap step-by-step',
           resources:[
             'Youtube: Penjelasan TLS1.3',
             'Youtube: SSL, TLS, HTTPS',
             'Youtube: TLS1.3 Handshake',
             'RFC 8446 TLS1.3'
           ]
         },
         {
           title:'HTTPS: certificate pinning, HSTS, OCSP stapling',
           resources:[
             'Youtube: Penjelasan HTTPS',
             'Youtube: Konsep dan Praktek SSL/TLS',
             'Youtube: HSTS',
             'Artikel: OSCP stapling',
             'Artikel: SSL pinning'
           ]
         },
         {
           title:'Common TLS misconfigurations: weak cipher, expired cert, MITM',
           resources:[
             'Artikel: SSL/TLS misconfiguration',
             'Artikel: Testing for weak SSL/TLS',
             'Tools: SSL test',
             'Youtube: SSL Inspection',
             'Youtube: SSL/TLS misconfiguration'
           ]
         }
       ]},
      {icon:'🔮',lv:'must',lvl:'MUST',t:'Post-Quantum Cryptography (PQC)',ref:'NIST FIPS 203/204/205 (2024) —',
       topics:[
         {
           title:'Kenapa RSA dan ECC akan "broken" oleh quantum computer',
           resources:[
             'Artikel: Post-Quantum Cryptography',
             'Artikel: Ancaman quantum pada RSA dan ECC',
             'Youtube: Bagaimana computer quantum hancurkan enkripsi'
           ]
         },
         {
           title:'Konsep "Harvest Now, Decrypt Later" (HNDL) risiko terbesar saat ini',
           resources:[
             'Jurnal: Harvest Now Decrypt Later',
             'Youtube: HNDL',
             'Artikel: Ancaman di era quantum HNDL'
           ]
         },
         {
           title:'NIST PQC Standards: ML-KEM (FIPS 203), ML-DSA (FIPS 204), SLH-DSA',
           resources:[
             'NIST FISP 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard',
             'NIST FISP 204: Module-Lattice-Based Digital Signature Standard',
             'NIST FISP 205: Stateless Hash-Based Digital Signature Standard'
           ]
         },
         {
           title:'Lattice-based cryptography — prinsip dasar yang membuatnya quantum-safe',
           resources:[
             'Youtube: Cara kerja Lattice-Based',
             'Youtube: Tricky math of dots',
             'Artikel: Lattice-Based cryptography',
             'Jurnal: Pengenalan Lattice-based cryptography'
           ]
         },
         {
           title:'PQC migration planning: inventarisasi enkripsi dan roadmap transisi',
           resources:[
             'Dokumen: PQC migration roadmap',
             'Artikel: PQC migration planning',
             'Artikel: NIST PQC migration'
           ]
         }
       ]},
      {icon:'🗝️',lv:'should',lvl:'SHOULD',t:'Autentikasi & Token Modern',ref:'CyBOK: Authentication',
       topics:[
         {
           title:'Password hashing: bcrypt, Argon2, PBKDF2 — jangan MD5/SHA1!',
           resources:[
             'NIST SP 800-63: Digital Identity Guidelines',
             'Artikel: Argon2, bcrypt, scrypt, PBKDF2',
             'Youtube: Password hashing, salts, papers',
             'Youtube: Penjelasan fungsi hash',
             'Artikel: Password storage cheat sheet',
             'Jurnal: Security analysis of salt'
           ]
         },
         {
           title:'Multi-Factor Authentication: TOTP, FIDO2, Passkeys',
           resources:[
             'Youtube: Apa itu MFA',
             'Youtube: Bagaimana cara kerja MFA',
             'NIST SP 800-63B-4: Authentication and Authenticator Management',
             'Artikel: Multifactor authentication cheat sheet',
             'Youtube: TOTP, FIDO2, Passkeys'

           ]
         },
         {
           title:'JSON Web Token (JWT): struktur, signing, validasi, dan risiko',
           resources:[
             'Youtube: Penjelasan JWT',
             'Youtube: Konsep dan implementasi JWT',
             'Tools: JWT encode & decode',
             'Artikel: Memahami JSON web token'
           ]
         },
         {
           title:'OAuth 2.0 & OpenID Connect — authorization flow lengkap',
           resources:[
             'Youtube: Penjelasan Oauth 2.0',
             'Youtube: Contoh dan penjelasan Oauth 2.0',
             'Youtube: Perbedaan Oauth 2.0 vs OpenID connect',
             'Artikel: Oauth 2.0 vs OpenID',
             'Artikel: OpenID vs Oauth'
           ]
         },
         {
           title:'Passkeys dan masa depan passwordless authentication',
           resources:[
             'Youtube: Priciple of FIDO',
             'Youtube: Password vs Passkeys',
             'Artikel: Passwordless Authentication',
             'Artikel: FIDO passkey'
           ]
         }
       ]},
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
       topics:[
         {
           title:'Virus, Worm, Trojan, RAT, Backdoor — cara kerja & bedanya',
           resources:[
             'Youtube: Penjelasan malware',
             'Youtube: Logic Bomb',
             'Artikel: 22 jenis malware',
             'Tools: VirusTotal',
             'Tools: Run.Any'
           ]
         },
         {
           title:'Ransomware : double extortion, RaaS (Ransomware-as-a-Service)',
           resources:[
             'Youtube: Penjelasan Ransomware & RaaS',
             'Artikel: Apa itu Ransomware',
             'Tools: Malware bazaar',
             'Tools: Hybrid Analysis'
           ]
         },
         {
           title:'Spyware, Adware, Rootkit, Bootkit, Fileless malware',
           resources:[
             'Artikel: 12 Jenis malware',
             'Youtube: Penjelasan Fileless malware',
             'Artikel: Serangan Fileless'
           ]
         },
         {
           title:'Supply chain attacks: SolarWinds, XZ Utils, npm poisoning',
           resources:[
             'Youtube: Penjelasan Supplay chain attack',
             'Youtube: NPM massive exploit',
             'Artikel: Mitigasi serangan suplay chain NPM',
             'Artikel: Mitigasi serangan SolarWinds',
             'Artikel: Mitigasi serangan XZ utils backdoor'
           ]
         },
         {
           title:'APT (Advanced Persistent Threat) dan nation-state actors',
           resources:[
             'Youtube: Penjelasan APT',
             'Artikel: Nation state actors & contoh real'
           ]
         }
       ]},
      {icon:'🎭',lv:'must',lvl:'MUST',t:'Social Engineering & AI-Powered Attacks',ref:'CyBOK: Human Factors',
       topics:[
         {
           title:'Phishing, Spear Phishing, Whaling',
           resources:[
             'Youtube: Email phishing',
             'Artikel: Phishing, spear-phishing, whaling',
             'Tools: Gophish',
             'Tools: PhishTank'
           ]
         },
         {
           title:'AI-generated phishing: deepfake voice, hyper-realistic email',
           resources:[
             'Artikel: AI untuk phishing',
             'Artikel: Anatomi deepfake voice',
             'Youtube: Contoh deepfake',
             'Youtube: Apa itu deepfake'
           ]
         },
         {
           title:'Vishing & Smishing yang makin canggih dengan AI',
           resources:[
             'Youtube: Vishing',
             'Youtube: Smishing',
             'Youtube: Contoh voice scam',
             'Artikel: Contoh sms scam'
           ]
         },
         {
           title:'Business Email Compromise (BEC) — kerugian terbesar secara finansial',
           resources:[
             'Youtube: Business Email Compromise',
             'Jurnal: BEC fraud',
             'Artikel: Penjelasan BEC'
           ]
         },
         {
           title:'Defense: security awareness training dan email security (SPF, DKIM, DMARC)',
           resources:[
             'Artikel: Apa itu security awareness training',
             'Youtube: Security awareness',
             'Artikel: Email security',
             'Youtube: dmarc, dkim, spf'
           ]
         }
       ]},
      {icon:'🌐',lv:'must',lvl:'MUST',t:'Serangan & Pertahanan Jaringan',ref:'CyBOK: Network Security',
       topics:[
         {
           title:'MITM: ARP spoofing, DNS poisoning, SSL stripping',
           resources:[
             'Artikel: Mengenali serangan MITM',
             'Youtube: Penjelasan ARP spoofing',
             'Youtube: Penjelasan DSN poisoning',
             'Youtube: SSL stripping'
           ]
         },
         {
           title:'DoS & DDoS: volumetric, protocol, application layer (L7)',
           resources:[
             'Youtube: Penjelasan DoS',
             'Youtube: Penjelasan DDoS',
             'Youtube: 7 Jenis serangan DoS',
             'Youtube: Cara ngatasin DoS',
             'Artikel: Memahami serangan DDoS di layer aplikasi'
           ]
         },
         {
           title:'Port scanning dengan Nmap — timing, stealth, service detection',
           resources:[
             'Youtube: Penjelasan IP dan Port scanning',
             'Youtube: Playlist Nmap',
             'Tools: Nmap',
             'Artikel: Nmap Cheat Sheet'
           ]
         },
         {
           title:'Sniffing & packet injection — Scapy basics',
           resources:[
             'Youtube: Packet sniffing',
             'Artikel: Scapy basics',
             'Youtube: Packet manipulasi dan sniffing dengan scapy'
           ]
         },
         {
           title:'Pertahanan: Firewall next-gen, IDS/IPS Snort/Suricata, network segmentation',
           resources:[
             'Youtube: Penjelasan Next Generation Firewall',
             'Youtube: IDS vs IPS',
             'Artikel: Snort vs Suricata',
             'Artikel: Network segmentation'
           ]
         }
       ]},
      {icon:'🌍',lv:'must',lvl:'MUST',t:'Web App Security — OWASP Top 10',ref:'OWASP Top 10 2021 + CyBOK: Web Security',
       topics:[
         {
           title:'A01 Broken Access Control — IDOR, privilege escalation, path traversal',
           resources:[
             'Artikel: OWASP A01 Broken Authentication',
             'Lab: IDOR',
             'Lab: Path Traversal',
             'Lab: Privilege escalation'
           ]
         },
         {
           title:'A03 SQL Injection — error-based, blind, time-based, out-of-band',
           resources:[
             'Youtube: Penjelasan SQLi',
             'Lab: SQL Injection'
           ]
         },
         {
           title:'A07 XSS — stored, reflected, DOM-based; cara eksploitasi & mitigasi',
           resources:[
             'Youtube: Penjelasan XSS',
             'Lab: XSS'
           ]
         },
         {
           title:'CSRF, SSRF, XXE, Insecure Deserialization',
           resources:[
             'Lab: XXE',
             'Lab: CSRF',
             'Lab: SSRF',
             'Lab: Insecure deserialization'
           ]
         },
         {
           title:'Burp Suite Community: intercept, repeater, intruder, scanner',
           resources:[
             'Artikel: Mengenali Burp Suite',
             'Youtube: Tutorial Burp Suite',
             'Tools: Burp Suite Community Edition'
           ]
         }
       ]},
      {icon:'🔍',lv:'should',lvl:'SHOULD',t:'Vulnerability Assessment',ref:'CyBOK: Adversarial Behaviors',
       topics:[
         {
           title:'CVE database dan CVSS v3.1 scoring — cara baca dan interpretasi',
           resources:[
             'Artikel: Pengenalan CVE',
             'Tools: CVE database',
             'Tools: CVE Calculator Scoring 3.1',
             'Artikel: NVD NIST',
             'Youtube: Cara baca CVE'
           ]
         },
         {
           title:'OpenVAS / Nessus Essentials — setup, scan, dan laporan',
           resources:[
             'Youtube: Vulnerability scanning',
             'Youtube: Perbedaan VA dan PT',
             'Tools: Nessus',
             'Tools: Open VAS'
           ]
         },
         {
           title:'ExploitDB dan cara menemukan PoC yang relevan',
           resources:[
             'Youtube: Penjelasan Exploitdb',
             'Tools: Exploitdb',
             'Tools: Searchsploit'
           ]
         },
         {
           title:'Patch management lifecycle dan risk-based prioritization',
           resources:[
             'Youtube: Patch & lifecycle management',
             'Artikel: Patch management lifecycle',
             'Artikel: Risk-based vulnerability'
           ]
         },
         {
           title:'Vulnerability report writing: executive summary + technical detail',
           resources:[
             'Artikel: Cara membuat laporan VA'
           ]
         }
       ]},
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
       topics:[
         {
           title:'CIS Benchmarks Level 1 & 2 — implementasi langkah per langkah',
           resources:[
             'Artikel: CIS Benchmark FAQ',
             'Tools: CIS',
             'Artikel: CIS Level 1 vs CIS Level 2',
             'Tools: CIS-CAT Lite',
             'Youtube: Pengenalan CIS Benchmark'
           ]
         },
         {
           title:'Disable unnecessary services, ports, dan SUID binaries',
           resources:[
             'Artikel: Linux server security',
             'Youtube: Teknik hardening',
             'Youtube: Penjelasan system hardening',
             'Tools: lynix',
             'Tools: OpenSCAP',
             'Linux server hardening guide'
           ]
         },
         {
           title:'SELinux / AppArmor — mandatory access control',
           resources:[
             'Youtube: Mandatory Access Controls',
             'Artikel: Apa itu SELinux',
             'Artikel: Apa itu AppArmor',
             'Youtube: SELinux vs AppArmor'
           ]
         },
         {
           title:'Windows GPO, Local Security Policy, dan PowerShell hardening',
           resources:[
             'Youtube: Pengenalan Group Policy',
             'Artikel: Microsoft GPO',
             'Artikel: Local Security Policy',
             'Artikel: Secure Powershell',
             'Tools: Security Compliance Toolkit',
             'Artikel: Apa itu Security compliance toolkit'
           ]
         },
         {
           title:'auditd, syslog, dan log forwarding ke remote server',
           resources:[
             'Artikel: Penjelasan auditd',
             'Artikel: Auditd vs syslog',
             'Artikel: Penjelasan syslog',
             'Youtube: Log forwarding ke syslog',
             'Youtube: Memahami Linux logging'
           ]
         }
       ]},
      {icon:'☁️',lv:'must',lvl:'MUST',t:'Cloud Security Dasar',ref:'CyBOK: Infrastructure Security',
       topics:[
         {
           title:'Shared Responsibility Model — siapa bertanggung jawab untuk apa',
           resources:[
             'Youtube: Memahami shared responsibility model',
             'Artikel: AWS SRM',
             'Artikel: Azure SRM'
           ]
         },
         {
           title:'IAM: users, roles, policies, permission boundaries, least privilege',
           resources:[
             'Youtube: Pengenalan IAM',
             'Artikel: AWS IAM user role policy',
             'Artikel: IAM Guide',
             'Youtube: AWS access management'
           ]
         },
         {
           title:'S3/Storage bucket misconfiguration — kasus nyata dan cara deteksi',
           resources:[
             'Artikel: Penjelasan S3/Storage',
             'Youtube: AWS S3 tutorial',
             'Artikel: S3 misconfiguration',
             'Artikel: 5 misconfiguration S3',
             'Tools: Scout Suite',
             'Tools: Prowler'
           ]
         },
         {
           title:'VPC, security groups, NACLs, dan network segmentation di cloud',
           resources:[
             'Youtube: Pengenalan VPC',
             'Artikel: Cloud network security',
             'Youtube: Security group vs NACL'
           ]
         },
         {
           title:'Cloud logging: CloudTrail, CloudWatch, Azure Monitor, GCP Audit Logs',
           resources:[
             'Youtube: cloudwatch vs cloudtrail',
             'Artikel: Azure monitor',
             'Artikel: GCP audit logs'
           ]
         }
       ]},
      {icon:'🐳',lv:'should',lvl:'SHOULD',t:'Container & DevSecOps',ref:'CyBOK: OS & Virtualisation',
       topics:[
         {
           title:'Docker security: non-root user, read-only filesystem, capabilities',
           resources:[
             'Artikel: Pengenalan docker',
             'Youtube: Docker security',
             'Artikel: Docker bench',
             'OWASP Docker Security Cheat Sheet',
             'NIST 800-190: Application Container Security Guide'
           ]
         },
         {
           title:'Container image scanning: vulnerability dan malware detection',
           resources:[
             'OWASP DevSecOps Guideline',
             'Youtube: Container security',
             'Tools: Trivy',
             'Tools: Falco'
           ]
         },
         {
           title:'Kubernetes RBAC, network policies, pod security standards',
           resources:[
             'Youtube: Pengenalan Kubernates',
             'Artikel: Kubernates RBAC',
             'Artikel: Pod Security Standards'
           ]
         },
         {
           title:'CI/CD pipeline security: SAST, secrets scanning, dependency check',
           resources:[
             'Youtube: Pengenalan Github',
             'Artikel: GitHub advanced security',
             'Tools: Checkov',
             'OWASP CI/CD security Cheat sheet'
           ]
         },
         {
           title:'Infrastructure as Code security: Terraform, Ansible hardening',
           resources:[
             'Youtube: Pengenalan IaC',
             'OWASP IaC security Cheat sheet',
             'Artikel: Secure IaC dengan Terraform',
             'Artikel: IaC dengan Ansible',
             'Jurnal: security hardening menggunakan IaC'
           ]
         }
       ]},
      {icon:'🏰',lv:'should',lvl:'SHOULD',t:'Active Directory & IAM Enterprise',ref:'CyBOK: Authentication & Authorisation',
       topics:[
         {
           title:'Active Directory: forest, domain, OU, trust relationships',
           resources:[
             'Artikel: Domain, forest, AD trust'
           ]
         },
         {
           title:'Kerberos authentication — AS-REQ, TGT, TGS, service ticket',
           resources:[
             'Artikel: Karberos Attack Guide'
           ]
         },
         {
           title:'Kerberoasting, AS-REP Roasting, Pass-the-Hash (defensive perspective)',
           resources:[
             'Artikel: AS-REP Roasting',
             'Artikel: Pengenalan Pass the hash'
           ]
         },
         {
           title:'Privileged Access Management (PAM) dan Just-In-Time access',
           resources:[
             'Artikel: PAM dan  Just in time access'
           ]
         },
         {
           title:'Zero Trust Architecture — prinsip "never trust, always verify"',
           resources:[
             'NIST 800-207: Zero Trust Architecture'
           ]
         }
       ]},
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
       topics:[
         {
           title:'Vulnerability report structure: executive summary, findings, CVSS, remediation',
           resources:[
             'Artikel: Vulnerability Assessment report',
             'Tools: Dradis pentest report',
             'Contoh template report VA dan PT'
           ]
         },
         {
           title:'Incident report: timeline, impact, root cause, lessons learned, prevention',
           resources:[
             'Artikel: Mengenal incident response report',
             'Contoh SANS incident response report'
           ]
         },
         {
           title:'Risk report untuk board: bahasa bisnis, angka, dan rekomendasi actionable',
           resources:[
             'Artikel: Buat report ke manajemen board'
           ]
         },
         {
           title:'Technical documentation: runbook, playbook, SOP yang bisa dieksekusi orang lain',
           resources:[
             'Artikel: Runbooks, playbooks, SOP'
           ]
         },
         {
           title:'Visual communication: diagram arsitektur, attack flow, risk matrix',
           resources:[
             'Artikel: Risk matrix',
             'Tools: PlantUML'
           ]
         }
       ]},
      {icon:'🎤',lv:'must',lvl:'MUST',t:'Komunikasi Risiko kepada Stakeholder',ref:'ISO 27001 Klausul 7.4',
       topics:[
         {
           title:'Bahasa risiko vs bahasa teknis — cara terjemahkan untuk audience berbeda',
           resources:[
             'Jurnal: komunikasi ke orang non teknis',
             'Artikel: Membuat deck presentasi',
             'Youtube: Guide to Pitch deck'
           ]
         },
         {
           title:'Risk communication kepada C-level: ROI security investment, business impact',
           resources:[
             'Youtube: Menjelaskan kebutuhan cybersecurity ke board',
             'Youtube: Cybersecurity ROI',
             'Artikel: Business communication'
           ]
         },
         {
           title:'Security awareness presentation yang engaging dan tidak membosankan',
           resources:[
             'Artikel: Cybersecurity awareness',
             'Artikel: security awareness training'
           ]
         },
         {
           title:'Menjelaskan keputusan security kepada tim developer (empati, bukan intimidasi)',
           resources:[
             'Artikel: komunikasi keamanan dengan developer',
             'Artikel: meningkatkan komunikasi antar tim keamanan dan developer',
             'Komunitas: Toastmasters'
           ]
         },
         {
           title:'Negosiasi: meyakinkan manajemen untuk investasi security',
           resources:[
             'Artikel: Strategi secure investment',
             'Artikel: Tips security pich deck untuk investor'
           ]
         }
       ]},
      {icon:'🤝',lv:'should',lvl:'SHOULD',t:'Kolaborasi & Security Culture',ref:'CyBOK: Human Factors',
       topics:[
         {
           title:'Membangun security culture tanpa menciptakan fear dan paranoia',
           resources:[
             'NIST Cybersecurity Workforce Framework',
             'Artikel: Building security culture',
             'YouTube: Security culture basics'
           ]
         },
         {
           title:'Security champion program: cara embed security di tim development',
           resources:[
             'Artikel: Security champions program',
             'ISACA COBIT',
             'YouTube: Security champions in practice'
           ]
         },
         {
           title:'Tabletop exercise facilitation: simulasi insiden untuk manajemen',
           resources:[
             'Artikel: Tabletop exercise guide',
             'NIST Cybersecurity Workforce Framework',
             'YouTube: Incident tabletop exercise basics'
           ]
         },
         {
           title:'Cross-departemen komunikasi: IT, legal, HR, finance dalam konteks security',
           resources:[
             'ISACA COBIT',
             'Artikel: Cross-functional security collaboration',
             'YouTube: Security collaboration across departments'
           ]
         },
         {
           title:'Vendor dan third-party security communication',
           resources:[
             'Artikel: Third-party risk communication',
             'ISACA COBIT',
             'YouTube: Vendor security communication basics'
           ]
         }
       ]},
      {icon:'💼',lv:'should',lvl:'SHOULD',t:'Career Communication & Personal Branding',ref:'Soft Skills for Cybersecurity',
       topics:[
         {
           title:'Menulis write-up CTF dan security blog yang membangun reputasi',
           resources:[
             'Medium/Hashnode',
             'Artikel: Cara menulis write-up CTF',
             'YouTube: Blogging for cybersecurity reputation'
           ]
         },
         {
           title:'LinkedIn optimization untuk cybersecurity professional',
           resources:[
             'LinkedIn',
             'Artikel: Optimasi LinkedIn untuk cybersecurity',
             'YouTube: Personal branding di LinkedIn'
           ]
         },
         {
           title:'Presentasi di conference atau meetup — cara pitch talk proposal',
           resources:[
             'DEF CON CFP',
             'OWASP Chapter Indonesia',
             'Artikel: Menulis CFP dan proposal talk'
           ]
         },
         {
           title:'Membangun portfolio yang terlihat oleh recruiter',
           resources:[
             'LinkedIn',
             'Medium/Hashnode',
             'Artikel: Portfolio cybersecurity untuk recruiter'
           ]
         },
         {
           title:'Networking di komunitas cybersecurity Indonesia dan global',
           resources:[
             'OWASP Chapter Indonesia',
             'LinkedIn',
             'Artikel: Networking strategy for cybersecurity professionals'
           ]
         }
       ]},
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
  'Situs Berita: Sindonews':'https://www.sindonews.com/topic/53184/keamanan-siber',
  'Youtube: Pengenalan Sistem Operasi':'https://youtu.be/XO6yP5PXjQA?si=qna4xvz3qaWX3f0U',
  'Youtube: Playlist Linux Command':'https://youtube.com/playlist?list=PLC-N6VQz1oqeP2Xu86AiHCYCwNkOd5Em2&si=qZ4lJrR2m_DjUBjr',
  'Artikel: Cara Navigasi di Terminal':'https://terminalcheatsheet.com/id/guides/navigate-terminal',
  'Youtube: Manajemen user':'https://youtu.be/rWNVcc-ukEU?si=gr1G8JuTMLuWBTt5',
  'Artikel: Manajemen user di Linux':'https://www.idn.id/manajemen-user-linux-perintah-penting-yang-wajib-tahu/',
  'Artikel: Mengenal /etc/shadow':'https://linuxize.com/post/etc-shadow-file/',
  
  'Youtube: Apa itu Package Manager':'https://youtu.be/gA0yzCz5OS8?si=X4nlX2HkIqXjavb8',
  'Artikel: Mengenal Package Manager':'https://coolnetkid.wordpress.com/2014/06/06/mengenal-package-manager-linux/',
  'Artikel: Panduan YUM dan APT':'https://infosecwriteups.com/mastering-linux-part-3-a-beginners-guide-to-apt-and-yum-package-management-d37742d4f822',
  
  'Youtube: Manajemen Proses di linux':'https://youtu.be/UE8VDP8Oa7Y?si=lfnamTBvTTn2jEEw',
  'Artikel: Proses dan Job':'https://lucanerlich.com/linux/beginners-guide/processes-and-jobs/',
  'Artikel: Baca log lewat journalctl':'https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs',
  
  'Youtube: Rahasia manajemen file':'https://youtu.be/vjBr-kIopIk?si=tw9641bmSchgjUyi',
  'Artikel: Penjelasan manajemen file':'https://www.redhat.com/en/blog/linux-file-permissions-explained',

  'Youtube: Model OSI Layer':'https://youtu.be/lWSqQb9KdVQ?si=pwlGKXwxmF9uDL-j',

  'Youtube: TCP/IP Layer':'https://youtu.be/nLF53fEFCC4?si=NIXCAcK6zAeciHTI',
  'Youtube: TCP/IP':'https://youtu.be/tN3qcuR11QQ?si=XxUKJeVWnW8Sda-2',
  'Youtube: UDP':'https://youtu.be/8lKExTlK_f4?si=x92rlLVLpxieVZ0l',
  'Youtube: ICMP':'https://youtu.be/SQaVz_0Bq8c?si=d-slz89LuWkDA6xC',
  
  'Youtube: IP Address':'https://youtu.be/J-dh-MgKl-M?si=VM3MkpglOjPcMC5n',
  'Youtube: Subneting PART 1':'https://youtu.be/QFFnsHn3gsY?si=QNj2M6F2SjXJ1a76',
  'Youtube: Subneting PART 2':'https://youtu.be/QTEtIVINrK8?si=aRyXXCnHR2x87X_t',
  
  'Youtube: DNS':'https://youtu.be/mpQZVYPuDGU?si=kJu9QcoJWgZ5o2PD',
  'Youtube: DHCP':'https://youtu.be/scLJtJtIzh0?si=aeDLd7RAuMVuHGmA',
  'Youtube: ARP':'https://youtu.be/cn8Zxh9bPio?si=cRuib7k-CrIu-r5e',
  'Youtube: NAT':'https://youtu.be/KA56kj23RPU?si=FkazyvApHMAo3kFQ',
  
  'Youtube: Packet analysis':'https://youtu.be/g1E2D0BmdUE?si=AFLaAiNGuPaTyHct',
  'Artikel: Wireshark Guide':'https://www.wireshark.org/docs/wsug_html_chunked/',
  
  'Youtube: Python Full Course':'https://youtu.be/rWC2iFlN3TM?si=_DyMrkuu5z_ZGu7t',
  
  'Artikel: Regex':'https://www.idn.id/mengenal-regex-alat-powerful-untuk-manipulasi-string/',
  'Artikel: Manipulasi String Bash':'https://www.baeldung.com/linux/bash-string-manipulation',
  'Youtube: Parsing file log pakai regex':'https://youtu.be/IbbqB6ZGGT8?si=7m8q1PoHsVVjMfcm',
  
  'Youtube: Web Scraping':'https://youtu.be/Ct8Gxo8StBU?si=2zsRqZXXe1qr8XT5',
  'Artikel: Membuat Web Scraper':'https://www.dicoding.com/blog/tutorial-membuat-web-scraper-dengan-python/',
  
  
  'Youtube: Bash dan Cron Job':'https://youtu.be/qdgKkI7Fy0I?si=PnH9EFs_LOa4Am5Z',
  'Artikel: 6 Tips nulis bash':'https://yasoob.me/posts/6-tips-before-you-write-your-next-bash-cronjob/',
  
  'Youtube: Bikin Port Scanner':'https://youtu.be/vRhPOE2uTGA?si=HDNgG87oeZeb_-KW',
  'Youtube: Bikin Log Parser':'https://youtu.be/OGbX6cdR1pU?si=-f8DqlixwFCIZcVq',
  'Youtube: Bikin File Encryptor':'https://youtu.be/DZsmqUMjpdo?si=-9oPYNtpuwp3U0fV',

  'Artikel: 10 Kasus cyber crime di indonesia':'https://binus.ac.id/bandung/2024/08/inilah-10-kasus-cyber-crime-yang-bikin-heboh-di-indonesia/',
  'Jurnal: Analisis keamanan data Tokopedia 2020':'https://journal.dcircle.org/index.php/jikum/article/download/174/120',
  'Artikel: Penyalahgunaan situs peduli lindungi':'https://www.kompasiana.com/brownsugar7002/685abb0ec925c403e35a6112/penyalahgunaan-situs-peduli-lindungi-menjadi-situs-judi-online-tinjauan-sistem-informasi-dan-sosiologis?page=all&page_images=2',
  'Youtube: Serangan Pusat Data Indonesia':'https://www.youtube.com/watch?v=c9CAAM5MhkE&t=1s',
  'Jurnal: Tantangan Etika dan Privasi':'https://jurnal.kopusindo.com/index.php/jkhkp/article/download/1646/1387/4545',
  'Jurnal: Implementasi cyber security':'https://ejurnal.kampusakademik.my.id/index.php/jemba/article/download/1157/959',  
  
  'Youtube: Penjelasan AAA Framework':'https://youtu.be/NXCn2G7wL0s?si=IamRL48VI9Ma49v_',
  'Jurnal: Penerapan AAA':'https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/10522',
  'Artikel: Server AAA':'https://www.linuxid.net/istilah/aaa-server-authentication-authorization-and-accounting/',
  
  'Youtube: Risk, Threat, & Vulnerability':'https://youtu.be/cJ6n3Fhbft0?si=3p0ihgMAoh-LOQzo',
  'Youtube: Threat, Vulnerabilities, Exploit':'https://youtu.be/8zSoyAmHHc4?si=RQc2jdoIjmGDHK27',
  'Youtube: Payload, Exploit, Vulnerability':'https://youtu.be/jzTj6wg2tUM?si=X0k68MlvC9UNLJA6',
  
  'Youtube: Defense in Depth':'https://youtu.be/7FfoyWdNcYE?si=86Iokfu52K5hpqm5',
  'Youtube: Least Privilege':'https://youtu.be/_UGEGYb5z-8?si=NnA3bIp5cMUAGoBi',
  'Youtube: Fail-Safe Default':'https://youtu.be/k2Xhvk3-4kw?si=FP5V-Y1laehuVZqj',
  'Artikel: Principles of Security':'https://devguide.owasp.org/en/02-foundations/03-security-principles/',
  
  'Youtube: Attack Surface':'https://youtu.be/6D-iK8_sMw0?si=nvGxxwVI5crpYwgf',
  'Youtube: Threat Modeling':'https://youtu.be/eOCwfXaMDU8?si=LSzspqVJDk6Oi-UD',
  'Youtube: Kill Chain':'https://youtu.be/19hw_CHO0X8?si=szs2wsfE772hlxz5',
  
  'Youtube: Pengenalan SQL':'https://youtu.be/DPGMBa0srPA?si=hpK-HqnbzTfPoKSP',
  'Artikel: SQL Cheat Sheet':'https://www.geeksforgeeks.org/sql/sql-cheat-sheet/',
  
  'Youtube: Model Client-Server':'https://youtu.be/L5BlpPU_muY?si=M6MAmK-2dqeSmmLx',
  'Youtube: Arsitektur Web':'https://youtu.be/apXQVaftKdM?si=wuMDrX4nikKpNsTh',
  'Youtube: Request Response Cycle':'https://youtu.be/zgb4uuaowQw?si=WIuEy132b7ZRVYlF',
  'Youtube: Properti HTTP':'https://youtu.be/snUTUeGjbPQ?si=T3KMO3o0ko0FwUdx',
  
  'Youtube: Apa itu REST API':'https://youtu.be/vQJJ_K1JbEA?si=1HB2zVhvmR-bOLCf',
  'Youtube: REST API method':'https://youtu.be/KF-3jtGH6Yk?si=J1q_q5y-JnkXcKVF',
  'Artikel: HTTP status code':'https://www.restapitutorial.com/httpstatuscodes',
  
  'Youtube: HTTP Method':'https://youtu.be/Dxq-dMVIubA?si=1TggyI4Yo68SkFT2',
  'Youtube: Browser developer tools basic':'https://youtu.be/Xg72SiTgxRk?si=VSKn11FUtdoVjMs1',
  'Youtube: Postman Beginer':'https://youtu.be/VywxIQ2ZXw4?si=r14vyL-_WmUhMOwq',
  
  'Youtube: Cara kerja aplikasi web':'https://youtu.be/ggzYcBvzUTY?si=r9DkOyfG32hNXqMv',
  'Youtube: Cara kerja Backend':'https://youtu.be/gOghS3BmaxI?si=MUisikCtjy88a_2j',
  'Chapter: Web Application Basic':'https://www.cs.cityu.edu.hk/~hwchun/Courses/Docs/Internet/0201730383.pdf',

  'Youtube: Playlist Kriptografi Klasik':'https://youtube.com/playlist?list=PLC-N6VQz1oqdKD2Nqep0CFaTpV6U34lyz&si=JdaossUBAYvLoxVV',
  'Youtube: AES 128/256':'https://youtu.be/O4xNJsjtN6E?si=9xDDtDqmfrdZnDcu',
  'Youtube: DES':'https://youtu.be/j53iXhTSi_s?si=dcQ_s-NdJvMEQ5x9',
  'Artikel: Symetric Encryption':'https://www.thesslstore.com/blog/symmetric-encryption-101-definition-how-it-works-when-its-used/',
  'Tools: Cryptool':'https://www.cryptool.org/en/cto/',
  'Tools: Dcode':'https://www.dcode.fr/en',
  
  'Youtube: Penjelasan Enkripsi Asimetris':'https://youtu.be/AQDCe585Lnc?si=cx2T1AloCY_KUrdd',
  'Youtube: Apa itu kriptografi':'https://youtu.be/mEbBnrJPL2U?si=wpCZN_kh9htbgQf6',
  'Youtube: 5 Tempat belajar kriptografi':'https://youtu.be/fq4zJRp-DtE?si=qeWdXE6hJZQ7zsH7',
  'Artikel: Asymetric Encryption':'https://www.1kosmos.com/resources/blog/asymmetric-encryption',
  'Youtube: RSA':'https://youtu.be/hm8s6FAc4pg?si=Z_x3PYvdLTsK6hod',
  'Youtube: ECC':'https://youtu.be/EnRzBHk4UZw?si=sZkP47joOLkX77qk',
  'Youtube: Diffie-Hellman':'https://youtu.be/85oMrKd8afY?si=gICL5LrQT4VqGe5B',
  
  'Youtube: Pengenalan Hashing':'https://youtu.be/amfZ-id6H4c?si=lkb8OeRhf4jq8VRG',
  'Artikel: MD5 vs SHA3-256':'https://mojoauth.com/compare-hashing-algorithms/md5-vs-sha3-256',
  'Artikel: Perbandingan SHA-1,2, dan 3':'https://rublon.com/blog/sha-3-vs-sha-2-vs-sha-1-vs-md5/',
  'Artikel: SHA 256':'https://www.boot.dev/blog/computer-science/how-sha-2-works-step-by-step-sha-256/',
  'Artikel: BLAKE2':'https://www.blake2.net/',
  'Artikel: Cara penggunaan BLAKE2':'https://github.com/BLAKE3-team/BLAKE3',
  
  'Youtube: MAC dan HMAC':'https://youtu.be/fzMIjWFYQl0?si=ZYWt6motM8PY_rYT',
  'Youtube: Kenapa Hashing saja tidak cukup':'https://youtu.be/vdzB5Rraeb4?si=smTdP91-9EZw-18-',
  
  'Youtube: Randomness dan Pseudorandomness':'https://youtu.be/vW4ji0F_VZw?si=ONbSavE8ap1HIObg',
  'Youtube: Secure random numbers':'https://youtu.be/AAbcOs22hg0?si=OkWlI31CyUFuPMY9',
  'Youtube: Cara memprediksi random numbers':'https://youtu.be/-h_rj2-HP2E?si=LSbYBsMIKoh5y4qF',
  'Youtube: PRNG':'https://youtu.be/q2XVhTWJ-Oo?si=2a_9X60X0_nv0FPw',
  'Artikel: Randomness Pseudorandomness':'https://www.ias.edu/ideas/2009/wigderson-randomness-pseudorandomness',
  
  
  'Youtube: Pengenalan PKI':'https://youtu.be/0ctat6RBrFo?si=YANmg72R6_8MV1uo',
  'Youtube: Chain of trust':'https://youtu.be/heacxYUnFHA?si=bSnh_pIeZUSa_FrZ',
  'Artikel: Kriptografi Kunci Publik':'https://www.ssldragon.com/id/blog/public-key-cryptography/#What-Is-Public-Key-Cryptography',
  
  'Youtube: Certificate Authority':'https://youtu.be/duc4Dz219ro?si=Q2o6UQ1WfBH4FhD8',
  'Youtube: Certificate chain validation':'https://youtu.be/lLw0dICMA_Y?si=TnMhFDeFnLmPvLul',
  'Youtube: X.509':'https://youtu.be/kAaIYRJoJkc?si=ymTFn8k9173Dubm-',
  'RFC 5820 X.509':'https://datatracker.ietf.org/doc/html/rfc5280',
  
  'Youtube: Penjelasan TLS1.3':'https://youtu.be/yPdJVvSyMqk?si=oJQog3AXmKb3AFkv',
  'Youtube: SSL, TLS, HTTPS':'https://youtu.be/j9QmMEWmcfo?si=2OO7TTTf18y8ZDu9',
  'Youtube: TLS1.3 Handshake':'https://youtu.be/yXmQjjAWqws?si=77ZD2uzcHVmH14Xi',
  'RFC 8446 TLS1.3':'https://datatracker.ietf.org/doc/html/rfc8446',
  
  'Youtube: Penjelasan HTTPS':'https://youtu.be/58jE8n_Clkc?si=K0-Ceg1xpHRCZ3Np',
  'Youtube: Konsep dan Praktek SSL/TLS':'https://youtu.be/QJAjLIaqH_s?si=jCRnel7iD1f9GcVL',
  'Youtube: HSTS':'https://youtu.be/-MWqSD2_37E?si=3kgIJyd5IBBz2AFu',
  'Artikel: OSCP stapling':'https://www.ssl.com/id/artikel/ocsp-stapling-validasi-sertifikat-yang-aman-dan-efisien/',
  'Artikel: SSL pinning':'https://www.ethic.ninja/2020/09/apa-itu-ssl-pinning-manfaat-dan-implementasinya-pada-aplikasi-mobile.html',
  
  'Artikel: SSL/TLS misconfiguration':'https://haxoris.com/haxoris-wiki/web-owasp-top-10/cryptographic-failures/ssl-tls-misconfiguration',
  'Artikel: Testing for weak SSL/TLS':'https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/09-Testing_for_Weak_Cryptography/01-Testing_for_Weak_SSL_TLS_Ciphers_Insufficient_Transport_Layer_Protection',
  'Tools: SSL test':'https://www.ssllabs.com/ssltest/',
  'Youtube: SSL Inspection':'https://youtu.be/CmTc-XHYWVs?si=yRL2m3K1WdNrmt4d',
  'Youtube: SSL/TLS misconfiguration':'https://youtu.be/FKscrL9ICs4?si=TIFsdk21R2QUr6iE',

  'Artikel: Post-Quantum Cryptography':'https://csrc.nist.gov/projects/post-quantum-cryptography',
  'Artikel: Ancaman quantum pada RSA dan ECC':'https://hackernoon.com/the-quantum-threat-to-rsa-ecc-and-modern-encryption-systems',
  'Youtube: Bagaimana computer quantum hancurkan enkripsi':'https://youtu.be/lvTqbM5Dq4Q?si=RdZUIvDc2JaEsjU_',
  
  'Jurnal: Harvest Now Decrypt Later':'https://www.federalreserve.gov/econres/feds/harvest-now-decrypt-later-examining-post-quantum-cryptography-and-the-data-privacy-risks-for-distributed-ledger-networks.htm',
  'Youtube: HNDL':'https://youtu.be/Bz_qPdJdu28?si=mVvxiUWzGQBK1F-n',
  'Artikel: Ancaman di era quantum HNDL':'https://www.paloaltonetworks.com/cyberpedia/harvest-now-decrypt-later-hndl',
  
  'NIST FISP 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard':'https://csrc.nist.gov/pubs/fips/203/final',
  'NIST FISP 204: Module-Lattice-Based Digital Signature Standard':'https://csrc.nist.gov/pubs/fips/204/final',
  'NIST FISP 205: Stateless Hash-Based Digital Signature Standard':'https://csrc.nist.gov/pubs/fips/205/final',
  
  'Youtube: Cara kerja Lattice-Based':'https://youtu.be/GT8kt06ETQI?si=49joujsG0OQUVsaR',
  'Youtube: Tricky math of dots':'https://youtu.be/QDdOoYdb748?si=xR8Dtwc3BOJstjbl',
  'Artikel: Lattice-Based cryptography':'https://www.redhat.com/en/blog/post-quantum-cryptography-lattice-based-cryptography',
  'Jurnal: Pengenalan Lattice-based cryptography':'https://arxiv.org/abs/2208.08125',
  
  'Dokumen: PQC migration roadmap':'https://pqcc.org/wp-content/uploads/2025/05/PQC-Migration-Roadmap-PQCC-2.pdf',
  'Artikel: PQC migration planning':'https://qramm.org/learn/pqc-migration-planning.html',
  'Artikel: NIST PQC migration':'https://www.nist.gov/news-events/news/2025/09/new-draft-white-paper-pqc-migration-mappings-risk-framework-docs',
  
  'NIST SP 800-63: Digital Identity Guidelines':'https://pages.nist.gov/800-63-4/',
  'Artikel: Argon2, bcrypt, scrypt, PBKDF2':'https://guptadeepak.com/comparative-analysis-of-password-hashing-algorithms-argon2-bcrypt-scrypt-and-pbkdf2/',
  'Youtube: Password hashing, salts, papers':'https://youtu.be/--tnZMuoK3E?si=jzWAloJjEXye8EcW',
  'Youtube: Penjelasan fungsi hash':'https://youtu.be/cczlpiiu42M?si=DxohcV6pve4Ok0GA',
  'Artikel: Password storage cheat sheet':'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html',
  'Jurnal: Security analysis of salt':'https://ieeexplore.ieee.org/document/6516321',
  
  'Youtube: Apa itu MFA':'https://youtu.be/L3alw3iXaio?si=ffz7m6KAGE_KUhcM',
  'Youtube: Bagaimana cara kerja MFA':'https://youtu.be/lEHhivPJQ5w?si=CCYFSAGKGm3JH_AZ',
  'NIST SP 800-63B-4: Authentication and Authenticator Management':'https://csrc.nist.gov/pubs/sp/800/63/B/4/final',
  'Artikel: Multifactor authentication cheat sheet':'https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html',
  'Youtube: TOTP, FIDO2, Passkeys':'https://youtu.be/ZYbp0Zp3V8Q?si=Bc9iPBl41Y8kfvng',
  
  'Youtube: Penjelasan JWT':'https://youtu.be/Y2H3DXDeS3Q?si=aTYgkkGioo5hizJv',
  'Youtube: Konsep dan implementasi JWT':'https://youtu.be/3FzuHlWqDfQ?si=UDjDvSLeUbR3JTvI',
  'Tools: JWT encode & decode':'https://www.jwt.io/',
  'Artikel: Memahami JSON web token':'https://supertokens.com/blog/what-is-jwt',
  
  'Youtube: Penjelasan Oauth 2.0':'https://youtu.be/ZV5yTm4pT8g?si=BFZnVW6TAxGuGFOD',
  'Youtube: Contoh dan penjelasan Oauth 2.0':'https://youtu.be/ZDuRmhLSLOY?si=YtkKpgRTkqEVJ3BK',
  'Youtube: Perbedaan Oauth 2.0 vs OpenID connect':'https://youtu.be/HsbNDDfLvio?si=WnsoOBXc9Zsb08_j',
  'Artikel: Oauth 2.0 vs OpenID':'https://developer.okta.com/docs/concepts/oauth-openid/',
  'Artikel: OpenID vs Oauth':'supertokens.com/blog/openid-connect-vs-oauth2',
  
  'Youtube: Priciple of FIDO':'https://youtu.be/KRlyv9mftTo?si=j5nEootziZMs-yek',
  'Youtube: Password vs Passkeys':'https://youtu.be/9nrE4t4-IXA?si=XZLGHmW673rFD2nJ',
  'Artikel: Passwordless Authentication':'https://www.passkeys.com/what-is-passwordless-authentication',
  'Artikel: FIDO passkey':'https://fidoalliance.org/passkeys/',

  'Youtube: Penjelasan malware':'https://youtu.be/5shyqpPB-qc?si=DcDarPj03LFPOJey',
  'Youtube: Logic Bomb':'https://youtu.be/4hjYjBqFO0U?si=49wPPJhO9hm_JoMN',
  'Artikel: 22 jenis malware':'https://diskominfosp.lebakkab.go.id/22-jenis-malware-dan-cara-mengenalinya/',
  'Tools: VirusTotal':'https://www.virustotal.com/gui/',
  'Tools: Run.Any':'https://any.run/',
  
  'Youtube: Penjelasan Ransomware & RaaS':'https://youtu.be/46Awo8ztAf4?si=4GPhde1EUtdxdaTf',
  'Artikel: Apa itu Ransomware':'https://www.fortinet.com/resources/cyberglossary/ransomware',
  'Tools: Malware bazaar':'https://bazaar.abuse.ch/',
  'Tools: Hybrid Analysis':'https://hybrid-analysis.com/',
  
  'Artikel: 12 Jenis malware':'https://www.crowdstrike.com/en-us/cybersecurity-101/malware/types-of-malware/',
  'Youtube: Penjelasan Fileless malware':'https://youtu.be/F0RpOUxe1Z8?si=_fXZZqHfJ2yGqx8r',
  'Artikel: Serangan Fileless':'https://www.cyberarmy.id/publication/cybersecurity-awareness/serangan-fileless-cara-kerja-malware-dan-tips-menghindarinya',
  
  'Youtube: Penjelasan Supplay chain attack':'https://www.youtube.com/live/LIkxOiNOkec?si=p0stRZbd4ULQBm77',
  'Youtube: NPM massive exploit':'https://youtu.be/QVqIx-Y8s-s?si=qh5Ax-U3cmWq6SCU',
  'Artikel: Mitigasi serangan suplay chain NPM':'https://unit42.paloaltonetworks.com/monitoring-npm-supply-chain-attacks/',
  'Artikel: Mitigasi serangan SolarWinds':'https://www.fortinet.com/resources/cyberglossary/solarwinds-cyber-attack',
  'Artikel: Mitigasi serangan XZ utils backdoor':'https://www.akamai.com/blog/security-research/critical-linux-backdoor-xz-utils-discovered-what-to-know',
  
  'Youtube: Penjelasan APT':'https://youtu.be/foSyqwiGBf4?si=oEuonmqMECU1xWAR',
  'Artikel: Nation state actors & contoh real':'https://www.cisa.gov/topics/cyber-threats-and-advisories/nation-state-cyber-actors',
  
  'Youtube: Email phishing':'https://youtu.be/EUYUTxeoTYc?si=lrkNZ9XKcsiVzo9v',
  'Artikel: Phishing, spear-phishing, whaling':'https://www.mantra.ms/blog/phishing-spear-phishing-smishing-vishing-whaling-guide',
  'Tools: Gophish':'https://getgophish.com/',
  'Tools: PhishTank':'https://www.phishtank.net/',
  
  'Artikel: AI untuk phishing':'www.checkpoint.com/cyber-hub/threat-prevention/what-is-phishing/ai-phishing-attacks/',
  'Artikel: Anatomi deepfake voice':'https://www.group-ib.com/blog/voice-deepfake-scams/',
  'Youtube: Contoh deepfake':'https://youtu.be/3wVpVH0Wa6E?si=fXi3OxkzTjfVnMYJ',
  'Youtube: Apa itu deepfake':'https://youtu.be/PpqGFHdVoUo?si=RwbQ6ge-7VBr4k3o',
  
  'Youtube: Vishing':'https://youtu.be/_81Sq2tV2BE?si=LQDxHgCUbektyMV7',
  'Youtube: Smishing':'https://youtu.be/6INueq0JqPM?si=sZy99CfLzITkfMg-',
  'Youtube: Contoh voice scam':'https://youtu.be/r8KfG5KW1vc?si=uJm2r3hZ1Fkvz4XK',
  'Artikel: Contoh sms scam':'https://www.ocbc.id/id/article/2024/07/04/contoh-sms-penipuan-pinjaman-online-yang-perlu-kamu-waspadai',
  
  'Youtube: Business Email Compromise':'https://youtu.be/UGTNTwkWiFk?si=FLlWhAhNM3hN_48C',
  'Jurnal: BEC fraud':'https://apfjournal.or.id/index.php/apf/article/view/307',
  'Artikel: Penjelasan BEC':'https://www.cisco.com/site/us/en/learn/topics/security/what-is-business-email-compromise-bec.html',
  
  'Artikel: Apa itu security awareness training':'https://www.primacs.co.id/post/apa-itu-security-awareness-training-dan-manfaatnya',
  'Youtube: Security awareness':'https://youtu.be/W_Npxwk4fbI?si=Hw-kM-qTJcc-DRC1',
  'Artikel: Email security':'https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/',
  'Youtube: dmarc, dkim, spf':'https://youtu.be/6TjUrX7lB7I?si=VprVMij70KXOPzMj',
  
  'Artikel: Mengenali serangan MITM':'https://www.ibm.com/id-id/think/topics/man-in-the-middle',
  'Youtube: Penjelasan ARP spoofing':'https://youtu.be/cZ-7R8juECk?si=nexiWlwPZJuexwvT',
  'Youtube: Penjelasan DSN poisoning':'https://youtu.be/2QijB5GtNE4?si=YI5j_LAxyMW_UanK',
  'Youtube: SSL stripping':'https://youtu.be/1MIlywzKSt0?si=wfYdTj39AGG07ne6',
  
  'Youtube: Penjelasan DoS':'https://youtu.be/TQ4TKPdD7YI?si=wFH62fcjK-PcW8Nm',
  'Youtube: Penjelasan DDoS':'https://youtu.be/bnisk1wpyJE?si=yR0CEKlbXnEh0tAk',
  'Youtube: 7 Jenis serangan DoS':'https://youtu.be/W09cfc3Fl1Q?si=PVNlxuGW8VIrxSS1',
  'Youtube: Cara ngatasin DoS':'https://youtu.be/zRpGtFu3uWw?si=bMIAyySxs8tDIGl4',
  'Artikel: Memahami serangan DDoS di layer aplikasi':'https://www.cloudflare.com/learning/ddos/application-layer-ddos-attack/',
  
  'Youtube: Penjelasan IP dan Port scanning':'https://youtu.be/wW8hntf4S-c?si=drPMt9pHAr-nP5uq',
  'Youtube: Playlist Nmap':'https://youtube.com/playlist?list=PLC-N6VQz1oqco1c2WRBxnJ-1kyc0ADEzg&si=8gb3KK5GS9ILVxao',
  'Tools: Nmap':'https://nmap.org/',
  'Artikel: Nmap Cheat Sheet':'https://www.stationx.net/nmap-cheat-sheet/',
  
  'Youtube: Packet sniffing':'https://youtu.be/h6bPC7H6j48?si=na1TJt7kQZqF-SDr',
  'Artikel: Scapy basics':'https://scapy.readthedocs.io/en/latest/usage.html',
  'Youtube: Packet manipulasi dan sniffing dengan scapy':'https://youtu.be/LvaII2PEwcQ?si=QXWphN9xUo91NGiR',
  
  'Youtube: Penjelasan Next Generation Firewall':'https://youtu.be/KsELeMSYZN0?si=lNDJ3EWB7DZX5Wt4',
  'Youtube: IDS vs IPS':'https://youtu.be/NLLN4ynrono?si=AweLipm490guaG1U',
  'Artikel: Snort vs Suricata':'https://www.stamus-networks.com/suricata-vs-snort',
  'Artikel: Network segmentation':'https://www.cisco.com/site/us/en/learn/topics/security/what-is-network-segmentation.html',
  
  'Artikel: OWASP A01 Broken Authentication':'https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/',
  'Lab: IDOR':'https://portswigger.net/web-security/access-control/idor',
  'Lab: Path Traversal':'https://portswigger.net/web-security/file-path-traversal',
  'Lab: Privilege escalation':'https://portswigger.net/web-security/prototype-pollution/server-side/lab-privilege-escalation-via-server-side-prototype-pollution',
  
  'Youtube: Penjelasan SQLi':'https://youtu.be/d1EotsACUl0?si=AIqAJHyb7z4dxGat',
  'Lab: SQL Injection':'https://portswigger.net/web-security/sql-injection',
  
  'Youtube: Penjelasan XSS':'https://youtu.be/k80RPTpRLDc?si=qbaloRJIXG2NEOvp',
  'Lab: XSS':'https://portswigger.net/web-security/cross-site-scripting',
  
  'Lab: XXE':'https://portswigger.net/web-security/xxe',
  'Lab: CSRF':'https://portswigger.net/web-security/csrf',
  'Lab: SSRF':'https://portswigger.net/web-security/ssrf',
  'Lab: Insecure deserialization':'https://portswigger.net/web-security/deserialization',
  
  'Artikel: Mengenali Burp Suite':'https://idcloudhost.com/blog/kenali-burp-suite-tools/',
  'Youtube: Tutorial Burp Suite':'https://youtu.be/qw4JzhjASDc?si=Ulmx19jdUgPcsaJN',
  'Tools: Burp Suite Community Edition':'https://portswigger.net/burp/communitydownload',
  
  'Artikel: Pengenalan CVE':'https://www.ibm.com/id-id/think/topics/cve',
  'Tools: CVE database':'https://www.cve.org/',
  'Tools: CVE Calculator Scoring 3.1':'https://www.first.org/cvss/calculator/3.1',
  'Artikel: NVD NIST':'https://nvd.nist.gov/vuln-metrics/cvss',
  'Youtube: Cara baca CVE':'https://youtu.be/kM1eVOZNxR8?si=6NiuesIiK6aWvlDS',
  
  'Youtube: Vulnerability scanning':'https://youtu.be/9qirxbJzWS8?si=hmVywzPyBOGRCNda',
  'Youtube: Perbedaan VA dan PT':'https://youtu.be/M7SeO85tQ90?si=stTRIlilDRC5QBbB',
  'Tools: Nessus':'https://www.tenable.com/products/nessus',
  'Tools: Open VAS':'https://www.greenbone.net/en/openvas-free/',
  
  'Youtube: Penjelasan Exploitdb':'https://youtu.be/ixtOykwoPUY?si=9V6-D2hGQM0dSMTR',
  'Tools: Exploitdb':'https://www.exploit-db.com/',
  'Tools: Searchsploit':'https://hackviser.com/tactics/tools/searchsploit',
  
  'Youtube: Patch & lifecycle management':'https://youtu.be/JlGmDwHGIf8?si=1Uz25mbehXvHQm_5',
  'Artikel: Patch management lifecycle':'https://www.ninjaone.com/blog/patch-management-lifecycle-explained/',
  'Artikel: Risk-based vulnerability':'https://www.paloaltonetworks.com/cyberpedia/risk-based-vulnerability-management',
  
  'Artikel: Cara membuat laporan VA':'https://medium.com/@YoKoKho/tips-menulis-laporan-kerentanan-3deaeaf29a7d',

  'Artikel: CIS Benchmark FAQ':'https://www.cisecurity.org/cis-benchmarks/cis-benchmarks-faq',
  'Tools: CIS':'https://www.cisecurity.org/cis-benchmarks',
  'Artikel: CIS Level 1 vs CIS Level 2':'https://blog.scalefusion.com/cis-level-1-vs-cis-level-2/',
  'Tools: CIS-CAT Lite':'https://learn.cisecurity.org/cis-cat-lite',
  'Youtube: Pengenalan CIS Benchmark':'https://www.youtube.com/live/2orzA98Ih0k?si=3VFHGEYFDxXwv6Cf',
  
  'Artikel: Linux server security':'https://www.plesk.com/blog/product-technology/linux-server-security-best-practices/',
  'Youtube: Teknik hardening':'https://youtu.be/wXoC46Qr_9Q?si=eqSnSAsHjEgyQoBa',
  'Youtube: Penjelasan system hardening':'https://youtu.be/HltKHtH5Dv4?si=3mmHnlFKjy3hXrUb',
  'Tools: lynix':'https://cisofy.com/lynis/',
  'Tools: OpenSCAP':'https://www.open-scap.org/',
  'Linux server hardening guide':'https://github.com/m4rkw/linux-server-hardening-guide',
  
  'Youtube: Mandatory Access Controls':'https://youtu.be/1xstU28GLok?si=mylusr6kJgCZuJ9z',
  'Artikel: Apa itu SELinux':'https://computing.id/articles/apa-itu-selinux-panduan-dasar-keamanan-linux/',
  'Artikel: Apa itu AppArmor':'https://debian-handbook.info/browse/id-ID/stable/sect.apparmor.html',
  'Youtube: SELinux vs AppArmor':'https://youtu.be/xeZI55o2LKs?si=B6n7T6Fy8SYfVvxa',
  
  'Youtube: Pengenalan Group Policy':'https://youtu.be/rEhTzP-ScBo?si=60D5nyIsN3Fem0k_',
  'Artikel: Microsoft GPO':'https://learn.microsoft.com/en-us/previous-versions/windows/desktop/policy/group-policy-objects',
  'Artikel: Local Security Policy':'https://www.ituonline.com/comptia-a-plus/local-security-policy-configuring-security-standards-in-windows-for-comptia-a-certification/',
  'Artikel: Secure Powershell':'https://www.cyber.gov.au/business-government/protecting-devices-systems/system-administration/securing-powershell-in-the-enterprise',
  'Tools: Security Compliance Toolkit':'https://www.microsoft.com/en-us/download/details.aspx?id=55319',
  'Artikel: Apa itu Security compliance toolkit':'https://learn.microsoft.com/en-us/windows/security/operating-system-security/device-management/windows-security-configuration-framework/security-compliance-toolkit-10',
  
  'Artikel: Penjelasan auditd':'https://www.redhat.com/en/blog/configure-linux-auditing-auditd',
  'Artikel: Auditd vs syslog':'https://www.idn.id/auditd-vs-syslog-pengalaman-nyata-memilih-solusi-logging-linux-yang-efektif/',
  'Artikel: Penjelasan syslog':'https://www.splunk.com/en_us/blog/learn/syslog.html',
  'Youtube: Log forwarding ke syslog':'https://youtu.be/iew8yXX9g2w?si=D76ZYINU8ZkVxYeI',
  'Youtube: Memahami Linux logging':'https://youtu.be/SFdcbdhOs90?si=Nd9wXGO299SywmW-',
  
  'Youtube: Memahami shared responsibility model':'https://youtu.be/Y2dYkoiNhA4?si=C--FoiRd895JcTrB',
  'Artikel: AWS SRM':'https://aws.amazon.com/compliance/shared-responsibility-model/',
  'Artikel: Azure SRM':'https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility',
  
  'Youtube: Pengenalan IAM':'https://youtu.be/aNj36g7fSsU?si=TswINvSFjixcjV-D',
  'Artikel: AWS IAM user role policy':'https://medium.com/@kajals909/aws-iam-identity-and-access-management-users-roles-policies-c41c297b833a',
  'Artikel: IAM Guide':'https://medium.com/@dennis_39505/identity-and-access-management-iam-a-complete-guide-with-examples-best-practices-and-tools-a8e284bf11f7',
  'Youtube: AWS access management':'https://youtu.be/psKS-4YGD28?si=VvnD9ecl9BFO4Fp-',
  
  'Artikel: Penjelasan S3/Storage':'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html',
  'Youtube: AWS S3 tutorial':'https://youtu.be/tfU0JEZjcsg?si=JRaKl7G2g9ALvv04',
  'Artikel: S3 misconfiguration':'https://medium.com/@janijay007/s3-bucket-misconfiguration-from-basics-to-pawn-6893776d1007',
  'Artikel: 5 misconfiguration S3':'https://jumpcloud.com/blog/amazon-s3-bucket-misconfigurations',
  'Tools: Scout Suite':'https://github.com/nccgroup/scoutsuite',
  'Tools: Prowler':'https://github.com/prowler-cloud/prowler',
  
  'Youtube: Pengenalan VPC':'https://youtu.be/7_NNlnH7sAg?si=MLL5y6xRbUd1zTe8',
  'Artikel: Cloud network security':'https://www.akamai.com/glossary/what-is-cloud-network-security',
  'Youtube: Security group vs NACL':'https://youtu.be/JWoNu2Mtpdg?si=dcGFaxBw1ryH8spw',
  
  'Youtube: cloudwatch vs cloudtrail':'https://youtu.be/S5X0PnBwp9I?si=3xrf-V_YGANThryb',
  'Artikel: Azure monitor':'https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview',
  'Artikel: GCP audit logs':'https://docs.cloud.google.com/logging/docs/audit',
  
  'Artikel: Pengenalan docker':'https://qs.telkomuniversity.ac.id/panduan-lengkap-menggunakan-docker-apa-mengapa-dan-bagaimana/',
  'Youtube: Docker security':'https://youtu.be/KINjI1tlo2w?si=mvTpjmwc47bfXEJ6',
  'Artikel: Docker bench':'https://dev.to/docker/automate-docker-security-audits-with-docker-bench-for-security-206g',
  'OWASP Docker Security Cheat Sheet':'https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html',
  'NIST 800-190: Application Container Security Guide':'https://csrc.nist.gov/pubs/sp/800/190/final',
  
  'OWASP DevSecOps Guideline':'https://owasp.org/www-project-devsecops-guideline/latest/02f-Container-Vulnerability-Scanning',
  'Youtube: Container security':'https://youtu.be/b_euX_M82uI?si=5K6nvdYrGKsrJdNY',
  'Tools: Trivy':'https://trivy.dev/',
  'Tools: Falco':'https://falco.org/',
  
  'Youtube: Pengenalan Kubernates':'https://youtu.be/TlHvYWVUZyc?si=fVcWYoLW-Vaa0sWb',
  'Artikel: Kubernates RBAC':'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
  'Artikel: Pod Security Standards':'https://kubernetes.io/docs/concepts/security/pod-security-standards/',
  
  'Youtube: Pengenalan Github':'https://youtu.be/r8jQ9hVA2qs?si=csPq8nm5l8alf4zr',
  'Artikel: GitHub advanced security':'https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security',
  'Tools: Checkov':'https://www.checkov.io/',
  'OWASP CI/CD security Cheat sheet':'https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html',
  
  'Youtube: Pengenalan IaC':'https://youtu.be/zWw2wuiKd5o?si=O3NzcQLexD4_Uzb1',
  'OWASP IaC security Cheat sheet':'https://cheatsheetseries.owasp.org/cheatsheets/Infrastructure_as_Code_Security_Cheat_Sheet.html',
  'Artikel: Secure IaC dengan Terraform':'https://medium.com/@sharathkumarlokesh/securing-infrastructure-as-code-terraform-security-fundamentals-f198c3397673',
  'Artikel: IaC dengan Ansible':'https://devops.com/infrastructure-as-code-iac-with-ansible-automating-build-environment-setup-for-windows-and-linux/',
  'Jurnal: security hardening menggunakan IaC':'https://learning-gate.com/index.php/2576-8484/article/view/4697',
  
  'Artikel: Domain, forest, AD trust':'https://help.sap.com/docs/SUPPORT_CONTENT/bobjip/3354091760.html',
  
  'Artikel: Karberos Attack Guide':'https://owasp.org/www-chapter-bangkok/slides/2025/2025-02-07_Breaking-the-Ticket-A-Beginners-Guide-to-Kerberos-Attacks.pdf',
  
  'Artikel: AS-REP Roasting':'https://redbotsecurity.com/as-rep-roasting/',
  'Artikel: Pengenalan Pass the hash':'https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/pass-the-hash-attack/',
  
  'Artikel: PAM dan  Just in time access':'https://cloudsecurityalliance.org/blog/2025/12/04/killing-standing-privileges-why-just-in-time-access-is-the-future-of-pam',
  
  'NIST 800-207: Zero Trust Architecture':'https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf',

  'Artikel: Vulnerability Assessment report':'https://docs.invicti.com/ie-is/sans-top-25-report',
  'Tools: Dradis pentest report':'https://dradis.com/solutions/reporting.html',
  'Contoh template report VA dan PT':'https://invia.com.au/App/media/sample%20vapt%20report.pdf',
  
  'Artikel: Mengenal incident response report':'https://zeltser.com/incident-response-report-template',
  'Contoh SANS incident response report':'https://www.sans.org/media/security-training/mgt512/secinc_forms.pdf',
  
  'Artikel: Buat report ke manajemen board':'https://mitratech.com/resource-hub/blog/reporting-risk-c-suite/',
  
  'Artikel: Runbooks, playbooks, SOP':'https://cutover.com/blog/differences-runbooks-playbooks-sops',
  
  'Artikel: Risk matrix':'https://www.metricstream.com/learn/what-is-risk-matrix.html',
  'Tools: PlantUML':'https://plantuml.com/',
  
  'Jurnal: komunikasi ke orang non teknis':'https://www.isaca.org/resources/isaca-journal/issues/2020/volume-3/communicating-technology-risk-to-nontechnical-people',
  'Artikel: Membuat deck presentasi':'https://creativelivesinprogress.com/articles/a-guide-to-creating-great-decks-and-presentations',
  'Youtube: Guide to Pitch deck':'https://youtu.be/sqfFKYvwFKc?si=qt7P9CXYplsJXA6C',
  
  'Youtube: Menjelaskan kebutuhan cybersecurity ke board':'https://youtu.be/dHxsJbWIxnQ?si=PuJxL7uYcHgMbI-O',
  'Youtube: Cybersecurity ROI':'https://youtu.be/plNBqKn3vCE?si=KcJM25f7gWofsFot',
  'Artikel: Business communication':'https://www.indeed.com/career-advice/career-development/importance-of-business-communication',
  
  'Artikel: Cybersecurity awareness':'https://www.osbckansas.gov/cybersecurity_resources/cybersecurity_awareness.pdf',
  'Artikel: security awareness training':'https://hoxhunt.com/guide/security-awareness-training',
  
  'Artikel: komunikasi keamanan dengan developer':'https://medium.com/@cyberpromagazine/bridging-the-gap-collaborative-cybersecurity-between-developers-and-security-teams-8e2e7da94cb5',
  'Artikel: meningkatkan komunikasi antar tim keamanan dan developer':'https://www.guardsquare.com/blog/how-mobile-app-developers-and-security-teams-can-better-communicate',
  'Komunitas: Toastmasters':'https://www.toastmasters.org/Find-a-Club/28675579-cybermasters',
  
  'Artikel: Strategi secure investment':'https://qubit.capital/blog/cybersecurity-fundraising',
  'Artikel: Tips security pich deck untuk investor':'https://www.godesignguru.com/blog/how-to-create-a-cybersecurity-pitch-deck-that-wins-investors-(with-examples)'
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

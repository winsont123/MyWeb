const portfolioData = {
    hero: {
        greeting: "Hi, I'm",
        name: "Winsont",
        subtitle: "Fullstack Developer | AI Engineer",
        cvLink: "https://drive.google.com/drive/folders/1RVFTzZM_fpC9UaHKpuqkrdNxo0ereG_T?usp=sharing", 
        background: "img/Utils/developer-bg.jpg"
    },

    about: {
        photo: "img/winsont.jpeg",
        description: "Halo, saya Winsont! Saya seorang Software & AI Engineer yang antusias memecahkan masalah rumit lewat kode. Selain dunia teknologi, saya punya minat besar di bidang finance dan pasar saham, yang membuat saya selalu tertantang mencari inovasi persimpangan AI di ekosistem finansial.Saya punya mental always learning dan pantang menyerah saat berhadapan dengan bug. Untuk menguji skill, saya aktif terjun ke berbagai perlombaan IT dan hackathon (seperti OJK Infinity hingga Gemastik). Di luar ngulik teknologi, saya rutin meluangkan waktu menjadi mentor dan mengajar programming di kampus, karena saya percaya ilmu akan makin tajam kalau dibagikan. Intinya, saya selalu siap beradaptasi, berkolaborasi, dan memberi impact!",
        education: {
            school: "Bina Nusantara (BINUS) University",
            degree: "Computer Science",
            period: "2024 - Present",
            gpa: "3.96" 
        }
    },

    experience: [
        {
            title: "Pretorian (Mentor) & Member - Bina Nusantara Computer Club (BNCC)",
            date: "2025 - 2026",
            description: "Dipercaya menjadi pengajar untuk membagikan dasar-dasar algoritma, fundamental & logika pemrograman, Data struktur ,dan sintaks C kepada sesama member."
        },
        {
            title: "Mentor - Student Advisory and Support Center (SASC)",
            date: "2024 - 2026",
            description: "Dipercaya menjadi mentor selama 3 periode untuk membimbing dan membantu pemahaman materi fundamental perkuliahan bagi mahasiswa. (beasiswa)"
        },
        {
            title: "Pengurus & Kepanitiaan - Keluarga Mahasiswa Buddhis Dhammavaddhana (KMBD)",
            date: "2025 - 2026",
            description: "Berperan aktif dalam kepengurusan KMBD. Terlibat dalam kepengurusan acara Perayaan Kathina 2025 yang dihadiri ratusan umat(>400)"
        },
        {
            title: "Social & Community Volunteer",
            date: "2024 - 2026",
            description: "Aktif menjadi relawan masyarakat. Terlibat dalam OMH 2025 untuk mengedukasi warga desa dalam pembuatan pupuk dan eco-enzyme, serta rutin menjadi relawan operasional Vihara dan perayaan Waisak."
        }
    ],

    achievements: [
        {
            title: "Top 10 Finalist - OJK Ekraf Infinity",
            date: "2025",
            description: "Mendobrak jajaran 10 besar bersaing dengan ratusan proyek dan startup profesional. Mengembangkan Tixchain: aplikasi ticketing anti-scam berbasis crowdfunding untuk event dan konser.",
            image: "img/Achievement/ojk.png" 
        },
        {
            title: "Finalist (ICT Business) - GEMASTIK",
            date: "2026 (Ongoing)",
            description: "Mengembangkan Conversational POS & CRM cerdas untuk mendigitalisasi operasional dan manajemen pelanggan pada UMKM serta warung.",
        },
        {
            title: "Juara Favorit - Microsoft Hackathon",
            date: "2025",
            description: "Berkompetisi mengembangkan solusi inovatif dalam waktu singkat dan berhasil meraih gelar Juara Favorit dengan produk MediTrack.",
            image: "img/Achievement/microsoft.png" 
        },
        {
            title: "Innovation Award - BRICS",
            date: "2026",
            description: "Meraih penghargaan inovasi melalui pengembangan platform matchmaking ampas/limbah industri yang diintegrasikan dengan alat (hardware) khusus.",
            image: "img/Achievement/brics.png" 
        },
        {
            title: "Juara Harapan 2 - UNNES Business Plan Competition",
            date: "2025",
            description: "Merancang 'Jejak', sebuah sistem inovatif untuk pelacakan jejak karbon (carbon tracking) sekaligus platform carbon selling.",
            image: "img/Achievement/uness.png" 
        },
        {
            title: "Semifinalist - Samsung Solve For Tommorow",
            date: "Ongoing",
            description: "Membawa inovasi Lokalloop:AI-Powered Circular Supply Chain Coordination Layer mengalahkan lebih dari ratusan tim ",
        },
        {
            title: "Finalist - Gunadarma Code Week",
            date: "2026",
            description: "Berhasil menjadi finalis dengan membawa prototipe solusi Conversational POS & CRM.",
        },
        {
            title: "Active Tech Competitor",
            date: "2024 - Present",
            description: "Peserta aktif yang terus mengasah skill problem-solving di berbagai ajang bergengsi seperti Find IT UGM Data Analysis Competition, Astrapay Hackathon, Elevate Hackathon, Garuda Hacks, Compfest UI AI Innovation, dan APICTA (On Going)."
        }
    ],

    projects: [
        {
            title: "LokalLoop (SFT Semifinalist)",
            description: "LokalLoop (Proyek Samsung SFT) adalah coordination layer rantai pasok sirkular yang mengorkestrasi ekosistem daur ulang plastik tanpa friksi aplikasi baru. Interaksi pengguna berjalan via WhatsApp API (NLP) dan drop-point cerdas IoT (Load Cell & PIN), yang datanya diolah oleh algoritma CVRP guna memetakan rute penjemputan kolektor informal secara dinamis. Material yang terkumpul kemudian diagregasi (Micro-Pooling) untuk memenuhi kuota pabrik industri, menciptakan siklus subsidi silang berkelanjutan yang didanai dari penyediaan laporan B2B ESG.",
            image: "" 
        },
        {
            title: "Retail Churn Analysis",
            description: "Proyek ini merupakan sistem machine learning untuk memprediksi churn pelanggan e-commerce menggunakan ekstraksi fitur RFMT dan strategi Walk-Forward Validation guna menangani concept drift secara dinamis. Algoritma XGBoost diimplementasikan sebagai model utama karena terbukti paling optimal dalam menyeimbangkan efisiensi komputasi komersial dengan skor AUC-ROC dan Precision tertinggi. Sistem ini menghasilkan prediksi operasional yang tangguh dan berskala besar, sekaligus efektif menyelamatkan anggaran bisnis dari pemborosan promosi yang salah sasaran.",
            image: "" 
        },
        {
            title: "Tixchain (OJK Ekraf Infinity)",
            description: "tixChain adalah platform ticketing dan pra-penjualan hybrid (Web2.5) berbasis blockchain Base yang memberdayakan kreator independen lewat sistem crowdfunding aman, perlindungan anti-calo (profit cap), serta pembagian royalti otomatis tanpa hambatan gas fee bagi penggemar. Platform ini mengintegrasikan smart contract Solidity dan Coinbase Smart Wallet (Account Abstraction) di jaringan Base dengan infrastruktur Web2 seperti Node.js/Next.js serta gerbang pembayaran Midtrans untuk menghadirkan transaksi instan yang transparan dan trustless.",
            image: ""
        },
        {
            title: "WarungAI / ChatToko",
            description: "Sistem ini adalah platform ERP dan POS hibrida yang menjembatani operasional karyawan lapangan via WhatsApp (zero learning curve) dengan pusat kendali analitik Web Dashboard berkecepatan tinggi khusus untuk pengusaha grosir. Melalui mesin pemrosesan bahasa alami (NLP), bot secara cerdas mengekstrak pesan suara atau teks berantakan menjadi data terstruktur yang mampu menangani dinamika logistik kompleks seperti penyusutan barang dan harga ganda. Seluruh arsitektur tangguh ini dibangun di atas tech stack Node.js, MongoDB, dan pustaka integrasi WhatsApp untuk menjamin skalabilitas tingkat korporat dengan biaya operasional minimal.",
            image: ""
        },
        {
            title: "Stockbit NLP Sentiment Analysis",
            description: "Proyek ini mengembangkan sistem analisis sentimen untuk mengklasifikasikan komentar investor ritel di platform Stockbit ke dalam kelas sentimen positif, negatif, dan netral guna memahami dinamika emosi pasar. Kami melakukan studi komparasi performa antara arsitektur pembelajaran mesin klasik (TF-IDF dengan SVM dan Random Forest) melawan arsitektur Transformer (FinBERT dan Indo-RoBERTa) untuk menguji ketahanan model terhadap domain shift dan bahasa slang bursa. Keseluruhan pipeline proyek ini dibangun menggunakan tech stack utama berupa Python, Scikit-Learn, PyTorch, Hugging Face Transformers, Sastrawi, model bahasa Qwen 2.5-7B sebagai pelabel otomatis, serta Streamlit untuk deployment aplikasi berbasis web.",
            image: "" 
        },
        {
            title: "Scan & Go",
            description: "Scan & Go adalah sistem kasir mandiri (self-checkout) berbasis ponsel pintar bagi peritel skala kecil dan menengah yang mengeliminasi antrean tanpa mengharuskan investasi perangkat keras mahal. Inovasi ini memanfaatkan kecerdasan buatan sebagai lapisan verifikasi transaksi guna mencocokkan wujud fisik barang dari kamera pelanggan dengan daftar belanjaan mereka secara seketika. Eksekusi sistem ini didukung oleh tumpukan teknologi modular yang mencakup model deteksi objek YOLO (Ultralytics) untuk inferensi visual, Next.js pada sisi antarmuka, FastAPI sebagai backend, serta Docker Compose untuk orkestrasi deployment.",
            image: "" 
        },
        {
            title: "GasKerja.AI",
            description: "gasKerja.AI adalah purwarupa platform rekrutmen Talent Intelligence yang mengevaluasi kandidat secara holistik melalui analisis skill gap dari CV dan simulasi wawancara teknis interaktif. Pengembangan antarmukanya dibangun menggunakan HTML, CSS Bootstrap, dan Vanilla JavaScript, lengkap dengan integrasi Web Speech API untuk menangkap respons suara pelamar secara real-time. Sebagai pusat pemrosesan logikanya, sistem ini mengandalkan backend Node.js dan Express.js yang terhubung langsung dengan Azure OpenAI serta Azure Document Intelligence untuk menghasilkan penilaian berbasis penalaran AI.",
            image: "" 
        },
        {
            title: "MediTrack",
            description: "Meditrack adalah ekosistem pemantau kesehatan pintar yang memadukan dispenser obat IoT proaktif dengan aplikasi seluler untuk memastikan kepatuhan konsumsi obat serta pencatatan gaya hidup harian secara otomatis. Solusi ini ditenagai dispenser berbasis mikrokontroler dengan sensor jarak dan sistem panggilan darurat, yang terhubung langsung ke aplikasi seluler terintegrasi. Pemrosesan data mengandalkan Azure AI Service untuk validasi visual obat, chatbot rekomendasi OTC, dan pengenalan nutrisi makanan, serta Microsoft Power BI untuk visualisasi analitik kesehatan yang komprehensif bagi pengguna dan dokter.",
            image: "" 
        },
        {
            title:"Many More",
            description: "https://github.com/winsont123 for more project"
        }
    ],

    skills: {
        technical: [
            // Core Languages
            "Python", "JavaScript", "PHP", "C / C++",
            "Machine Learning", 
            "Deep Learning & CV (PyTorch, YOLO)", 
            "NLP & LLMs (Hugging Face)", 
            "Data Visualization (Power BI)",
            "Node.js & Express.js", 
            "Next.js & React Ecosystem",
            "FastAPI & CodeIgniter", 
            "HTML/CSS & Bootstrap",
            "MongoDB & MySQL",  
            "Docker", 
            "Git & GitHub"
        ],
        languages: ["Indonesian (Native)", "English (Professional Working Proficiency)", "Mandarin"]
    },

    contacts: [
        { name: "WhatsApp",  icon: "img/Icon/icons8-whatsapp-480.png",  link: "https://wa.me/6282288883147" },
        { name: "Email",     icon: "img/Icon/icons8-gmail-480.png",     link: "mailto:winsont.desvio@binus.ac.id" },
        { name: "Instagram", icon: "img//Icon/icons8-instagram-240.png", link: "https://instagram.com/winsontwinsont" }
    ],

    footer: {
        name: "Winsont",
        credits: [
            "Gmail icon by Icons8",
            "WhatsApp icon by Icons8",
            "Instagram icon by Icons8"
        ]
    }
};
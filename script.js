// render bagian main or hero
const heroName = document.querySelector(".judul h1");
const heroSub = document.querySelector(".subtitle");
const heroCV = document.querySelector(".btn-cv");
const heroSection = document.querySelector("#home");
const ketik = document.querySelector(".ketik");  

const fullName = `${portfolioData.hero.greeting} ${portfolioData.hero.name}`;

if (portfolioData.hero.background) {
    heroSection.style.backgroundImage = `url('${portfolioData.hero.background}')`;
}
heroSub.textContent = portfolioData.hero.subtitle;
heroCV.href = portfolioData.hero.cvLink;

// render bagian about
const aboutPhoto = document.querySelector("#aboutMe .face img");
aboutPhoto.src = portfolioData.about.photo;
document.querySelector(".about-desc").textContent = portfolioData.about.description;

const edu = portfolioData.about.education;
document.querySelector(".edu-text").innerHTML =
    `<strong>${edu.school}</strong><br>${edu.degree} | ${edu.period}<br> <strong>Current GPA: ${edu.gpa}</strong`;


// render bagian experience
const expList = document.getElementById("experienceList");
portfolioData.experience.forEach(item => {
    const el = document.createElement("div");
    el.className = item.image ? "timeline-item with-image" : "timeline-item";

    const thumbHTML = item.image
        ? `<img class="thumb" src="${item.image}" alt="${item.title}">`
        : "";

    el.innerHTML = `
        ${thumbHTML}
        <div class="info">
            <h3>${item.title}</h3>
            <span class="date">${item.date}</span>
            <p>${item.description}</p>
        </div>
    `;
    expList.appendChild(el);
});

// render bagian achievement
const achList = document.getElementById("achievementsList");
portfolioData.achievements.forEach(item => {
    const el = document.createElement("div");
    el.className = item.image ? "timeline-item with-image" : "timeline-item";

    const thumbHTML = item.image
        ? `<img class="thumb" src="${item.image}" alt="${item.title}">`
        : "";

    el.innerHTML = `
        ${thumbHTML}
        <div class="info">
            <h3>${item.title}</h3>
            <span class="date">${item.date}</span>
            <p>${item.description}</p>
        </div>
    `;
    achList.appendChild(el);
});

// render bagian project
const projList = document.getElementById("projectList");
portfolioData.projects.forEach(item => {
    const el = document.createElement("div");
    el.className = "card";

    // kalau ga ada gambar, bikin placeholder dengan inisial judul
    const initial = item.title.charAt(0).toUpperCase();

    const gambarHTML = item.image
        ? `<img src="${item.image}" alt="${item.title}">`
        : `<div class="card-placeholder"><span>${initial}</span></div>`;

    el.innerHTML = `
        <div class="gambar ${item.image ? "" : "no-image"}">
            ${gambarHTML}
        </div>
        <div class="text">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;
    projList.appendChild(el);
});

// render bagian skill
const techBox = document.getElementById("techSkills");
portfolioData.skills.technical.forEach(s => {
    const span = document.createElement("span");
    span.textContent = s;
    techBox.appendChild(span);
});

const langBox = document.getElementById("langSkills");
portfolioData.skills.languages.forEach(s => {
    const span = document.createElement("span");
    span.textContent = s;
    langBox.appendChild(span);
});

// render bagian kontak
const contactBox = document.getElementById("contactList");
portfolioData.contacts.forEach(c => {
    const a = document.createElement("a");
    a.href = c.link;
    a.target = "_blank";
    a.setAttribute("aria-label", c.name);
    a.innerHTML = `
        <img src="${c.icon}" alt="${c.name}">
        <span class="label">${c.name}</span>
    `;
    contactBox.appendChild(a);
});

// render footer
document.getElementById("footerName").textContent = portfolioData.footer.name;
const creditsList = document.getElementById("footerCredits");
portfolioData.footer.credits.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    creditsList.appendChild(li);
});

// scroll navbar
const navEl = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navEl.classList.add("scrolled");
    } else {
        navEl.classList.remove("scrolled");
    }
});

// navbar toggle
const ham = document.querySelector('.hamburger');
const link = document.querySelector('.link');
const posisi = link.querySelectorAll("ul li a");

ham.addEventListener('click', () => {
    ham.classList.toggle('aktif');
    link.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

posisi.forEach((a) => {
    a.addEventListener('click', () => {
        link.classList.remove('active');
        ham.classList.remove('aktif');
        document.body.classList.remove('no-scroll');
    });
});

// animasi ketik
const namaS = [...fullName];
heroName.textContent = "";

let htmlContent = "";
namaS.forEach((huruf) => {
    htmlContent += `<span>${huruf === " " ? "&nbsp;" : huruf}</span>`;
});
heroName.innerHTML = htmlContent;

let tinggiNama = getComputedStyle(heroName).height;
ketik.style.height = tinggiNama;

let char = 0;
const spans = heroName.querySelectorAll('span');

let timer = setInterval(() => {
    spans[char].classList.add('muncul');
    char++;
    if (char === namaS.length) {
        clearInterval(timer);
    }
}, 250);

// resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth > 603) {
        link.classList.remove('active');
        ham.classList.remove('aktif');
        document.body.classList.remove('no-scroll');
    }

    tinggiNama = getComputedStyle(heroName).height;
    ketik.style.height = tinggiNama;
});

// animasi scroll reveal
function setupReveal(selector) {
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("reveal-in");
                }, index * 120);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    items.forEach(item => observer.observe(item));
}

setupReveal("#experience .timeline-item");
setupReveal("#achievements .timeline-item");
setupReveal("#projects .card");
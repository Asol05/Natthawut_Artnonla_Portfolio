let modal;
let track;
let dotsWrap;
let titleEl;
let softEl;
let polyEl;
let yearEl;
let descEl;
let closeBtn;
let prevBtn;
let nextBtn;
let images = [];
let current = 0;

window.onload = () => {
    modal = document.getElementById('model-modal');
    track = document.getElementById('gallery-track');
    dotsWrap = document.getElementById('gallery-dots');
    titleEl = document.getElementById('modal-title');
    softEl = document.getElementById('modal-software');
    polyEl = document.getElementById('modal-polygons');
    yearEl = document.getElementById('modal-year');
    descEl = document.getElementById('modal-desc');
    closeBtn = document.getElementById('modal-close-btn');
    prevBtn = document.getElementById('gallery-prev');
    nextBtn = document.getElementById('gallery-next');

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    });

    closeBtn.addEventListener('click', closeModal);

    /* Close on backdrop click */
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });

    /* Close on Escape */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    /* ---- Wire up cards ---- */
    document.querySelectorAll('.model-card').forEach(card => {
        const btn = card.querySelector('.model-view-btn');
        if (btn) btn.addEventListener('click', () => openModal(card));
    });
}

function buildGallery(imgs) {
    images = imgs;
    current = 0;
    track.innerHTML = '';
    dotsWrap.innerHTML = '';

    imgs.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Render ' + (i + 1);
        track.appendChild(img);

        const dot = document.createElement('button');
        dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to image ' + (i + 1));
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
    });

    updateSlide();
}

function updateSlide() {
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dotsWrap.querySelectorAll('.gallery-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
    });
    prevBtn.style.opacity = current === 0 ? '0.3' : '1';
    nextBtn.style.opacity = current === images.length - 1 ? '0.3' : '1';
}

function goTo(index) {
    current = Math.max(0, Math.min(index, images.length - 1));
    updateSlide();
}

/* ---- Touch / Swipe ---- */
let touchStartX = 0;

/* ---- Open / Close ---- */
function openModal(card) {
    const imgs = JSON.parse(card.dataset.images || '["#"]');
    buildGallery(imgs);
    titleEl.textContent = card.dataset.title || '';
    softEl.textContent = card.dataset.software || '';
    polyEl.textContent = card.dataset.polygons || '';
    yearEl.textContent = card.dataset.year || '';
    descEl.textContent = card.dataset.desc || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
}

function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}
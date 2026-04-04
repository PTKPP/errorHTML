document.getElementById('year').textContent = new Date().getFullYear();

const card = document.querySelector('.mac-window');

function updateCardTransform(x, y, rect) {
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
}

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    updateCardTransform(e.clientX - rect.left, e.clientY - rect.top, rect);
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});
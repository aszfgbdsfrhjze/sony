let currentX = 0;
let currentY = 0;
const kot = document.querySelector('.kotik');

function getBoundaries() {
    const rect = kot.getBoundingClientRect();
    return {
        // Максимальные смещения, при которых элемент остаётся в видимой области
        left: -rect.left,
        right: window.innerWidth - rect.right,
        top: -rect.top,
        bottom: window.innerHeight - rect.bottom
    };
}

kot.addEventListener('click', function() {
    const maxOffset = 200;
    const boundaries = getBoundaries();
    
    // Генерируем смещение с учётом текущих границ
    const offsetX = Math.max(-maxOffset, Math.min(maxOffset, boundaries.left, boundaries.right));
    const offsetY = Math.max(-maxOffset, Math.min(maxOffset, boundaries.top, boundaries.bottom));
    
    // Обновляем позицию с ограничениями
    currentX += (Math.random() * offsetX * 2) - offsetX;
    currentY += (Math.random() * offsetY * 2) - offsetY;

    // Применяем трансформацию
    this.style.transform = `translate(${currentX}px, ${currentY}px)`;
});

window.addEventListener('resize', () => {
    kot.style.transform = `translate(${currentX}px, ${currentY}px)`;
});
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.country-card');

    cards.forEach(card => {
        const title = card.querySelector('.country-title');
        const intro = card.querySelector('.intro');
        const details = card.querySelector('.details');

        title.addEventListener('click', () => {
            // 他のカードが開いている場合は閉じる
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.querySelector('.intro').classList.remove('open');
                    otherCard.querySelector('.details').classList.remove('open');
                }
            });

            // 現在のカードのアコーディオンをトグル
            intro.classList.toggle('open');
            details.classList.toggle('open');
        });
    });
});

document.querySelectorAll('.at-subtitle').forEach(function(heading) {
    heading.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.classList.contains('open')) {
            content.style.maxHeight = null;
            content.classList.remove('open');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add('open');
        }
    });
});

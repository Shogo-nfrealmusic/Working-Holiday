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
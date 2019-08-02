function trackClick(category, label) {
    gtag('event', 'click', {
        event_category: category,
        event_label: label,
    });
}

function init() {
    const navLinks = $('nav a');
    navLinks.click(e => trackClick('nav', $(e.currentTarget).data('ga-label')));

    const inlineLinks = $('p a');
    inlineLinks.click(e => trackClick('inline', $(e.currentTarget).data('ga-label')));
}

window.onload = init;

(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      nav.dataset.open = String(!open);
      document.body.style.overflow = open ? '' : 'hidden';
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.dataset.open = 'false';
        document.body.style.overflow = '';
      });
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      const fallback = image.dataset.fallback;
      if (fallback && image.src !== new URL(fallback, document.baseURI).href) {
        image.src = fallback;
      }
    });
  });

  const form = document.querySelector('[data-enquiry-form]');
  if (form) {
    const status = form.querySelector('.form-status');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const required = ['name', 'email', 'service', 'details'];
      const missing = required.filter((key) => !String(data.get(key) || '').trim());
      if (missing.length) {
        status.textContent = 'Please complete the required fields before continuing.';
        return;
      }

      const subject = `Task-B enquiry — ${data.get('service')}`;
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Phone: ${data.get('phone') || 'Not provided'}`,
        `Service: ${data.get('service')}`,
        `Dates: ${data.get('dates') || 'Not confirmed'}`,
        `Location: ${data.get('location') || 'Not confirmed'}`,
        `Yacht type and length: ${data.get('yacht') || 'Not confirmed'}`,
        `Number of people: ${data.get('people') || 'Not confirmed'}`,
        '',
        'Assignment details:',
        data.get('details')
      ].join('\n');

      status.textContent = 'Opening your email application with the enquiry details.';
      window.location.href = `mailto:bart@task-b.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();

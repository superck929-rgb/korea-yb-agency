/* ========================================
   POPUP MODAL - Contact Info
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('contactModal');
  if (!overlay) return;

  // Open modal
  document.querySelectorAll('[data-open-modal="contact"]').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal - close button
  overlay.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close modal - click outside
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Close modal - ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('show')) {
      closeModal();
    }
  });

  function closeModal() {
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
});

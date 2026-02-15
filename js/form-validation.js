/* ========================================
   FORM VALIDATION - Apply Page
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('applyForm');
  if (!form) return;

  const submitBtn = form.querySelector('.form-submit');

  // Validation rules
  const validators = {
    name: (v) => v.trim().length >= 2,
    phone: (v) => /^[0-9\-\+\(\)\s]{7,20}$/.test(v.trim()),
    lineId: (v) => v.trim().length >= 2,
    email: (v) => v === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    productName: (v) => v.trim().length >= 1,
    quantity: (v) => parseInt(v) > 0,
    addressStreet: (v) => v.trim().length >= 5,
    addressCity: (v) => v.trim().length >= 1,
  };

  // Show/hide error for a field
  function showError(field, show) {
    const input = form.querySelector(`[name="${field}"]`);
    if (!input) return;
    const errorEl = input.parentElement.querySelector('.form-error');
    if (show) {
      input.classList.add('error');
      if (errorEl) errorEl.classList.add('show');
    } else {
      input.classList.remove('error');
      if (errorEl) errorEl.classList.remove('show');
    }
  }

  // Validate single field
  function validateField(field) {
    const input = form.querySelector(`[name="${field}"]`);
    if (!input || !validators[field]) return true;
    const valid = validators[field](input.value);
    showError(field, !valid);
    return valid;
  }

  // Validate all fields
  function validateAll() {
    let allValid = true;
    for (const field of Object.keys(validators)) {
      if (!validateField(field)) {
        allValid = false;
      }
    }

    // Check agreement checkbox
    const agreeBox = form.querySelector('[name="agree"]');
    if (agreeBox && !agreeBox.checked) {
      allValid = false;
      agreeBox.parentElement.style.color = '#E74C3C';
    } else if (agreeBox) {
      agreeBox.parentElement.style.color = '';
    }

    return allValid;
  }

  // Real-time validation on blur
  form.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('blur', function () {
      const field = this.getAttribute('name');
      if (field && validators[field]) {
        validateField(field);
      }
    });

    // Clear error on input
    input.addEventListener('input', function () {
      this.classList.remove('error');
      const errorEl = this.parentElement.querySelector('.form-error');
      if (errorEl) errorEl.classList.remove('show');
    });
  });

  // Form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateAll()) {
      // Scroll to first error
      const firstError = form.querySelector('.form-input.error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }
      return;
    }

    // Disable button
    submitBtn.disabled = true;
    const lang = localStorage.getItem('site-language') || 'ko';
    submitBtn.textContent = lang === 'ko' ? '전송 중...' : '提交中...';

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    // Simulate form submission (replace with EmailJS or real backend)
    setTimeout(function () {
      // Hide form, show success
      form.style.display = 'none';
      const successEl = document.getElementById('formSuccess');
      if (successEl) {
        successEl.classList.add('show');
        successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Log data for development
      console.log('Form submitted:', data);
    }, 1500);
  });
});

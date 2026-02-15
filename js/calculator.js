/* ========================================
   PRICE CALCULATOR
   KRW → TWD conversion + fees
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
  const calcBtn = document.getElementById('calcBtn');
  if (!calcBtn) return;

  // Exchange rate: 1 KRW ≈ 0.024 TWD (approximate)
  const KRW_TO_TWD = 0.024;

  // Service fee rates by price bracket
  function getServiceFeeRate(krwPrice) {
    if (krwPrice <= 50000) return 0.15;       // 15%
    if (krwPrice <= 100000) return 0.12;      // 12%
    if (krwPrice <= 300000) return 0.10;      // 10%
    if (krwPrice <= 500000) return 0.08;      // 8%
    return 0.06;                               // 6%
  }

  // Estimated shipping per item (TWD)
  function getShippingEstimate(quantity) {
    const baseShipping = 150; // TWD per item
    if (quantity >= 5) return baseShipping * 0.8;
    if (quantity >= 3) return baseShipping * 0.9;
    return baseShipping;
  }

  calcBtn.addEventListener('click', function () {
    const priceInput = document.getElementById('calcPrice');
    const qtyInput = document.getElementById('calcQty');
    const customsSelect = document.getElementById('calcCustoms');
    const resultDiv = document.getElementById('calcResult');

    if (!priceInput || !qtyInput || !customsSelect || !resultDiv) return;

    const krwPrice = parseFloat(priceInput.value) || 0;
    const quantity = parseInt(qtyInput.value) || 1;
    const customsRate = parseFloat(customsSelect.value) || 0;

    if (krwPrice <= 0) {
      priceInput.style.borderColor = '#E74C3C';
      priceInput.focus();
      return;
    }
    priceInput.style.borderColor = '#E0E0E0';

    // Calculate
    const totalKRW = krwPrice * quantity;
    const productTWD = totalKRW * KRW_TO_TWD;
    const shippingTWD = getShippingEstimate(quantity) * quantity;
    const customsTWD = productTWD * customsRate;
    const serviceTWD = productTWD * getServiceFeeRate(krwPrice);
    const totalTWD = productTWD + shippingTWD + customsTWD + serviceTWD;

    // Display results
    document.getElementById('resultProduct').textContent = 'NT$ ' + Math.round(productTWD).toLocaleString();
    document.getElementById('resultShipping').textContent = 'NT$ ' + Math.round(shippingTWD).toLocaleString();
    document.getElementById('resultCustoms').textContent = 'NT$ ' + Math.round(customsTWD).toLocaleString();
    document.getElementById('resultService').textContent = 'NT$ ' + Math.round(serviceTWD).toLocaleString();
    document.getElementById('resultTotal').textContent = 'NT$ ' + Math.round(totalTWD).toLocaleString();

    resultDiv.classList.add('show');

    // Smooth scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Remove error on input
  const priceInput = document.getElementById('calcPrice');
  if (priceInput) {
    priceInput.addEventListener('input', function () {
      this.style.borderColor = '#E0E0E0';
    });
  }
});

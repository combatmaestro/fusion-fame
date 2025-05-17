// script.js
 async function sendContactQuick({ formId, actionUrl, statusId }) {
    console.log(actionUrl)
    // const isValid = validateContact(formId);
    // if (!isValid) return;
  
    // const form = document.getElementById(formId);
    // const formData = new FormData(form);
  
    // try {
    //   const response = await fetch(actionUrl, {
    //     method: 'POST',
    //     body: formData
    //   });
  
    //   const result = await response.text(); // or `await response.json()` if your backend returns JSON
    //   document.getElementById(statusId).innerHTML = result;
    // } catch (error) {
    //   document.getElementById(statusId).innerHTML = "An error occurred. Please try again.";
    // }
  }
  
//   export function validateContact(formId) {
//     const form = document.getElementById(formId);
//     let valid = true;
  
//     const requiredFields = form.querySelectorAll('[data-required]');
//     requiredFields.forEach(input => {
//       const infoEl = document.getElementById(`${input.name}-info`);
//       infoEl.textContent = '';
//       input.style.backgroundColor = '';
  
//       if (!input.value.trim()) {
//         infoEl.textContent = '(required)';
//         input.style.backgroundColor = '#FFFFDF';
//         valid = false;
//       }
  
//       if (input.type === 'email' && input.value) {
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailPattern.test(input.value)) {
//           infoEl.textContent = '(invalid)';
//           input.style.backgroundColor = '#FFFFDF';
//           valid = false;
//         }
//       }
//     });
  
//     return valid;
//   }
  
//   export function refreshCaptcha(captchaId = 'captcha_code') {
//     const captcha = document.getElementById(captchaId);
//     captcha.src = `captcha_code.php?${Date.now()}`; // bust cache
//   }
  
// Client Side Validation
document.addEventListener('DOMContentLoaded', () => {

    const fullNameInput = document.querySelector('input[name="fullName"]');
    const agentCodeInput = document.querySelector('input[name="agentCode"]');
    const phoneInput = document.querySelector('input[name="phone"]');
    const profileFile = document.querySelector('input[name="profile"]');
    const submitBtn = document.querySelector('button[type="submit"]');
    //const fileType = document.querySelector('select');
    const profileLabel = document.querySelector('label.profile');

    fullNameInput.addEventListener('input', validateName);
    agentCodeInput.addEventListener('input', validateCode);
    phoneInput.addEventListener('input', validatePhone);
    profileFile.addEventListener('change', validateProfile);

    function validateName() {
        const name = fullNameInput.value.trim();
        const errorSpan = document.getElementById('nameError');
        if (name === '') {
            errorSpan.textContent = 'Full name is required';
            fullNameInput.classList.add('input-error');
        } else if (!isValidName(name)) {
            errorSpan.textContent = 'Full name can only contain letters.';
            fullNameInput.classList.add('input-error');
        } else {
            errorSpan.textContent = '';
            fullNameInput.classList.remove('input-error');
        }
        toggleSubmitButton();
    }

    function validateCode() {
        const code = agentCodeInput.value.trim();
        const errorSpan = document.getElementById('codeError');
        if (code === '') {
            errorSpan.textContent = 'Super Agent Code is required.';
            agentCodeInput.classList.add('input-error');
        } else if (!isValidCode(code)) {
            errorSpan.textContent = 'Super Agent Code must be 5 digits.';
            agentCodeInput.classList.add('input-error');
        } else {
            errorSpan.textContent = '';
            agentCodeInput.classList.remove('input-error');
        }
        toggleSubmitButton();
    }

    function validatePhone() {
        const phone = phoneInput.value.trim();
        const errorSpan = document.getElementById('phoneError');
        const carrierCode = phone.substring(0, 2); // Get the first two digits of the phone number
        if (phone === '') {
            errorSpan.textContent = 'Phone number is required';
            phoneInput.classList.add('input-error');
        } else if (phone.length !== 8 || !isValidPhone(phone)) {
            errorSpan.textContent = 'Phone number must be 8 numeric characters only.';
            phoneInput.classList.add('input-error');
        } else if (
            carrierCode !== '79' &&  carrierCode !== '76' &&  carrierCode !== '72' &&  carrierCode !== '71' && //Econet Leo
            carrierCode !== '77' && //Onamob
            carrierCode !== '69' && carrierCode !== '68' && carrierCode !== '67' && carrierCode !== '66' && //Lumitel
            carrierCode !== '65' &&  carrierCode !== '62' &&  carrierCode !== '61'
            ){
            errorSpan.textContent = 'Phone number is not valid for our country.';
            phoneInput.classList.add('input-error');
        } else {
            errorSpan.textContent = '';
            phoneInput.classList.remove('input-error');
        }
        toggleSubmitButton();
    }
    

    function validateProfile() {
        const profile = profileFile.files[0];
        const errorSpan = document.getElementById('profileError');
        if (profileFile.files.length === 0) {
            errorSpan.textContent = 'Please select a profile';
            profileLabel.classList.add('label-error');
        } else {
            const extension = profile.name.split('.').pop().toLowerCase();
            if (!isValidProfile(extension)) {
                errorSpan.textContent = 'Only JPG, JPEG, or PNG avatar are allowed.';
                profileLabel.classList.add('label-error');
            } else {
                errorSpan.textContent = '';
                profileLabel.classList.remove('label-error');
            }
        }
        toggleSubmitButton();
    }

    function toggleSubmitButton() {
        if (isFormValid()) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    }
    
    function isFormValid() {
        return (
            fullNameInput.value.trim() !== '' &&
            isValidName(fullNameInput.value.trim()) &&
            agentCodeInput.value.trim() !== '' &&
            isValidCode(agentCodeInput.value.trim()) &&
            phoneInput.value.trim() !== '' &&
            isValidPhone(phoneInput.value.trim()) &&
            profileFile.files.length > 0 &&
            isValidProfile(profileFile.files[0].name.split('.').pop().toLowerCase())
        );
    }
    
    function isValidCode(code) {
        const codeRegex = /^\d{5}$/;
        return codeRegex.test(code);
    }

    function isValidName(name) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^\d{8}$/;
        return phoneRegex.test(phone);
    }

    function isValidProfile(extension) {
        const validExtensions = ['jpg', 'jpeg', 'png'];
        return validExtensions.includes(extension);
    }
});

// delete input value if the browser is refreshed
window.onload = () => {
    
        let allInputs = document.querySelectorAll('input');
        let fileType = document.querySelectorAll('.fileType');
        allInputs.forEach(input => {
            input.value = '';
            if (input.type === 'file') {
                input.value = '';
                fileType.value = 'image';
            }
        });
        
}

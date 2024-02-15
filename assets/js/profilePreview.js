
// ================= Preview the profile ================
let profileInput = document.getElementById("profile");
let profilePrev = document.querySelector(".profile-prev");
let profilePrev2 = document.querySelector(".user-img img");
const profileLabel = document.querySelector('.profile');
const validExtensions = ["jpg", "jpeg", "png"];

profileInput.addEventListener('change', (event) => {
    const defaultIcon = '<span class="material-symbols-outlined"> photo </span>';
    const filename = event.target.value.split('\\').pop();
    const maxLength = 15;

    // Split if filename exceeds maximum length
    let formattedFilename = filename.length > maxLength ?
        filename.slice(0, maxLength - 3) + '...' + filename.slice(-3) :
        filename;

    profileLabel.innerHTML = defaultIcon + ' ' + formattedFilename;

    const profileFile = profileInput.files[0];
    const extension = profileFile ? profileFile.name.split('.').pop().toLowerCase() : '';

    if (profileFile && validExtensions.includes(extension)) {
        profilePrev.src = URL.createObjectURL(profileFile);
        profilePrev2.src = URL.createObjectURL(profileFile);
    } else {
        profilePrev.src = 'assets/images/documents/default-user-avatar.svg';
        profilePrev2.src = 'assets/images/documents/default-user-avatar.svg';
    }
});
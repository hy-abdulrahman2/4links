document.addEventListener('DOMContentLoaded', function () {
    // Function to show toast message

    function showToast(type, message) {

    
    
        // Show the specific toast
        let toast = document.querySelector(`#toast-${type}`);
        toast.querySelector('.toast-message').innerText = message;
        toast.classList.remove('hidden');
    
        // Hide the toast after a certain time
        setTimeout(function () {
            toast.classList.add('hidden');
        }, 5000); // Hide after 5 seconds
    }
    
// Event listener for toast close buttons
let closeButtons = document.querySelectorAll('.toast button[aria-label="Close"]');
closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        let parentToast = this.closest('.toast');
        parentToast.classList.add('hidden');
    });
});



// Login button functionality
let loginBtn = document.querySelector('#login-btn');
let userNameLinkInput = document.querySelector('#userNameLink');
let imgLinkInput = document.querySelector('#imgLink');
let loginPage = document.querySelector('.login-page');

loginBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let userName = userNameLinkInput.value;
    let imgFile = imgLinkInput.files[0];

    // Check if both username and image are provided
    if (userName.trim() !== '' && imgFile) {
        let fileExtension = imgFile.name.split('.').pop().toLowerCase();
        if (['jpg', 'jpeg', 'webp', 'svg', 'png', 'gif'].includes(fileExtension)) {
            let reader = new FileReader();

            reader.onload = function (event) {
                // Set username as inner text for elements with class .userName
                let userNames = document.querySelectorAll('.userName');
                userNames.forEach(function (userNameElement) {
                    userNameElement.innerText = userName;
                });

                // Set img src for elements with class .imgBtn
                let imgBtns = document.querySelectorAll('.imgBtn');
                imgBtns.forEach(function (imgBtn) {
                    imgBtn.setAttribute('src', event.target.result);
                });

                // Hide login page
                loginPage.classList.add('hidden');

                // Show success toast
                showToast('success', 'Login successfully.');
            };

            reader.readAsDataURL(imgFile);
        } else {
            // Show error toast for invalid image file
            showToast('warning', 'Please select a valid image file.');
        }
    } else {
        // Show error toast for incomplete login details
        showToast('danger', 'Please provide both username and image.');
    }
});


// Update image source as soon as an image is selected
imgLinkInput.addEventListener('change', function (event) {
    let imgFile = event.target.files[0];
    if (imgFile) {
        let reader = new FileReader();

        reader.onload = function (event) {
            let imgBtns = document.querySelectorAll('.imgBtn');
            imgBtns.forEach(function (imgBtn) {
                imgBtn.setAttribute('src', event.target.result);
            });
        };

        reader.readAsDataURL(imgFile);
    }
});
// Add-data button functionality
let addDataBtn = document.querySelector('#add-data');
let githubLinkInput = document.querySelector('#githubLink');
let linkedinLinkInput = document.querySelector('#linkedinLink');
let stackoverflowLinkInput = document.querySelector('#stackoverflowLink');
let portfolioLinkInput = document.querySelector('#portfolioLink');

addDataBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Function to extract domain from URL
    function extractDomain(url) {
        let domain;
        // Find & remove protocol (http, ftp, etc.) and get domain
        if (url.indexOf("://") > -1) {
            domain = url.split('/')[2];
        } else {
            domain = url.split('/')[0];
        }
        // Find & remove port number
        domain = domain.split(':')[0];
        return domain;
    }

    // Get input values
    let githubLink = githubLinkInput.value;
    let linkedinLink = linkedinLinkInput.value;
    let stackoverflowLink = stackoverflowLinkInput.value;
    let portfolioLink = portfolioLinkInput.value;

    // Set href attributes of buttons with extracted domain
    let githubBtn = document.querySelector('#githubBtn');
    let linkedinBtn = document.querySelector('#linkedinBtn');
    let stackoverflowBtn = document.querySelector('#stackoverflowBtn');
    let portfolioBtn = document.querySelector('#portfolioBtn');

    // Extract domain from input values
    let githubDomain = extractDomain(githubLink);
    let linkedinDomain = extractDomain(linkedinLink);
    let stackoverflowDomain = extractDomain(stackoverflowLink);
    let portfolioDomain = extractDomain(portfolioLink);

    // Set href attributes of buttons with full URL
    githubBtn.setAttribute('href', githubLink);
    linkedinBtn.setAttribute('href', linkedinLink);
    stackoverflowBtn.setAttribute('href', stackoverflowLink);
    portfolioBtn.setAttribute('href', portfolioLink);

    // Clear input fields
    githubLinkInput.value = '';
    linkedinLinkInput.value = '';
    stackoverflowLinkInput.value = '';
    portfolioLinkInput.value = '';

    // Show success toast
    showToast('success', 'Data added successfully!');
});

    

    let copy = document.getElementById('copy-link');
let copyLink = document.getElementById('user-link');

copy.addEventListener('click', function(){
    var textarea = document.createElement('textarea');
    textarea.value = copyLink.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    // Show success toast after copying
    showToast('success', 'Link copied!');
});

});

// Get all the test-section-header elements
const testSectionHeaders = document.querySelectorAll('.test-section-header');

// Add a click event listener to each test-section-header
testSectionHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    // Toggle the 'open' class on the header
    header.classList.toggle('open');

    // Get the corresponding test-section-content element
    const contentElement = header.nextElementSibling;

    // Toggle the display of the content element
    if (contentElement.style.display === 'none') {
      contentElement.style.display = 'block';
    } else {
      contentElement.style.display = 'none';
    }

    // Toggle the chevron icon
    const chevronIcon = header.querySelector('i');
    chevronIcon.classList.toggle('fa-chevron-down');
    chevronIcon.classList.toggle('fa-chevron-up');
  });
});

// Get the test button and add a click event listener
const testButton = document.querySelector('.test-button');
testButton.addEventListener('click', () => {
  alert('You clicked the test button!');
});
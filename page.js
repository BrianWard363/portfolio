function loadPage() {
  $(document).ready(function() {
    // Use $.ajax() to load the header and footer files asynchronously
    var headerRequest = $.ajax({
      url: 'header.html',
      method: 'GET',
      async: true
    });
    var footerRequest = $.ajax({
      url: 'footer.html',
      method: 'GET',
      async: true
    });
    // Use $.when() to wait for both requests to complete
    $.when(headerRequest, footerRequest).done(function(header, footer) {
      // Append the header and footer to the page
      $('#header').html(header[0]);
      $('#footer').html(footer[0]);
    });
  });
}

// Load the page when jQuery is fully loaded
if (window.jQuery) {
  loadPage();
} else {
  // If jQuery is not yet loaded, wait for the 'load' event
  window.addEventListener('load', loadPage);
}

function collapseNavbar() {
  const navbar = document.getElementById('navbarNavLightDropdown');
  if (navbar.classList.contains('show')) {
    navbar.classList.remove('show');
  }
}

// Smooth scrolling animation
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    const offset = target.offsetTop - navbarHeight;

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });

    if (link.parentNode.parentNode.classList.contains('dropdown-menu')) {
      collapseNavbar();
    }
  });
});

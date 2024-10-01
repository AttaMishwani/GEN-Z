// Initialize the phone input with country flags and dial codes
const phoneInput = document.querySelector("#contact-phone");

const iti = window.intlTelInput(phoneInput, {
  initialCountry: "auto", // You can specify a default country
  geoIpLookup: function (callback) {
    fetch("https://ipinfo.io?token=<YOUR_TOKEN>", {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => callback(data.country))
      .catch(() => callback("us")); // Fallback to US
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // For validation, number formatting etc.
});

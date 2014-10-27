var countries = {
  "die": ["die"],
  "AF": ["Afghanistan", "Afghan"],
  "AL": ["Albania"],
  "DZ": ["Algeria"],
  "AD": ["Andorra"],
  "AO": ["Angola"],
  "AI": ["Anguilla"],
  "AQ": ["Antarctica"],
  "AG": ["Antigua and Barbuda"],
  "AR": ["Argentina"],
  "AM": ["Armenia"],
  "AW": ["Aruba"],
  "AU": ["Australia"],
  "AT": ["Austria"],
  "AZ": ["Azerbaijan"],
  "BS": ["Bahamas"],
  "BH": ["Bahrain"],
  "BD": ["Bangladesh"],
  "BB": ["Barbados"],
  "BY": ["Belarus"],
  "BE": ["Belgium"],
  "BZ": ["Belize"],
  "BJ": ["Benin"],
  "BM": ["Bermuda"],
  "BT": ["Bhutan"],
  "BO": ["Bolivia"],
  "BA": ["Bosnia and Herzegovina"],
  "BW": ["Botswana"],
  "BV": ["Bouvet Island"],
  "BR": ["Brazil"],
  "BN": ["Brunei"],
  "BG": ["Bulgaria"],
  "BF": ["Burkina Faso"],
  "BI": ["Burundi"],
  "KH": ["Cambodia"],
  "CM": ["Cameroon"],
  "CA": ["Canada"],
  "CT": ["Canton and Enderbury Islands"],
  "CV": ["Cape Verde"],
  "KY": ["Cayman Islands"],
  "CF": ["Central African Republic"],
  "TD": ["Chad"],
  "CL": ["Chile"],
  "CN": ["China"],
  "CX": ["Christmas Island"],
  "CC": ["Cocos [Keeling] Islands"],
  "CO": ["Colombia"],
  "KM": ["Comoros"],
  "CR": ["Costa Rica"],
  "HR": ["Croatia"],
  "CU": ["Cuba"],
  "CY": ["Cyprus"],
  "CZ": ["Czech Republic"],
  "DK": ["Denmark"],
  "DJ": ["Djibouti"],
  "DM": ["Dominica"],
  "DO": ["Dominican Republic"],
  "NQ": ["Dronning Maud Land"],
  "DD": ["East Germany"],
  "EC": ["Ecuador"],
  "EG": ["Egypt"],
  "SV": ["El Salvador"],
  "GQ": ["Equatorial Guinea"],
  "ER": ["Eritrea"],
  "EE": ["Estonia"],
  "ET": ["Ethiopia"],
  "FJ": ["Fiji"],
  "FI": ["Finland"],
  "FR": ["France"],
  "GF": ["French Guiana"],
  "PF": ["French Polynesia"],
  "GA": ["Gabon"],
  "GM": ["Gambia"],
  "GE": ["Georgia"],
  "DE": ["Germany"],
  "GH": ["Ghana"],
  "GI": ["Gibraltar"],
  "GR": ["Greece"],
  "GL": ["Greenland"],
  "GD": ["Grenada"],
  "GP": ["Guadeloupe"],
  "GU": ["Guam"],
  "GT": ["Guatemala"],
  "GG": ["Guernsey"],
  "GN": ["Guinea"],
  "GW": ["Guinea-Bissau"],
  "GY": ["Guyana"],
  "HT": ["Haiti"],
  "HM": ["Heard Island and McDonald Islands"],
  "HN": ["Honduras"],
  "HK": ["Hong Kong"],
  "HU": ["Hungary"],
  "IS": ["Iceland"],
  "IN": ["India"],
  "ID": ["Indonesia"],
  "IR": ["Iran"],
  "IQ": ["Iraq"],
  "IE": ["Ireland"],
  "IM": ["Isle of Man"],
  "IL": ["Israel"],
  "IT": ["Italy"],
  "JM": ["Jamaica"],
  "JP": ["Japan"],
  "JE": ["Jersey"],
  "JT": ["Johnston Island"],
  "JO": ["Jordan"],
  "KZ": ["Kazakhstan"],
  "KE": ["Kenya"],
  "KI": ["Kiribati"],
  "KW": ["Kuwait"],
  "KG": ["Kyrgyzstan"],
  "LA": ["Laos"],
  "LV": ["Latvia"],
  "LB": ["Lebanon"],
  "LS": ["Lesotho"],
  "LR": ["Liberia"],
  "LY": ["Libya"],
  "LI": ["Liechtenstein"],
  "LT": ["Lithuania"],
  "LU": ["Luxembourg"],
  "MO": ["Macau"],
  "MK": ["Macedonia"],
  "MG": ["Madagascar"],
  "MW": ["Malawi"],
  "MY": ["Malaysia"],
  "MV": ["Maldives"],
  "ML": ["Mali"],
  "MT": ["Malta"],
  "MH": ["Marshall Islands"],
  "MQ": ["Martinique"],
  "MR": ["Mauritania"],
  "MU": ["Mauritius"],
  "YT": ["Mayotte"],
  "MX": ["Mexico"],
  "FM": ["Micronesia"],
  "MI": ["Midway Islands"],
  "MD": ["Moldova"],
  "MC": ["Monaco"],
  "MN": ["Mongolia"],
  "ME": ["Montenegro"],
  "MS": ["Montserrat"],
  "MA": ["Morocco"],
  "MZ": ["Mozambique"],
  "MM": ["Myanmar", "Burma"],
  "NA": ["Namibia"],
  "NR": ["Nauru"],
  "NP": ["Nepal"],
  "NL": ["Netherlands"],
  "NT": ["Neutral Zone"],
  "NC": ["New Caledonia"],
  "NZ": ["New Zealand"],
  "NI": ["Nicaragua"],
  "NE": ["Niger"],
  "NG": ["Nigeria"],
  "NU": ["Niue"],
  "NF": ["Norfolk Island"],
  "KP": ["North Korea"],
  "NO": ["Norway", "Norwegian"],
  "OM": ["Oman"],
  "PK": ["Pakistan"],
  "PW": ["Palau"],
  "PS": ["Palestinian Territories", "Palestine"],
  "PA": ["Panama"],
  "PZ": ["Panama Canal Zone"],
  "PG": ["Papua New Guinea"],
  "PY": ["Paraguay"],
  "YD": ["People's Democratic Republic of Yemen", "Yemen"],
  "PE": ["Peru"],
  "PH": ["Philippines"],
  "PN": ["Pitcairn Islands"],
  "PL": ["Poland"],
  "PT": ["Portugal"],
  "PR": ["Puerto Rico"],
  "QA": ["Qatar"],
  "RO": ["Romania"],
  "RU": ["Russia"],
  "RW": ["Rwanda"],
  "WS": ["Samoa"],
  "SM": ["San Marino"],
  "SA": ["Saudi Arabia"],
  "SN": ["Senegal"],
  "RS": ["Serbia"],
  "CS": ["Serbia and Montenegro"],
  "SC": ["Seychelles"],
  "SL": ["Sierra Leone"],
  "SG": ["Singapore"],
  "SK": ["Slovakia"],
  "SI": ["Slovenia"],
  "SB": ["Solomon Islands"],
  "SO": ["Somalia"],
  "ZA": ["South Africa"],
  "KR": ["South Korea"],
  "ES": ["Spain"],
  "LK": ["Sri Lanka"],
  "SD": ["Sudan"],
  "SR": ["Suriname"],
  "SZ": ["Swaziland"],
  "SE": ["Sweden"],
  "CH": ["Switzerland"],
  "SY": ["Syria"],
  "TW": ["Taiwan"],
  "TJ": ["Tajikistan"],
  "TZ": ["Tanzania"],
  "TH": ["Thailand"],
  "TL": ["Timor-Leste"],
  "TG": ["Togo"],
  "TK": ["Tokelau"],
  "TO": ["Tonga"],
  "TT": ["Trinidad and Tobago"],
  "TN": ["Tunisia"],
  "TR": ["Turkey"],
  "TM": ["Turkmenistan"],
  "TV": ["Tuvalu"],
  "UG": ["Uganda"],
  "UA": ["Ukraine"],
  "AE": ["United Arab Emirates", "UAE", "Dubai", "Abu Dhabi"],
  "GB": ["United Kingdom"],
  "US": ["United States"],
  "UY": ["Uruguay"],
  "UZ": ["Uzbekistan"],
  "VU": ["Vanuatu"],
  "VA": ["Vatican City"],
  "VE": ["Venezuela"],
  "VN": ["Vietnam"],
  "EH": ["Western Sahara"],
  "YE": ["Yemen"],
  "ZM": ["Zambia"],
  "ZW": ["Zimbabwe"],
};

var originalContent;
var replacedCountryArray;
var guessCount = 0;
var bottomBar;
var bootstrapped;
var currentScore = 0;

$(document).ready(function() {
  $.scoped();
  originalContent = document.body.innerHTML;
  replacedCountryArray = replaceRandomCountry(originalContent);
  initializeGuesser();
  getCurrentScore();
});

function getCurrentScore() {
  chrome.storage.sync.get(["conswap_correctly_guessed_count"], function(storedValue) {
    if (typeof storedValue["conswap_correctly_guessed_count"] === "undefined" || isNaN(storedValue["conswap_correctly_guessed_count"])) {
      storedValue["conswap_correctly_guessed_count"] = 0;
    }
    currentScore = +storedValue["conswap_correctly_guessed_count"];
  });
}

function replaceRandomCountry(originalContent) {
  var content = originalContent;
  var keys = Object.keys(countries);
  keys.sort(function() {
    return Math.random() - 0.5;
  });
  finish: for (var key in keys) {
    for (var i in countries[keys[key]]) {
      var currentItem = countries[keys[key]][i];
      var keyMatches = document.body.innerHTML.indexOf(currentItem);
      if (keyMatches !== -1) {
        for (var j in countries[keys[key]]) {
          content = content.replace(new RegExp(countries[keys[key]][j], "ig"), "_____");
        }
        document.body.innerHTML = content;
        return countries[keys[key]];
      }
    }
  }
}



function evaluateGuess() {
  guessCount++;
  var currentScoreStr = (currentScore.toString() + '');
  var guessElem = document.getElementById("conswap_guess");
  var guess = guessElem.value;
  if (_.contains(replacedCountryArray, guess)) {
    document.body.innerHTML = originalContent;

    chrome.storage.sync.get(["conswap_correctly_guessed_count", "conswap_correct_urls"], function(storedValue) {
      console.log(storedValue);
      if (typeof storedValue["conswap_correctly_guessed_count"] === "undefined" || isNaN(storedValue["conswap_correctly_guessed_count"])) {
        storedValue["conswap_correctly_guessed_count"] = 0;
      } 
      +storedValue["conswap_correctly_guessed_count"]++;
      currentScore = +storedValue["conswap_correctly_guessed_count"];
      if (typeof storedValue["conswap_correct_urls"] !== "Array") {
        storedValue["conswap_correct_urls"] = [];
      }
      storedValue["conswap_correct_urls"].push(document.URL);
      chrome.storage.sync.set(storedValue);
    });
    bottomBar.innerHTML = successStateHTML.replace("CONSWAP_SCORE", currentScoreStr);
    document.body.appendChild(bootstrapped);
  } else if (guessCount >= 3) {
    chrome.storage.sync.get(["conswap_failed_urls"], function(storedValue) {
      if (typeof storedValue["conswap_failed_urls"] !== "Array") {
        storedValue["conswap_failed_urls"] = [];
      }
      storedValue["conswap_failed_urls"].push(document.URL);
      chrome.storage.sync.set(storedValue);
    });
    bottomBar.innerHTML = failureStateHTML.replace("CONSWAP_SCORE", currentScoreStr);
  } else {
    bottomBar.innerHTML = warnStateHTML;
    initializeGuesserFormSettings();
  }
}

function initializeGuesser() {
  //bootbox.prompt("Which country is missing?", evaluateGuess);
  bootstrapped = document.createElement("div");
  bootstrapped.className = "conswap";
  //bootstrapped.innerHTML = "<style scoped>@import url('//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css');</style>";
  document.body.appendChild(bootstrapped);
  bottomBar = document.createElement("nav");
  bottomBar.className = "navbar navbar-default navbar-fixed-bottom";
  bottomBar.innerHTML = guessFormHTML;
  bootstrapped.appendChild(bottomBar);
  initializeGuesserFormSettings();
}

function initializeGuesserFormSettings() {
  $("#conswap_button").click(function() {
    evaluateGuess();
  });
  $("#conswap_guess").keypress(function(e) {
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
      $('#conswap_button').click();
      return false;
    } else {
      return true;
    }
  });
}

var guessFormHTML =
  '<div class="container" style="position:fixed; height:100px; bottom:0px;">' +
  '<form class="navbar-form navbar-left" role="search" >' +
  '<div class="form-group">' +
  '<input id="conswap_guess" type="text" class="form-control" placeholder="Which country is it?">' +
  '</div>' +
  '<button id="conswap_button" class="btn btn-default" type="button">Submit</button>' +
  '</form>' +
  '</div>';

var warnStateHTML = '<div class="container" style="position:fixed; height:100px; bottom:0px;">' +
  '<p class="navbar-text" style="color: #8a6d3b;background-color: #fcf8e3;border-color: #faebcc;">Try again!</p>' +
  '<form class="navbar-form navbar-left" role="search" >' +
  '<div class="form-group">' +
  '<input id="conswap_guess" type="text" class="form-control" placeholder="Which country is it?">' +
  '</div>' +
  '<button id="conswap_button" class="btn btn-default" type="button">Submit</button>' +
  '</form>' +
  '</div>';

var currentScoreHTML = '<p class="navbar-text" style="color: #0181eb">Current Score: CONSWAP_SCORE</p>';

var successStateHTML = '<div class="container" style="position:fixed; height:100px; bottom:0px;"><p class="navbar-text" style="color: #3c763d;background-color: #dff0d8;border-color: #d6e9c6;">You guessed right!</p>' + currentScoreHTML + '</div>';

var failureStateHTML = '<div class="container" style="position:fixed; height:100px; bottom:0px;"><p class="navbar-text" style="color: #a94442;background-color: #f2dede;border-color: #ebccd1;">Better luck next time!</p>' + currentScoreHTML + '</div>';
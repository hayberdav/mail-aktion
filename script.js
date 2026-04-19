const recipients = [
  {
    firstName: "Armin",
    lastName: "Laschet",
    email: "armin.laschet@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "CDU/CSU",
    important: true
  },
  {
    firstName: "Peter",
    lastName: "Beyer",
    email: "peter.beyer@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "CDU/CSU",
    important: false
  },
  {
    firstName: "Jürgen",
    lastName: "Hardt",
    email: "juergen.hardt@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "CDU/CSU",
    important: true
  },
  {
    firstName: "Roderich",
    lastName: "Kiesewetter",
    email: "roderich.kiesewetter@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "CDU/CSU",
    important: true
  },
  {
    firstName: "Markus",
    lastName: "Koob",
    email: "markus.koob@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "CDU/CSU",
    important: false
  },
  {
    firstName: "Alexander",
    lastName: "Radwan",
    email: "alexander.radwan@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "CDU/CSU",
    important: false
  },
  {
    firstName: "Johannes",
    lastName: "Volkmann",
    email: "johannes.volkmann@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "CDU/CSU",
    important: false
  },
  {
    firstName: "Paul",
    lastName: "Ziemiak",
    email: "paul.ziemiak@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "CDU/CSU",
    important: false
  },
  {
    firstName: "Nicolas",
    lastName: "Zippelius",
    email: "nicolas.zippelius@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "CDU/CSU",
    important: false
  },
  {
    firstName: "Norbert",
    lastName: "Röttgen",
    email: "norbert.roettgen@bundestag.de",
    salutation: "Sehr geehrter Herr Dr.",
    party: "CDU/CSU",
    important: true
  },
  {
    firstName: "Johann",
    lastName: "Wadephul",
    email: "johann.wadephul@bundestag.de",
    salutation: "Sehr geehrter Herr Bundesminister Dr.",
    party: "CDU/CSU",
    important: true
  },
  {
    firstName: "Parsa",
    lastName: "Marvi",
    email: "parsa.marvi@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "SPD",
    important: true
  },
  {
    firstName: "Boris",
    lastName: "Pistorius",
    email: "boris.pistorius@bundestag.de",
    salutation: "Sehr geehrter Herr Bundesminister",
    party: "SPD",
    important: true
  },
  {
    firstName: "Adis",
    lastName: "Ahmetović",
    email: "adis.ahmetovic@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "SPD",
    important: true
  },
  {
    firstName: "Reem",
    lastName: "Alabali-Radovan",
    email: "reem.alabali-radovan@bundestag.de",
    salutation: "Sehr geehrte Frau Bundesministerin",
    party: "SPD",
    important: true
  },
  {
    firstName: "Omid",
    lastName: "Nouripour",
    email: "omid.nouripour@bundestag.de",
    salutation: "Sehr geehrter Herr Bundestagsvizepräsident",
    party: "Bündnis 90/Die Grünen",
    important: true
  },
  {
    firstName: "Max",
    lastName: "Lucks",
    email: "max.lucks@bundestag.de",
    salutation: "Sehr geehrter Herr",
    party: "Bündnis 90/Die Grünen",
    important: false
  },
  {
    firstName: "Deborah",
    lastName: "Düring",
    email: "deborah.duering@bundestag.de",
    salutation: "Sehr geehrte Frau",
    party: "Bündnis 90/Die Grünen",
    important: false
  },
  {
    firstName: "Agnieszka",
    lastName: "Brugger",
    email: "agnieszka.brugger@bundestag.de",
    salutation: "Sehr geehrte Frau",
    party: "Bündnis 90/Die Grünen",
    important: false
  },
  {
    firstName: "Luise",
    lastName: "Amtsberg",
    email: "luise.amtsberg@bundestag.de",
    salutation: "Sehr geehrte Frau",
    party: "Bündnis 90/Die Grünen",
    important: true
  },
  {
    firstName: "Diana",
    lastName: "Herbstreuth",
    email: "diana.herbstreuth@bundestag.de",
    salutation: "Sehr geehrte Frau",
    party: "CDU/CSU",
    important: true
  },
  {
    firstName: "Serap",
    lastName: "Güler",
    email: "serap.gueler@bundestag.de",
    salutation: "Sehr geehrte Frau Staatsministerin",
    party: "CDU/CSU",
    important: true
  },
  {
    firstName: "Julia",
    lastName: "Klöckner",
    email: "julia.kloeckner@bundestag.de",
    salutation: "Sehr geehrte Frau Bundestagspräsidentin",
    party: "CDU/CSU",
    important: true
  },
  {
    firstName: "Ellen",
    lastName: "Demuth",
    email: "ellen.demuth@bundestag.de",
    salutation: "Sehr geehrte Frau",
    party: "CDU/CSU",
    important: true
  }
];

const subject = "Gesprächsmöglichkeit mit Reza Pahlavi am 23. April 2026 im Deutschen Bundestag";

const mainText = `am Donnerstag, den 23. April 2026, wird der iranische Oppositionsvertreter Reza Pahlavi zu Gesprächen im Deutschen Bundestag in Berlin erwartet.

Vor dem Hintergrund der anhaltenden politischen und gesellschaftlichen Entwicklungen im Iran sowie deren Bedeutung für die europäische Außen-, Sicherheits- und Energiepolitik möchten wir Sie höflich darauf aufmerksam machen, dass an diesem Tag Möglichkeiten für einen persönlichen Austausch mit Herrn Pahlavi bestehen.

Ein solches Gespräch könnte Ihnen Gelegenheit bieten, seine Einschätzungen zur aktuellen Lage im Iran, zu innenpolitischen Dynamiken sowie zu möglichen zukünftigen Entwicklungen aus erster Hand zu hören und einzuordnen.

Insbesondere mit Blick auf Menschenrechtsfragen, die regionale Stabilität und die politischen Perspektiven des Iran können Gespräche mit unterschiedlichen Akteuren einen wichtigen Beitrag zur parlamentarischen Meinungsbildung leisten.

Wir würden es daher sehr begrüßen, wenn Sie die Gelegenheit zu einem Gespräch mit Herrn Pahlavi wahrnehmen oder Ihr Interesse an einem Austausch bekunden.

Mit freundlichen Grüßen`;

document.getElementById("generateBtn").addEventListener("click", function () {
  const vorname = document.getElementById("vorname").value.trim();
  const nachname = document.getElementById("nachname").value.trim();
  const results = document.getElementById("results");

  results.innerHTML = "";

  if (!vorname || !nachname) {
    results.innerHTML = "<p>Bitte Vorname und Nachname eingeben.</p>";
    return;
  }

  const fullName = `${vorname} ${nachname}`;

  const grouped = {};

  recipients.forEach(person => {
    if (!grouped[person.party]) {
      grouped[person.party] = [];
    }
    grouped[person.party].push(person);
  });

  const partyOrder = [
    "CDU/CSU",
    "SPD",
    "Bündnis 90/Die Grünen"
  ];

  partyOrder.forEach(party => {
    if (!grouped[party] || grouped[party].length === 0) {
      return;
    }

    grouped[party].sort((a, b) => a.lastName.localeCompare(b.lastName, "de"));

    const partyBox = document.createElement("div");
    partyBox.className = "result-item";

    let partyHTML = `<h3>${party}</h3><ul>`;

    grouped[party].forEach(person => {
      const star = person.important ? " ⭐" : "";
      const body = `${person.salutation} ${person.lastName},

${mainText}

${fullName}`;

      const mailto = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

partyHTML += `
  <li class="person-entry">
    <span class="person-name">${star}${star ? " " : ""}${person.lastName}, ${person.firstName}</span>
    <a href="${mailto}" class="mail-link">Mail öffnen</a>
  </li>
`;
    });

    partyHTML += `</ul>`;

    partyBox.innerHTML = partyHTML;
    results.appendChild(partyBox);
  });
});
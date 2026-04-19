const recipients = [
  {
    firstName: "Armin",
    lastName: "Laschet",
    email: "armin.laschet@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Peter",
    lastName: "Beyer",
    email: "peter.beyer@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Jürgen",
    lastName: "Hardt",
    email: "juergen.hardt@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Roderich",
    lastName: "Kiesewetter",
    email: "roderich.kiesewetter@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Markus",
    lastName: "Koob",
    email: "markus.koob@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Alexander",
    lastName: "Radwan",
    email: "alexander.radwan@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Johannes",
    lastName: "Volkmann",
    email: "johannes.volkmann@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Paul",
    lastName: "Ziemiak",
    email: "paul.ziemiak@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Nicolas",
    lastName: "Zippelius",
    email: "nicolas.zippelius@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Norbert",
    lastName: "Röttgen",
    email: "Norbert.röttgen@bundestag.de",
    salutation: "Sehr geehrter Herr Dr."
  },
  {
    firstName: "Johann",
    lastName: "Wadephul",
    email: "johann.wadephul@bundestag.de",
    salutation: "Sehr geehrter Herr Bundesminister Dr."
  },
  {
    firstName: "Parsa",
    lastName: "Marvi",
    email: "parsa.marvi@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Boris",
    lastName: "Pistorius",
    email: "boris.pistorius@bundestag.de",
    salutation: "Sehr geehrter Herr Bundesminister"
  },
  {
    firstName: "Adis",
    lastName: "Ahmetović",
    email: "adis.ahmetovic@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Omid",
    lastName: "Nouripour",
    email: "omid.nouripour@bundestag.de",
    salutation: "Sehr geehrter Herr Bundestagsvizepräsident"
  },
  {
    firstName: "Max",
    lastName: "Lucks",
    email: "max.lucks@bundestag.de",
    salutation: "Sehr geehrter Herr"
  },
  {
    firstName: "Deborah",
    lastName: "Düring",
    email: "deborah.duering@bundestag.de",
    salutation: "Sehr geehrte Frau"
  },
 {
    firstName: "Agnieszka",
    lastName: "Brugger",
    email: "agnieszka.brugger@bundestag.de",
    salutation: "Sehr geehrte Frau"
  },
  {
    firstName: "Luise",
    lastName: "Amtsberg",
    email: "luise.amtsberg@bundestag.de",
    salutation: "Sehr geehrte Frau"
  },
{
    firstName: "Reem",
    lastName: "Alabali-Radovan",
    email: "reem.alabali-radovan@bundestag.de",
    salutation: "Sehr geehrte Frau Bundesministerin"
  },
{
    firstName: "Diana",
    lastName: "Herbstreuth",
    email: "diana.herbstreuth@bundestag.de",
    salutation: "Sehr geehrte Frau"
  },
{
    firstName: "Serap",
    lastName: "Gület",
    email: "serap.gueler@bundestag.de",
    salutation: "Sehr geehrte Frau Staatsministerin"
  },
{
    firstName: "Julia",
    lastName: "Klöckner",
    email: "julia.kloeckner@bundestag.de",
    salutation: "Sehr geehrte Frau Bundestagspräsidentin"
  },
{
    firstName: "Ellen",
    lastName: "Demuth",
    email: "ellen.demuth@bundestag.de",
    salutation: "Sehr geehrte Frau"
  }
];

const subject = "Gesprächsmöglichkeit mit Reza Pahlavi am 23. April 2026 im Deutschen Bundestag";

const mainText = `am Donnerstag, den 23. April 2026, wird der iranische Oppositionsvertreter Reza Pahlavi zu Gesprächen im Deutscher Bundestag in Berlin erwartet.

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

  recipients.forEach(person => {
    const body = `${person.salutation} ${person.lastName},

${mainText}

${fullName}`;

    const mailto = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const box = document.createElement("div");
    box.className = "result-item";
    box.innerHTML = `
      <strong>${person.firstName} ${person.lastName}</strong><br>
      ${person.email}<br>
      <a href="${mailto}">Mail öffnen</a>
    `;

    results.appendChild(box);
  });
});
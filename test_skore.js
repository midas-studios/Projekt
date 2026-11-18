// Testovací větev: Test výpočtu skóre
function testVypoctuSkore() {
  const zasahy = 15;
  const bodyZaZasah = 100;
  const celkoveSkore = zasahy * bodyZaZasah;

  if (celkoveSkore === 1500) {
    console.log("Test výpočtu skóre: PROŠEL");
  } else {
    console.log("Test výpočtu skóre: CHYBA");
  }
}

testVypoctuSkore();

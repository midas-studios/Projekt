# Midas Studio – Projekt: Aim Trainer

Vítejte v oficiálním repozitáři studentského týmu **Midas Studio** pro předmět Vlastní projekt.

---

## 👥 Kdo jsme
Jsme vývojářský tým **Midas Studio**. Naším cílem je vytvářet moderní webové a herní aplikace s důrazem na čistý kód, přehledné uživatelské rozhraní a spolehlivou architekturu.

**Členové týmu:**
* Daniel Brebis
* Tým Midas Studio (spolupráce: kapr400, adamek797, vamps2233, dominikklimes09)

---

## 🎯 O projektu: Aim Trainer
Naším projektem je **Aim Trainer** – interaktivní webová tréninková aplikace zaměřená na procvičování a zlepšování postřehu, přesnosti klikání a reakční doby. Aplikace poslouží hráčům i běžným uživatelům pro trénink koordinace ruka-oko.

---

## 📋 Co děláme a co budeme dělat

### 1. Aktuální fáze (Teoretický návrh a základní kostra)
* **Návrh konceptu a UI/UX rozhraní:**
  * Příprava herního rozhraní (horní informační lišta: skóre, ubíhající čas, stav životů).
  * Vymezení herní plochy pro generování cílů.
  * Návrh inventáře a doplňkových ovládacích prvků.
* **Architektura aplikace:**
  * Rozdělení projektu na znovupoužitelné komponenty.
  * Definice stavového řízení hry (běží, pozastaveno, konec hry).

### 2. Plánovaný vývoj (Funkcionalita a mechaniky)
* **Herní mechaniky:**
  * Náhodné generování terčů na herní ploše s různou velikostí a dobou zobrazení.
  * Zaznamenávání přesnosti kliknutí (Accuracy %), počtu zásahů a střel vedle.
  * Zvuková a vizuální odezva na úspěšný zásah / minutí.
* **Herní režimy:**
  * *Klasický režim:* Trénink na pevně stanovený časový limit (např. 60 sekund).
  * *Přesnost (Precision):* Menší terče s penalizací za minutí.
  * *Reflex / Reakce:* Rychle se objevující a mizející terče pro trénink rychlosti reakce.
* **Statistiky a vyhodnocení:**
  * Přehledná tabulka výsledků po skončení kola.
  * Ukládání dosažených rekordů a sledování zlepšení v čase.

---

## 🛠️ Plánované technologie
* **Frontend:** React, Next.js, TypeScript
* **Styling:** Tailwind CSS, moderní responzivní layout
* **Verzování:** Git & GitHub

---

## 🌿 Struktura větví (Git Workflow)
Repozitář využívá 3-větvičkový model pro oddělení fází vývoje:

* **`main`** (produkční větev) – stabilní, otestovaný a prezentovatelný kód.
* **`dev`** (vývojová větev) – probíhá zde aktivní vývoj, přidávání nových funkcí a propojování komponent.
* **`test`** (testovací větev) – slouží k testování mechanik, ověřování funkčnosti a hledání chyb před nasazením do `main`.

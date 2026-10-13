---
title: "Woran Digitalisierung wirklich scheitert: fehlende Datenpflege"
description: "Nicht die Software ist das Problem, sondern veraltete Daten im ERP und CAD. Warum Stammdaten und Bewegungsdaten das Fundament jeder Schreinerei sind – mit Checkliste."
date: 2026-10-13
image: "/images/datenpflege.svg"
tags: ["Stammdaten", "Bewegungsdaten", "ERP", "CAD", "Digitalisierung"]
---

Neue Software, neue Maschine, neues Tablet für die Montage – und trotzdem läuft vieles wie vorher. Offerten dauern lange, Stücklisten stimmen nicht, und am Ende wird doch wieder von Hand nachgerechnet.

Der Grund liegt selten in der Software. **Digitalisierung scheitert meistens an fehlender Datenpflege.**

## Ohne saubere Daten keine Digitalisierung

Jedes digitale System ist nur so gut wie die Daten, auf denen es aufbaut. Ein ERP kann nur richtig kalkulieren, wenn Einkaufspreise und Stundensätze aktuell sind. Ein CAD/CAM kann nur verlässliche Stücklisten und CNC-Programme generieren, wenn Materialien, Kanten und Beschläge sauber hinterlegt sind.

> Schlechte Daten digitalisiert ergeben schlechte Ergebnisse – nur schneller.

Das Tückische: Daten veralten lautlos. Ein Lieferant passt seine Preise an, ein Plattenhersteller nimmt ein Dekor aus dem Sortiment, ein Maschinenstundensatz bildet die tatsächlichen Kosten nicht mehr ab. Niemand merkt es sofort – bis am Ende eines Auftrags die Nachkalkulation böse überrascht.

## Die zwei Datengruppen in der Schreinerei

Im betrieblichen Alltag unterscheidet man klar zwischen zwei Datenarten:

- **Stammdaten:** Das langfristige Fundament. Sie beschreiben feste Objekte (Wer? Was? Womit?) und ändern sich selten.
- **Bewegungsdaten (Transaktionsdaten):** Der laufende Betrieb. Sie entstehen bei jedem Auftrag neu und dokumentieren den Fortschritt.

Sind die Stammdaten fehlerhaft, sind automatisch alle daraus abgeleiteten Bewegungsdaten falsch.

---

## 1. Stammdaten im ERP (Das Fundament)

### Artikelstamm & Einkauf
- Einkaufspreise, Rabattstufen und Konditionen der Lieferanten
- Verrechnungseinheiten (m², lfm, Stück) und Umrechnungsfaktoren
- Verschnitt- und Zuschlagsfaktoren nach Materialgruppen
- Bevorzugte Lieferanten, Artikelnummern und Lieferfristen
- Auslaufartikel und definierte Nachfolgeartikel

### Kalkulationsdaten
- Regie- und Kalkulationsstundensätze (AVOR, Bankraum, Maschinist, Montage)
- Maschinenstundensätze (CNC-Bearbeitungszentrum, Kantenleimer, Zuschnitt)
- Gemeinkostenzuschläge, Risiko- und Gewinnzuschläge
- Hinterlegte Richtzeiten für wiederkehrende Arbeitsschritte

### Adress- & Vorlagendaten
- Kunden- und Lieferantenstamm inkl. Zahlungskonditionen und Ansprechpartner
- Einheitliche Textbausteine und Standardpositionen für Offerten
- Mitarbeiterstamm mit Kostenstellen und Lohnarten für die Zeiterfassung

---

## 2. Stammdaten im CAD/CAM (Konstruktion & AVOR)

Das CAD ist heute der Startpunkt der Wertschöpfungskette. Stimmen hier die Stammdaten nicht, überträgt sich der Fehler bis auf die CNC-Maschine und die Baustelle:

- **Materialbibliothek:** Plattenwerkstoffe, Rohmasse, Stärken, Dekore und Strukturrichtung
- **Kantenbibliothek:** Stärken, Breiten, Farben und passende Zuordnung zu den Platten
- **Beschlägekatalog:** Scharniere, Schubkastenauszüge, Verbinder inkl. 3D-Geometrie und Bearbeitungsbildern
- **Konstruktionsregeln & Makros:** Standardkorpusse, Fugenmasse, Verbinderabstände
- **Werkzeug- & Maschinenparameter:** Werkzeugzuordnungen, Drehzahlen, Vorschübe für den Postprozessor
- **ERP-Verknüpfung:** Jeder CAD-Artikel benötigt eine eindeutige Identifikation zum ERP-Artikelstamm – sonst reisst der digitale Faden zwischen Zeichnung, Bestellung und Lager ab.

---

## 3. Bewegungsdaten aus dem Tagesgeschäft

Bewegungsdaten dokumentieren das Tagesgeschäft und den Wertschöpfungsprozess:

- **Auftragsstatus:** Von Anfrage über Offerte, AVOR, Produktion und Montage bis zur Schlussrechnung
- **Termine & Meilensteine:** Freigabetermine, Lieferdaten, Montagefenster
- **Betriebsdatenerfassung / Zeiterfassung:** Gebuchte Zeiten pro Auftrag, Kostenstelle und Mitarbeiter
- **Materialbuchungen:** Bestellstatus, Wareneingang, Restplattenlager
- **Nachtragsmanagement:** Erfassung von bauseitigen Änderungen und Regiearbeiten
- **Nachkalkulation:** Konsequenter Soll-Ist-Vergleich nach Abschluss des Auftrags

---

## Checkliste: Was wird wann gepflegt?

| Datengruppe | Typ | Intervall | Typischer Auslöser |
|---|---|---|---|
| Einkaufspreise | Stammdaten | Mind. jährlich | Preisanpassung Lieferant |
| Kalkulations- & Stundensätze | Stammdaten | Jährlich | Budget, Lohnrunde, Betriebsabrechnung |
| Richtzeiten & Formeln | Stammdaten | Halbjährlich | Abweichungen in der Nachkalkulation |
| CAD-Material & Kanten | Stammdaten | Laufend | Sortimentswechsel |
| CAD-Beschläge | Stammdaten | Laufend | Neuer Beschlag, Hersteller-Update |
| Offert-Textbausteine | Stammdaten | Jährlich | Sortiments- oder Strategiewechsel |
| Auftragsstatus & Meilensteine | Bewegungsdaten | Täglich | Fortschritt im Betrieb |
| Zeiterfassung | Bewegungsdaten | Täglich | Arbeitszeitende |
| Nachkalkulation | Bewegungsdaten | Pro Auftrag | Nach Fertigstellung / Rechnungsstellung |

---

## 5 Schritte zur gelebten Routine

1. **Klare Verantwortlichkeiten:** Jede Datengruppe braucht einen festen Verantwortlichen. „Das machen alle zusammen“ bedeutet in der Praxis: niemand tut es.
2. **Feste Zeitfenster:** Datenpflege gehört in den Terminkalender – z. B. jeden ersten Montag im Monat zwei Stunden geblockt für Stammdaten.
3. **Fokus nach dem Pareto-Prinzip (80/20):** Zuerst die 20 % der Materialien und Beschläge sauber pflegen, die in 80 % aller Möbel und Aufträge verbaut werden.
4. **Nachkalkulation als Frühwarnsystem:** Grosse Abweichungen zwischen Vor- und Nachkalkulation sind das deutlichste Signal, dass ein Stundensatz oder Einkaufspreis nicht mehr stimmt.
5. **Eine zentrale Datenquelle (Single Source of Truth):** Doppelte Datenhaltung vermeiden. Stammdaten idealerweise im ERP führen und per Schnittstelle an CAD und Zuschnittoptimierung übergeben.

---

## Fazit

Digitalisierung beginnt nicht mit dem Kauf von Software oder Tablets, sondern mit der Disziplin bei den Daten. Das ist oft unglamouröse Arbeit – aber sie entscheidet darüber, ob digitale Werkzeuge im Betrieb echten Nutzen stiften oder nur Frust erzeugen.

Wer seine Stammdaten im Griff hat und Bewegungsdaten konsequent erfasst, kalkuliert treffsicher, entlastet die AVOR und verschafft sich den entscheidenden Vorsprung: **Wirksamkeit durch Klarheit.**

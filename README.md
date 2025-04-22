# TicketApp React Exam

Det här är en biljett-applikation byggd i React som låter användare bläddra igenom sina eventbiljetter i form av kort. Varje biljett är visuellt representerad med detaljerad information samt en QR-kod. Applikationen använder state management med Zustand och hämtar data från `localStorage`.

_Installation:_

```bash
npm install
npm run dev
```

---

## Krav: Egna hooks eller externa bibliotek

För detta projekt valde jag att integrera **två externa bibliotek** som vi inte gått igenom i klassen:

### 1. `react-swipeable`

Det här biblioteket låter mig hantera swipe-gester på ett enkelt sätt. Det fungerar både på touchskärmar och med mus på desktop. Jag använder det för att kunna svepa mellan biljetter, t.ex. för att ta bort en biljett från listan eller bara navigera mellan dem.

Eftersom applikationen använder kort (TicketCard-komponenten) passar swipefunktion perfekt för att förbättra användarupplevelsen, särskilt på mobil. Det ger en modern känsla och gör gränssnittet mer interaktivt.

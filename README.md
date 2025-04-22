# TicketApp React Exam

Det här är en biljett-applikation byggd i React som låter användare bläddra igenom sina eventbiljetter i form av kort. Varje biljett är visuellt representerad med detaljerad information samt en QR-kod. Applikationen använder state management med Zustand och hämtar data från `localStorage`.

---

### Installation:

```bash
git clone https://github.com/DavidAkerlind/ticketapp-react-exam.git
```

Se till att du står i `/ticketapp-react-vite>`

```bash
npm install
npm run dev
```

---

## Valda externa bibliotek

### 1. Framer Motion

Jag använder `Framer Motion` för att skapa smidiga animationer och övergångar mellan biljetterna när användaren sveper mellan dem. Genom att använda `motion.div` och `AnimatePresence` kan jag hantera elementens in- och utträde på ett elegant sätt, vilket gör applikationen mer interaktiv och visuellt tilltalande.

Med `AnimatePresence` hanterar jag övergången när en biljett lämnar och en annan träder in, medan `motion.div` tillåter mig att animera egenskaper som position, opacitet och rotation för att ge en dynamisk känsla till appen. Framer Motion passar utmärkt för det här projektet då det är lätt att implementera och fungerar bra med React:s komponentstruktur.

### 2. React Swipeable

Detta bibliotek gör det möjligt att swipa mellan biljetter, både på mobil och desktop. Jag använder hooken `useSwipeable` för att lyssna på `onSwipedLeft` och `onSwipedRight` och ändrar index på aktuell biljett. Det gör appen mer användarvänlig, särskilt på touch-enheter, vilket är det vi skulle bygga denna app för främst!

### 3. React Barcode

Jag använder detta bibliotek för att generera streckkoder till varje biljett. Det ger en realistisk känsla av att biljetterna är digitala och kan scannas, vilket passar bra för den typ av app jag byggt.

### 4. (Extra) useCartStore Zustand

Jag använder `useCartStore`, en custom hook byggd med Zustand, för att hantera applikationens globala state. Den innehåller all logik för att lägga till, uppdatera och ta bort biljetter i varukorgen, samt för att generera färdiga biljetter som sedan visas för användaren. All data synkas även med `localStorage`, vilket gör att informationen sparas mellan sessioner. Det gör Zustand till ett perfekt val för just detta projekt eftersom det är lättviktigt, snabbt och kräver minimalt med boilerplate-kod.

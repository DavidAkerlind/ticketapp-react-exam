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

### 4. Canvas Confetti

Jag använder `canvas-confetti` bibloteket som är en lättanvänt biblotek som renderar konfettieffekter direkt i ett `<canvas>`-element i webbläsaren. Med `canvas-confetti` kan man skapa olika typer av konfettianimationer och anpassa dem med parametrar i javasSript koden som färger, antal partiklar, spridning och ursprung. Jag använder den för att ge dikrkt visuell feedback till användaren när man köper bijetter till ett event på min sida. Det tycket jag passar superbra in på just denna app som ska skapa glädje och spänning inför kommmande event. det blir inte bara tydligare att man lyckets säkra sin plats till ett event men också att man får en slags "belöning" för det kan ge en kick. Jag har gjort så att konfettiregnet är i samma färger som resten av appen för att skapa en helhets-känsla.

### 5. Font Awesome Icons

Jag använder `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-solid-svg-icons` och `@fortawesome/react-fontawesome` som tillsammans gör det möjligt att använda Font Awesome-ikoner direkt i React. Dessa paket gör det enkelt att importera ikoner och visa dem som komponenter i koden, vilket ger en tydlig och skalbar ikonlösning baserad på SVG-format. Jag använder ikonerna för att tydligt visa funktioner som till exempel att gå tillbaka eller ta bort något, vilket gör användarupplevelsen mer intuitiv. Jag tycker det passar perfekt i min app där det är viktigt att snabbt förstå vad knappar och funktioner gör utan att behöva läsa en massa text. Eftersom ikonerna också kan anpassas i färg och storlek, har jag även försökt göra dem så att de smälter in i appens visuella stil och förstärker helhetskänslan.

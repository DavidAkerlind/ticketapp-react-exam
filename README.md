# TicketApp React Exam

Det här är en biljett-applikation byggd i React som låter användare bläddra igenom sina eventbiljetter i form av kort. Varje biljett är visuellt representerad med detaljerad information samt en QR-kod. Applikationen använder state management med Zustand och hämtar data från `localStorage`.

---

### Installation:

```bash
git clone https://github.com/DavidAkerlind/ticketapp-react-exam.git

npm install
npm run dev
```

---

## Valda externa bibliotek

### 1. Framer Motion

Framer Motion är ett animationsbibliotek som jag använder för att skapa övergångar mellan mina biljetter när man swipar. Jag använder `AnimatePresence` för att hantera utgång/ingång av komponenter, och `motion.div` med `variants` för att animera X-position och Y-position . Det ger en mer interaktiv och visuell upplevelse för användaren.

### 2. React Swipeable

Detta bibliotek gör det möjligt att swipa mellan biljetter, både på mobil och desktop. Jag använder hooken `useSwipeable` för att lyssna på `onSwipedLeft` och `onSwipedRight` och ändrar index på aktuell biljett. Det gör appen mer användarvänlig, särskilt på touch-enheter, vilket är det vi skulle bygga denna app för främst!

### 3. React Barcode

Jag använder detta bibliotek för att generera streckkoder till varje biljett. Det ger en realistisk känsla av att biljetterna är digitala och kan scannas, vilket passar bra för den typ av app jag byggt.

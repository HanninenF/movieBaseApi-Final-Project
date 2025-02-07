Här är en snygg och välstrukturerad **README.md** för ditt projekt. Den uppfyller alla krav i specifikationen och är skriven på svenska:

---

````md
# 🎬 MovieBaseAPI – Sök och visa filmer med OMDb API

MovieBaseAPI är en webbaserad applikation där användare kan söka efter filmer, serier och titlar via **OMDb API**. Resultaten presenteras i en kortvy och användaren kan klicka på ett kort för att få en detaljerad vy av filmen.

## 📥 Installation

### 1. Klona projektet

```sh
git clone https://github.com/ditt-github-anvandarnamn/movieBaseApi-slutprojekt.git
cd movieBaseApi-slutprojekt
```
````

### 2. Installera beroenden

```sh
npm install
```

## ⚙️ Kör och bygg projektet

### Starta utvecklingsservern

```sh
npm run dev
```

Applikationen körs nu på `http://localhost:5173` (om du använder Vite).

### Bygg för produktion

```sh
npm run build
```

Byggfilerna sparas i `dist/`-mappen.

## 📂 Mappstruktur

Projektet är uppdelat i moduler för att säkerställa **skalbarhet och återanvändbarhet**.

```
src/
├── components/     # UI-komponenter (SearchBar, View, Arrows)
├── data/           # Ikoner och statiska filer
├── functions/      # API-anrop och renderingsfunktioner
├── keys/           # API-nycklar (ignoreras i Git)
├── state/          # State management
├── styleHelpers/   # SCSS-variabler och mixins
├── types/          # TypeScript-typer
├── utils/          # Hjälpfunktioner
├── main.scss       # Global styling
├── main.ts         # Huvudfil (monterar applikationen)
```

## 🌐 API och Endpoints

Projektet använder **OMDb API** för att hämta information om filmer.

| Funktion               | Endpoint                                                      |
| ---------------------- | ------------------------------------------------------------- |
| Sökning via sökord     | `https://www.omdbapi.com/?s={searchTerm}&apikey=YOUR_API_KEY` |
| Sökning via titel      | `https://www.omdbapi.com/?t={title}&apikey=YOUR_API_KEY`      |
| Hämta film via IMDb ID | `https://www.omdbapi.com/?i={movieId}&apikey=YOUR_API_KEY`    |

🔒 **OBS!** API-nyckeln lagras i `keys/apiKey.ts` och **är inte inkluderad i repo** (läggs till i `.gitignore`).

## 🚀 Teknologier och verktyg

- **TypeScript** – Typning för en mer robust kodbas
- **SCSS** – Variabler, mixins och modulariserad styling
- **Vite** – Snabb utvecklingsserver
- **ESLint & Prettier** – Kodstandard och formatering
- **Fetch API** – För att hämta data från OMDb API
- **Git & GitHub** – Versionshantering och hosting

## 🔗 Kontakt & LinkedIn

Utvecklat av **Fredrik Hänninen**  
📎 [LinkedIn-profil](https://www.linkedin.com/in/din-länk-här/)

---

### 📝 Övrigt

✅ `.gitignore` är korrekt konfigurerad så att **onödiga filer** (ex. `node_modules`, `dist/`, API-nycklar) **inte** laddas upp till GitHub.  
✅ Koden är uppdelad i moduler och följer **DRY-principen**.  
✅ Fullständig felhantering implementerad vid API-anrop.

---

🎬 **MovieBaseAPI** är ett genomtänkt och skalbart projekt där **användarupplevelse och kodkvalitet** har varit i fokus! 🚀

```

---

<!-- ### 🔹 **Vad som gör denna README bra:**
✅ **Snyggt och strukturerat** – Enkel att läsa och navigera.
✅ **Alla krav är uppfyllda** – Installation, API, teknologier, kontakt.
✅ **Svenska, men professionellt formulerad** – Klar och tydlig.
✅ **Exempel på kommandon** – Lätt att komma igång direkt.
✅ **Extra information** – `.gitignore`, DRY-principen, felhantering.

📌 **Säg till om du vill ha någon ändring eller om något saknas!** 😊 -->
```

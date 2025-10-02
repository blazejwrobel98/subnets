# 🌐 CIDR Subnet Calculator & VLSM Planner

Profesjonalny kalkulator podsieci i planer VLSM dla administratorów sieci. Kalkuluj podsieci, dzielę sieci i planuj konfiguracje VLSM z łatwością.

## ✨ Funkcje

### 🧮 Kalkulator CIDR
- Oblicz szczegóły sieci z notacji CIDR (np. 192.168.1.0/24)
- Wyświetl adres sieci, broadcast, zakres użytecznych IP
- Reprezentacja binarna adresów sieci
- Identyfikacja klasy IP
- Obliczanie maski wildcard

### ✂️ Dzielenie Sieci
- Podziel sieci na równe podsieci
- Automatyczne obliczanie CIDR na podstawie liczby podsieci
- Widok tabelaryczny wszystkich szczegółów podsieci
- Eksport wyników do CSV

### 📊 Planer VLSM
- Obsługa Variable Length Subnet Masking
- Planuj sieci według wymagań hostów
- Automatyczne optymalne przydzielanie podsieci
- Sortowanie od największej do najmniejszej dla efektywności

### 🛠️ Narzędzia
- Kopiuj informacje o podsieci do schowka
- Eksport wyników do formatu CSV
- Responsywny design dla urządzeń mobilnych i desktopowych
- **Bez backendu** - działa całkowicie w przeglądarce

## 🛠️ Technologie

- **Next.js 14** - Framework React z App Router
- **TypeScript** - Rozwój typu-safe
- **Tailwind CSS** - Nowoczesna stylizacja
- **Lucide React** - Piękne ikony
- **Client-side only** - Brak API, czyste obliczenia w przeglądarce

## 🚀 Uruchomienie

### Wymagania
- Node.js 18+ zainstalowany
- npm, yarn, lub pnpm package manager

### Instalacja

1. Zainstaluj zależności:
```bash
npm install
# lub
yarn install
# lub
pnpm install
```

2. Uruchom serwer deweloperski:
```bash
npm run dev
# lub
yarn dev
# lub
pnpm dev
```

3. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce

### Budowanie dla produkcji

```bash
npm run build
# lub
yarn build
# lub
pnpm build
```

## 🌐 Deployment na Vercel

Aplikacja jest zoptymalizowana pod deployment na Vercel:

1. Wypchnij kod na GitHub
2. Zaimportuj repository w Vercel
3. Deploy z domyślnymi ustawieniami
4. Gotowe! Twój kalkulator podsieci jest live

Alternatywnie, użyj Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📝 Przykłady użycia

### Kalkulator CIDR
Input: `192.168.1.0/24`
- Wyświetla szczegóły sieci, użyteczne IP, reprezentację binarną

### Dzielenie Sieci
Input: `10.0.0.0/16` z 4 podsieciami
- Tworzy 4 równe podsieci /18

### Planer VLSM
Baza: `172.16.0.0.0/16`
Wymagania:
- Sieć 1: 1000 hostów
- Sieć 2: 500 hostów
- Sieć 3: 100 hostów

Automatycznie oblicza optymalne rozmiary podsieci.

## 🏗️ Struktura projektu

```
subnets/
├── app/
│   ├── layout.tsx       # Layout główny z metadanymi
│   ├── page.tsx         # UI głównej aplikacji
│   └── globals.css      # Style globalne
├── lib/
│   └── subnet.ts        # Logika obliczeniowa podsieci
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── vercel.json          # Konfiguracja deploymentu Vercel
├── .eslintrc.json
├── .gitignore
└── README.md            # Kompletna dokumentacja
```

## 📄 Licencja

MIT

## 👨‍💻 Autor

Stworzone dla administratorów sieci przez administratorów sieci.


# 🕹️ Mini Arcade

<table>
  <tr>
    <td align="center"><strong>Main Page</strong></td>
  </tr>
    <tr>
    <td><img src="https://github.com/user-attachments/assets/cdc4b35c-723e-40f1-bda0-6e49d41fd3ae" width="800" />

</td>
    </tr>
</table>

A small collection of browser-based arcade games built with vanilla JavaScript, HTML, and Tailwind CSS. Pick a game from the menu and play — no installs, no dependencies, just click and go.

**🔗 Live Demo:** [shalizsharafi.github.io/Mini-Arcade](https://shalizsharafi.github.io/Mini-Arcade/)

---

## 🎮 Games

| Game | Players | Description |
|------|---------|-------------|
| 🔢 **Number Guesser** | 1 | A secret number between 0–100 is hidden. Use hot/cold feedback to guess it within 5 tries. |
| 🎲 **Dice Roller** | 2 | Roll the dice and rack up points — roll a 1 and lose your streak, roll a 6 for a bonus turn and double points. First to 25 wins. |
| 🔤 **Word Scramble** | 1 | A word is scrambled on screen — unscramble it and type your answer before you run out of guesses. |
| ⭕ **Tic Tac Toe** | 2 | Classic X's and O's. Best of 3 rounds, with score tracking and a match-winner overlay. |

---

## 📸 Screenshots

<!-- Replace the placeholders below with real screenshots or GIFs of each game. 
     Recommended: drop your images into a `/screenshots` folder in the repo and update the paths. -->

<table>
  <tr>
    <td align="center"><strong>Number Guesser</strong></td>
    <td align="center"><strong>Dice Roller</strong></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/386413ca-26a2-4539-b0e4-3f75b028e126" width="400" />
</td>
    <td><img src="https://github.com/user-attachments/assets/3c6b0645-4945-4927-a9c9-9a6135ddc4f2" width="400" />
</td>
  </tr>
  <tr>
    <td align="center"><strong>Word Scramble</strong></td>
    <td align="center"><strong>Tic Tac Toe</strong></td>
  </tr>
  <tr>
    <td><img  src="https://github.com/user-attachments/assets/69b10ff7-3ad1-44be-ab7d-9e42ecba2e3a" width="400" />
</td>
    <td><img src="https://github.com/user-attachments/assets/dedf9be7-8996-4b8e-9c0f-a0f1c66a8b65" width="400" />
</td>
  </tr>
</table>

---

## 🛠️ Built With

- **HTML5** — semantic markup for each game's structure
- **Tailwind CSS v4** — utility-first styling with custom theme tokens (colors, layout components)
- **Vanilla JavaScript** — all game logic, DOM manipulation, and state handling with no external libraries or frameworks

---

## ✨ Features

- Fully responsive layout (mobile, tablet, desktop)
- Custom animated UI elements (rolling dice, bouncing prompts, live turn indicators)
- Win/loss overlays with match history for multi-round games
- Clean, reusable component styling via Tailwind's `@layer components`

---

## 🚀 Getting Started

Clone the repo and open `index.html` in your browser — that's it, no build step required:

```bash
git clone https://github.com/ShalizSharafi/Mini-Arcade.git
cd Mini-Arcade
```

Then open `index.html` directly, or serve it locally:

```bash
npx serve .
```

### Project Structure

```
Mini-Arcade/
├── index.html          # Main markup for all four games
├── js/
│   └── master.js        # Game logic for all four games
├── stylesheet/
│   └── out.css           # Compiled Tailwind CSS
├── fonts/                # Roboto variable font
└── images/               # Icons and profile image
```

---

## 🧠 How It Works

Each game lives in its own `<div>` "box" that's toggled via the navigation bar. `master.js` handles:

- Randomized number/word generation
- Turn-based logic for two-player games (dice roller, tic tac toe)
- Win-condition checks (tic tac toe uses an 8-way line check across rows, columns, and diagonals)
- Score tracking and round overlays that reset state for a new match

---

## 👩‍💻 Author

**Shaliz Sharafi** — Front-End Developer

---

## 📄 License

This project is open source and available for personal or educational use. Feel free to fork it and add your own games!

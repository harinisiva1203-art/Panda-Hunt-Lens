# 🐼 Panda Hunt — AR Game

**Panda Hunt** is an interactive Augmented Reality game developed using **Snap Lens Studio** and **JavaScript**.

The player taps falling friendly pandas to score points while avoiding evil pandas that end the game.

## 📊 Published Lens

**21.7K+ Views on Snapchat** 🔥

Panda Hunt has been published as a Snapchat AR Lens and has reached **21.7K+ views**.

The view count will be updated as the Lens continues to gain views.

## 🎮 Try the Lens

**[Open Panda Hunt on Snapchat](https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=92204cc39e9a40678986f5e492376bf7&metadata=01)**

Scan the Snapcode below using Snapchat to try the Lens.


## 🎮 Gameplay

The game features falling pandas that the player must interact with.

* 🐼 Tap friendly pandas to increase the score.
* ⭐ A visual effect appears after successfully tapping a panda.
* 🧛 Avoid evil pandas.
* 💀 Tapping an evil panda triggers the game-over sequence.
* 🔄 Pandas respawn and continue falling during gameplay.

## ✨ Features

* Augmented Reality gameplay
* Touch-based interaction
* Multiple panda characters
* Friendly and evil panda mechanics
* Dynamic score system
* Panda spawning and respawning
* Falling movement mechanics
* Game introduction sequence
* Game-over sequence
* Custom visual assets and effects

## 🛠️ Technologies Used

| Technology               | Purpose                                 |
| ------------------------ | --------------------------------------- |
| Snap Lens Studio         | AR development and scene creation       |
| JavaScript               | Gameplay logic and interactions         |
| Lens Studio Scene System | Game objects and scene management       |
| Touch Events             | Player interaction                      |
| Custom Assets            | Characters, backgrounds, effects and UI |

## 🧠 JavaScript Implementation

The gameplay is divided into multiple scripts, with each script handling a specific responsibility.

| Script            | Responsibility                              |
| ----------------- | ------------------------------------------- |
| `PandaFall.js`    | Controls panda falling movement             |
| `PandaManager.js` | Manages panda spawning and gameplay objects |
| `PandaTap.js`     | Handles friendly panda interaction          |
| `EvilPandaTap.js` | Handles evil panda interaction              |
| `ScoreManager.js` | Manages the player's score                  |
| `GameManager.js`  | Controls the overall game state             |
| `GameIntro.js`    | Handles the game introduction               |

## 📁 Project Structure

```text
Panda-Hunt-Lens/
│
├── Assets/
│   ├── PandaFall.js
│   ├── PandaManager.js
│   ├── PandaTap.js
│   ├── EvilPandaTap.js
│   ├── GameManager.js
│   ├── GameIntro.js
│   ├── ScoreManager.js
│   ├── Scene.scene
│   ├── Images & Textures
│   ├── Materials
│   └── Game Assets
│
├── Workspaces/
├── Panda_Hunt.esproj
├── icon.png
├── jsconfig.json
├── AGENTS.md
└── .gitignore
```

## 🎯 Development Highlights

During the development of Panda Hunt, I worked on:

* Object spawning and respawning
* Falling movement mechanics
* Touch-based interactions
* Score management
* Game-state management
* Game-over handling
* Visual effects and feedback
* Multiple interactive game objects
* Debugging and testing in Lens Studio
* Publishing an AR experience to Snapchat

## 🕹️ Game Flow

```text
Start Game
    ↓
Spawn Pandas
    ↓
Pandas Fall
    ↓
Player Taps Panda
    ↓
 ┌───────────────────┐
 │                   │
Friendly Panda     Evil Panda
 │                   │
 ↓                   ↓
Score +1          Game Over
 │
 ↓
Respawn
```

## 📈 Project Outcome

Panda Hunt was successfully published as a Snapchat AR Lens and reached:

**21.7K+ Views**

This project provided hands-on experience in building, debugging, testing, and publishing an interactive AR experience.

## 🚀 Future Improvements

* High-score / leaderboard system
* Multiple difficulty levels
* More panda variations
* Lives system
* Sound effects and background music
* Timed game mode
* Combo scoring
* Additional gameplay statistics
* More environments and visual effects

## 📚 What I Learned

Through this project, I gained practical experience with:

* AR development using Snap Lens Studio
* JavaScript gameplay scripting
* Event-driven interaction
* Object spawning and lifecycle management
* Game-state management
* Debugging AR experiences
* Designing interactive gameplay
* Publishing and monitoring Snapchat Lenses

## 👩‍💻 Developer

**Harini S.**

B.Tech Information Technology

Developed as an independent AR development project using **Snap Lens Studio** and **JavaScript**.

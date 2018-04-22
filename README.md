# SIT305-Project-2

Student name: Yufei Wu

Student id: 216236195

Student name: Junda Peng

Student id: 216235896

(Henry has confirmed)

# Instructions of compiling and running
```
# Install Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update

# Install dependencies
brew install node
brew install npm
brew install watchman

# Build
yarn add react-navigation
npm install

# Run
npm start
```

# Key Designs
Map will be implemented by 2D tiles (with mapping between data and image grid)

Character types: Hero (main character) / NPC / Enemy
Character attributes: HP MP ATK (DEF AGI LUK)

Special Plots: Animation playback
Normal Plots: Dialogue system - dialogue text pop up on top of game UI

Battle system layout: info + characters image on both sides
Battle system actions: menu pop up (attack, rest / defence, counter attack)
Battle system notification: Pop up event report + fight results

Saving system: position and main quest progress (represented by integer value)


# Henry Comments 17/April #
- Rename worklog to changelog - done
- You have two readme files (one of them isn't yours - delete that one) - done
- You still need many many more updates to Pass. I'll give you until this Sunday to catch up at least 2 commits each of at least 5 hours work each, and then I'll overlook the missing Week 3 + 4 + 5 work.

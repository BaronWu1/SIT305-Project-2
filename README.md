# SIT305-Project-2

Student name: Yufei Wu

Student id: 216236195

Student name: Junda Peng

Student id: 216235896

(Henry has confirmed)

# Background of implementation
First of all, we have split to explore different 2 ways to complete the task.
Initially we are trying to complete it using React Native together. After some work we decided to split to let Junda keep working on React Native while Baron went back to implement the app using the normal Swift way. Eventually both students worked on both apps while the React Native app kind of got stuck and the Swift app is the more complete demo. In the codebase and submission we included all codes from both apps.

# The Swift RPG - compiling and running
To run the Swift RPG app (from directory "rpg-swift"):
double click "RPG.xcodeproj" to open XCode and run

# The Swift RPG - features
Splash screen, full playable game although brief procedure. The main character will have to find the key to the castle to save the princess. He would have to find and talk to the NPC to figure out that there's a key to the castle somewhere and then find the key so he can return to the castle and enter it.

The game is fully developed by Swift / SpriteKit with all main components (controller / screen logic, oo logic, SKS files, musics and other resources) fully separated and structured well. It is reasonable short however fully implemented

# The React Native RPG - compiling and running
To run the React Native (Expo) RPG app (from directory "rpg-expo"):

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

# The React Native RPG - features
The implementation is not complete. It features a splash screen, integration to React Navigation and Redux, a main menu and a draft of main game map GUI including control buttons etc. We left it and went for the Swift implementation at very early stage.

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

# Henry comments 27/April
- Where is your project? I don't see any files here.

# Baron comments 28/April
- Hi Henry, did you mean the xcode project files? We are using React Native for this course (which appears to really be the no.1 hybrid app framework, but also supports integrating with native code). The idea initially comes from your encourage of using frameworks such as Cordova. React Native is pretty similar with Cordova.

In terms of xcode project file, we are using expo to bootstrap this project, which means we are not planning to integrate with native code when we start, although we can. However, we can "eject" the project to "expokit", get all the xcode project files and abilities to integrate with native code / native or xcode features. If desired, in the last phase of the project we will do that.

Currently we can run the project by following the instructions section "Instructions of compiling and running" earlier in this README file, although we are still working on the main RPG map grid screen which takes a bit of work.

Please let me know if you have any questions and thanks for your continuous guiding! Thanks.

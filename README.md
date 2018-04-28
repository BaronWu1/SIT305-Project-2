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

# Henry comments 27/April
- Where is your project? I don't see any files here.

# Baron comments 28/April
- Hi Henry, did you mean the xcode project files? We are using React Native for this course (which appears to really be the no.1 hybrid app framework, but also supports integrating with native code). The idea initially comes from your encourage of using frameworks such as Cordova. React Native is pretty similar with Cordova.

In terms of xcode project file, we are using expo to bootstrap this project, which means we are not planning to integrate with native code when we start, although we can. However, we can "eject" the project to "expokit", get all the xcode project files and abilities to integrate with native code / native or xcode features. If desired, in the last phase of the project we will do that.

Currently we can run the project by following the instructions section "Instructions of compiling and running" earlier in this README file, although we are still working on the main RPG map grid screen which takes a bit of work.

Please let me know if you have any questions and thanks for your continuous guiding! Thanks.

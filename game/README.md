## Info 343 - Winter 2018
### Final Project
### Maddie, Joy and Tara

#### Project Idea: Online, multi-player Cards Against Humanity Game

Here is an [an example](https://github.com/jlxp/PretendYoureXyzzy) code repository for a similar game.
We will adjust the card content to be all info/UW jokes to keep the game appropriate and funny for the intended audience.

##### What we will build:
Players will enter the game room by entering a nickname which will be stored in Firebase. The game will take 4 players. We will have a list of constants that represent the cards and their contents, stored in Firebase. Users will have 5 cards in their hand and can pick which one to play for the given subject card. The person with the subject card will rotate and they will choose whichever card they believe is the most funny for that round and the person who played that card's score will improve. The game will end once someone has 3 points.

##### Who did what:
* Maddie worked on the user interface.
* Joy set up the Sign In and focused on user logic and debugging.
* Tara worked on managing state and game development.

##### Frameworks and Libraries:
* We used the shuffle algorithm used in the tiles game.
* We used Bootstrap for formatting purposes.

#### Here is our [final solution](https://info343b-w18.github.io/info343-finalproject/game/#/) on GitHub pages.

* Final notes: The game requires 4 players to play (can be 4 seperate browsers, i.e. Chrome, Chrome Incognito, Firefox, Firefox Private). The person who is marked as the "Chosen One" is the one who chooses the funniest card for the round and should NOT click on any of their cards to play for that round. The game will end when one player has 3 points. Please let us know if you have any questions about how to play or if anything is acting funny because it should be totally functional. If the cards in your hand stop updating after you play them then please just refresh one of the pages playing the game and it should fix the issue - sorry about that but it happens rarely :) Thank you so much!
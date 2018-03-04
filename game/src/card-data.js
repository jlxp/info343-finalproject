const WHITE_CARDS = [
    {answer: "INFO 200"},
    {answer: "CSE class websites"},  
    {answer: "messages on Canvas"},
    {answer: "Informatics program acceptance email"},
    {answer: "Internet Explorer"},
    {answer: "employer information sessions without free food"},
    {answer: "the stairs to the 4th floor of Mary Gates"},
    {answer: "your old MySpace profile"},
    {answer: "Amazon Go"},
    {answer: 'math problems written in binary'},
    {answer: "your first assignment using recursion"},
    {answer: "advising appointments"},
    {answer: "an explanation to your parents of what ‘Informatics’ is"},
    {answer: "IT Help Desk"},
    {answer: "online applications"},
    {answer: 'Andy Ko'},
    {answer: "business students"},
    {answer: "1,000 emails from the Informatics department"},
    {answer: "public transportation"},
    {answer: "dead week"},
    {answer: "finals week"},
    {answer: "rejection emails"},
    {answer: "the dreaded CSE 373"},
    {answer: "iLounge"},
    {answer: "UW registration system"},
    {answer: "tech demos"},
    {answer: "internship recruiting"},
    {answer: "project posters"},
    {answer: "web dev"},
    {answer: "windows updates"},
    {answer: "the Inimitable Dave Sterns"},
    {answer: 'group projects'},
    {answer: "Java"},
    {answer: 'project management'},
    {answer: "WINFO"},
    {answer: 'a software developer'},
    {answer: "virtual reality"},
    {answer: "hackathons"},
    {answer: "null pointer exception"},
    {answer: "Greg Hay"},
    {answer: 'technical interviews'},
    {answer: "TE Labs"},
    {answer: "design thinking"},
    {answer: "Mary Gates Hall"},
    {answer: "the iSchool is my school chant"},
    {answer: "capstone"},
    {answer: "sudo commands"},
    {answer: "INFO game night"},
    {answer: "infinite for loops"},
    {answer: "tech memes"},
    {answer: "Stack Overflow answers"
    }, {answer: "phone interviews"
    }, {answer: 'uncommented code'
    }, {answer: "Slack"
    }, {answer: 'git push'
    }, {answer: "memes"
    }, {answer: 'GoogleDrive'
    }, {answer: 'Firebase'
    }, {answer: 'Chicken nuggets'
    }, {answer: 'Joy'
    }, {answer: 'An average informatics student'
    }, {answer: 'A CSE student'
    }, {answer: 'Maddie'
    }, {answer: 'Tara'
    }, {answer: 'iMac'
    }, {answer: 'GitHub'
    }, {answer: 'Visual Studio Code'
    }, {answer: 'McDonalds'
    }, {answer: 'Subway'
    }, {answer: 'poke with the crew'
    }, {answer: 'Nickelback'
    }, {answer: 'the sweet release of death'
    }, {answer: 'Robert Downey, Jr.'
    }, {answer: 'my soul'
    }, {answer: 'lack of sleep'
    }, {answer: 'falling asleep in 8:30am lecture'
    }, {answer: 'the glass ceiling.'
    }, {answer: 'free samples.'
    }, {answer: 'free food'
    }, {answer: 'crippling debt'
    }, {answer: 'puppies!'
    }, {answer: 'Bees?'
    }, {answer: 'frolicking'
    }, {answer: 'unfathomable stupidity'
    }, {answer: 'boogers'
    }, {answer: 'soup that is too hot'
    }, {answer: "Morgan Freeman's voice"
    }, {answer: 'Lady Gaga'
    }, {answer: 'a death ray'
    }, {answer: 'vigilante justice'
    }, {answer: 'poor life choices'
    }, {answer: 'Nicolas Cage'
    }, {answer: 'poopy diapers'
    }, {answer: 'a live studio audience'
    }, {answer: 'a dead studio audience'
    }, {answer: 'Shiny objects.'
    }, {answer: 'Silence'
    }, {answer: 'A spastic nerd.'
    }, {answer: 'A live studio audience.'
    }, {answer: 'Poopy diapers.'
    }, {answer: 'The light of a billion suns.'
    }, {answer: 'cheating'
    }, {answer: 'cheating death'
    }, {answer: 'cheating on my diet'
    }, {answer: 'The art of seduction.'
    }, {answer: 'Funky fresh rhymes.'
    }, {answer: 'An oversized lollipop.'
    }, {answer: 'Destroying the evidence.'
    }, {answer: 'Good grammar.'
    }, {answer: 'Hipsters.'
    }, {answer: 'Gandalf.'
    }, {answer: 'Genetically engineered super-soldiers.'
    }, {answer: 'Getting abducted by Peter Pan.'
    }, {answer: 'Fabricating statistics.'
    }, {answer: 'Dancing with a broom.'
    }, {answer: 'Dorito breath.'
    }, {answer: 'One thousand Slim Jims.'
    }, {answer: 'My Macbook Pro.'
    }, {answer: 'Ominous background music.'
    }, {answer: 'Media coverage.'
    }, {answer: 'Moral ambiguity.'
    }, {answer: 'Mad hacky-sack skills.'
    }, {answer: 'Leveling up.'
    }, {answer: 'Jafar.'
    }, {answer: 'The economy.'
    }, {answer: 'Slow motion.'
    }, {answer: 'Space muffins.'
    }, {answer: 'Santa Claus.'
    }, {answer: 'Quiche.'
    }, {answer: 'Being a busy adult with many important things to do.'
    }, {answer: 'The hiccups.'
    }, {answer: 'The harsh light of day.'
    }, {answer: 'Being a dinosaur.'
    }, {answer:' A web of 343 sites.'
    }, {answer: 'Appreciative snapping.'
    }, {answer: 'Apologizing.'
    }, {answer: 'Clams.'
    }, {answer: 'Spring break!'
    }, {answer: 'Dining with cardboard cutouts of the cast of Friends.'
    }, {answer: 'Making a friend.'
    }, {answer: 'A man in yoga pants with a ponytail and feather earrings.'
    }, {answer: 'A squadron of moles wearing aviator goggles.'
    }, {answer: "Beefin' over turf."
    }, {answer: 'The Google.'
    }, {answer: 'Bullshit.'
    }, {answer: 'A sweet spaceship.'
    }, {answer: 'A 55-gallon drum of lube.'
    }, {answer: 'The human body.'
    }, {answer: 'Nunchuck moves.'
    }, {answer: 'Oncoming traffic.'
    }, {answer: 'A dollop of sour cream.'
    }, {answer: 'A slightly shittier parallel universe.'
    }, {answer: 'Power.'
    }, {answer: 'Basic human decency.'
    }, {answer: 'One Ring to rule them all.'
    }, {answer: 'The day the birds attacked.'
    }, {answer: 'Graphic violence, adult language, and some sexual content.'
    }, {answer: "The mere concept of Applebee's."
    }, {answer: 'A sad fat dragon with no friends.'
    }, {answer: 'Existing.'
    }, {answer: 'Mooing.'
    }, {answer: 'Rising from the grave.'
    }, {answer: 'Subduing a grizzly bear and making her your wife.'
    }, {answer: 'Loki, the trickster god.'
    }, {answer: 'Wearing an octopus for a hat.'
    }, {answer: 'An unhinged ferris wheel rolling toward the sea.'
    }, {answer: 'Finding Waldo.'
    }, {answer: 'The corporations.'
    }, {answer: 'Me.'
    }, {answer: 'Some kind of bird-man.'
    }, {answer: 'The entire Internet.'
    }, {answer: 'A boo-boo.'
    }, {answer: 'Indescribable loneliness.'
    }, {answer: 'Chugging a lava lamp.'
    }, {answer: 'Nothing.'
    }, {answer: 'A cop who is also a dog.'
    }, {answer: 'The Land of Chocolate.'
    }, {answer: "Mufasa's death scene."
    }, {answer: 'The Harlem Globetrotters.'
    }, {answer: 'Demonic possession.'
    }, {answer: "Girls that always be textin'."
    }, {answer: 'A spontaneous conga line.'
    }, {answer: 'Disco fever.'
    }, {answer: 'Drinking ten 5-hour ENERGYs; to get fifty continuous hours of energy.'
    }, {answer: 'Spending lots of money.'
    }, {answer: 'Putting an entire peanut butter and jelly sandwich into the VCR.'
    }, {answer: 'An unstoppable wave of fire ants.'
    }, {answer: 'Flying robots that kill people.'
    }, {answer: 'Unlimited soup, salad, and breadsticks.'
    }, {answer: 'Screaming like a maniac.'
    }, {answer: 'Not contributing to society in any meaningful way.'
    }, {answer: 'Buying the right pants to be cool.'
    }, {answer: 'A surprising amount of hair.'
    }, {answer: 'A PowerPoint presentation.'
    }, {answer: 'Sugar madness.'
    }, {answer: 'How awesome I am.'
    }, {answer: 'Falling into the toilet.'
    }, {answer: 'A hopeless amount of spiders.'
    }, {answer: 'Drinking responsibly.'
    }, {answer: 'Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night.'
    }, {answer: 'Bouncing up and down.'
    }, {answer: 'Ambiguous sarcasm.'
    }, {answer: 'A shiny rock that proves I love you.'
    }, {answer: 'Exploding pigeons.'
    }, {answer: 'A kiss on the lips.'
    }, {answer: 'Doo-doo.'
    }, {answer: 'Sports.'
    }, {answer: 'Unquestioning obedience.'
    }, {answer: 'Three consecutive seconds of happiness.'
    }, {answer: 'Grammar nazis who are also regular Nazis.'
    }, {answer: 'Prince Ali, fabulous he, Ali Ababwa.'
    }, {answer: 'A manhole.'
    }, {answer: 'A bunch of idiots playing a card game online instead of interacting like normal humans.'
    }, {answer: 'Sharks with legs.'
    }, {answer: 'Injecting speed into one arm and horse tranquilizer into the other.'
    }, {answer: 'Oil!'
    }, {answer: 'A powered exoskeleton.'
    }, {answer: 'A disappointing salad.'
    }, {answer: 'Being nine years old.'
    }, {answer: 'The unbelievable world of mushrooms.'
    }, {answer: 'The Abercrombie & Fitch lifestyle.'
    }, {answer: 'Vegetarian options.'
    }, {answer: 'Backwards knees.'
    }, {answer: 'A zero-risk way to make $2,000 from home.'
    }, {answer: 'A crazy little thing called love.'
    }, {answer: 'All these decorative pillows.'
    }, {answer: 'A mouthful of potato salad.'
    }, {answer: 'The passage of time.'
    }, {answer: "Changing a person's mind with logic and facts."
    }, {answer: "Genghis Khan's DNA."
    }, {answer: 'Wearing glasses and sounding smart.'
    }, {answer: 'A team of lawyers.'
    }, {answer: 'Not believing in giraffes.'
    }, {answer: 'A giant powdery manbaby.'
    }, {answer: 'P.F. Chang himself.'
    }, {answer: 'Social justice warriors with flamethrowers of compassion.'
    }, {answer: 'Free ice cream, yo.'
    }, {answer: 'Info Study Breaks'
    }, {answer: 'A buttload of candy.'
    }, {answer: 'One unforgettable night of coding.'
    }, {answer: 'Being popular and good at coding.'
    }, {answer: 'Like a million alligators.'
    }, {answer: 'The all-new Nissan Pathfinder with 0.9% APR financing!'
    }, {answer: 'Kale.'
    }, {answer: 'Immortality cream.'
    }, {answer: 'Shapes and colors.'
    }, {answer: 'Robots who just want to party.'
    }, {answer: 'A self-microwaving burrito.'
    }, {answer: 'Treasures beyond your wildest dreams.'
    }, {answer: 'Walking into a glass door.'
    }, {answer: 'The designer.'
    }, {answer: 'An overwhelming variety of cheeses.'
    }, {answer: 'Reading the entire End-User License Agreement.'
    }, {answer: "Generally having no idea of what's going on."
    }, {answer: "No longer finding any Cards Against Humanity card funny."
    }
    ];
    const WHITE_CARDS = [
    {answer: "INFO 200"}, 
    {answer: "CSE class websites"},   
    {answer: "messages on Canvas"}, 
    {answer: "Informatics program acceptance email"}, 
    {answer: "Internet Explorer"}, 
    {answer: "employer information sessions without free food"}, 
    {answer: "the stairs to the 4th floor of Mary Gates"}, 
    {answer: "your old MySpace profile"}, 
    {answer: "Amazon Go"}, 
    {answer: 'math problems written in binary'}, 
    {answer: "your first assignment using recursion"}, 
    {answer: "advising appointments"}, 
    {answer: "an explanation to your parents of what ‘Informatics’ is"}, 
    {answer: "IT Help Desk"}, 
    {answer: "online applications"}, 
    {answer: 'Andy Ko'}, 
    {answer: "business students"}, 
    {answer: "1,000 emails from the Informatics department"}, 
    {answer: "public transportation"}, 
    {answer: "dead week"}, 
    {answer: "finals week"}, 
    {answer: "rejection emails"}, 
    {answer: "the dreaded CSE 373"}, 
    {answer: "iLounge"}, 
    {answer: "UW registration system"}, 
    {answer: "tech demos"}, 
    {answer: "internship recruiting"}, 
    {answer: "project posters"}, 
    {answer: "web dev"}, 
    {answer: "windows updates"}, 
    {answer: "the Inimitable Dave Sterns"}, 
    {answer: 'group projects'}, 
    {answer: "Java"}, 
    {answer: 'project management'}, 
    {answer: "WINFO"}, 
    {answer: 'a software developer'}, 
    {answer: "virtual reality"}, 
    {answer: "hackathons"}, 
    {answer: "null pointer exception"}, 
    {answer: "Greg Hay"}, 
    {answer: 'technical interviews'}, 
    {answer: "TE Labs"}, 
    {answer: "design thinking"}, 
    {answer: "Mary Gates Hall"}, 
    {answer: "the iSchool is my school chant"}, 
    {answer: "capstone"}, 
    {answer: "sudo commands"}, 
    {answer: "INFO game night"}, 
    {answer: "infinite for loops"}, 
    {answer: "tech memes"}, 
    {answer: "Stack Overflow answers"
    }, {answer: "phone interviews"
    }, {answer: 'uncommented code'
    }, {answer: "Slack"
    }, {answer: 'git push'
    }, {answer: "memes"
    }, {answer: 'GoogleDrive'
    }, {answer: 'Firebase'
    }, {answer: 'Chicken nuggets'
    }, {answer: 'Joy'
    }, {answer: 'An average informatics student'
    }, {answer: 'A CSE student'
    }, {answer: 'Maddie'
    }, {answer: 'Tara'
    }, {answer: 'iMac'
    }, {answer: 'GitHub'
    }, {answer: 'Visual Studio Code'
    }, {answer: 'McDonalds'
    }, {answer: 'Subway'
    }, {answer: 'poke with the crew'
    }, {answer: 'Nickelback'
    }, {answer: 'the sweet release of death'
    }, {answer: 'Robert Downey, Jr.'
    }, {answer: 'my soul'
    }, {answer: 'lack of sleep'
    }, {answer: 'falling asleep in 8:30am lecture'
    }, {answer: 'the glass ceiling.'
    }, {answer: 'free samples.'
    }, {answer: 'free food'
    }, {answer: 'crippling debt'
    }, {answer: 'puppies!'
    }, {answer: 'Bees?'
    }, {answer: 'frolicking'
    }, {answer: 'unfathomable stupidity'
    }, {answer: 'boogers'
    }, {answer: 'soup that is too hot'
    }, {answer: "Morgan Freeman's voice"
    }, {answer: 'Lady Gaga'
    }, {answer: 'a death ray'
    }, {answer: 'vigilante justice'
    }, {answer: 'poor life choices'
    }, {answer: 'Nicolas Cage'
    }, {answer: 'poopy diapers'
    }, {answer: 'a live studio audience'
    }, {answer: 'a dead studio audience'
    }, {answer: 'Shiny objects.'
    }, {answer: 'Silence'
    }, {answer: 'A spastic nerd.'
    }, {answer: 'A live studio audience.'
    }, {answer: 'Poopy diapers.'
    }, {answer: 'The light of a billion suns.'
    }, {answer: 'cheating'
    }, {answer: 'cheating death'
    }, {answer: 'cheating on my diet'
    }, {answer: 'The art of seduction.'
    }, {answer: 'Funky fresh rhymes.'
    }, {answer: 'An oversized lollipop.'
    }, {answer: 'Destroying the evidence.'
    }, {answer: 'Good grammar.'
    }, {answer: 'Hipsters.'
    }, {answer: 'Gandalf.'
    }, {answer: 'Genetically engineered super-soldiers.'
    }, {answer: 'Getting abducted by Peter Pan.'
    }, {answer: 'Fabricating statistics.'
    }, {answer: 'Dancing with a broom.'
    }, {answer: 'Dorito breath.'
    }, {answer: 'One thousand Slim Jims.'
    }, {answer: 'My Macbook Pro.'
    }, {answer: 'Ominous background music.'
    }, {answer: 'Media coverage.'
    }, {answer: 'Moral ambiguity.'
    }, {answer: 'Mad hacky-sack skills.'
    }, {answer: 'Leveling up.'
    }, {answer: 'Jafar.'
    }, {answer: 'The economy.'
    }, {answer: 'Slow motion.'
    }, {answer: 'Space muffins.'
    }, {answer: 'Santa Claus.'
    }, {answer: 'Quiche.'
    }, {answer: 'Being a busy adult with many important things to do.'
    }, {answer: 'The hiccups.'
    }, {answer: 'The harsh light of day.'
    }, {answer: 'Being a dinosaur.'
    }, {answer:' A web of 343 sites.'
    }, {answer: 'Appreciative snapping.'
    }, {answer: 'Apologizing.'
    }, {answer: 'Clams.'
    }, {answer: 'Spring break!'
    }, {answer: 'Dining with cardboard cutouts of the cast of Friends.'
    }, {answer: 'Making a friend.'
    }, {answer: 'A man in yoga pants with a ponytail and feather earrings.'
    }, {answer: 'A squadron of moles wearing aviator goggles.'
    }, {answer: "Beefin' over turf."
    }, {answer: 'The Google.'
    }, {answer: 'Bullshit.'
    }, {answer: 'A sweet spaceship.'
    }, {answer: 'A 55-gallon drum of lube.'
    }, {answer: 'The human body.'
    }, {answer: 'Nunchuck moves.'
    }, {answer: 'Oncoming traffic.'
    }, {answer: 'A dollop of sour cream.'
    }, {answer: 'A slightly shittier parallel universe.'
    }, {answer: 'Power.'
    }, {answer: 'Basic human decency.'
    }, {answer: 'One Ring to rule them all.'
    }, {answer: 'The day the birds attacked.'
    }, {answer: 'Graphic violence, adult language, and some sexual content.'
    }, {answer: "The mere concept of Applebee's."
    }, {answer: 'A sad fat dragon with no friends.'
    }, {answer: 'Existing.'
    }, {answer: 'Mooing.'
    }, {answer: 'Rising from the grave.'
    }, {answer: 'Subduing a grizzly bear and making her your wife.'
    }, {answer: 'Loki, the trickster god.'
    }, {answer: 'Wearing an octopus for a hat.'
    }, {answer: 'An unhinged ferris wheel rolling toward the sea.'
    }, {answer: 'Finding Waldo.'
    }, {answer: 'The corporations.'
    }, {answer: 'Me.'
    }, {answer: 'Some kind of bird-man.'
    }, {answer: 'The entire Internet.'
    }, {answer: 'A boo-boo.'
    }, {answer: 'Indescribable loneliness.'
    }, {answer: 'Chugging a lava lamp.'
    }, {answer: 'Nothing.'
    }, {answer: 'A cop who is also a dog.'
    }, {answer: 'The Land of Chocolate.'
    }, {answer: "Mufasa's death scene."
    }, {answer: 'The Harlem Globetrotters.'
    }, {answer: 'Demonic possession.'
    }, {answer: "Girls that always be textin'."
    }, {answer: 'A spontaneous conga line.'
    }, {answer: 'Disco fever.'
    }, {answer: 'Drinking ten 5-hour ENERGYs; to get fifty continuous hours of energy.'
    }, {answer: 'Spending lots of money.'
    }, {answer: 'Putting an entire peanut butter and jelly sandwich into the VCR.'
    }, {answer: 'An unstoppable wave of fire ants.'
    }, {answer: 'Flying robots that kill people.'
    }, {answer: 'Unlimited soup, salad, and breadsticks.'
    }, {answer: 'Screaming like a maniac.'
    }, {answer: 'Not contributing to society in any meaningful way.'
    }, {answer: 'Buying the right pants to be cool.'
    }, {answer: 'A surprising amount of hair.'
    }, {answer: 'A PowerPoint presentation.'
    }, {answer: 'Sugar madness.'
    }, {answer: 'How awesome I am.'
    }, {answer: 'Falling into the toilet.'
    }, {answer: 'A hopeless amount of spiders.'
    }, {answer: 'Drinking responsibly.'
    }, {answer: 'Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night.'
    }, {answer: 'Bouncing up and down.'
    }, {answer: 'Ambiguous sarcasm.'
    }, {answer: 'A shiny rock that proves I love you.'
    }, {answer: 'Exploding pigeons.'
    }, {answer: 'A kiss on the lips.'
    }, {answer: 'Doo-doo.'
    }, {answer: 'Sports.'
    }, {answer: 'Unquestioning obedience.'
    }, {answer: 'Three consecutive seconds of happiness.'
    }, {answer: 'Grammar nazis who are also regular Nazis.'
    }, {answer: 'Prince Ali, fabulous he, Ali Ababwa.'
    }, {answer: 'A manhole.'
    }, {answer: 'A bunch of idiots playing a card game online instead of interacting like normal humans.'
    }, {answer: 'Sharks with legs.'
    }, {answer: 'Injecting speed into one arm and horse tranquilizer into the other.'
    }, {answer: 'Oil!'
    }, {answer: 'A powered exoskeleton.'
    }, {answer: 'A disappointing salad.'
    }, {answer: 'Being nine years old.'
    }, {answer: 'The unbelievable world of mushrooms.'
    }, {answer: 'The Abercrombie & Fitch lifestyle.'
    }, {answer: 'Vegetarian options.'
    }, {answer: 'Backwards knees.'
    }, {answer: 'A zero-risk way to make $2,000 from home.'
    }, {answer: 'A crazy little thing called love.'
    }, {answer: 'All these decorative pillows.'
    }, {answer: 'A mouthful of potato salad.'
    }, {answer: 'The passage of time.'
    }, {answer: "Changing a person's mind with logic and facts."
    }, {answer: "Genghis Khan's DNA."
    }, {answer: 'Wearing glasses and sounding smart.'
    }, {answer: 'A team of lawyers.'
    }, {answer: 'Not believing in giraffes.'
    }, {answer: 'A giant powdery manbaby.'
    }, {answer: 'P.F. Chang himself.'
    }, {answer: 'Social justice warriors with flamethrowers of compassion.'
    }, {answer: 'Free ice cream, yo.'
    }, {answer: 'Info Study Breaks'
    }, {answer: 'A buttload of candy.'
    }, {answer: 'One unforgettable night of coding.'
    }, {answer: 'Being popular and good at coding.'
    }, {answer: 'Like a million alligators.'
    }, {answer: 'The all-new Nissan Pathfinder with 0.9% APR financing!'
    }, {answer: 'Kale.'
    }, {answer: 'Immortality cream.'
    }, {answer: 'Shapes and colors.'
    }, {answer: 'Robots who just want to party.'
    }, {answer: 'A self-microwaving burrito.'
    }, {answer: 'Treasures beyond your wildest dreams.'
    }, {answer: 'Walking into a glass door.'
    }, {answer: 'The designer.'
    }, {answer: 'An overwhelming variety of cheeses.'
    }, {answer: 'Reading the entire End-User License Agreement.'
    }, {answer: "Generally having no idea of what's going on."
    }, {answer: "No longer finding any Cards Against Humanity card funny."
    }
    ];
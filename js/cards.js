"use strict";

// card content borrowed from: https://github.com/jlxp/PretendYoureXyzzy/blob/master/cah_cards.sql

const BLACK_CARDS = [
    {
        question: "Who stole the cookies from the cookie jar?"
    },
    {
        question: "What is the next great Kickstarter project?"
    },
    {
        question: "Why can't I sleep at night?"
    },
    {
        question: "What's that smell?"
    },
    {
        question: "What is a girl's best friend?"
    },
    {
        question: "What ended my last relationship?"
    },
    {
        question: "What are my parent's hiding from me?"
    },
    {
        question: "What don't you want to find in your Chinease food?"
    },
    {
        question: "What will I bring back in time to convince people that I am a powerful wizard?"
    },
    {
        question: "Have you tried turning ____ off and back on?"
    },
    {
        question: "What would grandma find disturbing, yet oddly charming?"
    },
    {
        question: "What helps Obama unwind?"
    },
    {
        question: "What gets better with age?"
    },
    {
        question: "What never fails to liven up the party?"
    },
    {
        question: "I got 99 problems but _____ ain't one"
    },
    {
        question: "TSA guidelines now prohibity _____ on airplanes"
    },
    {
        question: "I drink to forget _____."
    },
    {
        question: "I'm sorry Professor, but I couldn't complete my homework because of _____."
    },
    {
        question: "Alternative medicine is now embracing the curative powers of _____."
    },
    {
        question: "It's a pity that kids these days are all getting involved with _____."
    },
    {
        question: "_____. That's how I want to die."
    },
    {
        question: "I wish I hadn't lost the instruction manual for _____."
    },
    {
        question: "Instead of coal, Santa now gives the bad children _____."
    },
    {
        question: "In 1,000 years, when paper money is but a distance memory, _____ will be our currency."
    },
    {
        question: "A romantic, candlelit dinner would be incomplete without _____."
    },
    {
        question: "Next from J.K. Rowling: Harry Potter and the Chamber of _____."
    },
    {
        question: "When I am the President of the United States, I will create the Department of _____."
    },
    {
        question: "Major League Baseball has banned _____ for giving players an unfair advantage."
    },
    {
        question: "Coming to Broadway this season, _____: The Musical."
    },
    {
        question: "In Michael Jackson's final moments, he thought about ______."
    }, 
    {
        question: "Life was difficult for cavement before _____."
    }, 
    {
        question: "What is Curious George so curious about?"
    },
    {
        question: "In his new self-produced album, Kanye West raps over the sounds of _____."
    }, 
    {
        question: "What is the gift that keeps in giving?"
    },
    {
        question: "The Five Stages of Grief: denial, answer, bargaining, _____ and acceptance."
    },
    {
        question: "Next time on Dr. Phil: How to talk to your child about _____."
    },
    {
        question: "Only two things in life are certain: death and _____."
    },
    {
        question: "The votes are in, and the new college mascot is _____."
    }, 
    {
        question: "These aren't the _____ you're looking for."
    },
    {
        question: "We're gonna need a bigger _____."
    },
    {
        question: "We had a _____ party, but it turned out not to be very much fun."
    },
    {
        question: "_____ makes terrible pillow talk."
    },
    {
        question: "All of my algorithms were really just disguised ______."
    },
    {
        question: "The #1 Programmer's excuse for legitimately slacking off: _____."
    },
    {
        question: "There are so many Google results for 'Died in a _____ accident.'"
    },
    {
        question: "Real programmers use _____."
    },
    {
        question: "What is my favorite unit of measurement?"
    },
    {
        question: "Luke, I am your ______."
    },
    {
        question: "You think you have defeated me? Well, let's see how you handle _____."
    },
    {
        question: "Like _____, State Farm is there."
    },
    {
        question: "Why am I so tired?"
    },
    {
        question: "You are not alone. Millions of Americans struggle with _____ every day."
    },
    {
        question: "And would you liek those buffalo wings mild, hot, or _____."
    },
    {
        question: "What really killed the dinosaurs?"
    }
];

const WHITE_CARDS = [
    {
        answer: "INFO 200"
    },
    {
        answer: "Web Dev"
    },
    {
        answer: "Dave Sterns"
    },
    {
        answer: "Group projects"
    },
    {
        answer: "Java"
    },
    {
        answer: "Project Management"
    },
    {
        answer: "WINFO"
    },
    {
        answer: "Software Developer"
    },
    {
        answer: "Virtual Reality"
    },
    {
        answer: "Hackathons"
    },
    {
        answer: "Null pointer exception"
    },
    {
        answer: "Greg Hay"
    },
    {
        answer: "Technical interviews"
    },
    {
        answer: "TE Labs"
    },
    {
        answer: "Design Thinking"
    },
    {
        answer: "Mary Gates Hall"
    },
    {
        answer: "The iSchool is my school chant"
    },
    {
        answer: "Capstone"
    },
    {
        answer: "Sudo commands"
    },
    {
        answer: "INFO Game Night"
    }, 
    {
        answer: "Tech memes"
    },
    {
        answer: "Stack Overflow answers"
    },
    {
        answer: "Documentation"
    },
    {
        answer: "Slack"
    },
    {
        
    }

];
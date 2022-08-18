
export const jobNpcs = [
  {
    id: 'recruiter 1',
    sprite: 'bussinesMan1',
    spriteSrc: './Assets/Sprites/bussinesMan1.png',
    frameWidth: 32,
    frameHeight:34,
    animationMapping:{ //moves
      up:{
        leftFoot:10,
        standing: 0,
        rightFoot:2
      },
      down:{
        leftFoot:11,
        standing:5,
        rightFoot:8
      },
      left:{
        leftFoot:3,
        standing:6,
        rightFoot:9
      },
      right:{
        leftFoot:7,
        standing:1,
        rightFoot:4
      }
    },
    randomMove: 3,
    currentDialog: 0, 
    canTalk: true,
    dialogs:[
     {
      currentPhrase:0,
      content: [
        ['Recruiter', 'Hello there! Welcome to the world of POKEMON! My name is OAK! This world is inhabitated by creatures called POKEMON'],
        ['Jesús', `Sorry, I'm afraid you are in the wrong game`],
        [`Recruiter`, `Oh, sorry, this sprite speaks for me `]
      ]
     },
     {
      currentPhrase:0,
      content: [
        ['Jesús', `I have been told that you are a recruiter, I'm looking for a job as junior developer`],
        ['Recruiter', `I see that you have two degrees but none of them is computer science`],
        ['Jesús', `I am self-taught, I'm great at learning and in a short time I have advanced a lot`],
        [`Recruiter`, `Sorry but you are not what we looking for`]
      ]
     },
     {
      currentPhrase:0,
      content:[
        ['Jesús',`Hi!, time has passed and I have gained more experience, would you reconsider my application?` ],
        ['Recruiter', `Your English isn't good enough`],
        ['Jesús', `With a few lessons I'll improve quickly`],
        ['Recruiter', `Come back in several months`],
      ]
     },
     {
      currentPhrase:0,
      content:[
        ['Jesús', `Hello! I...`],
        [`Recruiter`, `We are not interested` ]
      ]
     }

    ],
  },//recruiter 1
  {
    id: 'recruiter 2',
    sprite: 'recruiter1',
    spriteSrc: './Assets/Sprites/recruiter1.png',
    frameWidth: 32,
    frameHeight:30,
    animationMapping:{ //moves
      up:{
        leftFoot:10,
        standing: 0,
        rightFoot:2
      },
      down:{
        leftFoot:11,
        standing:5,
        rightFoot:8
      },
      left:{
        leftFoot:3,
        standing:6,
        rightFoot:9
      },
      right:{
        leftFoot:7,
        standing:1,
        rightFoot:4
      }
    },
    randomMove: 0,//its sprites work bad
    currentDialog: 0, 
    canTalk: true,
    dialogs:[
     {
      currentPhrase:0,
      content: [
        ['Jesús', 'Good morning! I saw an announcement saying that you are looking for a frontend developer'],
        ['Recruiter', `Yes, we are looking for a junior profile`],
        ['Jesús', `Nice! I'm a junior`],
        ['Recruiter', `But we are looking for a junior with at least 4 years of react experience and backend knowledge`],
        ['Jesús', `That's not a junior profile`],
        ['Recruiter', `You lack experience to work with us`]
      ]
    },
    {
      currentPhrase:0,
      content: [
        ['Jesús', `Hi! I've been developing projects to gain experience, in the code you can see how fast I learn`],
        ['Recruiter', `You don't seem to fit the profile`],
        ['Jesús',`But you haven't even looked at the portfolio`],
        ['Recruiter', `Sorry we are looking for someone more experienced`]
      ]
    },
    {
      currentPhrase:0,
      content:[
        ['Recruiter', `Sorry but we are no longer looking for people`]
      ]
    }
    ],
  },//recruiter 2
  {
    id: 'recruiter 3',
    sprite: 'recruiter2',
    spriteSrc: './Assets/Sprites/recruiter2.png',
    frameWidth: 32,
    frameHeight:30,
    animationMapping:{ //moves
      up:{
        leftFoot:10,
        standing: 0,
        rightFoot:2
      },
      down:{
        leftFoot:11,
        standing:5,
        rightFoot:8
      },
      left:{
        leftFoot:3,
        standing:6,
        rightFoot:9
      },
      right:{
        leftFoot:7,
        standing:1,
        rightFoot:4
      }
    },
    randomMove: 3,
    currentDialog: 0, 
    canTalk: true,
    dialogs:[
     {
      currentPhrase:0,
      content: [
        ['Recruiter', 'Hello we are looking for a junior fullstack'],
        [`Jesús`, `Well, right now I focus on frontend but I'm also learning backend, with a little onboarding I could fit in`],
        ['Recruiter', `I don't think so, we are looking for someone with completed training`]
      ]
    },
    {
     currentPhrase:0,
     content: [
      ['Jesús', `I saw another ad in which you were looking for a frontend developer`],
      ['Recruiter', `Yes, we would like someone with knowledge of Angular`],
      ['Jesús', `I have learned the basics although I focus on React. Give me some time and I will perfect it`],
      ['Recruiter', `Well, we'll see`]
     ] 
    },
    {
      currentPhrase:0,
      content: [
        [`Jesús`, 'Hi, I have learned Angular'],
        ['Recruiter', `We have already selected another person`]
      ]
    }
    ],
  },//recruiter 3
  {
    id: 'recruiter 4',
    sprite: 'recruiter3',
    spriteSrc: './Assets/Sprites/recruiter3.png',
    frameWidth: 32,
    frameHeight:30,
    animationMapping:{ //moves
      up:{
        leftFoot:10,
        standing: 0,
        rightFoot:2
      },
      down:{
        leftFoot:11,
        standing:5,
        rightFoot:8
      },
      left:{
        leftFoot:3,
        standing:6,
        rightFoot:9
      },
      right:{
        leftFoot:7,
        standing:1,
        rightFoot:4
      }
    },
    randomMove: 4,
    currentDialog: 0, 
    canTalk: true,
    dialogs:[
     {
      currentPhrase:0,
      content: [
        ['Jesús', 'Good morning. I saw your job offer looking for a programmer.'],
        [`Recruiter`, ` Yes, we are looking for a middle programmer, and I see you are a junior.`],
        ['Jesús', `Yes but only three people are applied and are 4 vancy so...`],
        ['Recruiter', `Sorry but it doens't work like that`],
        ['Inner me', `Well, I have to try`]
      ]
    },
    {
      currentPhrase:0,
      content: [
        ['Jesús', `Hi I've seen that this time you are looking for a junior`],
        ['Recruiter', `We are looking for someone with expertise in React`],
        ['Jesus', `That's me!`],
        ['Recruiter', `I'm looking your portfolio. You have not participated in business projects `],
        ['Jesús', `That's why I'm looking for a junior position. I've worked hard on my own projects but I need a first job as developer`],
        ['Recruiter', `Sorry we are looking for someone with experience`],
        ['Inner me', `But if nobody hires me I've never get experience and nobody will want to hire me`],
      ]
    },
    {
      currentPhrase:0,
      content:[
        ['Jesús', 'Hi'],
        ['Recruiter', `No means: NO`]
      ]
    }
    ],
  },//recruiter 4
  {
    id: 'recruiter 5',
    sprite: 'recruiter4',
    spriteSrc: './Assets/Sprites/recruiter4.png',
    frameWidth: 32,
    frameHeight:30,
    animationMapping:{ //moves
      up:{
        leftFoot:10,
        standing: 0,
        rightFoot:2
      },
      down:{
        leftFoot:11,
        standing:5,
        rightFoot:8
      },
      left:{
        leftFoot:3,
        standing:6,
        rightFoot:9
      },
      right:{
        leftFoot:7,
        standing:1,
        rightFoot:4
      }
    },
    randomMove: 4,
    currentDialog: 0, 
    canTalk: true,
    dialogs:[
     {
      currentPhrase:0,
      content: [
        ['Jesús', `Hello I'm looking for a job as frontend developer`],
        ['Recruiter', `We are hiring!`],
        ['Jesús', `NICE!`],
        ['Recruiter', `This person must be responsable of user experiencia, graphic design, image editing, programming the interface...`],
        ['Jesús', `Wait, thats not a employee, that's a full team`]

      ]
    },
    {
      currentPhrase:0,
      content:[
        ['Recruiter', `Hi! I have a job that could fit you`],
        [`Jesús`, `Thank God, tell what the job is`],
        ['Recruiter', `Is a frontend developer position using bootstrap, Jquery, React, node...`],
        [`Jesús`, `I know that stack, seems nice`],
        ['Recruiter', `BUT the salary is 12000 per year and you must be register as freelance`],
        ['Jesus', `That's not legal, I don't wanna be part of something unlawful`],
        ['Inner me', `At least for such a small amount`]
      ]
    },
    {
      currentPhrase: 0,
      content: [
        ['Inner me', `I don't want to go near that guy`]
      ]
    }
   
    ],
  },//recruiter 5
  {
    id: 'recruiter 6',
    sprite: 'recruiter5',
    spriteSrc: './Assets/Sprites/recruiter5.png',
    frameWidth: 32,
    frameHeight:30,
    animationMapping:{ //moves
      up:{
        leftFoot:10,
        standing: 0,
        rightFoot:2
      },
      down:{
        leftFoot:11,
        standing:5,
        rightFoot:8
      },
      left:{
        leftFoot:3,
        standing:6,
        rightFoot:9
      },
      right:{
        leftFoot:7,
        standing:1,
        rightFoot:4
      }
    },
    randomMove: 0,//sprite don work nice
    currentDialog: 0, 
    canTalk: true,
    dialogs:[
     {
      currentPhrase:0,
      content: [
        ['Jesús', `Hello I'm looking for a job as frontend developer`],
        ['Recruiter', `We are hiring!`],
        ['Jesús', `NICE!`],
        ['Recruiter', `This person must be responsable of user experiencia, graphic design, image editing, programming the interface...`],
        ['Jesús', `Wait, thats not a employee, that's a full team`]

      ]
    },
   
    ],
  },//recruiter 6
]
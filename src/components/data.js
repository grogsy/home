const data = {
  lists: [
    { name: "Skills", content: ["JavaScript", "Python", "React", "HTML/CSS"] },
    {
      name: "Hobbies",
      content: [
        "Programming",
        "Food",
        "Gaming",
        "Ping Pong",
        "Tennis",
        "Going to the beach"
      ]
    },
    {
      name: "Favorite Foods",
      content: ["Curry", "Pork Belly", "Taco Supreme", "BBQ", "Not Eggs"]
    },
    {
      name: "Other Interesting Facts About Brian",
      content: [
        "Sleeps in weird positions",
        "Loves to drive(sometimes)",
        "Pretty bad with names",
        "RAM weeps at the number of his active FireFox and VS Code instances at any given moment",
        "Believes he doesn't have enough screen monitors"
      ]
    }
  ],
  projects: [
    {
      name: "This Web Page",
      images: [
        "https://i.imgur.com/v3a9MOE.png",
        "https://i.imgur.com/cfUyGb1.png"
      ],
      description:
        "This web page is built in React with some Bootstrap. I actively maintain it sometimes.",
      deployLink: "https://grogsy.github.io/home/#/",
      githubLink: "https://github.com/grogsy/home"
    },
    {
      name: "inGoodCompany",
      images: [
        "https://i.imgur.com/vKKbSvO.jpg",
        "https://i.imgur.com/5qlEcEn.png"
      ],
      description:
        "Social Media Website built with React & GraphQL (The heroku link may take a while to load if the service hasn't been started in a while).",
      deployLink: "https://in-good-company.herokuapp.com",
      githubLink: "https://github.com/Hucklyberry-Hound/ingoodcompany"
    },
    {
      name: "Eccentric Elven Arts",
      images: [
        "https://i.imgur.com/Kocq3Gz.jpg",
        "https://i.imgur.com/tTlGP4j.png"
      ],
      description:
        "E-commerce Site built using Node, Express, React, And Sequelize.",
      deployLink: "https://eccentric-elven-arts.herokuapp.com/",
      githubLink: "https://github.com/EccentricElves/GraceShopper"
    },
    {
      name: "pawpals",
      description:
        "Dog adoption mobile app based on Tinders swiping interface. Built using React Native and Firebase.",
      images: ["https://i.imgur.com/I5rTyTy.png"],
      githubLink: "https://github.com/grogsy/pawpals"
    },
    {
      name: "ogpp -- Old Games & Player Profiles",
      description:
        "A op.gg clone built in Python & Flask. op.gg is an online player & game database where users can gain insight from analyzing past stats & performances of other players",
      images: [
        "https://raw.githubusercontent.com/grogsy/ogpp/master/imgs/site_demo.png"
      ],
      githubLink: "https://github.com/grogsy/ogpp"
    }
  ]
};

export default data;

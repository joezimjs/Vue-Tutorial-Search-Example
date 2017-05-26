export let technologies = {
  angular: { label: "AngularJS", color: "#dd0031" },
  node: { label: "NodeJS", color: "#8bc849" },
  python: { label: "Python", color: "#fdcd3d" },
  react: { label: "React", color: "#06c4f9" },
  ror: { label: "Ruby on Rails", color: "#961122" },
  vue: { label: "VueJS", color: "#41b883" },
  webpack: { label: "Webpack", color: "#1d71b2" }
}

export let tutorials = [
  {
    title: "A Better Way to Learn Angular 2",
    url: "https://thinkster.io/tutorials/learn-angular-2",
    datePublished: "2017-05-01",
    description: "The de facto roadmap for learning Angular 2. This tutorial series will teach you Angular 2's fundamental concepts paired with real world examples, descriptions, and screencasts.",
    tech: ["angular"]
  },
  {
    title: "Building Real World, Production Quality Apps with React and Redux",
    url: "https://thinkster.io/tutorials/build-a-real-world-react-redux-application",
    datePublished: "2017-05-01",
    description: "While most tutorials online cover the basics of React, Redux, and other tools individually, the purpose of this tutorial is to cover all of them in a cohesive manner.",
    tech: ["react"]
  },
  {
    title: "Learn to Build Modern Web Apps with AngularJS and Ruby on Rails",
    url: "https://thinkster.io/tutorials/angular-rails",
    datePublished: "2017-05-01",
    description: "The goal of this tutorial is to guide you through the creation of a Reddit/Hacker News clone using Rails 4 and AngularJS. By completing this tutorial, you will gain a basic understanding of Rails and AngularJS, using Rails to build a JSON REST API that interacts with an AngularJS frontend.",
    tech: ["angular", "ror"]
  },
  {
    title: "Tutorial: Intro To React",
    url: "https://facebook.github.io/react/tutorial/tutorial.html",
    datePublished: "2017-04-11",
    description: "Today, we're going to build an interactive tic-tac-toe game. We will be learning how to build this game step by step throughout this tutorial.",
    tech: ["react"]
  },
  {
    title: "Create Element Transitions with Vue.js",
    url: "http://codepen.io/Splode/post/create-element-transitions-with-vue-js",
    datePublished: "2017-04-10",
    description: "Vue.js (Vue) offers a simple way to transition between elements on the page, allowing for either simple transitions between CSS properties or complex animations (or both!). In this example I'll demonstrate the basics of Vue transitions by creating a menu-expand toggle button.",
    tech: ["vue"]
  },
  {
    title: "A Vue.js introduction for people who know just enough jQuery to get by",
    url: "https://medium.freecodecamp.com/vue-js-introduction-for-people-who-know-just-enough-jquery-to-get-by-eab5aa193d77",
    datePublished: "2017-04-10",
    description: 'I\'ll take readers — who are presumed to have some level of proficiency with JavaScript fundamentals and jQuery — on a journey through the world of VueJS as we build a clone of Twitter’s "compose tweet" component.',
    tech: ["vue"]
  },
  {
    title: "How To Develop An Interactive Command Line Application Using Node.js",
    url: "https://www.smashingmagazine.com/2017/03/interactive-command-line-application-node-js/",
    datePublished: "2017-03-14",
    description: "Writing command line tools has also become easier than ever before because of Node.js — not just any command line tools, but tools that are interactive, useful and less time-consuming to develop.",
    tech: ["node"]
  },
  {
    title: "Webpack: A Detailed Introduction",
    url: "https://www.smashingmagazine.com/2017/02/a-detailed-introduction-to-webpack/",
    datePublished: "2017-02-21",
    description: "JavaScript module bundling has been around for a while. RequireJS had its first commits in 2009, then Browserify made its debut, and since then several other bundlers have spawned across the Internet. Among that group, webpack has jumped out as one of the best. If you’re not familiar with it, I hope this article will get you started with this powerful tool.",
    tech: ["webpack"]
  },
  {
    title: "Build Your First React.js App",
    url: "https://egghead.io/courses/build-your-first-react-js-application",
    datePublished: "2017-01-24",
    description: "When you've completed this series you will have built a full-blown web application using React, and should have the tools needed to start building your own applications today.",
    tech: ["react"]
  },
  {
    title: "Invent Your Own Computer Games with Python",
    url: "https://inventwithpython.com/chapters/",
    datePublished: "2016-12-17",
    description: "Programming isn't hard. But it is hard to find learning materials that teach you to do interesting things with programming. This book will teach you how to program your own computer games. You'll learn a useful skill and have fun games to show for it!",
    tech: ["python"]
  },
  {
    title: "Multi-Line Lambdas in Python",
    url: "https://programmingideaswithjake.wordpress.com/2016/10/01/multi-line-lambdas-in-python/",
    datePublished: "2016-10-01",
    description: "I love Python, but I am able to see plenty of faults with it. In this article, I attempt to provide a very roundabout way of working around one of those faults: the lack of multi-line lambdas.",
    tech: ["python"]
  },
  {
    title: "React Tutorial: Cloning Yelp",
    url: "https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/",
    datePublished: "2016-05-19",
    description: "This post will guide you through building a full React app, even with little to no experience in the framework. We're going build a Yelp clone in React",
    tech: ["react", "node"]
  },
  {
    title: "Learn Vuex by Building a Notes App",
    url: "https://coligo.io/learn-vuex-by-building-notes-app/",
    datePublished: "2016-04-20",
    description: "In this tutorial we'll be learning how to use Vuex in our VueJs projects by building a notes application. We'll briefly go over what Vuex is, when to use it, and how to structure your project for use with a Vuex application.",
    tech: ["vue"]
  },
  {
    title: "Snake with Pygame",
    url: "https://pythonspot.com/en/snake-with-pygame/",
    datePublished: "2016-03-21",
    description: "In this tutorial you will learn how to build the game snake.  The game is an arcade game and it has very simple logic, which is why it is an ideal example to demonstrate how to build games with Pygame.",
    tech: ["python"]
  },
  {
    title: "A Guide For Building A React Redux CRUD App",
    url: "https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f",
    datePublished: "2016-03-06",
    description: 'In this blog I\'ll provide a general approach on how to build a Blog app that has 3 pages and show navigate between them. Further, I\'ll also establish a pattern for making async requests and handling four async states: "loading", "success", "error" and "success-and-navigate".',
    tech: ["react"]
  },
  {
    title: "Building Your Second React.js App",
    url: "https://medium.com/learning-new-stuff/building-your-second-react-js-app-eb66924b3774",
    datePublished: "2016-01-30",
    description: "This is the second post in a series of tutorials on React.js. The first one took you through building a very simple profile page with the popular Javascript library. This time we'll introduce some more basic concepts: State, Event handlers, Component life cycles, React & API's",
    tech: ["react"]
  },
  {
    title: "Build AirBnb with Ruby on Rails, Bootstrap, jQuery and PayPal",
    url: "https://code4startup.com/projects/airalien-clone-airbnb-with-ruby-on-rails-bootstrap-jquery-and-paypal",
    datePublished: "2015-12-08",
    description: "In this project, I will walk you through steps to develop app like AirBnb with core functionalities from scratch. ",
    tech: ["ror"]
  },
  {
    title: "A Comprehensive Guide to Test-First Development with Redux, React, and Immutable",
    url: "http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html",
    datePublished: "2015-09-10",
    description: "This tutorial will guide you through building a full-stack Redux and Immutable-js application from scratch. We'll go through all the steps of constructing a Node+Redux backend and a React+Redux frontend for a real-world application, using test-first development.",
    tech: ["react", "node", "webpack"]
  },
  {
    title: "Let's Build: Instagram (With Ruby on Rails)",
    url: "https://www.devwalks.com/lets-build-instagram-in-rails-part-1/",
    datePublished: "2015-06-30",
    description: "Follow along and together we'll build awesome applications that will build your competence through glorious repetition and embracing the skills that employers want.",
    tech: ["ror"]
  },
  {
    title: "How to build a Pinterest Clone in Rails 4",
    url: "https://www.youtube.com/watch?v=abcnfFS_DS8",
    datePublished: "2014-09-27",
    description: 'Week 4 of my 12 Web Apps in 12 Weeks. This week I built a Pinterest like application with users, pins, image uploading, and "likes". ',
    tech: ["ror"]
  },
  {
    title: "Hacking Secret Ciphers with Python",
    url: "https://inventwithpython.com/hacking/chapters/",
    datePublished: "2013-04-14",
    description: "Movies and TV shows always make hacking look like magic. It's not magic. It's based on computers, and it's not hard to learn. This book assumes you know nothing about cryptography or programming, and helps you learn, step by step, how to write programs that can hack encrypted messages.",
    tech: ["python"]
  },
  {
    title: "Build a Dropbox-like File Sharing Site with Ruby on Rails",
    url: "https://code.tutsplus.com/tutorials/build-a-dropbox-like-file-sharing-site-with-ruby-on-rails--net-17940",
    datePublished: "2011-01-30",
    description: "In this Tuts+ Premium tutorial, we'll learn how to build a file-sharing web application, like Dropbox, using Ruby on Rails.",
    tech: ["ror"]
  }
]

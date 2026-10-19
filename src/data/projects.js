import mvsm from "../assets/mvsm.png";
import tradeckr from "../assets/tradeckr.webp";
import goalstats from "../assets/goalstats.webp";

export const projects = [{
    slug: "mammals-vs-marine", title: "Mammals vs Marine",
    category: "Game/OOP", technologies: ["C++", "Qt"],
    summary: "A simple top-down tower defense game based on animals",
    problem: "The game uses a logarithmic difficulty system, causing the difficulty to increase until the game eventually becomes endless.",
    role: "Designed and implemented the classes used to develop the game while applying object-oriented programming principles.",
    approach: "Divided the game into different phases and broke each phase into smaller tasks that could be distributed among the group.",
    outcome: "Learned how object-oriented programming principles work together when designing and developing a larger software project.",
    github: "https://github.com/csci-2300-jallen/final-project-mammals-vs-marine-1",
    img: mvsm},
{
    slug: "tradeckr", title: "Tradeckr",
    category: "Web App", technologies: ["Python", "HTML/CSS", "SQLite", "Flask"],
    summary: "A Flask-based trading simulator that lets users manage a virtual portfolio.",
    problem: "The application relies on third-party libraries to retrieve stock data, creating limitations in how efficiently the application can retrieve and manage that information.",
    role: "Designed and developed the application, including the frontend, backend, database, and trading functionality.",
    approach: "Built the application with Flask and SQLite, connecting the frontend to the backend to manage users, portfolios, and simulated trades.",
    outcome: "Learned how to connect a Python backend, database, and frontend to build a complete web application.",
    github: "https://github.com/FelipeF-04/Stocks-app",
    img: tradeckr
},
{
    slug: "goalstats", title: "GoalStats",
    category: "Web App", technologies: ["Python", "HTML/CSS", "Selenium", "Pandas"],
    summary: "A static football stats site with league-by-league standings pages.",
    problem: "Cloudflare's anti-bot protection makes automatically collecting football statistics increasingly difficult.",
    role: "Designed and developed the application, including the data collection, processing, and website generation.",
    approach: "Used Selenium to collect football data and Pandas to process and organize the data before generating the league standings pages.",
    outcome: "Learned about web scraping limitations and how to process collected data into a structured website.",
    github: "https://github.com/FelipeF-04/GoalStats",
    img: goalstats
}
];

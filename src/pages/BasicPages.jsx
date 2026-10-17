import { Link } from "react-router";
export function Home() {
    return <section><h1>Felipe Fung</h1>
        <p>Computer Science major interested in AI, computer vision, and web development.</p>
        <Link to="/projects">Explore my projects</Link></section>;
}
export function Experience() {
    return (
        <section style={{ textAlign: 'center' }}>
            <h1>Experience</h1>
            
            <h2>Education</h2>
            <p>Saint Louis University — B.S. Computer Science (2028)</p>
            
            <h2>Skills</h2>
            {/* Short items look great with inline-block */}
            <ul style={{ display: 'inline-block', textAlign: 'left' }}>
                <li>Python</li>
                <li>C/C++</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
                <li>Git</li>
                <li>Flask</li>
            </ul>
            
            <h2>Experiences</h2>
            
            <h4>CSCI 3100: Algorithms</h4>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ul style={{ textAlign: 'justify', maxWidth: '600px', margin: '0 0 20px 0' }}>
                    <li>Analyzed algorithms for solving computational problems using techniques such as sorting, searching, recursion, and graph traversal.</li>
                    <li>Applied data structures and algorithmic techniques to develop efficient solutions to programming problems.</li>
                    <li>Analyzed time and space complexity to compare the efficiency of different approaches.</li>
                </ul>
            </div>

            <h4>CSCI 2300: Object-Oriented Software Design</h4>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ul style={{ textAlign: 'justify', maxWidth: '600px', margin: '0 0 20px 0' }}>
                    <li>Developed programs in C++ using classes, inheritance, polymorphism, and encapsulation.</li>
                    <li>Implemented modular software by separating functionality into reusable classes and components.</li>
                    <li>Applied object-oriented design principles to build and maintain larger C++ programs.</li>
                </ul>
            </div>
        </section>
    );
}

export function Contact() {
    return <section><h1>Contact</h1>
        <p>Email: <a href="mailto:felipe.fungzheng@slu.edu" target="_blank">felipe.fungzheng@slu.edu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/felipe-fungzheng" target="_blank">felipe.fungzheng</a></p>
        <p>GitHub: <a href="https://github.com/FelipeF-04" target="_blank">FelipeF-04</a></p>
        </section>;
}
export function NotFound() {
    return <section><h1>Page not found</h1>
        <Link to="/">Return home</Link></section>;
}
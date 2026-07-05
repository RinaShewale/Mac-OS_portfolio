import React from 'react'
import Terminal from 'react-console-emulator'
import Macwindows from './Macwindows'
import "./cli.scss"

const Cli = ({windowName, setWindowState}) => {

    const commands = {
        about: {
            description: "Professional summary",
            usage: "about",
            fn: () => `
Hi 👋 I'm Rina Shewale.

Full-Stack Web Developer specializing in 
building scalable, secure and performance-focused web applications.

I design systems from frontend UI 
to backend APIs and database architecture.
`
        },

        skills: {
            description: "Technical stack",
            usage: "skills",
            fn: () => `
Frontend:
• React.js
• JavaScript (ES6+)
• SCSS / Modern CSS

Backend:
• Node.js
• Express.js
• REST API Development

Database:
• MongoDB
• MySQL

Tools:
• Git
• Authentication (JWT)
• Deployment & Hosting
`
        },

        projects: {
            description: "Featured projects",
            usage: "projects",
            fn: () => `
🚀 Featured Projects:

1. Full-Stack Authentication System (MERN)
2. Portfolio CLI Application
3. REST API with Role-Based Access
4. Interactive Content Platform

Clean architecture. Production-ready mindset.
`
        },

        experience: {
            description: "Development experience",
            usage: "experience",
            fn: () => `
• Built complete MERN stack applications
• Designed secure authentication flows
• Structured frontend using layered architecture
• Focused on scalability and performance
`
        },

        contact: {
            description: "Contact information",
            usage: "contact",
            fn: () => `
Email: rina@example.com
GitHub: github.com/rinashewale
LinkedIn: linkedin.com/in/rinashewale

Open to opportunities and collaborations.
`
        },

        fun: {
            description: "Personal touch",
            usage: "fun",
            fn: () => `
Code. Create. Improve. Repeat.

I believe good software 
is both functional and meaningful.
`
        }
    }

    return (
        <Macwindows windowName={windowName} setWindowState={setWindowState}>
            <div  className="cli-windows">
                <Terminal
                    commands={commands}
                    welcomeMessage={`
Rina Shewale — Full-Stack Web Developer

Building end-to-end web solutions 
with clean architecture and modern technologies.

Type "help" to explore the portfolio.
`}
                    promptLabel="rinashewale@:~$"
                    autoFocus={true}
                    promptLabelStyle={{
                        color: "#00ff88",
                    }}
                />
            </div>
        </Macwindows>
    )
}

export default Cli
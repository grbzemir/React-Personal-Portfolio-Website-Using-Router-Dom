import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My Name is Emircan</h2>
                <div className='prompt'>
                    <p>A Software Developer with a passion for learning and creating</p>
                    <EmailIcon />
                    <GitHubIcon />
                    <LinkedInIcon />
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front End</h2>
                        <span>•ReactJs,Html,Css,JavaScript,Redux,Bootstrap,TypeScript</span>
                    </li>
                    <li className='item'>
                        <h2>Back End</h2>
                        <span>•C#,.AspNet,Mvc,Postman,LinQ</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>•JavaScript, TypeScript,
                            ReactJs, Redux, Context API ,Python
                            • HTML, CSS, Bootstrap,
                            TailwindCss
                            • C#, .NET CORE, LINQ,
                            Entity Framework, Rest
                            API, OOP , C , C++
                            • Mssql, PostgreSQL</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;

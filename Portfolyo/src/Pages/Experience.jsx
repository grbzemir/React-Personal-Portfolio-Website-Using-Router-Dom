import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import QuestionMarkIcon from '@mui/icons-material/HelpOutline';

function Experience() {
    return (
        <div className='expContainer'>
            <div className='expElements'>
                <ol>
                    <li>
                        <SchoolIcon />
                        <h3>High School Graduation 2021</h3>
                        <p>Fatih Sultan Mehmet Anatolian High School</p>
                    </li>
                    <li>
                        <SchoolIcon />
                        <h3>University Graduation 2026</h3>
                        <p>Trakya University</p>
                    </li>
                    <li>
                        <BusinessCenterIcon />
                        <h3>My First Job As a Full Stack Developer Dev 2024</h3>
                        <p>I developed and maintained web applications using
                            ReactJs, JavaScript, HTML5 and CSS. I have a deep
                            experience in responsive design with TailwindCss, and I
                            optimized the user interface of various internal projects. I
                            developed RESTful APIs using C#, Entity Framework and
                            .NET Core, and implemented LINQ queries for data
                            retrieval</p>
                    </li>
                    <li>
                        <BusinessCenterIcon />
                        <h3>My First Job As a Full Stack Developer Dev 2024</h3>
                        <p>Within the scope of the PortalIntellium Project, I carried
                            out extensive work using C#, Entity Framework, .NET
                            Core and PostgreSQL to improve the user experience in
                            the Back End of the Expense Management system in
                            accordance with the Layered Architecture logic. During
                            this process, I made Back End developments with C# and
                            .NET to manage users authorization parameters in the
                            system.
                        </p>
                        <p>Intellium Bilişim Teknolojileri A.Ş.</p>
                    </li>
                    <li>
                        <QuestionMarkIcon />
                        <h3>Trakya University</h3>
                        <p>TechnoPark Manager</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Experience

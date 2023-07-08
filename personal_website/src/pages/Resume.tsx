import Button from '@mui/material/Button/Button';
import KeneResume from '../Files/kenePhoto.jpg';

export default function Home(){
    return (
    <div>
        <ResumeHead />
        <hr/>
        <a href={KeneResume} target="_blank"><h3>PDF of Resume</h3></a>
        <hr/>
        <ResumeBody />
    </div>
    )
}


function ResumeHead(){
    return (
        <>
        <h2>Kenenna Nwankwo's Resume</h2>
        <h3>Student at The University of Maryland<br/>
        <a href="https://cmns.umd.edu/" target="_blank">College of Computer, Mathematical, and Natural Sciences</a><br/>
        <a href="https://www.rhsmith.umd.edu/" target="_blank">Robert H. Smith School of Business</a></h3>
        
        <h3> Majors: <br/> 
        <a href="https://academiccatalog.umd.edu/undergraduate/colleges-schools/computer-mathematical-natural-sciences/computer-science/computer-science-major/#requirementstext" target="_blank">Computer Science </a> GPA: 3.94 <br/>
        <a href="https://www.rhsmith.umd.edu/faculty-research/academic-departments/finance" target="_blank">Finance, </a><a href="https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/logistics-business-public-policy/international-business-major/" target="_blank">International Business</a> GPA: 3.73
        </h3>
        <h4> Contact: KeneDaniel@gmail.com<a> | </a> <a href="https://www.linkedin.com/in/kenenna-nwankwo/">Linkedin</a></h4>
        </>
    )
}

const openPDF = () => {
    window.open(require('../Files/kResume.pdf'), '_blank');
  };
  
  const MyComponent: React.FC = () => {
    return (
      <div>
        <Button onClick={openPDF}>Open PDF</Button>
      </div>
    );
  };
  
function ResumeBody(){
    return (
        <>
        <Skills />
        <hr/>
        <Projects />
        <hr/>
        <Employment_Experience />
        <hr/>
        <Activities_Affiliations />
        </>
    )
}

function Skills(){
  return (
    <>
    <h3>Skills</h3>
    <h5>Python, Pandas, Java, JavaScript, ReactJS, C/C++, OCaml, HTML, MS Suite, Google Suite, AVR Assembly</h5>
    </>
  )
}

function Projects(){
  return (
    <>
    <h3><a href="./SoftwareProjects">Projects</a></h3>

    <a><h4>Clustering and the Farthest-First Traversal – Java</h4></a>
    <ul>
    <li>Created optimized data structures of a weighted leftist heap and sliding midpoint K-D tree from the ground up</li>
    <li>Used structures create an efficient algorithm to store nearest cell towers to cell users on a 2-dimensional plane as users and towers are added and removed. Created an efficient algorithm to find the optimal location to place future cell towers</li>
    </ul>

    <a href="Project PDFS/Java Projects/132 Projects/CMSC 132 Project 7.pdf" target="_blank"><h4>Maze Solving Algorithm - Java</h4></a>
    <ul>
    <li>Implemented 3 algorithms to solve a randomized maze. Solved with Depth-First, Breadth-First, and Dijsktra's Algorithm</li>
    <li>Implemented a Weighted Graph using hash maps to hold and model the contents of the maze and traverse its vertices</li>
    <li>Used nested hashMaps to Implement the Weighted graph data structure</li>
    </ul>

    <a><h4>Data Structure Projects - Java</h4></a>
    <ul>
    <li>Created several Data structures from the ground up, including additional useful methods</li>
    <li>Created implementations of the LinkedList, Hash Table, Binary Search Tree Map, Heavy Bag, and Graph</li>
    </ul>

    <a><h4>C Shell – C Language</h4></a>
    <ul>
    <li>Implemented a shell that supports boolean operations, pipes, subshells, and file redirection</li>
    </ul>

    <a><h4>Micro Computer Language - OCaml</h4></a>
    <ul>
    <li>Implemented a lexer, parser and interpreter for a working language with a subset of the features in the language OCaml</li>
    <li>Complied text files into abstract syntax trees and interpreted the trees using logical operational semantics</li>
    </ul>

    
    <h5><a href="./SoftwareProjects">More Projects</a></h5>
    </>
  )
}

function Employment_Experience(){
  return (
    <>
    <h3>Employment/Experience</h3>

    <a href="https://www.owenscorning.com/en-us" target="_blank"><h4>Owens Corning - Toledo, OH</h4></a>
    <h5>Corporate Finance Intern – Economics Dep. - May 2023 – Present</h5>
    <ul>
      <li>Utilize statistical analysis techniques and market research to identify key variables that influence market trends and demand</li>
      <li>Develop a comprehensive predictive model using advanced forecasting methods to accurately project future market demand</li>
      <li>Contribute to the organization's strategic planning by providing insights and actionable recommendations based on forecasts</li>
      <li>Collaborate with cross-functional teams incorporating feedback, to enhance the accuracy and robustness of the forecasts</li>
    </ul>

    <a href="https://omse.umd.edu/" target="_blank"><h4>Office of Multethnic Student Education - College Park, MD</h4></a>
    <h5>Team Leader - May 2019-Present</h5>
    <ul>
      <li>Mentor a group of 80 students on academic and professional skillsets in conjunction with personal support</li>
      <li>Manage daily operations to ensure accountability and accuracy of student deliverables</li>
      <li>Maintain multiple databases to log traffic data and record student data</li>
      <li>Interview and assess applicants for leadership roles within the Office of Multiethnic Student Education</li>
    </ul>

    <h4>Maryland Consulting Firm - Lamham, MD</h4>
    <h5>Intern - May-July 2021</h5>
    <ul>
      <li>Grew client revenue through an assessment of customer technical requirements and curation of appropriate product selections</li>
      <li>Responded to inquiries in a timely and professional manner as an account representative</li>
    </ul>

    <a href="Wikler.html"><h4>Wikler Case Competition - College Park, MD</h4></a>
    <h5>Team Member - April 2021</h5>
    <ul>
      <li>Determined investment recommendation via discounted cash flows analysis of project value</li>
      <li>Researched key economic, industry, and company factors to determine case position and identify vulnerabilities</li>
      <li>Identified project vulnerabilities through sensitivity analysis of market factors and project assumptions</li>
      <li>Presented and defended my position to an expert panel using supporting quantitative, qualitative, and analytical considerations</li>
    </ul>

    <a href="IB_Lab.html"><h4>International Business Agility Lab - College Park, MD</h4></a>
    <h5>Team Member - April 2021</h5>
    <ul>
      <li>Developed a business model to encompass services, monetization strategy, and implementation plan as acting consultant</li>
      <li>Understood the needs of the client and their customer base to make recommendations that would befit both parties</li>
      <li>Tackled challenges of working in global virtual team environment, including cultural and time zone differences</li>
    </ul>

    <h4><a href="https://ece.umd.edu/events/student-events/125-mile-e-bike-challenge" target="_blank">Clark School of Engineering 125 Mile E-Bike Challenge - College Park, MD</a></h4>
    <h5>Team Member - August 2019–December 2019</h5>
      <ul>
        <li>Designed and developed an electric bike capable of long-distance travel under a combination of human and electric power</li>
        <li>Competed in a 125-mile race on campus in tiered stages over the course of two days</li>
        <li>Resolved numerous emergency situations and equipment malfunctions throughout the competition</li>
      </ul>

    <h4>Arclight Cinemas - Bethesda, MD</h4>
    <h5>Crew Member - April 2018–August 2018</h5>
      <ul>
        <li>Assisted guests in various ways including purchasing tickets, completing transactions, and addressing unique complaints</li>                             
        <li>Accounted for sold inventory and reported the number of items to be ordered from suppliers</li>
      </ul>

    <h4><a href="https://www.rhsmith.umd.edu/centers/snider-center/programs-curricula/self" target="_blank">Snider Enterprise and Leadership Fellows - College Park, MD</a></h4>
    <h5>Student - July 2017</h5>
      <ul>
        <li>Placed second in entrepreneurial competition with business idea created as a team of six</li>
        <li>Pitched business plan to a group of potential investors judging the coemption</li>
      </ul>
    
    <h4>Projects Abroad - Soysambu, Kenya</h4>
    <h5>Volunteer Animal Census Enumerator - June 2017</h5>
      <ul>
        <li>Documented populations and positions of various animal species and groups in the Rift Valley</li>
        <li>Expanded my world view and contributed to my global mindset while working with people from around the world</li>
      </ul>
    </>
  )
}

function Activities_Affiliations(){
  return (
    <>
    <h3>Activities/Affiliations</h3>

    <a href="https://css.umd.edu/" target="_blank"><h4>College Success Scholars - College Park, MD</h4></a>
    <h5>Member - July 2018–Present</h5>
      <ul>
        <li>Identified key questions and issues; social, political, and cultural across communities in the United States</li>
        <li>Learned how diversity is inherently a part of the university atmosphere and how to value self and other perspectives</li>
      </ul>
    
    <a href="./FIRE.html"><h4>FIRE-First-Year Innovation & Research Experience - College Park, MD</h4></a>
    <h5>Student Researcher - August 2018 – December 2019</h5>
      <ul>
        <li>Co-authored and presented an academic paper on technological advances regarding transforming job markets </li>
        <li>Designed modern solutions via electronics and computer programing</li>
      </ul>

    </>
  )
}
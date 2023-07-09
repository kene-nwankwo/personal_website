import KeneHeadShot from '../Files/kenePhoto.jpg';

export default function Home(){
    return (
    <div>
        
        <HomeHead />
        <hr/>
        <HomeBody />
        
    </div>
    )
}

function HomeHead(){
    return (
        <>
        <h2>Kenenna Nwankwo's Website</h2>
        <h3>Student at The University of Maryland<br/>
        <a href="https://cmns.umd.edu/" target="_blank">College of Computer, Mathematical, and Natural Sciences</a><br/>
        <a href="https://www.rhsmith.umd.edu/" target="_blank">Robert H. Smith School of Business</a></h3>
        
        <h3> Majors: <br/> 
        <a href="https://academiccatalog.umd.edu/undergraduate/colleges-schools/computer-mathematical-natural-sciences/computer-science/computer-science-major/#requirementstext" target="_blank">Computer Science </a><br/>
        <a href="https://www.rhsmith.umd.edu/faculty-research/academic-departments/finance" target="_blank">Finance, </a><a href="https://academiccatalog.umd.edu/undergraduate/colleges-schools/business/logistics-business-public-policy/international-business-major/" target="_blank">International Business</a>
        </h3>
        <h4> Contact: KeneDaniel@gmail.com<a> | </a> <a href="https://www.linkedin.com/in/kenenna-nwankwo/">Linkedin</a></h4>
        </>
    )
}


function HomeBody(){
    return (
        <>
        <h2>About Me:</h2>
        <a>I am a Junior at the University of Maryland Studying Computer Science, Finance and International Business. This is my website where you can learn a little more about me and get a better understadning of the work I've done and the projects I'm working on!</a><br/>
        <a>I grew up in Bethesda, Maryland where I attended <a href="https://www2.montgomeryschoolsmd.org/schools/wjhs/" target="_blank">Walter Johnson High School </a>. In 2018 I was accepted into the <a href="https://www.umd.edu/" target="_blank">University of Maryland</a> where I am currently completing my undergraduate degrees.</a>
  <br/>
  <img src={KeneHeadShot} className='image' />
  <br/>
        </>
    )
}
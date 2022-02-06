// window.scroll(600, 1900)

// window.addEventListener('scroll', (evt)=>{
//     console.log(evt)
// })
const main = document.querySelector('main');
const welcome = main.querySelector('#welcome');
const goals =  main.querySelector('#goals');
const trajectory = main.querySelector('#trajectory');
const skills = main.querySelector('#skills');
const academicEducation = main.querySelector('#academic-education');
const hobbies = main.querySelector('#hobbies');
const experiences = main.querySelector('#experiences');
const projects = main.querySelector('#projects');
const contact = main.querySelector('#contact');




    
    welcome.classList.add('hiddenBl');
    goals.classList.add('hiddenBl');
    trajectory.classList.add('hiddenBl');
    skills.classList.add('hiddenBl');
    academicEducation.classList.add('hiddenBl');
    hobbies.classList.add('hiddenBl');
    experiences.classList.add('hiddenBl');
    projects.classList.add('hiddenBl');
    contact.classList.add('hiddenBl');

    showSectionApp(welcome, 2000);
    showSectionApp(goals, 2500);
    showSectionApp(trajectory, 3000);

   


function showSectionApp (element, timeMileSeconds) {
    setInterval(()=>{
        element.classList.remove('hiddenBl');
        element.classList.add('showBl');
    }, timeMileSeconds);
}

function hiddenSectionApp (element, timeMileSeconds) {
    setInterval(()=>{
        element.classList.remove('showBl');
        element.classList.add('hiddenBl');
    }, timeMileSeconds);
}

document.addEventListener('scroll', function(e) {
    console.log(window.scrollY)
    if(window.scrollY > 130){
        showSectionApp(skills, 200);
    }

    if(window.scrollY > 430){
        showSectionApp(academicEducation, 200);
    }

    if(window.scrollY > 530){
        showSectionApp(hobbies, 200);
    }

    if(window.scrollY > 630){
        showSectionApp(experiences, 200);
    }

    if(window.scrollY > 1600){
        showSectionApp(projects, 200);
    }

    if(window.scrollY > 2000){
        showSectionApp(contact, 200);
    }
  });

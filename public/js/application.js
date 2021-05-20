const editProfile = document.querySelector('#editProfile')
const logOut = document.querySelector('#logOut')

const experience = document.querySelector('#experience')
const education = document.querySelector('#education')
const aboutSelf = document.querySelector('#aboutSelf')
const CareerExpectations = document.querySelector('#CareerExpectations')

const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const patronymic = document.querySelector('input[name="patronymic"]');
const birthday = document.querySelector('input[name="birthday"]');
const residence = document.querySelector('input[name="residence"]');
const number = document.querySelector('input[name="number"]');
const likeToDo = document.querySelector('input[name="likeToDo"]');
const likeNotToDo = document.querySelector('input[name="likeNotToDo"]');
const workPlace = document.querySelector('input[name="workPlace"]');
const position = document.querySelector('input[name="position"]');
const desiredPosition = document.querySelector('input[name="desiredPosition"]');
const desiredSalary = document.querySelector('input[name="desiredSalary"]');
const wantToDo = document.querySelector('input[name="wantToDo"]');
const time = document.querySelector('input[name="time"]');
const companies = document.querySelector('input[name="companies"]');
const examples = document.querySelector('input[name="examples"]');
const currentWorkFlow = document.querySelector('input[name="currentWorkFlow"]');
const university = document.querySelector('input[name="university"]');
const college = document.querySelector('input[name="college"]');
const specialty = document.querySelector('input[name="specialty"]');
const courses = document.querySelector('input[name="courses"]');
const internships = document.querySelector('input[name="internships"]');
const certificates = document.querySelector('input[name="certificates"]');
const languages = document.querySelector('input[name="languages"]');
const coreSkills = document.querySelector('input[name="coreSkills"]');
const technologiesStack = document.querySelector('input[name="technologiesStack"]');

const mainInfoForm = document.querySelector('#mainInfo');
const aboutSelfForm = document.querySelector('#aboutSelf');
const jobForm = document.querySelector('#job');
const experienceForm = document.querySelector('#experience');
const educationForm = document.querySelector('#education');

// profile-btns
const workPlace = document.querySelector('#workPlace')
const position = document.querySelector('#position')
const time = document.querySelector('#time')
const companies = document.querySelector('#companies')
const examples = document.querySelector('#examples')
const currentWorkFlow = document.querySelector('#currentWorkFlow')
const likeToDo = document.querySelector('#likeToDo')
const likeNotToDo = document.querySelector('#likeNotToDo')
const achievements = document.querySelector('#achievements')
const aboutSelfVideo = document.querySelector('#aboutSelfVideo')
const university = document.querySelector('#university')
const college = document.querySelector('#college')
const specialty = document.querySelector('#specialty')
const courses = document.querySelector('#courses')
const internships = document.querySelector('#internships')
const certificates = document.querySelector('#certificates')
const languages = document.querySelector('#languages')
const coreSkills = document.querySelector('#coreSkills')
const technologiesStack = document.querySelector('#technologiesStack')
const desiredPosition = document.querySelector('#desiredPosition')
const wantToDo = document.querySelector('#wantToDo')
const desiredSalary = document.querySelector('#desiredSalary')

if (dataSub) {
  dataSub.addEventListener('click', async (e) => {
    if (e.target.className.includes('data__button')) {
      const response = await fetch(`/profile/${userIdElement.dataset.userid}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          idButton: e.target.id,
        })
      })
      const jsonResponse = await response.json()
      const workPlace = document.querySelector('#workPlace')
      workPlace.innerText = jsonResponse.test
    }
  })
}

// if (experience) {

//   experience.addEventListener('click', async (e) => {
//     console.log('heh')
//     const response = await fetch('/profile', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         idButton: experience.id,
//       })
//     })
//     const jsonResponse = await response.json()
//     console.log(jsonResponse)

//     const header = document.createElement('h2')
//     header.textContent = 'О себе'

//     const currentWorkFlow = document.createElement('p')
//     currentWorkFlow.textContent = jsonResponse.currentWorkFlow

//     const modal = document.createElement('div')
//     modal.className = 'modal-dialog modal-dialog-centered modal-dialog-scrollable'

//   });
// }


const loginForm = document.login;
const emailInput = document.querySelector('#exampleInputEmail1');
const passwordlInput = document.querySelector('#exampleInputPassword1');

if (loginForm) {

  loginForm.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.type === 'submit') {

      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordlInput.value,
        }),
      });

      const jsonResponse = await response.json();
      if (jsonResponse.isInBase) {
        window.location = `/profile/${jsonResponse.userId}`;
      } else {
        const prompt = document.createElement('div');
        prompt.className = 'mb-3';
        prompt.innerText = `Invalid login or password`
        passwordlInput.after(prompt);
      }

    }
  });
}

if (mainInfoForm) {

  mainInfoForm.addEventListener('click', async (event) => {
    event.preventDefault();

    if (event.target.type === 'submit') {
      console.log(event.target)
      const response = await fetch('/editprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          patronymic: patronymic.value,
          birthday: birthday.value,
          residence: residence.value,
          number: number.value,
        }),
      });
    }
  });
}

if (aboutSelfForm) {

  aboutSelfForm.addEventListener('click', async (event) => {
    event.preventDefault();

    if (event.target.type === 'submit') {
      console.log(event.target)
      const response = await fetch('/editprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          likeToDo: likeToDo.value,
          likeNotToDo: likeNotToDo.value,
        }),
      });
    }
  });
}

if (jobForm) {

  jobForm.addEventListener('click', async (event) => {
    event.preventDefault();

    if (event.target.type === 'submit') {
      console.log(event.target)
      const response = await fetch('/editprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          workPlace: workPlace.value,
          position: position.value,
          desiredPosition: desiredPosition.value,
          desiredSalary: desiredSalary.value,
          wantToDo: wantToDo.value,
        }),
      });
    }
  });
}

if (experienceForm) {

  experienceForm.addEventListener('click', async (event) => {
    event.preventDefault();

    if (event.target.type === 'submit') {
      console.log(event.target)
      const response = await fetch('/editprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          time: time.value,
          companies: companies.value,
          examples: examples.value,
          currentWorkFlow: currentWorkFlow.value,
        }),
      });
    }
  });
}

if (educationForm) {

  educationForm.addEventListener('click', async (event) => {
    event.preventDefault();

    if (event.target.type === 'submit') {
      console.log(event.target)
      const response = await fetch('/editprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          university: university.value,
          college: college.value,
          specialty: specialty.value,
          courses: courses.value,
          internships: internships.value,
          certificates: certificates.value,
          languages: languages.value,
          coreSkills: coreSkills.value,
          technologiesStack: technologiesStack.value,
        }),
      });
    }
  });
}

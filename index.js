

function getData(apiUrl) {
  return new Promise(resolve => {
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
          let dataObj = JSON.parse(this.responseText)
          resolve(dataObj)
      }
      xhttp.open("GET", apiUrl);
      xhttp.send();
  })
}

let idName = document.querySelector('.name')
let idJob = document.querySelector('.job')
let idInfo = document.querySelector('.info-list')
let idProject = document.querySelector('.project-list')
let idSkill = document.querySelector('.skill-list')
let idEdu = document.querySelector('.education-list')

  getData('http://localhost:8080/info').then(dataObj => {
    console.log(dataObj)
    // let name = dataObj.Global.name
    dataObj.forEach(element => {
        let name = element.name
        let job = element.job
        let dayOfBirth = element.dayOfBirth
        let enjoy = element.enjoy
        let phone = element.phone
        let address = element.address
        let fontend = element.fontend
        let backend = element.backend
        let database = element.database
        let school = element.school
        let email = element.email
        let shopee = element.shopee
        let shoot = element.shoot
        idName.innerText = name
        idJob.innerText = job
        idInfo.outerHTML = `
        <ul>
          <li><span class="text-bold">DateofBirth: </span>${dayOfBirth}</li>
          <li><span class="text-bold">Enjoy: </span>${enjoy}</li>
          <li><span class="text-bold">Email: </span>${email}</li>
          <li><span class="text-bold">Phone: </span>${phone}</li>
          <li><span class="text-bold">Address: </span>${address}</li>
        </ul>
        `
        idProject.outerHTML =  `
        <ul>
          <li><span class="text-bold">Shopee: </span>${shopee}</li>
          <li><span class="text-bold">Shoot plane: </span>${shoot}</li>
        </ul>
        `
        idSkill.outerHTML = `
        <ul>
          <li><span class="text-bold">Font-end: </span>${fontend}</li>
          <li><span class="text-bold">Back-end: </span>${backend}</li>
          <li><span class="text-bold">Database: </span>${database}</li>
        </ul>
        `
        idEdu.outerHTML = `
        <ul>
          <li><span class="text-bold">Nguyen Tat Thanh university: </span>${school}</li>
        </ul>
        `
    })
  })
  
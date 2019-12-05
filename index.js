const courses = [
  {
    name: `White T-shirt`,
    size: `Medium`,
    colour: `Red`,
    brand: `Nike`,
    year: 2017,
    cost: `$45`,
  }, {
    name: `Long Pants`,
    size: `Small`,
    colour: `Grey`,
    brand: `H&M`,
    year: 2016,
    cost: `$75`,
  }, {
    name: `Blazer`,
    size: `Small`,
    colour: `Black`,
    brand: `Zara`,
    year: 2019,
    cost: `$55`,
  }, {
    name: `Oversized Hoodie`,
    size: `Large`,
    colour: `Heather Gret`,
    brand: `Aritzia`,
    year: 2018,
    cost: `$105`,
  }, {
    name: `Puffer Coat`,
    size: `Xsmall`,
    colour: `White`,
    brand: `TNA`,
    year: 2018,
    cost: `$89`,
  }, {
    name: `Wool Coat`,
    size: `Small`,
    colour: `Beige`,
    brand: `Babaton`,
    year: 2018,
    cost: `$25`,
  }, {
    name: `Blouse`,
    size: `Small`,
    colour: `Stripped Grey/White`,
    brand: `Wilfred`,
    year: 2016,
    cost: `$35`,
  }, {
    name: `Sweatpant`,
    size: `small`,
    colour: `Black`,
    brand: `Adidas`,
    year: 2015,
    cost: `$57`,
  }, {
    name: `Turtleneck`,
    size: `Medium`,
    colour: `Red`,
    brand: `ZARA`,
    year: 2016,
    cost: `$95`,
  }, {
    name: `Wool-Scarf`,
    size: `One Size`,
    colour: `Red`,
    brand: `Wilfred`,
    year: 2017,
    cost: `$23`,
  }
];


function getCourseAsHtmlString(course) {

  return `<article class="course ${course.category}">
    <h3>${course.name}</h3>
    <ul class="course-info">
      <li><strong>${course.size}</strong></li>
      <li><strong>${course.colour}</strong></li>
      <li><strong>${course.brand}</strong></li>
      <li><strong>${course.year}</strong></li>
      <div class="course-cost">${course.cost}</div>
    </ul>
  </article>`;
}

function switchLayout() {
  document.getElementById('courses').classList.toggle('column-view');
}

function filterByPrice(price){
  return price.cost < 20;
}

function checkInput(event) {
  const userIsLookingFor = event.target.value.toLowerCase(); 
  courses.onlyMatchingNames(prod => prod.name.toLowerCase().includes(userIsLookingFor));
  renderCourses(onlyMatchingNames);
}


function renderCourses(arr) {
  const arrOfHtml = arr.map(getCourseAsHtmlString)

  const strOfHtml = arrOfHtml.join('\n')

  document.getElementById('courses').innerHTML = strOfHtml;
}

renderCourses(courses.slice(0, 10));


document.getElementById('layout').addEventListener('click', event => switchLayout() )
document.getElementById(`courseName`).addEventListener(`input`, event => checkInput (event))



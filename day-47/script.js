const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [{
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/46.jpg',
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt praesentium minima, quisquam magnam mollitia",
  },

  {
    name: 'Soso No',
    position: 'Yolo',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt praesentium minima, quisquam magnam mollitia laudantium explicabo eum repudiandae perferendis laboriosam assumenda id, earum ratione, iure ipsa natus? Magnam, ure minima",
  },

  {
    name: 'hello up',
    position: 'SoSo',
    photo: 'https://randomuser.me/api/portraits/women/48.jpg',
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt praesentium minima, quisquam magnam mollitia laudantium explicabo eum repudiandae perferendis laboriosam assumenda id",
  },

]

let idx = 1

function updateTestimonial() {
  const {
    name,
    position,
    photo,
    text
  } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx= 0
  }
}

setInterval(updateTestimonial, 5000)

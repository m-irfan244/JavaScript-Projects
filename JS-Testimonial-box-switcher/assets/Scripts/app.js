const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testmonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials  = [
    {
        name: 'Muhammad Irfan',
        postion: 'CEO',
        photo:  'https://randomuser.me/api/portraits/women/47.jpg',
        text: 'When a reorganization is presented as simply a guideline for defining goals and optimizing resources, it loses its reputation as a proxy for shifts in personal power.',
    },
    {
        name: 'Shahzad Ali',
        postion: 'CTO',
        photo:  'https://randomuser.me/api/portraits/men/50.jpg',
        text: 'If a top executive says employees need to “focus on our promised results,” senior managers often interpret that to mean “Do whatever it takes to meet investors’ expectations.',
    },
    {
        name: 'Zahid Hussain',
        postion: 'CFO',
        photo:  'https://randomuser.me/api/portraits/women/55.jpg',
        text: 'A healthy culture is created and maintained by focusing on the right goals and creating the experience of winning in the marketplace. A telephony-software company CEO I’ll call Jeff runs his firm like a high-performing sports team. A big, football-style scoreboard on a conference room wall displays the company metrics—sales, expenses, revenues—for all to see.',
    },
    {
        name: 'Nadeem Abbas',
        postion: 'HR',
        photo:  'https://randomuser.me/api/portraits/women/35.jpg',
        text: 'In companies with healthy cultures, employees aren’t kept in the dark; rather, they are supported in the belief that they are part of an exciting future. They come to work with a fire inside them, a result of clearly stated leadership and business practices that everyone explicitly understands. Every person in the company knows how to individually contribute to its future.',
    },
]

let idx = 0

function updateTestimonial() {
    const { name, position, photo, text} = testimonials[idx]
    
    username.innerHTML = name
    testimonial.innerHTML = text
    role.innerHTML = position
    userImage.src = photo

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}


setInterval(updateTestimonial(), 5000)
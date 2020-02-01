import '../src/scss/main.scss';

const specialistics = document.getElementById('specialistics');
const forCaregivers = document.getElementById('forCaregivers');
const clientsChat = document.getElementById('clientsChat');
const statistics = document.getElementById('statistics');
const footer = document.getElementById('footer');

const scrollToSpecialistics = document.getElementById('scrollToSpecialistics');
const scrollToForCaregivers = document.getElementById('scrollToForCaregivers');
const scrollToClientsChat = document.getElementById('scrollToClientsChat');
const scrollToStatistics = document.getElementById('scrollToStatistics');
const scrollToFooter = document.getElementById('scrollToFooter');

function getCoordY(elem) {
    let box = elem.getBoundingClientRect();
    return box.top; 
}

function scrollTo(y) {
    return window.scrollTo({
        top: y,
        behavior: "smooth"
    })
}

scrollToSpecialistics.addEventListener('click', () => {
    scrollTo(
        getCoordY(specialistics)
    )
});

scrollToForCaregivers.addEventListener('click', () => {
    scrollTo(
        getCoordY(forCaregivers)
    )
});

scrollToClientsChat.addEventListener('click', () => {
    scrollTo(
        getCoordY(clientsChat)
    )
});

scrollToStatistics.addEventListener('click', () => {
    scrollTo(
        getCoordY(statistics)
    )
});

scrollToFooter.addEventListener('click', () => {
    scrollTo(
        getCoordY(footer)
    )
});

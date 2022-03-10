const messages = [
    "Javier",
    "Ana",
    "Diego",
    "Laura",
    "Antonio",
    "Ary",
    "Ruben"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * 
        messages.length)];
        console.log(message);
};

module.exports = { randomMsg };
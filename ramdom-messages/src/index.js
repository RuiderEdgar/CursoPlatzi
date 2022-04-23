const messages = [
    "Edgar",
    "Luis",
    "Diego",
    "Laura",
    "Paola",
    "Carolina",
    "Lety"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};
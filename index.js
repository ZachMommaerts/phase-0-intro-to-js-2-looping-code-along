function writeCards(people, event) {
    const cardArray = [];
    for (let i = 0; i < people.length; i++) {
        const card = `Thank you, ${people[i]}, for the wonderful ${event} gift!`;
        cardArray.push(card);
    }
    return cardArray;
}

function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number --;
    }
}

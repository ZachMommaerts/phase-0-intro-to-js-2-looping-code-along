
function writeCards (recipients, events) {

    const messages = [];

    for (let i = 0; i < recipients.length; i++) {
        const thankYouMessage = `Thank you, ${recipients[i]}, for the wonderful ${events} gift!`;
        messages.push(thankYouMessage);
    }

    return messages;
}

function countDown (integer) {
    while (integer != -1) {
        console.log(integer);
        integer--;
    }
}
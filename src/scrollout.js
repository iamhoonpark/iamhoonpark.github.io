ScrollOut({
    once: true,
    onShown: (element) => {
        new TypeIt(element.querySelector('.title'), {
            startDelay: 300,
            cursor: false,
        })
        .pause(2000)
        .go();
    },
});
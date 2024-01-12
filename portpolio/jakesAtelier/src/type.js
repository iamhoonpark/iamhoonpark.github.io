'use strict';

new TypeIt('.home__title--strong', {loop: true, speed: 100}) // amazing
    .move(-7)
    .type('creative and ') // creative
    .pause(1000)
    .move(null, {to: 'END'}) // 커서가 끝으로 이동
    .delete()
    .type('a Front-end Engineer')
    .pause(1000)
    .move(-9)
    .delete(9)
    .type('Back-end')
    .pause(1000)
    .delete(9)
    .type(' Full-stack')
    .pause(1000)
    .move(9)
    .delete()
    .go();
var bouncingBall = anime({
    targets: 'path.st3, path.st4',
    translateY: '1.8vh',
    duration: 400,
    loop: true,
    direction: 'alternate',
    easing: 'easeInCubic'
});

anime({
    targets: 'path.st1 , path.st2',
    rotateX: 35,
    rotateY: 15,
    scaleZ: 1,
    scaleY: 1,
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
});
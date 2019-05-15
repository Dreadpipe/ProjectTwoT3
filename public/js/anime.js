var olive = anime({
    targets: 'path.sta3, path.sta4',
    translateY: '1.8vh',
    duration: 400,
    loop: true,
    direction: 'alternate',
    easing: 'easeInCubic'
});

var twist = anime({
    targets: 'path.sta1 , path.sta2',
    rotateX: 35,
    rotateY: 15,
    scaleZ: 1,
    scaleY: 1,
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

var ice = anime({
    targets: 'path.stb6',
    translateY: '-.8vh',
    duration: 550,
    loop: true,
    direction: 'alternate',
    easing: 'easeInCubic'
  });


var drink = anime({
    targets: 'path.stb7, path.stb8',
    translateY: '-.9vh',
    duration: 800,
    loop: true,
    direction: 'alternate',
    easing: 'easeInCubic'
  });
  
  
 
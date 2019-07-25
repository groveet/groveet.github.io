console.log('hello mazafaka');

document.ready
$(document).ready(function () {

    // let tm = TweenMax();

    let icon_car = $('.car');
        icon_bisquit = $('.bisquit');
        icon_blood = $('.blood');
        icon_policeCar1 = $('.police-car_1');
        icon_policeCar2 = $('.police-car_2');
        icon_blood = $('.blood');
        btn_start = $('.start');
        btn_restart = $('.restart');
        btn_reverse = $('.reverse');
        scene_man = $('.scene_man');

    let timeLine = new TimelineMax({

    });


    timeLine.add([
        TweenMax.fromTo(icon_car, 1, {
            opacity: 0,
            scale: 0,
        }, {
                opacity: 1,
                scale: 1,
            }),
        TweenMax.to(icon_bisquit, 1, {
            rotation: 430,
            x: 100,
            y: 100,
            delay: 1,
        }),
        TweenMax.to(icon_blood, 3, {
            opacity: 1,
            scale: 1,
            delay: 1.5,
        }),
        TweenMax.to(icon_policeCar1, 1, {
            x: 0,
            y: -240,
            delay: 3,
        }),
        TweenMax.to(icon_policeCar2, 1.5, {
            x: 0,
            y: -40,
            delay: 3.3,
        }),
        TweenMax.to(scene_man, 5, {
            x: 0,
            y: 0,
            delay: 4,
        }),
    ]);

    timeLine.pause();

    btn_start.click(function () {
        console.log('click start');
        timeLine.play();
    });

    btn_restart.click(function () {
        console.log('click reset');
        timeLine.restart();
    });

    btn_reverse.click(function () {
        console.log('click reverse');
        timeLine.resume();
    });



    
});

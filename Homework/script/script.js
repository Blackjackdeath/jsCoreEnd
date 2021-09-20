let a = 0;
let b = new Set();
let intervalID;
let timer = 59;
let checkT = true;
let c = 0;
let d = 0;
let checkDrop = true;
//  function for random pices
function randomize() {
    while (b.size != 16) {
        a = Math.round(Math.random() * 15) + 1;
        b.add(a);
    }
}
// function inicalization gamefield
function init() {
    b.forEach(function (value, valueA, set) {
        $('.left').append(`<div class="piece${value} puzzle" style="position: absolute; top: ${c}px; left: ${d}px;"></div>`);
        $('.right').append('<div class="puzzleCatch"></div>');
        if (d > 150) {
            c = c + 75;
            d = -75;
        }
        d = d + 75;
    })
    c = 0;
    d = 0;
    b.clear();
}
//  timer
function ticktack() {
    if (timer > -1) {
        if (timer > 9) {
            $('.panelTimer__H').text(`00:${timer}`);
            $('.checkResultText').text(`You still have time, you shure?00:${timer}`);
        }
        else {
            $('.panelTimer__H').text(`00:0${timer}`);
            $('.checkResultText').text(`You still have time, you shure?00:0${timer}`);
        }
        timer--;
    }
    else {
        clearInterval(intervalID);
        $('.modalWindow').fadeIn();
        $('.lose').fadeIn();
        $('.checkResult').fadeOut();
    }
}

$(document).ready(function () {
    randomize();
    init();
    i = 1;
    $('.panelBox__button:first').on('click', function () {
        $('.puzzle').draggable({
            containment: '.field',
            zIndex: '99',
            stop: function (event, ui) {
                if (!checkDrop) {
                    checkDrop = true;
                    $(this)[0].style.display = 'none';
                }
            },
            revert: true,
            revertDuration: 1
        });
        $('.puzzleCatch').droppable({
            acept: '.puzzle',
            drop: function (event, ui) {
                if (!$(this)[0].className.includes('piece')) {
                    $(this).addClass(ui.draggable[0].className.slice(0, 7));
                    checkDrop = false;
                }
            }
        })
        $('.right').sortable({
            containment: '.right',
            tolerance: 'intersect'
        });
        $(this).removeClass('active');
        $(this).attr('disabled', 'true');
        $('.panelBox__button:nth-child(2)').addClass('active');
        $('.panelBox__button:nth-child(2)').removeAttr('disabled');
        intervalID = setInterval(ticktack, 1000);
    })
    $('.panelBox__button:nth-child(2)').on('click', function () {
        $('.modalWindow').fadeIn();
        $('.checkResult').fadeIn();
    })
    $('.lose__Button').on('click', function () {
        $('.modalWindow').fadeOut();
        $('.lose').fadeOut();
    })
    $('.panelBox__button:nth-child(3)').on('click', function () {
        $('.left').html('');
        $('.right').html('');
        randomize();
        init();
        clearInterval(intervalID);
        $('.panelTimer__H').text(`01:00`);
        $('.panelBox__button:first').removeAttr('disabled');
        $('.panelBox__button:nth-child(2)').attr('disabled', 'true');
        $('.panelBox__button:nth-child(2)').removeClass('active');
        $('.panelBox__button:first').addClass('active');
        timer = 59;
    })
    $('.checkResult__ButtonCheck').on('click', function () {
        for (let i = 0; i < 16; i++) {
            console.log($('.right .puzzleCatch')[i].classList);
            console.log($('.right .puzzleCatch')[i].classList.contains(`piece${i + 1}`));
            if (!$('.right .puzzleCatch')[i].classList.contains(`piece${i + 1}`)) {
                $('.modalWindow').fadeIn();
                $('.lose').fadeIn();
                $('.checkResult').fadeOut();
                clearInterval(intervalID);
                $('.panelTimer__H').text(`01:00`);
                checkT=false;
                break;
            }
            else{
                checkT=true;
            }
        }
        if (checkT) {
            $('.modalWindow').fadeIn();
            $('.lose').fadeIn();
            $('.checkResult').fadeOut();
            $('.loseText').text('Woohoo, well done, you did it!');
            clearInterval(intervalID);
        }  
    })
})
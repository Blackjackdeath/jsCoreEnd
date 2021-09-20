$(document).ready(function(){

    // $('#child').draggable({
    //     // containment: '#parent'
    //     // containment: [50,50,200,200],
    //     // axis: 'y'
    //     // grid: [100,100]
    //     // revert: true,
    //     // revertDuration: 2000,
    //     start: function(event, ui){
    //         console.log('start', event, ui);
    //     },
    //     stop: function(event, ui){
    //         console.log('stop', event, ui);
    //         if(ui.offset.top> 200 && ui.offset.left > 300){
    //             $('.message').html('Error');
    //         }
    //     }
    // });

    // $('.drag').draggable();
    // $('.drop').droppable({
    //     accept: '.drag',
    //     activeClass: 'active',
    //     hoverClass: 'hover',
    //     // tolerance: 'intersect'
    //     // tolerance: 'touch'
    //     // tolerance: 'fit'
    //     // tolerance: 'pointer'
    //     activate: function(){
    //         // $('.message').text('Start draggable')
    //         $('.drop-message').text('Drop area here..')
    //     },
    //     deactivate: function(){
    //         // $('.deactivate').text('Stop draggable')
    //         $('.drop-message').text('')
    //     },
    //     over: function(){
    //         $('.drop-message').text('Now you can drop element');
    //     },
    //     out: function(){
    //         $('.drop-message').text('Drop area here..');
    //     },
    //     drop: function(){
    //         alert('Element drop');
    //         $('.drop-message').text('');
    //         // location.reload();
    //     }
    // });

    // $('.sort').sortable({
    //     connectWith: '.sort-left, .sort-right',
    //     // axis: 'x'
    //     // cancel: '.disabled'
    //     // containment: '.sort-container'
    //     // delay: 1000
    //     distance: 50
    // })

    // $('.number-box').sortable({
    //     connectWith: '#start, #end',
    // })


    // let numbers = [1,2,3,4,5,6,7,8,9];
    // let check = true;

    // debugger

    // $('#check').on('click', function(){
    //     for(let i=0; i<$('.number').length; i++){
    //         if($('.number').eq(i).text() != numbers[i]){
    //             check = false;
    //             break;
    //         }
    //     }
    //     if(check){
    //         alert('You win');
    //     }
    //     else{
    //         alert('You lose');
    //     }
    //     check = true;
    // })

    $(window).scroll(function(){
        paralax();
    })

    function paralax(){
        let scrollTop = $(window).scrollTop();
        // console.log(scrollTop);
        $('.first-message').css('top', `${scrollTop*0.35}px`);
        $('.second-message').css('top', `${-50 + scrollTop*0.25}px`);
    }


})
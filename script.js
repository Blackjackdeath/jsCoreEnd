$(document).ready(function(){
    $('.number-box').sortable({
        connectWith: '#start, #end'
    })
$('#check').on('click', function(){
    let c=false;
    for (let i=1; i<10; i++){
      if (i== parseInt($(`#end>.number:nth-of-type(${i})`).text())){
          c=true;
      }
      else {
          c=false;
          break;
      }
    }
    if (c) { alert('good')}
    else
    {alert(false)}
})


})
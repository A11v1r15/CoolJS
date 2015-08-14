var step = 4, // colorChage step, use negative value to change direction
    ms   = 10,  // loop every
    $uni = $('.unicorn'),
    txt  = $uni.text(),
    len  = txt.length,
    lev  = 360/len,
    newCont = "",
    itv;
alert(lev+' '+len);

for(var i=0; i<len; i++)newCont += "<span style='color:hsla("+ i*lev +", 100%, 50%, 1)'>"+ txt.charAt(i) +"</span>";

$uni.html(newCont); // Replace with new content
var $ch = $uni.find('span'); // character

function anim(){
  itv = setInterval(function(){
    $ch.each(function(){
      var h = +$(this).attr('style').split(',')[0].split('(')[1]-step % 360;
      $(this).attr({style:"color:hsla("+ h +", 100%, 50%, 1)"});
    });
  }, ms); 
}
function stop(){ clearInterval(itv); }

$uni.hover(anim,stop);

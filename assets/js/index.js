jQuery('.bottom_qoutes .qoute_2, .bottom_qoutes .qoute_3').hide();
 
var $elements = jQuery('.bottom_qoutes .qoute_1, .bottom_qoutes .qoute_2, .bottom_qoutes .qoute_3');

function anim_loop(index) {
$elements.eq(index).delay(2000).fadeIn(1000, function() {
var $self = jQuery(this);
setTimeout(function() {
$self.fadeOut(2000);
anim_loop((index + 1) % $elements.length);
}, 3000);
});
}

anim_loop(0);
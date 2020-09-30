$(window).scroll(function(){
    var wScroll=$(this).scrollTop();

    if(wScroll>350){
        $('.workingspace').addClass('muncul');
    }
    if(wScroll<350){
        $('.workingspace').removeClass('muncul');
    }
    if(wScroll>750){
        $('.testimonial').addClass('muncul');
    }
    if(wScroll<750){
        $('.testimonial').removeClass('muncul')
    }
    if(wScroll>540){
        $('.fixed-top').addClass('muncul');
    }
    if(wScroll<540){
        $('.fixed-top').removeClass('muncul');
    }
    
    if(wScroll>200){
        $('.jumbotron .container').addClass('hilang');
    }
    if (wScroll<200) {
        $('.jumbotron .container').removeClass('hilang');    
    }
});
function ganti() {
    var lokasi=nomor+".png";
    document.getElementById("gambar").src=lokasi;
    return false; 
}

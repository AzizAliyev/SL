var mybtn=document.getElementById("mybtn");
window.onscroll(function(){
    scrollfunk();
});

function scrollfunk(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        mybtn.style.display="block"
     }else{
         mybtn.style.display="none"
     }
}
<script>
  AOS.init();
</script>
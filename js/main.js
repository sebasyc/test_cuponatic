$(document).ready( function () {

   $('.result-filter .cerrar, .btn-back').click( function () {
      $('.result-filter').removeClass('open')
   })

   $('.result-map .cerrar').click( function () {
      $('.btn-map').toggleClass('active')
      $('.result-map').removeClass('open')
   })

   $('.btn-order').click( function () {
      $('#resultOrden').addClass('open')
   })

   $('.btn-filter').click( function () {
      $('#resultFilter').addClass('open')
   })

   $('.btn-map').click( function () {
      $(this).toggleClass('active')
      $('.result-map').toggleClass('open')
   })

   $('.btn-item').click(function(){
      $('.sub-item').slideUp()
      $(this).parent().toggleClass('active').siblings().removeClass('active')
      if($(this).next().is(':visible')){
          $(this).next().slideUp()
      } else {
          $(this).next().slideDown()
      }
   })

})
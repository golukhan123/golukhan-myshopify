(function ($) {
  $(document).ready(function () {
    /**
     * Open the off-canvas drawer
     */
    $('.open-drawer').on('click', function (e) {
      var target = $(this).attr('target-drawer');
      $('#' + target).removeClass('hidden');
    });
  
    /**
     * Close the off-canvas drawer
     */
    $('.close-drawer').on('click', function (e) {
      var target = $(this).attr('target-drawer');
      $('#' + target).addClass('hidden');
    });

    $('form[name="addtocart-form"]').on('submit', function (e) {
      /*
			e.preventDefault();

      $.ajax({
        url: '/cart/add.js',
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: function (data) {
          alert('Item added to cart');
        },
        error: function (error) {
          console.error('Error adding to cart: ', error);
        },
      });
			*/
    });
  });
})(jQuery);

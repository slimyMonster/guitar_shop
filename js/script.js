'use strict';
$(function() {

	function addSpaces(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

	$("#checkPersonalData").change(function() {
	    var checkedStatus = this.checked;
	    if (checkedStatus === true) {
	       $("#regConfirm").prop("disabled", false);
	    } else {
	       $("#regConfirm").prop("disabled", true);
	    }
	});

	$('.catalogue-level-1>a').on('click', function(){
    	$(this).find('.catalogue-icon').toggleClass('active');
    	$('.catalogue-level-1>a').not(this).find('.catalogue-icon').removeClass('active');
	});

	var cartItems = 0;
	var cartCost = 0;

	$( ".productPrice" ).each(function() {
		var productPrice = addSpaces(parseInt($(this).html()));
		$(this).html(productPrice + ' &#8381');
	});

	function toggleProduct() {
		var addedPrice = parseInt($(event.target).closest('.productDescr').find('.productPrice').html().replace(/\s/g, ''));
		var toCartStatus = $(event.target).hasClass('btn-addToCart');
		$(event.target).toggleClass('btn-addToCart');
		$(event.target).toggleClass('btn-remove');
		if (toCartStatus === true) {
			$(event.target).html('Удалить');
			cartItems++;
			cartCost += addedPrice;
		} else {
			$(event.target).html('В корзину');
			cartItems--;
			cartCost -= addedPrice;
		}

		$('.cart-items').html(cartItems);
		$('.cart-cost').html(addSpaces(cartCost) + ' &#8381');
	}

	$('.btn-addToCart').on('click', function() {
		toggleProduct();
	});

});
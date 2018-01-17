$(document).ready(function() {
	Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
	//watch for a form submission
	$("#form-submit-btn").click(function(event) {
		event.preventDefault();
		$('input[type=submit]').prop('disabled',true);
		var error=false;
			ccNum=$('#card_number').val(),
			cvcNum=$('#card_code').val(),
			expMonth=$('#card_month').val(),
			expYear=$('#card_year').val();

		if(!error) 
		{
			//get stripe notation
			Stripe.createToken({
				number: ccNum.
				cvc: cvcNum,
				exp_Month: expMonth,
				exp_Year:  expYear
				},stripeResponseHandler);
		}
		return false;	
	}); 	//form submission

	function stripeResponseHandler(status,response)
	{
		//get response to the from:
		var f=$("#new_user");

		//get token from the response
		var token= response.id;

		//Add the token to the form:
		f.append('<input type="hidden" name="user[stripe_card_token]"value="' + token + '" />');

		//submit the form:
		f.get(0).submit();
	}
});

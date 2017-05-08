(function() {  
	"use strict"; 

		let modalLinkSelect = document.querySelectorAll('[id=modalLinkSelect]');
		let overlaySelect = document.querySelectorAll('[id=overlay]');
		let linkValue = 1;

		modalLinkSelect.forEach((linkMatch) => { 
			linkMatch.setAttribute('data-link', "link-" + linkValue++);

			linkMatch.addEventListener("click", function(e) {
				e.preventDefault();
	  		let target = this.getAttribute('data-link');
	  		let idSelector = document.getElementById(target);
	  		idSelector.classList.remove("isHidden");

	  }, false);
		});

		let overlayValue = 1;
		overlaySelect.forEach((overlayMatch) => { 
			overlayMatch.setAttribute('id', "link-" + overlayValue++);

			overlayMatch.addEventListener("click", function(e) {
				e.preventDefault();
				this.classList.add("isHidden");
		}, false);
		});
})();	
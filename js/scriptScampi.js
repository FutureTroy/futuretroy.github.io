var atHome = true;
        $(document).ready(function () {
        	
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#btn_sidebarHome, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });

            $('#btn_home').on('click',function(){
            	console.log('home clicked');

            	

            	if(!atHome){
				$("#txt_titleH1").fadeOut(function () {
				    $("#txt_titleH1").text(($("p").text() == 'Welcome') ? 'Get in touch...' : 'Welcome').fadeIn();
				})

            	$("#btn_projects").fadeOut();
		        $('#btn_projects').toggleDisabled();
		        $("#btn_contact").fadeOut();
		        $('#btn_contact').toggleDisabled();

		        $("#btn_resume").toggleDisabled();
	        	$("#btn_github").toggleDisabled();
	        	$("#btn_email").toggleDisabled();

	        	$("#btn_resume").toggleDisabled();
	        	$("#btn_github").toggleDisabled();
	        	$("#btn_email").toggleDisabled();
            	}
            	

			    


            	revertHome();
            });

            $('#btn_projects').on('click', function () {
            	
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });

            $("#btn_contact").on("click",function(){;
            	$("#txt_titleH1").fadeOut(function () {
            		$("#txt_titleH1").text(($("p").text() == 'Get in touch...') ? 'Welcome' : 'Get in touch...').fadeIn();
        		})

            	chBgColor();
    		});

    		// $("#btn_resume").toggleDisabled();
      //   	$("#btn_github").toggleDisabled();
      //   	$("#btn_email").toggleDisabled();
		});
        
		

        function chBgColor(){
        	console.log("JS activated BGChanged");

        	document.body.style.backgroundColor = '#C3776C';

        	document.getElementById('btn_home').src="img/img_logoMed.png";

        	document.getElementById('img_header').src="img/img_header2.png";

        	document.getElementById('txt_titleH1').style.color="#E6E6E4";
			
        	atHome = false;
	  		console.log(atHome);
	  		return true;
		}

		function revertHome(){
        	console.log("Home Reset");

        	document.body.style.backgroundColor = '#E6E6E4';

        	document.getElementById('btn_home').src="img/img_logo.png";

        	document.getElementById('img_header').src="img/img_header.png";

        	//document.getElementById('');

        	document.getElementById('txt_titleH1').style.color="#424242";


        	// document.getElementById('btn_projects').style.opacity="1";
        	// document.getElementById('btn_contact').style.opacity="1";

        	//document.getElementById('txt_aboutMe').style.opacity="1";
        	//document.getElementById('txt_aboutTitle').style.opacity="1";
   
			

	  		
	  		return true;
		}

		(function ($) {
		    $.fn.toggleDisabled = function () {
		        return this.each(function () {
		            var $this = $(this);
		            $this.toggle($this.prop('disabled')).prop('disabled', !$this.prop('disabled')) 
		        });
		    };
		})(jQuery);

		$(function () {
		    $('#btn_contact').click(function () {
		    	$("#btn_projects").fadeOut();
		        $('#btn_projects').toggleDisabled();
		        $("#btn_contact").fadeOut();
		        $('#btn_contact').toggleDisabled();

			    $("#btn_resume").toggleDisabled();
	        	$("#btn_github").toggleDisabled();
	        	$("#btn_email").toggleDisabled();
		    });
		});
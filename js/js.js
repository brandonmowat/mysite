$(document).ready(function(){

});

//============================//
// SMART NAVIGATION BAR TINGS //
//============================//

$(document).ready(function(){
	$('.nav-sensor').mouseover(function(){
		$('nav#bar-navigation').addClass('visible');
	});
	var lastScrollTop = 0;
	var st = 0;
	$(window).scroll(function(event){
		st = $(this).scrollTop();
		console.log(st);

		$('.header-media').css({'transform':'translate3d(0px,' + st + 'px, 0)'});
		//$('hgroup').css({'margin-top':(200+st/10)+'px'});


		if (st>30) {
			$('#work-header').addClass('fade');
			$('.scroll-down').addClass('active');
		};
		if (st<30) {
			$('#work-header').removeClass('fade');
			$('.scroll-down').removeClass('active');
		};

		$('header#header hgroup').css({'opacity': 1-st/900});
		$('header#header hgroup').css({'transform':'translate3d(0px,' + st/1.7 + 'px, 0)'});


// ================= Smart Nav Bar ================= //

		if (st <= 10) {
			$('nav#bar-navigation').removeClass("detached");
			$('nav#bar-navigation').addClass("visible");
		};

		if (st > 10) {
			$('nav#bar-navigation').removeClass("visible");
		}

		if (st >= 500) {
			$('nav#bar-navigation').addClass("hidden");
		};

		if (st >= 600) {
			$('nav#bar-navigation').addClass("detached");
			$('.nav-hover-trigger').mouseover(function() {
				$('nav#bar-navigation').addClass("visible");
				$('nav#bar-navigation').removeClass("hidden");
			});

			if (st <= lastScrollTop){
		       	$('nav#bar-navigation').addClass("visible");
				$('nav#bar-navigation').removeClass("hidden");
		   } else {
		   		$('nav#bar-navigation').removeClass("visible");
				$('nav#bar-navigation').addClass("hidden");
		      
		   }
		   
		}
		if (st < 600 && st <= lastScrollTop) {
			$('nav#bar-navigation').addClass("visible");
			$('nav#bar-navigation').removeClass("hidden");
		}

		if (st < 600 && st > lastScrollTop) {
			$('nav#bar-navigation').removeClass("visible");
			$('nav#bar-navigation').addClass("hidden");
		}

		if (st <= 10 && st > lastScrollTop) {
			$('nav#bar-navigation').removeClass("detached");
			$('nav#bar-navigation').addClass("visible");
		}
		lastScrollTop = st;

// ================= Smart Nav Bar Done ================= //




	});

	// Fullpage-nav toggle code

		$('nav#bar-navigation').on("mousedown", function(e) {
			$("nav#bar-navigation").toggleClass('nav-open');
			$('nav#bar-navigation').addClass('detached');
			if ((st===0) && ($('nav#bar-navigation').hasClass('detached')) && !($('nav#bar-navigation').hasClass('nav-open'))) {
				$('nav#bar-navigation').removeClass('detached');
			};
			$(".fullpage-nav, html").toggleClass('nav-closed');
		});

		var offset = 500,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 550,
		//grab the "back to top" link
		$back_to_top = $('#read-story');
		if ($('html').find('#myStory')) {var myStory = $("#myStory").offset().top;};

		$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').delay(200).animate({
			scrollTop: myStory-100 ,
		 	}, scroll_top_duration
		);
	});
});

//==========================//
// PARALLX THINGS AND STUFF //
//==========================//

$(document).ready(function(){
	var lastScrollTop = 0;
	var st = 0;
	$(window).scroll(function(event){
		st = $(this).scrollTop();
		$('.para').each(function(){
		var whatWeDo = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if ((whatWeDo > topOfWindow-600) && (whatWeDo < topOfWindow+600)) {
				$('.para').css({'transform':'translate3d(0px,' + (-((st/7)-(350))+ 'px, 0)')});
			}
		});
		lastScrollTop = st;
	});
});

//==========================//
// Material design : Ripple //
//==========================//
$(document).ready(function() {
	var ink, d, x, y, mouseY;
	$(".ripplelink").click(function(e){
	    if($(this).find(".ink").length === 0){
	        $(this).prepend("<span class='ink'></span>");
	    }
	         
	    ink = $(this).find(".ink");
	    ink.removeClass("animate");
	     
	    if(!ink.height() && !ink.width()){
	        d = Math.max($(this).outerWidth(), $(this).outerHeight());
	        ink.css({height: d, width: d});
	    }
	     
	    x = e.pageX - $(this).offset().left - ink.width()/2;
	    y = e.pageY - $(this).offset().top - ink.height()/2;
	     
	    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
	});
	$('.menu-button').on("mousedown", function(e) {
		$("nav").toggleClass('closed');
		$(".nav-cover").toggleClass('closed');
	});
	$('.nav-cover, nav').on("mousedown", function(e) {
		$("nav").toggleClass('closed');
		$(".nav-cover").toggleClass('off');
	});
});

//==========================//
// -----SOCIAL FETCHERS---- //
//==========================//

(function(){var e,t;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?d=["","random"]:d=this.options.sortBy.split("-"),p=d[0]==="least"?!0:!1;switch(d[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",p);break;case"liked":e.data=this._sortBy(e.data,"likes.count",p);break;case"commented":e.data=this._sortBy(e.data,"comments.count",p);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){a=e.data,this.options.limit!=null&&a.length>this.options.limit&&(a=a.slice(0,this.options.limit+1||9e9)),n=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(a=this._filter(a,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){i="",o="",l="",v=document.createElement("div");for(m=0,b=a.length;m<b;m++)s=a[m],u=s.images[this.options.resolution].url,this.options.useHttp||(u=u.replace("http://","//")),o=this._makeTemplate(this.options.template,{model:s,id:s.id,link:s.link,image:u,caption:this._getObjectProperty(s,"caption.text"),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,"location.name")}),i+=o;v.innerHTML=i,S=[].slice.call(v.childNodes);for(g=0,w=S.length;g<w;g++)h=S[g],n.appendChild(h)}else for(y=0,E=a.length;y<E;y++)s=a[y],f=document.createElement("img"),u=s.images[this.options.resolution].url,this.options.useHttp||(u=u.replace("http://","//")),f.src=u,this.options.links===!0?(t=document.createElement("a"),t.href=s.link,t.appendChild(f),n.appendChild(t)):n.appendChild(f);document.getElementById(this.options.target).appendChild(n),r=document.getElementsByTagName("head")[0],r.removeChild(document.getElementById("instafeed-fetcher")),c="instafeedCache"+this.unique,window[c]=void 0;try{delete window[c]}catch(x){}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(typeof this.options.tagName!="string")throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(typeof this.options.locationId!="number")throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(typeof this.options.userId!="number")throw new Error("No user specified. Use the 'userId' option.");if(typeof this.options.accessToken!="string")throw new Error("No access token. Use the 'accessToken' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=""+e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))i=n.match(r)[1],s=(o=this._getObjectProperty(t,i))!=null?o:"",n=n.replace(r,""+s);return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],i=function(e){if(t(e))return n.push(e)};for(s=0,o=e.length;s<o;s++)r=e[s],i(r);return n},e}(),t=typeof exports!="undefined"&&exports!==null?exports:window,t.Instafeed=e}).call(this);

// Get instagram

	var feed = new Instafeed({
        get: 'user',
        userId: 20421834,
        accessToken: '20421834.1677ed0.dcc38f0139f348398fec1b4a44863f51',
        resolution: 'standard_resolution',
        limit:4,
        mock: true,
        success: function(data) {
        	for (var i = data.data.length - 1; i >= 0; i--) {
        		var url = data.data[i].images.standard_resolution.url,
				caption = data.data[i].caption.text;
				var num = (i+1).toString();
				$('#instagramImage' + num).attr("src",url);
				//$('#instagramCaption' + num).html(caption);
        	};
        }
    });
    feed.run();

//==========================//
// -------PINGY PONGY------ //
//==========================//

;window.Modernizr=function(a,b,c){function u(a){i.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l={svg:"http://www.w3.org/2000/svg"},m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e}),m.svg=function(){return!!b.createElementNS&&!!b.createElementNS(l.svg,"svg").createSVGRect};for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)t(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},u(""),h=j=null,e._version=d,e}(this,this.document);

if (!Modernizr.svg){
	$(".js-home-illustration-fallback").css("display", "block");
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel
 
// MIT license
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

$( document ).on( "mousemove", function( event ) {

	var mousePosition = {};
	mousePosition.x = event.pageX;
	mousePosition.y = event.pageY;

	$(".eye").each(function(index,element){
		eyePosition = $(this).offset();
		angle = Math.atan2(mousePosition.y - eyePosition.top, mousePosition.x - eyePosition.left);
		translateX = 10 * Math.cos(angle);
		translateY = 10 * Math.sin(angle);
		$(this).attr("transform", "translate("+ translateX +" "+ translateY+")");

	});

});

$(".js-pipe").click(function(){
	if (!$(this).data("up")){
		$(this).css("transform", "translate(0, -40px)");
		$(this).data("up", true);
	} else {
		$(this).css("transform", "translate(0, 0px)");
		$(this).data("up", false);
	}
});

var colors = ["#00C4B3", "#F7323F", "#F9BE00"];
$(".js-arc").click(function(){
	colors.push(colors.shift());
	$(".js-arc path").each(function(i){
		$(this).attr("fill", colors[i]);
	})
});


$(document).ready(function(){

	function Ball(translateX, translateY, rotation){
		this.translateX = -180;
		this.translateX = translateX;
		this.translateY = translateY;
		this.rotation = rotation;
		this.gravity = 0.18;
		this.gravity = 0.6;
		this.vy = 0;
	}

	balls = [];

	$(".js-circle").each(function(i){
		balls.push(new Ball(-180 + i * 175, 0, i*60))
	});

	function animate(){
		window.requestAnimationFrame(animate);

		for (var i = 0 ; i < balls.length ; i++){
			balls[i].translateX += 2.5;
			balls[i].rotation += 3;
			if (balls[i].translateX > 235){
				balls[i].vy+=balls[i].gravity;
				balls[i].translateY+=balls[i].vy;
			}
			if (balls[i].translateY > 310){
				balls[i].translateX = -180;
				balls[i].translateY = 0;
				balls[i].vy = 0;
			}

			// $(".js-circle").eq(i).css("transform", "translateX("+balls[i].translateX+"px) translateY("+balls[i].translateY+"px) rotate("+balls[i].rotation+"deg)");
			$(".js-circle").eq(i).attr("transform", "translate("+balls[i].translateX+" "+balls[i].translateY+") rotate("+balls[i].rotation+" 138.8 329.292)");

		}

	}

	animate();



	//	Set up Pong

	var pong;
	$('.js-pong-trigger').on('click', function(e) {

		e.preventDefault();
		$('<canvas id="pong" style=""></canvas>').appendTo('body').fadeIn(100);
		$('<p id="score" style="">0</p>').appendTo('body');
		pong = new Pong('pong', { 
			ball_color: 'rgb(247,50,63)',
			ball_size: 24,
			ball_x: $(this).offset().left + 30,
			ball_y: $(this).offset().top - $(window).scrollTop(),
			sudden_death: true,
			gameOver: function(score) {
				$('#score').fadeOut(600, function() {
					$(this).remove();
				});
				$('#pong').fadeOut(600, function() {
					$(this).remove();
				});
				$('<div id="pong-final-score"><p>Score: ' + score + '</p></div>').appendTo('body').fadeIn(600, function() {
					destroyPong();
					$(this).delay(1500).fadeOut(1000, function() {
						$(this).remove();
					});
				});
			}
		});
		setTimeout(function() {
			pong.animate(); 
		}, 20);
	});
	
	function destroyPong() {
		pong = false;
	}


	$(window).on('resize', function() {
 		sizeHeader();
 	});
 	sizeHeader();


    // Get LastFM
    
    $.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=madebyfieldwork&api_key=c2e262a8a2491ca51184a5798afd5c4e&limit=5&format=json', function(data) {
// console.log(data);
		if (data.recenttracks && data.recenttracks.track && data.recenttracks.track.length) {
			artistVal = data.recenttracks.track[0].artist["#text"],
			trackVal = data.recenttracks.track[0].name;
			$('#now-playing').html('Now playing: <br />' + trackVal + ' by ' + artistVal);
		}
	});

});


function sizeHeader() {
	var $introText = $('.js-home-page-intro'),
		header_height = $('#site-header').innerHeight(),
		extra_height = $(window).innerHeight() - $('#svg-wrapper').innerHeight(),
		intro_text_height = $introText.innerHeight(),
		min_intro_text_spacing = 120;

	if (extra_height < intro_text_height + header_height + min_intro_text_spacing) {
		extra_height = intro_text_height + header_height + min_intro_text_spacing;
	}
	
	$('#homepage-header').css({paddingTop: extra_height + 'px'});
	$('.js-home-page-intro').css({bottom: (((extra_height - intro_text_height - header_height) / 2)) + 'px'});
}

function convertToSlug(string) {
    return string.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}

var Pong = function(element_id, opts) {
	
	var canvas = document.getElementById(element_id),
		ctx = canvas.getContext('2d'),
		w = $(window).width(),
		h = $(window).height(),
		playing = false;
		score = 0;
	
	canvas.width = w;
	canvas.height = h;
		
	var ball = {
		x: opts.ball_x,
		y: opts.ball_y,
		r: opts.ball_size / 2,
		c: opts.ball_color,
		velx: 3,
		vely: -3,
		draw: function() {
			ctx.beginPath();
			ctx.fillStyle = this.c;
			ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
			ctx.fill();
		},
		update: function() {
			if (this.x + this.velx + this.r >= w || this.x + this.velx - this.r < 0) {
				this.velx = this.velx * -1;
			}
			if (this.y + this.vely + this.r >= paddle.y 
					&& this.x > paddle.x 
					&& this.x < paddle.x + paddle.width) {
				this.vely = this.vely * -1;
				if (this.velx < 15 && this.velx > -15) {
					this.velx = this.velx * 1.2;
					this.vely = this.vely * 1.2;
				}
				updateScore(Math.abs(Math.round(this.velx)));
			}
			else if (this.y + this.vely + this.r >= h || this.y + this.vely - this.r < 0) {
				if (this.y + this.vely + this.r >= h) {
					if (opts.sudden_death) {
						gameOver();
					}
					else {
						updateScore(-10);
					}
				}
				this.vely = this.vely * -1;
			}
			this.x += Math.round(this.velx);
			this.y += Math.round(this.vely);
		}
	};
	
	var paddle = {
		x: w / 2,
		y: h - 20,
		width: Math.min(w / 5, 70),
		height: 14,
		draw: function() {
			ctx.fillStyle = opts.ball_color; 
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	};
	
	var prepare = function() {
		ctx.clearRect(0, 0, w, h);
	};
	
	var draw = function() {
		prepare();
		ball.update();
		ball.draw();
		paddle.draw();
	};
	
	var anim = function() {
		if (playing) {
			requestAnimFrame(anim);
			draw();
		}
	};
	
	this.animate = function() {
		playing = true;
		anim();
		$(document).mousemove(function(e) {
			paddle.x = e.pageX - (paddle.width / 2);
		}); 
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
			var touch = e.touches[0];
			paddle.x = touch.pageX - (paddle.width / 2);
		}); 
	}
	
	var updateScore = function(increment) {
		var old_score = score;
		score += increment;
		_animateUpdateScore(old_score);
	} 
	
	var _animateUpdateScore = function(score_now) {
		if (score_now !== score) {
			if (score_now < score) {
				score_now ++;
			}
			else {
				score_now --;
			}
			$('#score').text(score_now);
			requestAnimFrame(function() {_animateUpdateScore(score_now); });
		}
	}
	
	var pause = function() {
		playing = false;
	}
	
	var gameOver = function() {
		pause();
		if (typeof opts.gameOver === 'function') {
			opts.gameOver(score);
		}
	}
};


window.requestAnimFrame = (function() { 
	return window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	window.mozRequestAnimationFrame || 
	window.oRequestAnimationFrame || 
	window.msRequestAnimationFrame ||
	function(callback) { 
		return window.setTimeout(callback, 1000 / 60); 
	}; 
})();










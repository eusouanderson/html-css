var loaderHome = true;
var animePage;
var scrollSteps;
var scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

var App = function() {
  var nav = new Nav();

  if(document.querySelector(".template-home")) {
    var home = new Home();
  }
  if(document.querySelector(".template-strategy")) {
    var strategy = new Strategy();
  }
  if(document.querySelector(".template-investments")) {
    var investments = new Investments();
  }
  if(document.querySelector(".template-about")) {
    var about = new About();
  }
  if(document.querySelector(".template-contact")) {
    var contact = new Contact();
  }
}

window.onload = function() {
  var app = new App();

  // var lordOfTheScroll = new LordOfTheScroll();
};

var About = function() {
  var desktop = window.matchMedia("(min-width: 991px)");
  var cache = {};
  var self = this;
  var scrollPos = 0;
  var sec1_rect_anime;
  var sec2_anime;
  var sec3_h2_anime;

  var init = self.init = function() {
    initCache();
    animeLoad();
    registerEvents();
    return self;
  };

  var initCache = function() {
    // anime
    cache.view = document.querySelector(".template-about");
    cache.sec1 = cache.view.querySelector('.sec1');
    cache.sec1_rect = cache.sec1.querySelector('.rect');
    cache.sec1_h1 = cache.sec1.querySelector('h1');
    cache.sec1_content = cache.sec1.querySelector('.content');

    cache.sec2 = cache.view.querySelector('.sec2');
    cache.sec2_txt = cache.sec2.querySelector('.txt');

    cache.sec3 = cache.view.querySelector('.sec3');
    cache.sec3_h2 = cache.sec3.querySelector('h2');
    cache.sec3_why= cache.sec3.querySelectorAll('.why');

    cache.sec4 = cache.view.querySelector('.sec4');
    cache.sec4_img = cache.sec4.querySelector('.top_img');
    cache.sec4_rect = cache.sec4.querySelector('.rect');
    cache.sec4_h2 = cache.sec4.querySelector('h2');
    cache.sec4_team_wrap = cache.sec4.querySelector('.flex');
    cache.sec4_team_sec = cache.sec4.querySelectorAll('.team_sec');
  };

  var registerEvents = function() {
    window.addEventListener('scroll', animePage);
  };

  // Anime

  var animeLoad = function() {

    sec1_rect_anime = anime({
      targets: cache.sec1_rect,
      translateX: ['0%','-120%'],
      skewX: [-20,-20],
      duration: 2500,
      delay: 300,
      easing: 'easeInOutExpo'
    });

    sec1_content_anime = anime({
      targets: cache.sec1_content,
      backgroundPositionY: ['0%','100%'],
      duration: 1000,
      easing: 'linear',
      autoplay: false
    });

    sec2_anime = anime({
      targets: cache.sec2_txt,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-5,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec3_h2_anime = anime({
      targets: cache.sec3_h2,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-5,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec4_rect_anime = anime({
      targets: cache.sec4_rect,
      translateX: ['0%','-120%'],
      skewX: [-20,-20],
      duration: 2500,
      easing: 'easeInOutExpo',
      autoplay: false
    });

    sec4_team_wrap_anime = anime({
      targets: cache.sec4_team_wrap,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-5,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec4_h2_anime = anime({
      targets: cache.sec4_h2,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-5,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });
  }

  var animePage = function() {
    scrollPos = window.pageYOffset;

    // Sec1 in
    if(scrollPos < cache.sec1.offsetHeight) {
      var percent = scrollPos/cache.sec1.offsetHeight;
      sec1_content_anime.seek(percent * sec1_content_anime.duration);
    }

    // Sec2 in
    if((scrollPos+window.innerHeight/2 > cache.sec2.offsetTop) && (!cache.sec2.classList.contains('animated'))){
      cache.sec2.classList.add('animated');
      sec2_anime.play();
    }

    // Sec2 out
    // if(((scrollPos+window.innerHeight/4) > cache.sec2_txt.offsetTop) && (scrollPos < (cache.sec2.offsetTop + cache.sec2.offsetHeight))){
    //   var percent = ((scrollPos+window.innerHeight/4) - cache.sec2_txt.offsetTop)/((cache.sec2.offsetTop + cache.sec2.offsetHeight)-cache.sec2_txt.offsetTop);
    //   sec2_anime.seek(sec2_anime.duration-((percent*2) * sec2_anime.duration));
    // }

    // Sec3 h2 in
    if((scrollPos+window.innerHeight/2 > cache.sec3.offsetTop) && (!cache.sec3.classList.contains('animated'))){
      cache.sec3.classList.add('animated');
      sec3_h2_anime.play();
    }

    // Sec3 h2 out
    // if(((scrollPos+window.innerHeight/3) > cache.sec3_h2.offsetTop) && (scrollPos < (cache.sec3.offsetTop + cache.sec3.offsetHeight))){
    //   var percent = ((scrollPos+window.innerHeight/3) - cache.sec3_h2.offsetTop)/((cache.sec3.offsetTop + cache.sec3.offsetHeight)-cache.sec3_h2.offsetTop);
    //   sec3_h2_anime.seek(sec3_h2_anime.duration-((percent*3) * sec3_h2_anime.duration));
    // }

    // Sec3 Why
    for (var i = 0; i < cache.sec3_why.length; i++) {
      if(((scrollPos+window.innerHeight/1.5) > cache.sec3_why[i].offsetTop) && (scrollPos < (cache.sec3.offsetTop + cache.sec3.offsetHeight)) && (!cache.sec3_why[i].classList.contains('animated'))){
        cache.sec3_why[i].classList.add('animated');
        anime({
            targets: cache.sec3_why[i].querySelector('.slash'),
            translateX: ['1000%','0%'],
            skewX: [-20,-20],
            opacity: [1, 0],
            duration: 1500,
            easing: 'easeOutExpo',
        });
        anime({
            targets: cache.sec3_why[i].querySelector('.inner'),
            translateX: ['15%','0%'],
            skewX: [-5,0],
            opacity:[0,1],
            duration: 1500,
            easing: 'easeOutExpo',
        });
      }
      // if(((scrollPos+window.innerHeight/3) > cache.sec3_why[i].offsetTop) && (scrollPos < (cache.sec3.offsetTop + cache.sec3.offsetHeight)) && (cache.sec3_why[i].classList.contains('animated'))){
      //   var anime1 = anime({
      //       targets: cache.sec3_why[i].querySelector('.slash'),
      //       translateX: ['0%','1000%'],
      //       skewX: [-20,-20],
      //       opacity: [0, 1],
      //       duration: 1500,
      //       easing: 'easeInExpo',
      //       autoplay: false
      //   });
      //   var anime2 = anime({
      //       targets: cache.sec3_why[i].querySelector('.inner'),
      //       translateX: ['0%','15%'],
      //       skewX: [0,-5],
      //       opacity:[1,0],
      //       duration: 1500,
      //       easing: 'easeOutExpo',
      //       autoplay: false
      //   });
      //   var percent = ((scrollPos+window.innerHeight/3) - cache.sec3_why[i].offsetTop)/((cache.sec3.offsetTop + cache.sec3.offsetHeight)-cache.sec3_why[i].offsetTop);
      //   anime1.seek((percent*2) * sec2_anime.duration);
      //   anime2.seek((percent/1.5) * sec2_anime.duration);
      // }
    }

    // Sec4 Img In
    if(((scrollPos+window.innerHeight) > cache.sec4.offsetTop) && (!cache.sec4.classList.contains('animated'))){
      cache.sec4.classList.add('animated');
      sec4_rect_anime.play();
    }

    // Sec4 Img Out
    // if(((scrollPos+window.innerHeight/4) > (cache.sec4_img.offsetTop+cache.sec4_img.offsetHeight/4)) && (scrollPos < (cache.sec4_img.offsetTop + cache.sec4_img.offsetHeight)) && (cache.sec4.classList.contains('animated'))){
    //   var percent = ((scrollPos + window.innerHeight/4)-cache.sec4_img.offsetTop)/cache.sec4_img.offsetHeight;
    //   sec4_rect_anime.seek(sec4_rect_anime.duration-((percent/2) * sec4_rect_anime.duration));
    // }

    // Sec4 team wrap
    if((scrollPos+window.innerHeight > cache.sec4_team_wrap.offsetTop) && (!cache.sec4_team_wrap.classList.contains('animated'))){
      cache.sec4_team_wrap.classList.add('animated');
      sec4_team_wrap_anime.play();
      sec4_h2_anime.play();
    }

    // Sec4 h2 out
    // if((scrollPos+window.innerHeight > (cache.sec4_team_wrap.offsetTop+window.innerHeight/1.2)) && (scrollPos < (cache.sec4_team_wrap.offsetTop+window.innerHeight/4)) && (cache.sec4_team_wrap.classList.contains('animated'))){
    //   var percent = ((scrollPos+window.innerHeight) - (cache.sec4_team_wrap.offsetTop+window.innerHeight/1.2))/(window.innerHeight/4);
    //   sec4_h2_anime.seek(sec4_h2_anime.duration-((percent) * sec4_h2_anime.duration));
    // }

    // Team
// console.log(cache.sec4_team_sec)
    for (var i = 0; i < cache.sec4_team_sec.length; i++) {
  
      var members = cache.sec4_team_sec[i].querySelectorAll('.member');
      if(((scrollPos+window.innerHeight/3) > (cache.sec4_team_wrap.offsetTop+cache.sec4_team_sec[i].offsetTop)) && (!cache.sec4_team_sec[i].classList.contains('animated'))){
        cache.sec4_team_sec[i].classList.add('animated');
      }
      for (var ii = 0; ii < members.length; ii++) {
        if(((scrollPos+window.innerHeight/1.5) > (cache.sec4_team_wrap.offsetTop+cache.sec4_team_sec[i].offsetTop + members[ii].offsetTop)) && (scrollPos < (cache.sec4_team_wrap.offsetTop+cache.sec4_team_sec[i].offsetTop + members[ii].offsetTop + members[ii].offsetHeight)) && (!members[ii].classList.contains('animated'))){
          members[ii].classList.add('animated');
          anime({
            targets: members[ii],
            translateY: ['15%','0%'],
            skewX: [-2,0],
            opacity: [0,1],
            duration: 1000,
            easing: 'easeOutExpo',
          });
        }

        else if(((scrollPos+window.innerHeight/8) > (cache.sec4_team_wrap.offsetTop+cache.sec4_team_sec[i].offsetTop + members[ii].offsetTop + members[ii].offsetHeight/4)) && (scrollPos < (cache.sec4_team_wrap.offsetTop+cache.sec4_team_sec[i].offsetTop + members[ii].offsetTop + members[ii].offsetHeight)) && (members[ii].classList.contains('animated'))){
          var percent = ((scrollPos+window.innerHeight/8) - (cache.sec4_team_wrap.offsetTop+cache.sec4_team_sec[i].offsetTop + members[ii].offsetTop + members[ii].offsetHeight/4))/members[ii].offsetHeight;
          var animeMember = anime({
            targets: members[ii],
            translateY: ['0%','-15%'],
            skewX: [0,-2],
            opacity: [1,0],
            duration: 1000,
            easing: 'linear',
            autoplay: false
          });
          animeMember.seek(percent * animeMember.duration);
        }
      }
    }

  }

  init();
};

var Contact = function() {
  var desktop = window.matchMedia("(min-width: 991px)");
  var cache = {};
  var self = this;

  var init = self.init = function() {
    initCache();
    registerEvents();
    animePage();
    return self;
  };

  var initCache = function() {
    cache.view = document.querySelector(".template-contact");
    cache.form = cache.view.querySelector('form');
    cache.page1 = cache.view.querySelector('.form_page1');
    cache.page2 = cache.view.querySelector('.form_page2');
    cache.next = cache.page1.querySelector('.next');
    cache.prev = cache.page2.querySelector('.prev');
    cache.input = cache.view.querySelectorAll('.form_page1 input, .form_page1 select');
    cache.select = cache.view.querySelector('form select option:first-child');

    // anime
    cache.form_wrap = cache.view.querySelector('.form_wrap');
    cache.bg = cache.view.querySelector('.bg');
    cache.info = cache.view.querySelector('.info');
  };

  var registerEvents = function() {
    if(cache.page1.offsetHeight > cache.form.offsetHeight) {
      cache.form.style.height = cache.page1.offsetHeight+"px";
    }
    // cache.select.disabled = true;
      for (i = 0; i < cache.input.length; ++i) {
        cache.input[i].addEventListener('focusout', validation);
        cache.input[i].addEventListener('change', validation);
      }
    cache.next.addEventListener('click', nextPage);
    cache.prev.addEventListener('click', prevPage);
  };

  var validation = function() {
    var valid = true;
    for (i = 0; i < cache.input.length; ++i) {
      if(!cache.input[i].classList.contains('valid')) {
        valid = false;
      }
    }
    if(valid) {
      cache.next.classList.add('active');
    }
    if(!valid && cache.next.classList.contains('active')) {
      cache.next.classList.remove('active');
    }
  }

  var nextPage = function() {
    anime({
      targets: cache.page1,
      translateX: ['0%','-50%'],
      opacity: [1,0],
      duration: 500,
      easing: 'easeOutQuad',
      complete: function() {
        cache.page1.style.pointerEvents = 'none';
      }
    });
    if(cache.page2.offsetHeight > cache.form.offsetHeight) {
      anime({
        targets: cache.form,
        height: cache.page2.offsetHeight,
        duration: 500,
        delay: 400,
        easing: 'easeOutQuad',
      });
    }
    cache.page2.style.pointerEvents = 'all';
    anime({
      targets: cache.page2,
      translateX: ['50%','0%'],
      opacity: [0,1],
      duration: 500,
      delay: 400,
      easing: 'easeOutQuad',
    });
  }
  var prevPage = function() {
    cache.page1.style.pointerEvents = 'all';
    anime({
      targets: cache.page1,
      translateX: ['-50%','0%'],
      opacity: [0,1],
      duration: 500,
      delay: 400,
      easing: 'easeOutQuad',
    });
    if(cache.page1.offsetHeight > cache.form.offsetHeight) {
      anime({
        targets: cache.form,
        height: cache.page1.offsetHeight,
        duration: 500,
        delay: 400,
        easing: 'easeOutQuad',
      });
    }
    anime({
      targets: cache.page2,
      translateX: ['0%','50%'],
      opacity: [1,0],
      duration: 500,
      easing: 'easeOutQuad',
      complete: function() {
        cache.page2.style.pointerEvents = 'none';
      }
    });
  }



  // Anime

  var animePage = function() {
    anime({
      targets: cache.bg,
      opacity: [0,1],
      translateX: ['-50%','-50%'],
      translateY: ['-50%','-50%'],
      scale: [0.9,1],
      duration: 800,
      easing: 'easeOutQuad',
    });
    anime({
      targets: cache.form_wrap,
      opacity: [0,1],
      translateX: ['10%','0%'],
      scale: [0.96,1],
      duration: 800,
      delay: 200,
      easing: 'easeOutQuad',
    });
    anime({
      targets: cache.info,
      opacity: [0,1],
      translateX: ['10%','0%'],
      scale: [0.96,1],
      duration: 800,
      delay: 700,
      easing: 'easeOutQuad',
    });
  }

  init();
};

var Home = function() {
  var desktop = window.matchMedia("(min-width: 991px)");
  var mobile = window.matchMedia("(max-width: 768px)");
  var cache = {};
  var self = this;

  var tlHome;

  var sec3_h2_anime;
  var sec4_h2_anime;
  var sec5_h2_anime;
  var sec5_round1_anime;
  var sec5_round2_anime;
  var sec5_middle_anime;

  var darkBlueIn = false;

  var init = self.init = function() {
    initCache();
    loader();
    registerEvents();
    animeLoad();
    return self;
  };

  var initCache = function() {
    cache.view = document.querySelector(".template-home");
    cache.tab = cache.view.querySelector('.sec5 .tablet .tab');
    cache.col = cache.view.querySelector('.sec5 .tablet .content');
    cache.tab2_btn = cache.view.querySelector('.sec5 .tablet .tab h4:not(.active)');

    // anime
    cache.loader = document.querySelector('.loader');

    cache.sec1 = cache.view.querySelector('.sec1');
    cache.sec1_h1 = cache.sec1.querySelector('h1');
    cache.sec1_slash1 = cache.sec1.querySelector('.slash_anime');
    cache.sec1_slash2 = cache.sec1.querySelector('.slash_white');
    cache.sec1_bg = cache.sec1.querySelector('.bg');
    cache.sec1_bg_shade = cache.sec1_bg.querySelector('.shade');
    cache.sec1_bg_strike1 = cache.sec1_bg.querySelector('.strike1');
    cache.sec1_bg_strike2 = cache.sec1_bg.querySelector('.strike2');
    cache.sec1_bg_strike3 = cache.sec1_bg.querySelector('.strike3');


    cache.sec3 = cache.view.querySelector('.sec3');
    cache.sec3_h2 = cache.sec3.querySelector('h2');
    cache.sec3_inno = cache.sec3.querySelectorAll('.mosaique .innovation');

    cache.sec4 = cache.view.querySelector('.sec4');
    cache.sec4_h2 = cache.sec4.querySelector('.intro');
    cache.sec4_row = cache.sec4.querySelectorAll('.row');

    cache.sec5 = cache.view.querySelector('.sec5');
    cache.sec5_h2 = cache.sec5.querySelector('.intro');
    cache.sec5_round1 = cache.sec5.querySelector('.round_top');
    cache.sec5_middle = cache.sec5_round1.querySelector('.middle');
    cache.sec5_round2 = cache.sec5.querySelector('.round_bottom');

    cache.bg_blue = cache.view.querySelector('.bg_dark-blue');
    cache.followerLight = cache.view.querySelector('.bg_dark-blue .followerLight');

  };

  var registerEvents = function() {
    cache.tab2_btn.addEventListener("click", changeTab);

    cache.bg_blue.addEventListener('mouseenter', function() {
      if(!darkBlueIn){
        darkBlueIn = true;
        cache.followerLight.style.display = 'block';
        window.addEventListener('mousemove', cursor_light);
      }
    });
    cache.bg_blue.addEventListener('mouseleave', function() {
      if(darkBlueIn){
        darkBlueIn = false;
        cache.followerLight.style.display = 'none';
        window.removeEventListener('mousemove', cursor_light);
      }
    });
  };

  var changeTab = function() {
    this.removeEventListener("click", changeTab);
    var activeTab = cache.tab.querySelector('.active');
    var activeCol = cache.col.querySelector('.active');
    var targetTab = this;
    var targetCol = cache.col.querySelector('.'+this.dataset.tab);
    targetCol.style.display= "block";
    targetTab.classList.add('active');
    activeTab.classList.remove('active');
    activeCol.classList.remove('active');
    activeTab.addEventListener("click", changeTab);
    targetTab.classList.add('active');
    targetCol.classList.add('active');


    anime({
      targets: activeCol,
      translateX: ['0%','-10%'],
      opacity: [1,0],
      duration: 500,
      easing: 'easeOutQuad',
    });
    anime({
      targets: cache.col,
      height: targetCol.offsetHeight,
      duration: 500,
      easing: 'easeOutQuad',
    });
    anime({
      targets: targetCol,
      translateX: ['10%','0%'],
      opacity: [0,1],
      duration: 500,
      easing: 'easeOutQuad'
    });
  }

  var loader = function() {
    if(loaderHome) {
      document.querySelector('html').classList.add('overflow');
      document.querySelector('body').classList.add('overflow');

      var loaderAnime = anime.timeline({
        easing: 'linear',
        duration: 1500,
        delay: 1000,
        complete: function() {
          document.querySelector('html').classList.remove('overflow');
          document.querySelector('body').classList.remove('overflow');
          cache.loader.style.display = "none";
          anime({
            targets: scrollElement,
            scrollTop: 0,
            duration: 100,
            complete: function() {
              window.addEventListener('scroll', animePage);
            }
          });
        }
      });

      if(desktop.matches) {
        loaderAnime.add({
          targets: cache.loader,
          left: 120,
          duration: 500
        });
      }
      else {
        loaderAnime.add({
          targets: cache.loader,
          top: [0,75],
          duration: 500
        });
      }
      loaderAnime.add({
        targets: cache.loader,
        opacity: 0,
        duration: 1000
      });
    }
    else {
      cache.loader.style.display = "none";
      window.addEventListener('scroll', animePage);
    }

      tlHome = anime.timeline({
        easing: 'linear',
        duration: 5000,
        autoplay: false,
      });

      tlHome.add({
        targets: cache.sec1_slash1,
        opacity: 0,
        duration: 1000
      });
      tlHome.add({
        targets: cache.sec1_slash2,
        opacity: 1,
        duration: 1000
      }, '-=1000');
      tlHome.add({
        targets: cache.sec1_bg_shade,
        opacity: 0,
        duration: 1000
      }, '-=1000');

      tlHome.add({
        targets: cache.sec1_h1,
        keyframes: [
        {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}, // start frame
        {clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'},
        ],
        duration: 1000
      }, '-=1000');

      tlHome.add({
        targets: cache.sec1_bg_strike1,
        translateY: ['0%','54%'],
        translateX: ['0%','-45%'],
        duration: 2000
      });
      tlHome.add({
        targets: cache.sec1_bg_strike2,
        translateY: ['0%','-55%'],
        translateX: ['0%','60%'],
        duration: 2000
      });
      tlHome.add({
        targets: cache.sec1_bg_strike3,
        translateY: ['0%','-45%'],
        translateX: ['0%','40%'],
        duration: 2000
      });

      tlHome.add({
        targets: cache.sec1_slash2,
        scale: 40,
        duration: 2500
      }, 1000);

      tlHome.add({
        targets: cache.sec1,
        opacity: 0,
        duration: 500
      }, 1500);

  }

// Anime
  var animeLoad = function() {

    sec3_h2_anime = anime({
      targets: cache.sec3_h2,
      translateY: ['15%','0%'],
      opacity:[0,1],
      skewX: [-5,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec4_h2_anime = anime({
      targets: cache.sec4_h2,
      translateY: ['15%','0%'],
      opacity:[0,1],
      skewX: [-5,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec5_h2_anime = anime({
      targets: cache.sec5_h2,
      translateY: ['15%','0%'],
      opacity:[0,1],
      skewX: [-5,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec5_round1_anime = anime({
      targets: cache.sec5_round1,
      translateX: ['-5%','11.4%'],
      opacity:[0,1],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });
    sec5_round2_anime = anime({
      targets: cache.sec5_round2,
      translateX: ['5%','-11.4%'],
      opacity:[0,1],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });
    sec5_middle_anime = anime({
      targets: cache.sec5_middle,
      opacity:[0,1],
      delay: 700,
      duration: 800,
      easing: 'easeOutExpo',
      autoplay: false
    });

  }

  var cursor_light = function(e) {
    cache.followerLight.style.top = (e.pageY - window.scrollY) - (cache.followerLight.offsetHeight/2) + 'px';
    cache.followerLight.style.left = e.pageX - (cache.followerLight.offsetWidth/2) + 'px';
  }

  animePage = function() {
    scrollPos = window.pageYOffset;

    // Sec1
    if(scrollPos < window.innerHeight){
      var percent = scrollPos/(window.innerHeight*2);
      tlHome.seek(percent * tlHome.duration)
      if(cache.sec1.classList.contains('hide')) {
        cache.sec1.classList.remove('hide');
      }
    }
    if((scrollPos > window.innerHeight) && (!cache.sec1.classList.contains('hide'))){
      cache.sec1.classList.add('hide');
    }

    // Sec3
    if((scrollPos+window.innerHeight/2 > cache.sec3.offsetTop) && (!cache.sec3_h2.classList.contains('animated'))){
      cache.sec3_h2.classList.add('animated');
      sec3_h2_anime.play();
    }
    if((scrollPos+window.innerHeight/4 > cache.sec3.offsetTop+window.innerHeight/2)){
      cache.sec3_h2.classList.add('opacity');
      sec3_h2_anime = anime({
        targets: cache.sec3_h2,
        opacity:0.1,
        duration: 800,
        easing: 'easeOutExpo',
      });
    }
    if((scrollPos+window.innerHeight/4 < cache.sec3.offsetTop+window.innerHeight/2) && (cache.sec3_h2.classList.contains('animated'))){
      sec3_h2_anime = anime({
        targets: cache.sec3_h2,
        opacity:1,
        duration: 800,
        easing: 'easeOutExpo',
      });
    }
    if((scrollPos+window.innerHeight > (cache.sec3.offsetTop+cache.sec3.offsetHeight)) && (cache.sec3_h2.classList.contains('opacity'))){
      cache.sec3_h2.classList.remove('opacity');
      sec3_h2_anime = anime({
        targets: cache.sec3_h2,
        opacity:1,
        duration: 800,
        easing: 'easeOutExpo',
      });
    }

    if(!mobile.matches) {

      for (var i = 1; i < cache.sec3_inno.length; i+=3) {
        if((scrollPos+window.innerHeight > (cache.sec3_inno[i].offsetTop + cache.sec3.offsetTop)) && (scrollPos < (cache.sec3_inno[i].offsetTop +(window.innerHeight*1.5)))){
          var percent = (((scrollPos+window.innerHeight) - (cache.sec3_inno[i].offsetTop + cache.sec3.offsetTop))/window.innerHeight);
          var animeMoz1 = anime({
            targets: cache.sec3_inno[i],
            translateY:['0%','-10%'],
            duration: 1000,
            easing: 'linear',
            autoplay: false
          });
          animeMoz1.seek((percent) * animeMoz1.duration);
        }
      }
      for (var i = 2; i < cache.sec3_inno.length; i+=3) {
        if((scrollPos+window.innerHeight > (cache.sec3_inno[i].offsetTop + cache.sec3.offsetTop)) && (scrollPos < (cache.sec3_inno[i].offsetTop +(window.innerHeight*1.5)))){
          var percent = (((scrollPos+window.innerHeight) - (cache.sec3_inno[i].offsetTop + cache.sec3.offsetTop))/window.innerHeight);
          var animeMoz2 = anime({
            targets: cache.sec3_inno[i],
            translateY:['0%','-60%'],
            duration: 1000,
            easing: 'linear',
            autoplay: false
          });
          animeMoz2.seek((percent) * animeMoz2.duration);
        }
      }
      for (var i = 0; i < cache.sec3_inno.length; i+=3) {
        if((scrollPos+window.innerHeight > (cache.sec3_inno[i].offsetTop + cache.sec3.offsetTop)) && (scrollPos < (cache.sec3_inno[i].offsetTop +(window.innerHeight*1.5)))){
          var percent = (((scrollPos+window.innerHeight) - (cache.sec3_inno[i].offsetTop + cache.sec3.offsetTop))/window.innerHeight);
          var animeMoz3 = anime({
            targets: cache.sec3_inno[i],
            translateY:['0%','-30%'],
            duration: 1000,
            easing: 'linear',
            autoplay: false
          });
          animeMoz3.seek((percent) * animeMoz3.duration);
        }
      }
    }

    // bg_blue
    if((scrollPos+window.innerHeight/2 > cache.bg_blue.offsetTop) && (scrollPos+window.innerHeight< (cache.bg_blue.offsetTop+cache.bg_blue.offsetHeight))){
      if(!cache.bg_blue.classList.contains('animated')) {
        cache.bg_blue.classList.add('animated');
        anime({
          targets: cache.bg_blue,
          backgroundColor: ['#F8FAFB','#080828'],
          duration: 1500,
          easing: 'easeOutExpo',
        });
      }
      anime({
        targets: cache.followerLight,
        opacity: 0.7,
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }
    if((scrollPos+window.innerHeight/4 < cache.bg_blue.offsetTop) && (cache.bg_blue.classList.contains('animated'))){
      // cache.bg_blue.classList.remove('animated');
      // anime({
      //   targets: document.querySelector('body'),
      //   backgroundColor: ['#080828','#F8FAFB'],
      //   duration: 1500,
      //   easing: 'easeOutExpo',
      // });
      anime({
        targets: cache.followerLight,
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }
    if((scrollPos+window.innerHeight/2 > (cache.bg_blue.offsetTop+cache.bg_blue.offsetHeight)) && (cache.bg_blue.classList.contains('animated'))){
      // cache.bg_blue.classList.remove('animated');
      // anime({
      //   targets: document.querySelector('body'),
      //   backgroundColor: ['#080828','#F8FAFB'],
      //   duration: 1500,
      //   easing: 'easeOutExpo',
      // });
      anime({
        targets: cache.followerLight,
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }


    // Sec4
    if((scrollPos+window.innerHeight/2 > (cache.sec4.offsetTop + cache.sec4_h2.offsetTop)) && (!cache.sec4_h2.classList.contains('animated'))){
      cache.sec4_h2.classList.add('animated');
      sec4_h2_anime.play();
    }
    // if((scrollPos > (cache.sec4.offsetTop + cache.sec4_h2.offsetTop)) && (scrollPos < (cache.sec4.offsetTop + cache.sec4_h2.offsetTop + cache.sec4_h2.offsetHeight)) && (cache.sec4_h2.classList.contains('animated'))){
    //   var percent = (scrollPos - (cache.sec4.offsetTop + cache.sec4_h2.offsetTop))/(cache.sec4_h2.offsetTop + cache.sec4_h2.offsetHeight);
    //   sec4_h2_anime.seek(sec4_h2_anime.duration-((percent) * sec4_h2_anime.duration));
    // }

    for (var i = 0; i < cache.sec4_row.length; i++) {
      if((scrollPos+window.innerHeight/4 > (cache.sec4.offsetTop + cache.sec4_row[i].offsetTop)) && (!cache.sec4_row[i].classList.contains('animated'))){
        cache.sec4_row[i].classList.add('animated');
        anime({
          targets: cache.sec4_row[i],
          translateX: ['15%','0%'],
          opacity:[0,1],
          skewX: [-5,0],
          duration: 1500,
          easing: 'easeOutExpo',
        });
      }
    }


    // Sec5
    if((scrollPos+window.innerHeight/2 > cache.sec5.offsetTop) && (!cache.sec5_h2.classList.contains('animated'))){
      cache.sec5_h2.classList.add('animated');
      sec5_h2_anime.play();
    }
    // if((scrollPos+window.innerHeight/4 > (cache.sec5_h2.offsetTop)) && (scrollPos < (cache.sec5_h2.offsetTop + cache.sec5_h2.offsetHeight)) && (cache.sec5_h2.classList.contains('animated'))){
    //   var percent = ((scrollPos+window.innerHeight/4) - (cache.sec5_h2.offsetTop))/(cache.sec5_h2.offsetHeight);
    //   sec5_h2_anime.seek(sec5_h2_anime.duration-((percent) * sec5_h2_anime.duration));
    // }


    if((scrollPos+window.innerHeight/2 > (cache.sec5.offsetTop+cache.sec5_h2.offsetTop)) && (scrollPos < (cache.sec5.offsetTop+cache.sec5_h2.offsetTop + cache.sec5_round1.offsetHeight))){
      var percent = ((scrollPos+window.innerHeight/2) - (cache.sec5.offsetTop+cache.sec5_h2.offsetTop))/cache.sec5_round1.offsetHeight;
      sec5_round1_anime.seek(percent * sec5_round1_anime.duration);
      sec5_round2_anime.seek(percent * sec5_round2_anime.duration);
      sec5_middle_anime.seek(percent * sec5_middle_anime.duration);
    }
  }


  // Utils
   function preventDefault(e) {
       e = e || window.event;
       if (e.preventDefault)
           e.preventDefault();
       e.returnValue = false;
     }
   function preventDefaultForScrollKeys(e) {
         if (keys[e.keyCode]) {
             preventDefault(e);
             return false;
         }
     }

     function disableScroll() {
       if (window.addEventListener) // older FF
           window.addEventListener('DOMMouseScroll', preventDefault, false);
           document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
           window.addEventListener("keydown", arrow_keys_handler, false);
           document.querySelector('html').classList.add('overflow');
           document.querySelector('body').classList.add('overflow');
     }

     function enableScroll() {
         if (window.removeEventListener)
             window.removeEventListener('DOMMouseScroll', preventDefault, false);
         document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
         window.onmousewheel = document.onmousewheel = null;
         window.onwheel = null;
         window.ontouchmove = null;
         document.onkeydown = null;
         window.removeEventListener("keydown", arrow_keys_handler, false);
         document.querySelector('html').classList.remove('overflow');
         document.querySelector('body').classList.remove('overflow');
     }

     var arrow_keys_handler = function(e) {
       switch(e.keyCode){
         case 37: case 39: case 38:  case 40: // Arrow keys
         case 32: e.preventDefault(); break; // Space
         default: break; // do not block other keys
       }
     };

  init();
};

var Investments = function() {
  var desktop = window.matchMedia("(min-width: 991px)");
  var cache = {};
  var self = this;
  var index = 0;
  var sec1_rect_anime;
  var sec1_h1_anime;
  var sec1_left_anime;
  var sec2_content_anime;
  var sec2_slider_anime;
  var sec4_content_anime;
  var sec4_col1_anime;
  var sec4_col2_anime;
  var sec5_txt_anime;
  var sec5_img1_anime;
  var sec5_img2_anime;
  var sec5_img3_anime;

  var darkBlueIn = false;

  var timerVar;
  var counter = 0;
  var pressHoldDuration = 100;
  var pressHoldEvent = new CustomEvent("pressHold");
  var sec6_next;
  var sec6Hover = false;


  var init = self.init = function() {
    initCache();
    animeLoad();
    registerEvents();
    return self;
  };

  var initCache = function() {
    cache.view = document.querySelector(".template-investments");
    cache.slideLeft_btn = cache.view.querySelector('.slider_nav .arrow_left');
    cache.slideRight_btn = cache.view.querySelector('.slider_nav .arrow_right');
    cache.slider = cache.view.querySelector('.sec2 .right');
    cache.slides = cache.slider.querySelectorAll('.slider .slide');

    cache.sec6 = cache.view.querySelector('.sec6');
    cache.nextPost_container = cache.sec6.querySelector('.container_next');
    cache.nextPost = cache.sec6.querySelector('.next');
    cache.followerNxt = cache.sec6.querySelector('.followerNxt');
    sec6_next = anime({
      targets: cache.nextPost,
      backgroundPositionY: ['0%','100%'],
      duration: 100,
      easing: 'linear',
      complete: function() {
        cache.nextPost.style.pointerEvents = "all";
        cache.nextPost.click();
      },
      autoplay: false,
    });


    // anime
    cache.sec1 = cache.view.querySelector('.sec1');
    cache.sec1_rect = cache.sec1.querySelector('.rect');
    cache.sec1_h1 = cache.sec1.querySelector('h1');
    cache.sec1_left = cache.sec1.querySelector('.container_invest.img_wrap .left');

    cache.sec2 = cache.view.querySelector('.sec2');
    cache.sec2_left = cache.sec2.querySelector('.content');
    cache.sec2_slider = cache.sec2.querySelector('.slider');

    cache.sec3 = cache.view.querySelector('.sec3');
    cache.numbers = cache.sec3.querySelectorAll('.number');

    cache.bg_blue = cache.view.querySelector('.bg_dark-blue');
    cache.followerLight = cache.view.querySelector('.bg_dark-blue .followerLight');

    cache.sec4 = cache.view.querySelector('.sec4');
    cache.sec4_content = cache.sec4.querySelector('.content');
    cache.sec4_col1 = cache.sec4.querySelector('.column1');
    cache.sec4_col2 = cache.sec4.querySelector('.column2');

    cache.sec5 = cache.view.querySelector('.sec5');
    cache.sec5_txt = cache.sec5.querySelector('.txt');
    cache.sec5_img1 = cache.sec5.querySelector('.img1');
    cache.sec5_img2 = cache.sec5.querySelector('.img2');
    cache.sec5_img3 = cache.sec5.querySelector('.img3');

  };

  var registerEvents = function() {
    cache.slideLeft_btn.addEventListener("click", slideLeft);
    cache.slideRight_btn.addEventListener("click", slideRight);
    cache.slides[1].addEventListener("click", slideRight);

    var hammertime = new Hammer(cache.slider);

    hammertime.on('swipe', function(ev) {
      if(ev.direction == 2) {
        slideRight();
      }

      if(ev.direction == 4) {
        slideLeft();
      }

    });

    cache.bg_blue.addEventListener('mouseenter', function() {
      if(!darkBlueIn){
        darkBlueIn = true;
        cache.followerLight.style.display = 'block';
        window.addEventListener('mousemove', cursor_light);
      }
    });
    cache.bg_blue.addEventListener('mouseleave', function() {
      if(darkBlueIn){
        darkBlueIn = false;
        cache.followerLight.style.display = 'none';
        window.removeEventListener('mousemove', cursor_light);
      }
    });

    window.addEventListener('scroll', animePage);

    if(desktop.matches) {
      cache.sec6.addEventListener("mousedown", holdLink);
      cache.sec6.addEventListener("mouseup", releaseLink);
      cache.sec6.addEventListener("mouseleave", releaseLink);

      cache.sec6.addEventListener('mouseenter', function() {
        if(!sec6Hover){
          sec6Hover = true;
          cache.followerNxt.style.display = 'block';
          window.addEventListener('mousemove', cursor_nxt);
        }
      });
      cache.sec6.addEventListener('mouseleave', function() {
        if(sec6Hover){
          sec6Hover = false;
          cache.followerNxt.style.display = 'none';
          window.removeEventListener('mousemove', cursor_nxt);
        }
      });
    }

  }

  var slideRight = function() {
    var indexOut = index;
    if(index < cache.slides.length-2) {
      index++;
      var indexActive = index;
      var indexNext = index+1;
    }
    else if(index < cache.slides.length-1) {
      index++;
      var indexActive = index;
      var indexNext = 0;
    }
    else if(index < cache.slides.length) {
      index = 0;
      var indexActive = index;
      var indexNext = 1;
    }
    cache.slides[indexActive].removeEventListener("click", slideRight);
    cache.slides[indexNext].addEventListener("click", slideRight);
    anime({
      targets: cache.slides[indexOut],
      translateX: ['0%','-110%'],
      opacity: [1,0],
      duration: 500,
      easing: 'easeOutQuad',
    });
    anime({
      targets: cache.slides[indexActive],
      translateX: ['110%', '0%'],
      duration: 500,
      easing: 'easeOutQuad',
    });
    anime({
      targets: cache.slides[indexNext],
      translateX: ['210%','110%'],
      opacity: [0,1],
      duration: 500,
      easing: 'easeOutQuad',
    });
  }

  var slideLeft = function() {
    var indexOut = index;
    if(index == cache.slides.length-1) {
      index--;
      var indexActive = index;
      var indexNext = 0;
    }
    else if(index == 0) {
      index = cache.slides.length-1;
      var indexActive = index;
      var indexNext = 1;
    }
    else {
      index--;
      var indexActive = index;
      var indexNext = index+2;
    }
    cache.slides[indexNext].removeEventListener("click", slideRight);
    cache.slides[indexOut].addEventListener("click", slideRight);
    anime({
      targets: cache.slides[indexOut],
      translateX: ['0%','110%'],
      duration: 500,
      easing: 'easeOutQuad',
    });
    anime({
      targets: cache.slides[indexActive],
      translateX: ['-110%', '0%'],
      opacity: [0,1],
      duration: 500,
      easing: 'easeOutQuad',
    });
    anime({
      targets: cache.slides[indexNext],
      translateX: ['110%','220%'],
      opacity: [1,0],
      duration: 500,
      easing: 'easeOutQuad',
    });
  }

  function holdLink(e) {
      // Start the timer
      cancelAnimationFrame(timerVar);
      requestAnimationFrame(timerUp);
      e.preventDefault();
    }

  function releaseLink(e) {
      // Stop the timer
      cancelAnimationFrame(timerVar);
      requestAnimationFrame(timerDown);
  }

  function timerUp() {
    if (counter < pressHoldDuration) {
      timerVar = requestAnimationFrame(timerUp);
      counter++;
      counter++;
      sec6_next.seek(counter);
    } else {
      cache.sec6.dispatchEvent(pressHoldEvent);
    }
  }
  function timerDown() {
    if (counter >= 0) {
      timerVar = requestAnimationFrame(timerDown);
      counter--;
      counter--;
      sec6_next.seek(counter);
    } else {
      cache.sec6.dispatchEvent(pressHoldEvent);
    }
  }

  var cursor_light= function(e) {
    cache.followerLight.style.top = (e.pageY - window.scrollY) - (cache.followerLight.offsetHeight/2) + 'px';
    cache.followerLight.style.left = e.pageX - (cache.followerLight.offsetWidth/2) + 'px';
  }

  var cursor_nxt= function(e) {
    cache.followerNxt.style.top = (e.pageY - window.scrollY) - (cache.followerNxt.offsetHeight/2) + 'px';
    cache.followerNxt.style.left = e.pageX - (cache.followerNxt.offsetWidth/2) + 'px';
  }




  var animeLoad = function() {

    sec1_h1_anime = anime({
      targets: cache.sec1_h1,
      backgroundPositionY: ['0%','100%'],
      backgroundPositionX: ['0%','100%'],
      duration: 2500,
      delay: 200,
      easing: 'easeInOutExpo'
    });

    sec1_rect_anime = anime({
      targets: cache.sec1_rect,
      translateX: ['0%','-120%'],
      skewX: [-20,-20],
      duration: 2500,
      delay: 200,
      easing: 'easeInOutExpo'
    });

    sec1_left_anime = anime({
      targets: cache.sec1_left,
      opacity: [0,1],
      duration: 1500,
      delay: 1000,
      easing: 'easeInOutExpo'
    });

    sec2_content_anime = anime({
      targets: cache.sec2_left,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-3,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec2_slider_anime = anime({
      targets: cache.sec2_slider,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-3,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec4_content_anime = anime({
      targets: cache.sec4_content,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-3,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec4_col1_anime = anime({
      targets: cache.sec4_col1,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-3,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec4_col2_anime = anime({
      targets: cache.sec4_col2,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-3,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec5_txt_anime = anime({
      targets: cache.sec5_txt,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-3,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });
    sec5_img1_anime = anime({
      targets: cache.sec5_img1,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-3,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });
    sec5_img2_anime = anime({
      targets: cache.sec5_img2,
      opacity:[0,1],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });
    sec5_img3_anime = anime({
      targets: cache.sec5_img3,
      opacity:[0,1],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });
  }

  animePage = function() {
    scrollPos = window.pageYOffset;

    // Sec1 out
    // if(((scrollPos-window.innerHeight/2.5) > cache.sec1_rect.offsetTop) && (scrollPos < (cache.sec1.offsetTop + cache.sec1.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/2.5)  - cache.sec1_rect.offsetTop)/((cache.sec1.offsetTop + cache.sec1.offsetHeight)-cache.sec1_h1.offsetTop);
    //   sec1_rect_anime.seek(sec1_rect_anime.duration-(percent * sec1_rect_anime.duration));
    // }

    // Sec2 in
    if((scrollPos+window.innerHeight/4 > cache.sec2.offsetTop) && (!cache.sec2.classList.contains('animated'))){
      cache.sec2.classList.add('animated');
      sec2_content_anime.play();
      setTimeout(function(){sec2_slider_anime.play()}, 200);
    }

    // Sec2 out
    // if(((scrollPos-window.innerHeight/4) > cache.sec2.offsetTop) && (scrollPos < (cache.sec2.offsetTop + cache.sec2.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/4) - cache.sec2.offsetTop)/((cache.sec2.offsetTop + cache.sec2.offsetHeight));
    //   sec2_content_anime.seek(sec2_content_anime.duration-((percent*4) * sec2_content_anime.duration));
    //   sec2_slider_anime.seek(sec2_slider_anime.duration-((percent*4) * sec2_slider_anime.duration));
    // }

    // Sec 3
    for (var i = 0; i < cache.numbers.length; i++) {
      cache.numbers[i]
      if((scrollPos+window.innerHeight/2 > (cache.numbers[i].offsetTop + cache.sec3.offsetTop)) && (!cache.numbers[i].classList.contains('animated'))){
        cache.numbers[i].classList.add('animated');
        anime({
          targets: cache.numbers[i],
          translateX: ['15%','0%'],
          opacity:[0,1],
          skewX: [-3,0],
          duration: 1500,
          easing: 'easeOutExpo',
        });
        anime({
          targets: cache.numbers[i].querySelector('.stat'),
          backgroundPositionY: ['0%','100%'],
          duration: 1300,
          easing: 'linear',
        });
      }
      // else if((scrollPos > (cache.numbers[i].offsetTop + cache.sec3.offsetTop )) && (scrollPos < (cache.numbers[i].offsetTop + cache.sec3.offsetTop + cache.numbers[i].offsetHeight)) && (cache.numbers[i].classList.contains('animated'))){
      //   var percent = (scrollPos - (cache.numbers[i].offsetTop + cache.sec3.offsetTop ))/cache.numbers[i].offsetHeight;
      //   var anime1 = anime({
      //     targets: cache.numbers[i],
      //     translateX: ['0%','15%'],
      //     opacity:[1,0],
      //     skewX: [0,-5],
      //     duration: 1500,
      //     easing: 'easeOutExpo',
      //     autoplay: false
      //   });
      //   anime1.seek((percent*1.5) * anime1.duration);
      // }
    }

    // bg_blue
    if((scrollPos+window.innerHeight/1.5 > cache.bg_blue.offsetTop) && (scrollPos+window.innerHeight< (cache.bg_blue.offsetTop+cache.bg_blue.offsetHeight))){
      if(!cache.bg_blue.classList.contains('animated')) {
        cache.bg_blue.classList.add('animated');
        anime({
          targets: cache.bg_blue,
          backgroundColor: ['#F8FAFB','#080828'],
          duration: 1500,
          easing: 'easeOutExpo',
        });
      }
      anime({
        targets: cache.followerLight,
        opacity: 0.7,
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }
    if((scrollPos+window.innerHeight/4 < cache.bg_blue.offsetTop) && (cache.bg_blue.classList.contains('animated'))){
      // cache.bg_blue.classList.add('animated');
      // anime({
      //   targets: cache.bg_blue,
      //   backgroundColor: ['#080828','#F8FAFB'],
      //   duration: 1500,
      //   easing: 'easeOutExpo',
      // });
      anime({
        targets: cache.followerLight,
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }
    if((scrollPos+window.innerHeight > (cache.bg_blue.offsetTop+cache.bg_blue.offsetHeight)) && (cache.bg_blue.classList.contains('animated'))){
      // cache.bg_blue.classList.remove('animated');
      // anime({
      //   targets: cache.bg_blue,
      //   backgroundColor: ['#080828','#F8FAFB'],
      //   duration: 1500,
      //   easing: 'easeOutExpo',
      // });
      anime({
        targets: cache.followerLight,
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }

    // Sec4 in
    if((scrollPos+window.innerHeight/8 > (cache.sec4_content.offsetTop+cache.sec4.offsetTop)) && (!cache.sec4_content.classList.contains('animated'))){
      cache.sec4_content.classList.add('animated');
      sec4_content_anime.play();
    }
    if((scrollPos+window.innerHeight/8 > (cache.sec4_col1.offsetTop+cache.sec4.offsetTop)) && (!cache.sec4_col1.classList.contains('animated'))){
      cache.sec4_col1.classList.add('animated');
      sec4_col1_anime.play();
    }
    if((scrollPos+window.innerHeight/8 > (cache.sec4_col2.offsetTop+cache.sec4.offsetTop)) && (!cache.sec4_col2.classList.contains('animated'))){
      cache.sec4_col2.classList.add('animated');
      sec4_col2_anime.play();
    }

    // Sec4 out
    // if(((scrollPos-window.innerHeight/4) > cache.sec4_content.offsetTop+cache.sec4.offsetTop) && (scrollPos < ( cache.sec4_content.offsetTop + cache.sec4.offsetTop + cache.sec4_content.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/4) - (cache.sec4_content.offsetTop+cache.sec4.offsetTop))/cache.sec4_content.offsetHeight;
    //   sec4_content_anime.seek(sec4_content_anime.duration-((percent*1.5) * sec4_content_anime.duration));
    // }
    // if(((scrollPos-window.innerHeight/2) > cache.sec4_col1.offsetTop+cache.sec4.offsetTop) && (scrollPos < (cache.sec4.offsetTop + cache.sec4.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight) - (cache.sec4_col1.offsetTop+cache.sec4.offsetTop))/cache.sec4_col1.offsetHeight;
    //   sec4_col1_anime.seek(sec4_col1_anime.duration-((percent*2) * sec4_col1_anime.duration));
    // }
    // if(((scrollPos-window.innerHeight/2) > cache.sec4_col2.offsetTop+cache.sec4.offsetTop) && (scrollPos < (cache.sec4.offsetTop + cache.sec4.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight) - (cache.sec4_col2.offsetTop+cache.sec4.offsetTop))/cache.sec4_col2.offsetHeight;
    //   sec4_col2_anime.seek(sec4_col2_anime.duration-((percent*2) * sec4_col2_anime.duration));
    // }

    // Sec5 in
    if((scrollPos+window.innerHeight/2 > (cache.sec5_txt.offsetTop+cache.sec5.offsetTop)) && (!cache.sec5_txt.classList.contains('animated'))){
      cache.sec5_txt.classList.add('animated');
      sec5_txt_anime.play();
    }
    if((scrollPos+window.innerHeight/2 > (cache.sec5_img1.offsetTop+cache.sec5.offsetTop)) && (!cache.sec5_img1.classList.contains('animated'))){
      cache.sec5_img1.classList.add('animated');
      sec5_img1_anime.play();
    }
    if((scrollPos+window.innerHeight/2 > (cache.sec5_img2.offsetTop+cache.sec5.offsetTop)) && (!cache.sec5_img2.classList.contains('animated'))){
      cache.sec5_img2.classList.add('animated');
      sec5_img2_anime.play();
    }
    if((scrollPos+window.innerHeight/2 > (cache.sec5_img3.offsetTop+cache.sec5.offsetTop)) && (!cache.sec5_img3.classList.contains('animated'))){
      cache.sec5_img3.classList.add('animated');
      sec5_img3_anime.play();
    }

    // Sec5 out
    // if(((scrollPos-window.innerHeight/8) > cache.sec5_txt.offsetTop+cache.sec5.offsetTop) && (scrollPos < ( cache.sec5_txt.offsetTop + cache.sec5.offsetTop + cache.sec5_txt.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/8) - (cache.sec5_txt.offsetTop+cache.sec5.offsetTop))/cache.sec5_txt.offsetHeight;
    //   sec5_txt_anime.seek(sec5_txt_anime.duration-((percent*2) * sec5_txt_anime.duration));
    // }
    // if(((scrollPos-window.innerHeight/8) > cache.sec5_img1.offsetTop+cache.sec5.offsetTop) && (scrollPos < ( cache.sec5_img1.offsetTop + cache.sec5.offsetTop + cache.sec5_img1.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/8) - (cache.sec5_img1.offsetTop+cache.sec5.offsetTop))/cache.sec5_img1.offsetHeight;
    //   sec5_img1_anime.seek(sec5_img1_anime.duration-((percent*2) * sec5_img1_anime.duration));
    // }
    // if(((scrollPos-window.innerHeight/8) > cache.sec5_img2.offsetTop+cache.sec5.offsetTop) && (scrollPos < ( cache.sec5_img2.offsetTop + cache.sec5.offsetTop + cache.sec5_img2.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/8) - (cache.sec5_img2.offsetTop+cache.sec5.offsetTop))/cache.sec5_img2.offsetHeight;
    //   sec5_img2_anime.seek(sec5_img2_anime.duration-((percent*2) * sec5_img2_anime.duration));
    // }
    // if(((scrollPos-window.innerHeight/8) > cache.sec5_img3.offsetTop+cache.sec5.offsetTop) && (scrollPos < ( cache.sec5_img3.offsetTop + cache.sec5.offsetTop + cache.sec5_img3.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/8) - (cache.sec5_img3.offsetTop+cache.sec5.offsetTop))/cache.sec5_img3.offsetHeight;
    //   sec5_img3_anime.seek(sec5_img3_anime.duration-((percent*2) * sec5_img3_anime.duration));
    // }

    // if((scrollPos+window.innerHeight/2 > (cache.sec5_img1.offsetTop+cache.sec5.offsetTop)) && (!cache.sec5_img1.classList.contains('animated'))){
    //   cache.sec5_img1.classList.add('animated');
    //   sec5_img1_anime.play();
    // }
    // if((scrollPos+window.innerHeight/2 > (cache.sec5_img2.offsetTop+cache.sec5.offsetTop)) && (!cache.sec5_img2.classList.contains('animated'))){
    //   cache.sec5_img2.classList.add('animated');
    //   sec5_img2_anime.play();
    // }
    // if((scrollPos+window.innerHeight/2 > (cache.sec5_img3.offsetTop+cache.sec5.offsetTop)) && (!cache.sec5_img3.classList.contains('animated'))){
    //   cache.sec5_img3.classList.add('animated');
    //   sec5_img3_anime.play();
    // }

  }

  init();
};

// var LordOfTheScroll = function() {
//   var self = this;
//   // var checkScrolling;
//   // var prevDeltaY = 0;
//   // var animeContent;
//   const body = document.body,
//     scrollWrap = document.querySelector(".scrollContainer"),
//     height = scrollWrap.getBoundingClientRect().height - 1,
//     speed = 0.04;
//   var offset = 0;
//
//
//   var init = self.init = function() {
//     registerEvents();
//     return self;
//   };
//
//   var registerEvents = function() {
//     // body.style.height = Math.floor(height) + "px";
//     // document.addEventListener('wheel', inertieScroll);
//   };
//
//   function smoothScroll() {
//     offset += (window.pageYOffset - offset) * speed;
//     var scroll = "translateY(-" + offset + "px) translateZ(0)";
//     scrollWrap.style.transform = scroll;
//     // window.scrollTo(0,offset);
//
//     callScroll = requestAnimationFrame(smoothScroll);
//   }
//
//   smoothScroll();
//
//
//
//
//   // var inertieScroll = function(e) {
//   //   //
//   //   console.log(e.deltaY)
//   //   console.log(prevDeltaY)
//   //   // animeContent.seek((e.deltaY/100)*animeContent.duration);
//   //   if(!cache.body.classList.contains('isScrolling')) {
//   //     cache.body.classList.add('isScrolling')
//   //
//   //   }
//   //   if(prevDeltaY > e.deltaY) {
//   //   console.log('wrg')
//   //     // anime({
//   //     //   targets: cache.body,
//   //     //   paddingTop: 0,
//   //     //   duration: 500,
//   //     //   easing: 'easeInQuad',
//   //     // });
//   //   }
//   //
//   //   prevDeltaY = e.deltaY;
//   //
//   //   window.clearTimeout( checkScrolling );
//   //   checkScrolling = setTimeout(function() {
//   //   	cache.body.classList.remove('isScrolling');
//   //   }, 50);
//   //
//   // }
//
//   init();
// };

var Nav = function() {
  var desktop = window.matchMedia("(min-width: 1281px)");
  var cache = {};
  var getUrl = window.location;
  var getUrlHref = getUrl.href;
  var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[0];
  var liens = [];
  var self = this;

  var init = self.init = function() {
    initCache();
    registerEvents();
    // loader();
    return self;
  };

  var initCache = function() {
    cache.nav = document.querySelector('header');
    cache.navBurger = cache.nav.querySelector('.nav_bar .burger');
    cache.navBurgerMobile = cache.nav.querySelector('.nav_bar_mobile .burger');
    cache.navPage = cache.nav.querySelector('nav');
    cache.navMobile_top = cache.navPage.querySelector('.top_mobile');
    cache.navMobile_btnMain = cache.navPage.querySelector('.top_mobile .main_nav_btn');
    cache.navMobile_btnSec = cache.navPage.querySelector('.top_mobile .sec_nav_btn');
    cache.navPageMain = cache.navPage.querySelector('.main_nav');
    cache.navPageSec = cache.navPage.querySelector('.sec_nav');
    cache.scrollTop = document.querySelector('footer .scrollTop');

    cache.transition = document.querySelector('.transition');
    cache.slash = cache.transition.querySelectorAll('.slash');
    cache.slashLoader = cache.transition.querySelector('.slash_loader');

    if(document.querySelector('a.scroll')) {
      cache.scrollTo = document.querySelectorAll('a.scroll');
    }

    if (baseUrl != null && baseUrl.length > 0 && baseUrl.charAt(baseUrl.length - 1) == '/') {
      baseUrl = baseUrl.substring(0, baseUrl.length - 1);
    }
  };

  var registerEvents = function() {

    cache.navBurger.addEventListener("click", openNav);
    cache.navBurgerMobile.addEventListener("click", openNavMobile);
    cache.navMobile_btnSec.addEventListener("click", openSecMobile);
    cache.scrollTop.addEventListener("click", scrollTop);

    if(document.querySelector('a.scroll')) {
      for (i = 0; i < cache.scrollTo.length; ++i) {
        cache.scrollTo[i].addEventListener("click", scrollTo);
      }
    }

    anime({
      targets: scrollElement,
      scrollTop: 0,
      duration: 10,
    });

    var link = document.querySelectorAll('a[href*="'+baseUrl+'"]');
    for (var i = 0; i < link.length; i++) {
      if(!link[i].classList.contains('no_ajax')) {
        link[i].addEventListener("click", ajaxNav);
      }
    }
    window.addEventListener('popstate',back);
  };

  var back = function(e) {
    loaderHome = false;
    disableScroll();
    event.preventDefault();
    var href = this.href;
    if(cache.nav.classList.contains('open')) {
      closeNav();
    }

    cache.transition.style.display="block";
    setTimeout(function(){ ajaxFunc(window.location, false); }, 1200);
    anime({
      targets: cache.transition,
      duration: 500,
      opacity: [0,1],
      easing: 'easeInCubic',
    });

    for (var i = 0; i < cache.slash.length; i++) {
      var slash = cache.slash[i].querySelector('.inner');
      if(i % 2 == 0){
        anime({
          targets: cache.slash[i],
          duration: 1000,
          translateY: ['-120%','0%'],
          translateX: ['120%','0%'],
          skewX:[-20,-20],
          easing: 'easeInCubic',
        });
      }
      else {
        anime({
          targets: cache.slash[i],
          duration: 1000,
          translateY: ['100%','0%'],
          translateX: ['-100%','0%'],
          skewX:[-20,-20],
          easing: 'easeInCubic',
        });
      }
      slash.classList.add('move')
      anime({
        targets: slash,
        duration: 1200,
        height: [400,40],
        easing: 'easeInCubic',
      });
    }
  }

  var ajaxNav = function() {
    loaderHome = false;
    disableScroll();
    event.preventDefault();
    var href = this.href;
    if(cache.nav.classList.contains('open')) {
      closeNav();
    }
    if(this.classList.contains('color_blue')) {
      cache.transition.classList.add('color_blue');
    }
    if(this.classList.contains('color_green')) {
      cache.transition.classList.add('color_green');
    }
    if(this.classList.contains('color_yellow')) {
      cache.transition.classList.add('color_yellow');
    }
    if(this.classList.contains('color_pink')) {
      cache.transition.classList.add('color_pink');
    }
    cache.transition.style.display="block";
    setTimeout(function(){ ajaxFunc(href); }, 1200);
    anime({
      targets: cache.transition,
      duration: 500,
      opacity: [0,1],
      easing: 'easeInCubic',
    });
    history.pushState(null, null, href);

    for (var i = 0; i < cache.slash.length; i++) {
      var slash = cache.slash[i].querySelector('.inner');
      if(i % 2 == 0){
        anime({
          targets: cache.slash[i],
          duration: 1000,
          translateY: ['-120%','0%'],
          translateX: ['120%','0%'],
          skewX:[-20,-20],
          easing: 'easeInCubic',
        });
      }
      else {
        anime({
          targets: cache.slash[i],
          duration: 1000,
          translateY: ['100%','0%'],
          translateX: ['-100%','0%'],
          skewX:[-20,-20],
          easing: 'easeInCubic',
        });
      }
      slash.classList.add('move')
      anime({
        targets: slash,
        duration: 1200,
        height: [400,40],
        easing: 'easeInCubic',
      });
    }
    if(document.querySelector(".template-strategy")) {
      scrollElement.removeEventListener("wheel", scrollSteps);
    }
  }

  var openNav = function() {
    cache.navBurger.removeEventListener("click", openNav);
    cache.navBurger.addEventListener("click", closeNav);
    cache.navPage.style.display="block";
    disableScroll();
    document.querySelector('body').classList.add('overflow');
    document.querySelector('html').classList.add('overflow');
    cache.nav.classList.add('open');
    anime({
      targets: cache.navPageMain,
      translateX: ['-100%','0%'],
      opacity: [0,1],
      skewX:[-20, 0],
      duration: 500,
      delay: 200,
      easing: 'easeOutQuad'
    });
    anime({
      targets: cache.navPageSec,
      translateX: ['50%','0%'],
      opacity: [0,1],
      duration: 500,
      delay: 500,
      easing: 'easeOutQuad'
    });
  }

  var closeNav = function() {
    cache.navBurger.removeEventListener("click", closeNav);
    cache.navBurger.addEventListener("click", openNav);
    cache.nav.classList.remove('open');
    anime({
      targets: cache.navPageMain,
      translateX: ['0%','-100%'],
      opacity: [1,0],
      duration: 400,
      easing: 'easeOutQuad'
    });
    anime({
      targets: cache.navPageSec,
      translateX: ['0%','50%'],
      opacity: [1,0],
      duration: 400,
      delay: 200,
      easing: 'easeOutQuad',
      complete:function() {
        cache.navPage.style.display="none";
        enableScroll();
        document.querySelector('body').classList.remove('overflow');
        document.querySelector('html').classList.remove('overflow');
      }
    });
  }


  var openNavMobile = function() {
    cache.navBurgerMobile.removeEventListener("click", openNavMobile);
    cache.navBurgerMobile.addEventListener("click", closeNavMobile);
    cache.navPage.style.display="block";
    document.querySelector('body').classList.add('overflow');
    document.querySelector('html').classList.add('overflow');
    cache.nav.classList.add('open');
    anime({
      targets: cache.navPage,
      translateX: ['-100%','0%'],
      opacity: [0,1],
      skewX:[-20, 0],
      duration: 500,
      easing: 'easeOutQuad'
    });
  }
  var closeNavMobile = function() {
    cache.navBurgerMobile.addEventListener("click", openNavMobile);
    cache.navBurgerMobile.removeEventListener("click", closeNavMobile);
    cache.nav.classList.remove('open');
    anime({
      targets: cache.navPage,
      translateX: ['0%','-100%'],
      opacity: [1,0],
      skewX:[0, -20],
      duration: 500,
      easing: 'easeOutQuad',
      complete:function() {
        cache.navPage.style.display="none";
        document.querySelector('body').classList.remove('overflow');
        document.querySelector('html').classList.remove('overflow');
        if(cache.navMobile_btnSec.classList.contains('active')) {
          closeSecMobile();
        }
      }
    });
  }

  var openSecMobile = function() {
    cache.navMobile_btnSec.removeEventListener("click", openSecMobile);
    cache.navMobile_btnMain.addEventListener("click", closeSecMobile);
    cache.navMobile_top.classList.add('sec');
    cache.navMobile_btnMain.classList.remove('active');
    cache.navMobile_btnSec.classList.add('active');
    cache.navPageSec.style.display="block";
    anime({
      targets: cache.navPageSec,
      translateX: ['-100%','0%'],
      opacity: [0,1],
      skewX:[-20, 0],
      duration: 500,
      easing: 'easeOutQuad'
    });
  }
  var closeSecMobile = function() {
    cache.navMobile_btnSec.addEventListener("click", openSecMobile);
    cache.navMobile_btnMain.removeEventListener("click", closeSecMobile);
    cache.navMobile_btnMain.classList.add('active');
    cache.navMobile_btnSec.classList.remove('active');
    cache.navMobile_top.classList.remove('sec');
    anime({
      targets: cache.navPageSec,
      translateX: ['0%','-100%'],
      opacity: [1,0],
      skewX:[0, -20],
      duration: 500,
      easing: 'easeOutQuad',
      complete: function() {
        cache.navPageSec.style.display="none";
      }
    });
  }

  var scrollTop = function() {
    anime({
      targets: scrollElement,
      scrollTop: 0,
      duration: 800,
      easing: 'easeOutQuad',
    });
  }
  var scrollTo = function(e) {
    document.querySelector('body').classList.add('scroll');
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if(!desktop.matches) {
      closeNav();
    }
    anime({
      targets: scrollElement,
      scrollTop: (scrollElement.scrollTop+target.getBoundingClientRect().top),
      duration: 800,
      easing: 'easeOutQuad',
      complete: function () {
        document.querySelector('body').classList.remove('scroll');
      }
    });
  }


  var ajaxFunc = function(link) {
      jQuery.ajax({
        url: link,
        processData: true,
        dataType:'html',
        success: function(data){
        // callback
          var title = $(data).filter('title').text();
          document.title = title;
          var contenu = $(jQuery.parseHTML(data)).filter("div#contenu");
          var head = $(jQuery.parseHTML(data)).find("head");
          var footer = $(jQuery.parseHTML(data)).filter("footer");
          var header = $(jQuery.parseHTML(data)).filter("#nav_header");
          var parser = new DOMParser();
          doc = parser.parseFromString(data, "text/html");
          var docClass = doc.body.getAttribute('class');
          parser = doc = null;
          $('#contenu').fadeOut('200',function(){
            window.removeEventListener('scroll', animePage);
            $('body').removeClass();
            $('body').addClass(docClass);
            $('head').html(head.html());
            $('footer').html(footer.html());
            $('#nav_header').html(header.html());
            anime.set(cache.nav, {translateY:0});

            anime.set(cache.nav, {translateY:0});

            $(this).html($(contenu).html()).fadeIn('200');
            window.scrollTo(0, 0);
            window.removeEventListener('popstate',back);
            CurrentObject = window["App"];
            var app = new CurrentObject();

            if(document.querySelector('.wpcf7')){
              var footerTag = document.getElementsByTagName('footer')[0];
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = baseUrl + '/wp-content/plugins/jquery-validation-for-contact-form-7/includes/assets/js/jvcf7_validation.js?ver=5.1';
              footerTag.appendChild(script);
              var script2 = document.createElement('script');
              script2.type = 'text/javascript';
              script2.src = baseUrl + '/wp-content/plugins/contact-form-7/includes/js/index.js';
              footerTag.appendChild(script2);
            }

              for (var i = 0; i < cache.slash.length; i++) {
                var slash = cache.slash[i].querySelector('.inner');
                if(i % 2 == 0){
                  anime({
                    targets: cache.slash[i],
                    duration: 1000,
                    delay: 500,
                    translateY: ['0%','120%'],
                    translateX: ['0%','-120%'],
                    skewX:[-20,-20],
                    easing: 'easeInCubic',
                  });
                }
                else {
                  anime({
                    targets: cache.slash[i],
                    duration: 1000,
                    delay: 500,
                    translateY: ['0%','-100%'],
                    translateX: ['0%','100%'],
                    skewX:[-20,-20],
                    easing: 'easeInCubic',
                  });
                }

                anime({
                  targets: slash,
                  duration: 1500,
                  height: [40,400],
                  easing: 'easeInCubic',
                  complete: function() {
                    slash.classList.remove('.move')
                  }
                });
              }

              anime({
                targets: cache.transition,
                duration: 500,
                delay: 1500,
                opacity: [1,0],
                easing: 'easeInCubic',
                complete: function() {
                  enableScroll();
                  cache.transition.style.display = 'none';
                  if(cache.transition.classList.contains('color_blue')) {
                    cache.transition.classList.remove('color_blue');
                  }
                  if(cache.transition.classList.contains('color_green')) {
                    cache.transition.classList.remove('color_green');
                  }
                  if(cache.transition.classList.contains('color_yellow')) {
                    cache.transition.classList.remove('color_yellow');
                  }
                  if(cache.transition.classList.contains('color_pink')) {
                    cache.transition.classList.remove('color_pink');
                  }

                }
              });
          });
        }
      });
    }





  // Utils
   function preventDefault(e) {
       e = e || window.event;
       if (e.preventDefault)
           e.preventDefault();
       e.returnValue = false;
     }
   function preventDefaultForScrollKeys(e) {
         if (keys[e.keyCode]) {
             preventDefault(e);
             return false;
         }
     }

     function disableScroll() {
       if (window.addEventListener) // older FF
           window.addEventListener('DOMMouseScroll', preventDefault, false);
           document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
           window.addEventListener("keydown", arrow_keys_handler, false);
           document.querySelector('html').classList.add('overflow');
           document.querySelector('body').classList.add('overflow');
     }

     function enableScroll() {
         if (window.removeEventListener)
             window.removeEventListener('DOMMouseScroll', preventDefault, false);
         document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
         window.onmousewheel = document.onmousewheel = null;
         window.onwheel = null;
         window.ontouchmove = null;
         document.onkeydown = null;
         window.removeEventListener("keydown", arrow_keys_handler, false);
         document.querySelector('html').classList.remove('overflow');
         document.querySelector('body').classList.remove('overflow');
     }

     var arrow_keys_handler = function(e) {
       switch(e.keyCode){
         case 37: case 39: case 38:  case 40: // Arrow keys
         case 32: e.preventDefault(); break; // Space
         default: break; // do not block other keys
       }
     };

  init();
};

var Strategy = function() {
  var desktop = window.matchMedia("(min-width: 991px)");
  var cache = {};
  var self = this;
  var sec1_rect_anime;
  var sec2_img_anime;
  var sec2_txt_anime;
  var sec3_img_anime;
  var sec3_txt_anime;
  var sec4_anime;
  var sec5_h2_anime;
  var sec5_container_anime;
  var sec6_h2_anime;
  var canvasObj = {};

  var nbSteps = 0;
  var indexSteps = 0;

  var darkBlueIn = false;



  var maxRad = 14;

  var colorArray = [
    '#4ea0da',
    '#09068B',
    '#C0DDF2',
    '#0497EA',
    '#4BD8A5',
  ]





  var init = self.init = function() {
    initCache();
    registerEvents();
    animeLoad();
    return self;
  };

  var initCache = function() {
    cache.view = document.querySelector(".template-strategy");
    cache.tab = cache.view.querySelector('.sec4 .tab');
    cache.col = cache.view.querySelector('.sec4 .col_wrap');
    cache.tab2_btn = cache.view.querySelector('.sec4 .tab >div:not(.active)');

    // anime
    cache.sec1 = cache.view.querySelector('.sec1');
    cache.sec1_rect = cache.view.querySelector('.sec1 .rect');
    cache.sec1_h1 = cache.view.querySelector('.sec1 h1');
    cache.sec1_content = cache.sec1.querySelector('.content');

    cache.sec2 = cache.view.querySelector('.sec2');
    cache.sec2_left = cache.view.querySelector('.img');
    cache.sec2_right = cache.view.querySelector('.txt');

    cache.sec3 = cache.view.querySelector('.sec3');
    cache.sec3_left = cache.sec3.querySelector('.txt');
    cache.sec3_right = cache.sec3.querySelector('.img');

    cache.sec4 = cache.view.querySelector('.sec4');
    cache.sec4_container = cache.sec4.querySelector('.container');

    cache.sec5 = cache.view.querySelector('.sec5');
    cache.sec5_h2 = cache.sec5.querySelector('.container');
    cache.sec5_steps_wrap = cache.sec5.querySelector('.steps_wrap');
    cache.sec5_steps_nav = cache.sec5_steps_wrap.querySelectorAll('.steps_nav >div');
    cache.sec5_step = cache.sec5_steps_wrap.querySelectorAll('.step');
    cache.sec5_step_canvas = cache.sec5_steps_wrap.querySelectorAll('.step .round');
    nbSteps = cache.sec5_step.length-1;

    cache.sec6 = cache.view.querySelector('.sec6');
    cache.sec6_h2 = cache.sec6.querySelector('h2');
    cache.sec6_risk = cache.sec6.querySelectorAll('.risk');

    cache.bg_blue = cache.view.querySelector('.bg_dark-blue');
    cache.followerLight = cache.view.querySelector('.bg_dark-blue .followerLight');

  };

  var registerEvents = function() {
    cache.tab2_btn.addEventListener("click", changeTab);

    cache.bg_blue.addEventListener('mouseenter', function() {
      if(!darkBlueIn){
        darkBlueIn = true;
        cache.followerLight.style.display = 'block';
        window.addEventListener('mousemove', cursor_light);
      }
    });
    cache.bg_blue.addEventListener('mouseleave', function() {
      if(darkBlueIn){
        darkBlueIn = false;
        cache.followerLight.style.display = 'none';
        window.removeEventListener('mousemove', cursor_light);
      }
    });

    window.addEventListener('scroll', animePage);

    for (var i = 0; i < cache.sec5_steps_nav.length; i++) {
      cache.sec5_steps_nav[i].addEventListener("click", function() {
        var diff = indexSteps - parseInt(this.dataset.index);
        if(diff > 0) {
          slideUp(parseInt(this.dataset.index), indexSteps);
          for (var i = 1; i < diff; i++) {
            anime({
              targets: cache.sec5_step[indexSteps-i].querySelector('.round_wrap'),
              opacity:0,
              duration: 1000,
              easing: 'easeInOutExpo',
            });
            anime({
              targets: cache.sec5_step[indexSteps-i].querySelector('.round_wrap .round_text'),
              opacity:0,
              duration: 1000,
              easing: 'easeInOutExpo',
            });
          }
          indexSteps = parseInt(this.dataset.index);
        }
        if(diff < 0) {
          slideDown(parseInt(this.dataset.index), indexSteps);
          for (var i = 1; i < (-diff); i++) {
            anime({
              targets: cache.sec5_step[indexSteps+i].querySelector('.round_wrap'),
              opacity:0.1,
              duration: 1000,
              easing: 'easeInOutExpo',
            });
            anime({
              targets: cache.sec5_step[indexSteps+i].querySelector('.round_wrap .aprox'),
              opacity:0,
              duration: 1000,
              easing: 'easeInOutExpo',
            });
            anime({
              targets: cache.sec5_step[indexSteps+i].querySelector('.round_wrap .round_text'),
              opacity:1,
              duration: 1000,
              easing: 'easeInOutExpo',
            });
          }
          indexSteps = parseInt(this.dataset.index);
          // slideDown(this.dataset.index, indexSteps);
          // indexSteps = this.dataset.index;
        }
      });
    }

    setTimeout(function(){
      for (var i = 0; i < cache.sec5_step_canvas.length; i++) {
        var canvas = cache.sec5_step_canvas[i].querySelector('canvas');
        canvas.width = cache.sec5_step_canvas[i].offsetWidth;
        canvas.height = cache.sec5_step_canvas[i].offsetHeight;
        var max_circles = 100 - i*20;
        circleArray = [];
        for(var ii = 0; ii < max_circles; ii++){
          var radius = Math.random() * maxRad/2 + 2;
          var x = Math.random() * (canvas.offsetWidth - radius * 2) + radius;
          var y = Math.random() * (canvas.offsetHeight - radius * 2) + radius;
          var dx = (Math.random() - 0.5);
          var dy = (Math.random() - 0.5);
          circleArray.push(new Circle(x, y, dx, dy, radius, canvas.getContext('2d'),canvas.offsetWidth,canvas.offsetHeight));
        }
        canvasObj[i] = {
          canvas : canvas,
          width : canvas.offsetWidth,
          height : canvas.offsetHeight,
          circles : circleArray
        };
      }
  animate();
}, 2000);


  };


  function Circle(x, y, dx, dy, radius, c, innerWidth, innerHeight) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRad = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color;
        c.fill();
      }
      this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;



        this.draw();
      }
    }

  function animate() {
    for (var i = 0; i < cache.sec5_step_canvas.length; i++) {
      var c = canvasObj[i].canvas.getContext('2d');
      c.clearRect(0, 0, canvasObj[i].width, canvasObj[i].height)
      for(var ii = 0; ii < canvasObj[i].circles.length; ii++){
        canvasObj[i].circles[ii].update();
      }
    }
    requestAnimationFrame(animate);
  }








  var changeTab = function() {
    this.removeEventListener("click", changeTab);
    var activeTab = cache.tab.querySelector('.active');
    var activeCol = cache.col.querySelector('.active');
    var targetTab = this;
    var targetCol = cache.col.querySelector('.'+this.dataset.tab);
    targetCol.style.display= "block";
    targetTab.classList.add('active');
    activeTab.classList.remove('active');
    activeCol.classList.remove('active');
    activeTab.addEventListener("click", changeTab);
    targetTab.classList.add('active');
    targetCol.classList.add('active');


    anime({
      targets: activeCol,
      translateX: ['0%','-10%'],
      opacity: [1,0],
      duration: 500,
      easing: 'easeOutQuad',
    });
    anime({
      targets: cache.col,
      height: targetCol.offsetHeight,
      duration: 500,
      easing: 'easeOutQuad',
    });
    anime({
      targets: targetCol,
      translateX: ['10%','0%'],
      opacity: [0,1],
      duration: 500,
      easing: 'easeOutQuad'
    });
  }

  var cursor_light= function(e) {
    cache.followerLight.style.top = (e.pageY - window.scrollY) - (cache.followerLight.offsetHeight/2) + 'px';
    cache.followerLight.style.left = e.pageX - (cache.followerLight.offsetWidth/2) + 'px';
  }


  // Anime

  var animeLoad = function() {
    sec1_rect_anime = anime({
      targets: cache.sec1_rect,
      translateX: ['0%','-120%'],
      skewX: [-20,-20],
      duration: 2500,
      delay: 300,
      easing: 'easeInOutExpo'
    });

    sec1_content_anime = anime({
      targets: cache.sec1_content,
      backgroundPositionY: ['100%','0%'],
      duration: 1000,
      easing: 'linear',
      autoplay: false
    });

    sec2_img_anime = anime({
      targets: cache.sec2_left,
      translateY: ['-15%','0%'],
      opacity:[0,1],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec2_txt_anime = anime({
      targets: cache.sec2_right,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-5,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec3_img_anime = anime({
      targets: cache.sec3_left,
      translateY: ['-15%','0%'],
      opacity:[0,1],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec3_txt_anime = anime({
      targets: cache.sec3_right,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-5,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec4_anime= anime({
      targets: cache.sec4_container,
      translateY: ['15%','0%'],
      opacity:[0,1],
      skewX: [-2,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec5_h2_anime= anime({
      targets: cache.sec5_h2,
      translateY: ['15%','0%'],
      opacity:[0,1],
      skewX: [-2,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec5_anime= anime({
      targets: cache.sec5_steps_wrap,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-2,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

    sec6_h2_anime= anime({
      targets: cache.sec6_h2,
      translateX: ['15%','0%'],
      opacity:[0,1],
      skewX: [-2,0],
      duration: 1500,
      easing: 'easeOutExpo',
      autoplay: false
    });

  }

  animePage = function() {
    scrollPos = window.pageYOffset;

    // Sec1 in
    if(scrollPos < cache.sec1.offsetHeight) {
      var percent = scrollPos/cache.sec1.offsetHeight;
      sec1_content_anime.seek(percent * sec1_content_anime.duration);
    }

    // Sec2 in
    if((scrollPos+window.innerHeight/1.5 > cache.sec2_left.offsetTop) && (!cache.sec2_left.classList.contains('animated'))){
      cache.sec2_left.classList.add('animated');
      sec2_img_anime.play();
    }
    if((scrollPos+window.innerHeight/1.5 > cache.sec2_right.offsetTop) && (!cache.sec2_right.classList.contains('animated'))){
      cache.sec2_right.classList.add('animated');
      sec2_txt_anime.play();
    }

    // Sec2 out
    // if(((scrollPos-window.innerHeight/4) > cache.sec2_left.offsetTop) && (scrollPos < (cache.sec2_left.offsetTop + cache.sec2_left.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/4) - cache.sec2_left.offsetTop)/cache.sec2_left.offsetHeight;
    //   sec2_img_anime.seek(sec2_img_anime.duration-((percent*4) * sec2_img_anime.duration));
    // }
    // if(((scrollPos-window.innerHeight/4) > cache.sec2_right.offsetTop) && (scrollPos < (cache.sec2_right.offsetTop + cache.sec2_right.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/4) - cache.sec2_right.offsetTop)/cache.sec2_right.offsetHeight;
    //   sec2_txt_anime.seek(sec2_txt_anime.duration-((percent*4) * sec2_txt_anime.duration));
    // }

    // Sec3 in
    if((scrollPos+window.innerHeight/1.5 > cache.sec3_left.offsetTop) && (!cache.sec3_left.classList.contains('animated'))){
      cache.sec3_left.classList.add('animated');
      sec3_img_anime.play();
    }
    if((scrollPos+window.innerHeight/1.5 > cache.sec3_right.offsetTop) && (!cache.sec3_right.classList.contains('animated'))){
      cache.sec3_right.classList.add('animated');
      sec3_txt_anime.play();
    }

    // Sec3 out
    // if(((scrollPos-window.innerHeight/4) > cache.sec3_left.offsetTop) && (scrollPos < (cache.sec3_left.offsetTop + cache.sec3_left.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/4) - cache.sec3_left.offsetTop)/cache.sec3_left.offsetHeight;
    //   sec3_img_anime.seek(sec3_img_anime.duration-((percent*2) * sec3_img_anime.duration));
    // }
    // if(((scrollPos-window.innerHeight/4) > cache.sec3_right.offsetTop) && (scrollPos < (cache.sec3_right.offsetTop + cache.sec3_right.offsetHeight))){
    //   var percent = ((scrollPos-window.innerHeight/4) - cache.sec3_right.offsetTop)/cache.sec3_right.offsetHeight;
    //   sec3_txt_anime.seek(sec3_txt_anime.duration-((percent*2) * sec3_txt_anime.duration));
    // }

    // Sec4 in
    if((scrollPos+window.innerHeight/2 > cache.sec4.offsetTop) && (!cache.sec4.classList.contains('animated'))){
      cache.sec4.classList.add('animated');
      sec4_anime.play();
    }
    // Sec4 out
    // if((scrollPos+window.innerHeight > (cache.sec4.offsetTop+cache.sec4.offsetHeight)) && (scrollPos < (cache.sec4.offsetTop + cache.sec4.offsetHeight)) && (cache.sec4.classList.contains('animated'))){
    //   var percent = ((scrollPos+window.innerHeight) - (cache.sec4.offsetTop+cache.sec4.offsetHeight))/cache.sec4.offsetHeight;
    //   sec4_anime.seek(sec4_anime.duration-((percent*2) * sec4_anime.duration));
    // }

    // bg_blue
    if((scrollPos+window.innerHeight/2 > cache.bg_blue.offsetTop) && (scrollPos+window.innerHeight< (cache.bg_blue.offsetTop+cache.bg_blue.offsetHeight))){
      if(!cache.bg_blue.classList.contains('animated')) {
        cache.bg_blue.classList.add('animated');
        anime({
          targets: cache.bg_blue,
          backgroundColor: ['#F8FAFB','#080828'],
          duration: 1500,
          easing: 'easeOutExpo',
        });
      }
      anime({
        targets: cache.followerLight,
        opacity: 0.7,
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }
    if((scrollPos+window.innerHeight/2 < cache.bg_blue.offsetTop) && (cache.bg_blue.classList.contains('animated'))){
      // cache.bg_blue.classList.remove('animated');
      // anime({
      //   targets: document.querySelector('body'),
      //   backgroundColor: ['#080828','#F8FAFB'],
      //   duration: 1500,
      //   easing: 'easeOutExpo',
      // });
      anime({
        targets: cache.followerLight,
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }
    if((scrollPos+window.innerHeight > (cache.bg_blue.offsetTop+cache.bg_blue.offsetHeight)) && (cache.bg_blue.classList.contains('animated'))){
      // cache.bg_blue.classList.remove('animated');
      // anime({
      //   targets: document.querySelector('body'),
      //   backgroundColor: ['#080828','#F8FAFB'],
      //   duration: 1500,
      //   easing: 'easeOutExpo',
      // });
      anime({
        targets: cache.followerLight,
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo',
      });
    }

    // Sec5 in
    if((scrollPos+window.innerHeight/2 > cache.sec5_h2.offsetTop) && (!cache.sec5_h2.classList.contains('animated'))){
      cache.sec5_h2.classList.add('animated');
      sec5_h2_anime.play();
    }

    if((scrollPos+window.innerHeight/2 > (cache.sec5_steps_wrap.offsetTop+cache.sec5.offsetTop)) && (scrollPos+window.innerHeight/4 < (cache.sec5.offsetTop+cache.sec5.offsetHeight)) && (!cache.sec5_steps_wrap.classList.contains('in'))){
      if(!cache.sec5_steps_wrap.classList.contains('animated')) {
        sec5_anime.play();
        cache.sec5_steps_wrap.classList.add('animated');
      }
      cache.sec5_steps_wrap.classList.add('in');


      if((window.matchMedia("(pointer: none)").matches) || desktop.matches) {
        document.querySelector('html').classList.add('overflow');
        document.querySelector('body').classList.add('overflow');
        anime({
          targets: scrollElement,
          scrollTop: (cache.sec5.offsetTop+cache.sec5_h2.offsetTop+window.innerHeight/8),
          duration: 800,
          easing: 'easeOutExpo',
        });

        scrollElement.addEventListener("wheel", scrollSteps);
      }

    }


    // Sec6 in
    if((scrollPos+window.innerHeight/2 > cache.sec6_h2.offsetTop) && (!cache.sec6_h2.classList.contains('animated'))){
      cache.sec6_h2.classList.add('animated');
      sec6_h2_anime.play();
    }
    // Sec6 out
    // if(((scrollPos+window.innerHeight/10) > cache.sec6_h2.offsetTop) && (scrollPos < (cache.sec6_h2.offsetTop + cache.sec6_h2.offsetHeight))){
    //   var percent = ((scrollPos+window.innerHeight/10) - cache.sec6_h2.offsetTop)/cache.sec6_h2.offsetHeight;
    //   sec6_h2_anime.seek(sec6_h2_anime.duration-((percent/1.5) * sec6_h2_anime.duration));
    // }

    for (var i = 0; i < cache.sec6_risk.length; i++) {
      if((scrollPos+window.innerHeight/2 > cache.sec6_risk[i].offsetTop) && (!cache.sec6_risk[i].classList.contains('animated'))){
        cache.sec6_risk[i].classList.add('animated');
        anime({
          targets: cache.sec6_risk[i],
          translateX: ['15%','0%'],
          opacity:[0,1],
          skewX: [-2,0],
          duration: 1500,
          easing: 'easeOutExpo',
        });
      }
      // if((scrollPos > cache.sec6_risk[i].offsetTop) && (scrollPos < (cache.sec6_risk[i].offsetTop + cache.sec6_risk[i].offsetHeight))){
      //   var percent = (scrollPos - cache.sec6_risk[i].offsetTop)/cache.sec6_risk[i].offsetHeight;
      //   var anime1 = anime({
      //     targets: cache.sec6_risk[i],
      //     translateX: ['15%','0%'],
      //     opacity:[0,1],
      //     skewX: [-2,0],
      //     duration: 1500,
      //     easing: 'easeOutExpo',
      //     autoplay: false,
      //   });
      //   anime1.seek(anime1.duration-((percent) * anime1.duration));
      // }
    }


  }



  scrollSteps = function() {
    scrollElement.removeEventListener("wheel", scrollSteps);
    if (event.deltaY < 0) {
      if(indexSteps > 0) {
        var indexIn = indexSteps-1;
        slideUp(indexIn, indexSteps);
        indexSteps--;
      }
      else {
        var indexIn = 0;
        anime({
          targets: scrollElement,
          scrollTop: (cache.sec4.offsetTop+cache.sec4.offsetHeight/2),
          duration: 1000,
          easing: 'easeOutExpo',
          complete: function() {
            document.querySelector('html').classList.remove('overflow');
            document.querySelector('body').classList.remove('overflow');
            cache.sec5_steps_wrap.classList.remove('in');
          }
        });
      }
    }
    else if (event.deltaY > 0) {
      if(indexSteps < nbSteps) {
        var indexIn = indexSteps+1;
        slideDown(indexIn, indexSteps);
        indexSteps++;
      }
      else {
        var indexIn = 0;
        indexSteps = 0;
        anime({
          targets: scrollElement,
          scrollTop: cache.sec6.offsetTop,
          duration: 1000,
          easing: 'easeOutExpo',
          complete: function() {
            document.querySelector('html').classList.remove('overflow');
            document.querySelector('body').classList.remove('overflow');
            cache.sec5_steps_wrap.classList.remove('in');
          }
        });
        slideUp(indexIn, nbSteps);
        for (var i = 0; i < cache.sec5_step.length; i++) {
          cache.sec5_step[i].querySelector('.round_wrap .round_text').style.opacity = 0;
          cache.sec5_step[i].querySelector('.round_wrap').style.opacity = 0;
        }
        slideUp(indexIn, nbSteps);
      }
    }
  }

  function slideDown(idxIn, idxOut) {
    cache.sec5_steps_nav[idxIn].classList.add('active');
    cache.sec5_steps_nav[idxOut].classList.remove('active');

    anime({
      targets: cache.sec5_step[idxIn].querySelector('.txt'),
      translateY: ['-10%','0%'],
      opacity:[0,1],
      skewX: [-2,0],
      duration: 1000,
      easing: 'easeInOutExpo',
    });
    anime({
      targets: cache.sec5_step[idxOut].querySelector('.txt'),
      translateY: ['0%','10%'],
      opacity:[1,0],
      skewX: [0,-2],
      duration: 1000,
      easing: 'easeInOutExpo',
      complete: function() {
        scrollElement.addEventListener("wheel", scrollSteps);
      }
    });
    anime({
      targets: cache.sec5_step[idxIn].querySelector('.round_wrap'),
      opacity:[0,1],
      duration: 1000,
      easing: 'easeInOutExpo',
    });
    anime({
      targets: cache.sec5_step[idxOut].querySelector('.round_wrap'),
      opacity:[1,0.1],
      duration: 1000,
      easing: 'easeInOutExpo',
    });

    anime({
      targets: cache.sec5_step[idxOut].querySelector('.round_wrap .aprox'),
      opacity:[1,0],
      duration: 1000,
      easing: 'easeInOutExpo',
    });
    anime({
      targets: cache.sec5_step[idxOut].querySelector('.round_wrap .round_text'),
      opacity:[0,1],
      rotate: [75,82],
      duration: 1000,
      easing: 'easeInOutExpo',
    });
  }

  function slideUp(idxIn, idxOut) {
    cache.sec5_steps_nav[idxIn].classList.add('active');
    cache.sec5_steps_nav[idxOut].classList.remove('active');

    anime({
      targets: cache.sec5_step[idxIn].querySelector('.txt'),
      translateY: ['10%','0%'],
      opacity:[0,1],
      skewX: [-2,0],
      duration: 1000,
      easing: 'easeInOutExpo',
    });
    anime({
      targets: cache.sec5_step[idxOut].querySelector('.txt'),
      translateY: ['0%','-10%'],
      opacity:[1,0],
      skewX: [0,-2],
      duration: 1000,
      easing: 'easeInOutExpo',
      complete: function() {
        scrollElement.addEventListener("wheel", scrollSteps);
      }
    });
    anime({
      targets: cache.sec5_step[idxIn].querySelector('.round_wrap'),
      opacity:[0.1,1],
      duration: 1000,
      easing: 'easeInOutExpo',
    });
    anime({
      targets: cache.sec5_step[idxIn].querySelector('.round_wrap .aprox'),
      opacity:[0,1],
      duration: 1000,
      easing: 'easeInOutExpo',
    });
    anime({
      targets: cache.sec5_step[idxIn].querySelector('.round_wrap .round_text'),
      opacity:[1,0],
      rotate: [82,75],
      duration: 1000,
      easing: 'easeInOutExpo',
    });
    anime({
      targets: cache.sec5_step[idxOut].querySelector('.round_wrap'),
      opacity:[1,0],
      duration: 1000,
      easing: 'easeInOutExpo',
    });
  }


  init();
  // animate();
}
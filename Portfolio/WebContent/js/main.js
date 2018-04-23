$(function() { // wait for document ready
  var flightpath = {
    entry: {
      curviness: 1.25,
      autoRotate: false,
      values: [{
          x: 350,
          y: 300
        },
        {
          x: 600,
          y: 30
        }

      ]
    },
    looping: {
      curviness: 2.5,
      autoRotate: false,
      values: [{
          x: 1000,
          y: 160
        },
        {
          x: 920,
          y: 120
        },
        {
          x: 800,
          y: 80
        },
        {
          x: 680,
          y: 110
        },
        {
          x: 400,
          y: 70
        },
        {
          x: 380,
          y: 100
        },
        {
          x: 220,
          y: 25
        }
      ]
    },
    leave: {
      curviness: 1.5,
      autoRotate: false,
      values: [{
          x: 600,
          y: 20
        },
        {
          x: 250,
          y: 200
        },
        {
          x: $(window).width() + 300,
          y: 100
        },
      ]
    }
  };
  // init controller
  var controller = new ScrollMagic.Controller();

  // create tween
  var tween = new TimelineMax()
    .add(TweenMax.to($("#bat"), 2, {
      css: {
        bezier: flightpath.entry
      },
      ease: Power1.easeInOut
    }))
    .add(TweenMax.to($("#bat"), 3, {
      css: {
        bezier: flightpath.looping
      },
      ease: Power1.easeInOut
    }))
    .add(TweenMax.to($("#bat"), 2, {
      css: {
        bezier: flightpath.leave
      },
      ease: Power1.easeInOut
    }));

  // build scene
  var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger",
      duration: 1000,
      offset: 500
    })
    .setPin("#target")
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
})

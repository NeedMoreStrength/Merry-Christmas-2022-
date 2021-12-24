document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});

// lights here

let christmas = {
    delay: null,
    delete: function(){
        document.body.querySelectorAll('.christmas-lights').forEach(function(ul){
            ul.remove();
        });
    },
    create: function(){
        let v = window.innerHeight / 60 + 2,
            h = window.innerWidth / 60 + 2,
            data = {
                'top': h,
                'right': v,
                'bottom': h,
                'left': v
            },
            ul = c = null;
        for (let position in data) {
            c = data[position];
            ul = document.createElement('ul');
            ul.className = 'christmas-lights';
            ul.dataset.position = position;
            for (let i = 0; i <= c; i++) {
                ul.append(document.createElement('li'));
            }
            document.body.append(ul);
        }
    }
}
 
document.addEventListener('DOMContentLoaded', function(){
    christmas.create();
});
 
window.addEventListener('resize', function(e) {
    clearTimeout(christmas.delay);
    christmas.delay = setTimeout(function(){
        christmas.delete();
        christmas.create();
    }, 100)
});
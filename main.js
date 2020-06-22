{

    var menuIsOpen = false;
    var isImmediate = true;
    var flag1, flag2;


    window.checkMob = function() {
        let check = false;
        (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function downloadResume() {
        var link = document.createElement('a');
        link.href = './assets/resume.pdf';
        link.download = 'resume.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

    function openMenu() {
        var menubtn = document.getElementById('menuBtn');
        var menu = document.getElementById('ham-menu');

        var toggleMenu = () => {
            flag1 = flag2 = false;
            menubtn.classList.toggle('is-active');
            setTimeout(() => {
                flag1 = true;
            }, 220);
            if (!menuIsOpen) {
                menu.style.display = 'flex';
                setTimeout(() => {
                    menu.classList.add('menuSlideRight');
                    menu.style.opacity = '1';
                    isImmediate = true;
                    flag2 = true;
                }, 100);
            } else {
                // menu.style.width = '0vw';
                menu.classList.remove('menuSlideRight');
                menu.classList.add('menuSlideLeft');
                setTimeout(() => {
                    menu.style.display = 'none';
                    menu.classList.remove('menuSlideLeft');
                    menu.style.opacity = '0';
                    isImmediate = true;
                    flag2 = true;
                }, 1000);
            }
            if (flag1 == true && flag2 == true) {
                isImmediate = true;
            }
            menuIsOpen = !menuIsOpen;
        }

        if (isImmediate) {
            toggleMenu();
            isImmediate = false;
            // flag1 = flag2 = false;
        }
    }

    function navScrollHandler() {
        if (!checkMob()) {
            document.querySelector('.hamburger-wrap').style.display = 'none';
            document.querySelector('.hamburger-menu-wrap').style.display = 'none';
        } else {
            document.querySelector('.nav-items-wrap').style.display = 'none';
        }

        function scrollTo(element) {
            var menu = document.getElementById('ham-menu');
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if (checkMob()) {
                openMenu();
            }
        }

        var abtMeBtn = document.getElementById('aboutMeBtn');
        var skillsBtn = document.getElementById('skillsBtn');
        var expBtn = document.getElementById('expBtn');
        var projectBtn = document.getElementById('projectBtn');
        var abtMeBtnMob = document.getElementById('aboutMeBtn-mob');
        var skillsBtnMob = document.getElementById('skillsBtn-mob');
        var expBtnMob = document.getElementById('expBtn-mob');
        var projectBtnMob = document.getElementById('projectBtn-mob');


        document.getElementById('content').addEventListener('scroll', () => {
            var element = document.getElementById('content');
            var pos = element.scrollTop;
            if (pos < 897) {
                abtMeBtn.classList.add('red');
                skillsBtn.classList.remove('red');
                expBtn.classList.remove('red');
                projectBtn.classList.remove('red');


            } else if (pos >= 897 && pos < 1794) {
                abtMeBtn.classList.remove('red');
                skillsBtn.classList.add('red');
                expBtn.classList.remove('red');
                projectBtn.classList.remove('red');
            } else if (pos >= 1794 && pos < 2691) {
                abtMeBtn.classList.remove('red');
                skillsBtn.classList.remove('red');
                expBtn.classList.add('red');
                projectBtn.classList.remove('red');
            } else {
                abtMeBtn.classList.remove('red');
                skillsBtn.classList.remove('red');
                expBtn.classList.remove('red');
                projectBtn.classList.add('red');
            }
        })


        abtMeBtn.addEventListener('click', scrollTo.bind(this, (document.getElementById('about-me'))));
        skillsBtn.addEventListener('click', scrollTo.bind(this, (document.getElementById('skills'))));
        expBtn.addEventListener('click', scrollTo.bind(this, (document.getElementById('exp'))));
        projectBtn.addEventListener('click', scrollTo.bind(this, (document.getElementById('project'))));
        abtMeBtnMob.addEventListener('click', scrollTo.bind(this, (document.getElementById('about-me'))));
        skillsBtnMob.addEventListener('click', scrollTo.bind(this, (document.getElementById('skills'))));
        expBtnMob.addEventListener('click', scrollTo.bind(this, (document.getElementById('exp'))));
        projectBtnMob.addEventListener('click', scrollTo.bind(this, (document.getElementById('project'))));


    }

    window.onload = () => {
        console.log('Adithya Sreemandiram Anil\'s Portfolio');
        navScrollHandler();
    }
}
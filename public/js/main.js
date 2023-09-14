window.addEventListener('DOMContentLoaded', () => {
    const dropDownMenu = document.getElementById('dropdown-menu');
    const dropAccount = document.getElementById('dropdown-account');

    const btnXMenu = document.querySelector('.btn-x-menu');
    const btnXAccount = document.querySelector('.btn-x-account');
    const btnDropdown = document.getElementById('btn-dropdown');
    const btnAccount = document.getElementById('btn-account');

    const main = document.querySelector('.main');

    if (btnDropdown && dropDownMenu && btnXMenu) {
        btnDropdown.onclick = () => {
            dropDownMenu.style.display = 'block';
            btnXMenu.style.display = 'block';
            main.style.opacity = '0';
            btnXMenu.onclick = () => {
                dropDownMenu.style.display = 'none';
                btnXMenu.style.display = 'none';
                main.style.opacity = '1';
            };
        };
    }

    if (btnAccount && dropAccount && btnXAccount) {
        btnAccount.onclick = () => {
            dropAccount.style.display = 'block';
            btnXAccount.style.display = 'block';
            main.style.opacity = '0';
            btnXAccount.onclick = () => {
                dropAccount.style.display = 'none';
                btnXAccount.style.display = 'none';
                main.style.opacity = '1';
            };
        };
    }

    if (!window.location.pathname.includes('all-portfolio')) {
        document.querySelectorAll('.nav-item a').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
    
                dropDownMenu.style.display = 'none';
                dropAccount.style.display = 'none';
                main.style.opacity = '1';
    
                // Add active class to the clicked link
                document.querySelectorAll('.nav-item a').forEach((item) => {
                    item.classList.remove('active');
                });
                link.classList.add('active');
            });
        });
    }

    // timeline
    // const listTimeline = document.querySelectorAll(
    //   ".main__center__timeline .all-content .content"
    // );

    // if (listTimeline.length) {
    //   let currentDate = new Date();

    //   for (let i = 0; i < listTimeline.length; i++) {
    //     let item = listTimeline[i];
    //     let itemDate = new Date(`${item.dataset.date}`);
    //     if (itemDate < currentDate) {
    //       for (let j = 0; j < item.children.length; j++) {
    //         item.children[j].style.color = "#2b3040";
    //         const timeText =
    //           item.children[j].querySelector(".time .time-box");
    //         if (timeText) {
    //           timeText.style.color = "#2b3040";
    //         }
    //       }
    //     }
    //   }
    // }

    // load video gallery

    const listVideos = [
        {
            id: 0,
            url: 'public/assets/images/hinh demo 1.png',
            dataVideoId: 'a3VR9UqGOLI'
        },
        {
            id: 1,
            url: 'public/assets/images/hinh demo 2.png',
            dataVideoId: '5yjrKvSYCo8'
        },
        {
            id: 2,
            url: 'public/assets/images/hinh demo 1.png',
            dataVideoId: 'a3VR9UqGOLI'
        },
        {
            id: 3,
            url: 'public/assets/images/hinh demo 2.png',
            dataVideoId: '5yjrKvSYCo8'
        }
    ];

    const videoBlockEle = document.querySelector(
        '#video-block .swiper-wrapper'
    );

    if (videoBlockEle) {
        for (let i = 0; i < listVideos.length; i++) {
            let itemSlide = document.createElement('div');
            itemSlide.classList.add('swiper-slide');
            let containerImg =  document.createElement('div'); 
            containerImg.classList.add('container-img')
            let imgItem = document.createElement('img');
            imgItem.setAttribute('src', listVideos[i].url);
            imgItem.setAttribute('data-video-id', listVideos[i].dataVideoId);
            imgItem.setAttribute('alt', 'img' + listVideos[i].id);
            imgItem.onclick = () => {
                changeVideo(listVideos[i].dataVideoId);
            };
            itemSlide.appendChild(containerImg);
            containerImg.appendChild(imgItem)
            videoBlockEle.appendChild(itemSlide);
        }
    }

    // load images gallery
    const listImages = [
        {
            id: 0,
            url: 'public/assets/images/hinh demo 1.png'
        },
        {
            id: 1,
            url: 'public/assets/images/hinh demo 3.png'
        },
        {
            id: 2,
            url: 'public/assets/images/hinh demo 1.png'
        },
        {
            id: 3,
            url: 'public/assets/images/hinh demo 2.png'
        }
    ];

    const imageBlockEle = document.querySelector(
        '#image-block .swiper-wrapper'
    );

    if (imageBlockEle) {
        for (let i = 0; i < listImages.length; i++) {
            let itemSlide = document.createElement('div');
            itemSlide.classList.add('swiper-slide');
            let containerImg =  document.createElement('div'); 
            containerImg.classList.add('container-img')
            let imgItem = document.createElement('img');
            imgItem.setAttribute('src', listImages[i].url);
            imgItem.setAttribute('alt', 'img' + listImages[i].id);
            itemSlide.appendChild(containerImg);
            containerImg.appendChild(imgItem)
            imageBlockEle.appendChild(itemSlide);
        }
    }

    // Set the date we're counting down to
    var countDownDate = new Date('Oct 13, 2023 15:37:25').getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days =
            Math.floor(distance / (1000 * 60 * 60 * 24)) < 10
                ? '0' + Math.floor(distance / (1000 * 60 * 60 * 24))
                : Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours =
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) <
            10
                ? '0' +
                  Math.floor(
                        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                  )
                : Math.floor(
                        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                  );
        var minutes =
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) < 10
                ? '0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds =
            Math.floor((distance % (1000 * 60)) / 1000) < 10
                ? '0' + Math.floor((distance % (1000 * 60)) / 1000)
                : Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        document.getElementById('countdown').innerHTML = `<div class="row">
            <div class="wrapper-item col-lg-6">
            <div class="item">
                <div class="time">${days}</div>
                <p class="text">ngày</p>
            </div>
            <div class="item">
                <div class="time">${hours}</div>
                <p class="text">giờ</p>
            </div>
            </div>
            <div class="wrapper-item col-lg-6">
            <div class="item">
                <div class="time">${minutes}</div>
                <p class="text">phút</p>
            </div>
            <div class="item">
                <div class="time">${seconds}</div>
                <p class="text">giây</p>
            </div>
            </div>
        </div>`;
    }, 1000);

    // All Portfolio 
    const gridItems = document.querySelectorAll('.grid-item');
    const overlay = document.querySelector('.overlay');
    const zoomedImg = document.querySelector('.zoomed-img');
    const closeBtn = document.querySelector('.close');

    gridItems.forEach(function (item) {
        item?.addEventListener('click', function () {
            const imgSrc = this.querySelector('img').src;
            zoomedImg.src = imgSrc;
            overlay.style.display = 'flex';
        });
    });

    closeBtn?.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});

function changeVideo(videoId) {
    const videoYoutubEle = document.querySelector('#videoYoutube');
    if (videoId && videoYoutubEle) {
        videoYoutubEle.src =
            'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
        videoYoutubEle.setAttribute('allow', 'autoplay');
    }
}

// Animation Scroll
if (document) {
    document.addEventListener('scroll', () => {
        handleScroll();
        activeMenu();
    });

    setTimeout(() => {
        handleScroll();
    }, 0);
}

window.addEventListener('load', () => {
    if (!window.location.hash) {
            window.scrollTo({
            top: 0,
            behavior: 'smooth' // Use smooth scrolling animation
        });
    }
})

function handleScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const fadeInElement = entry.target;
                fadeInElement.classList.add('animate');
                const animateCenterEle =
                    fadeInElement.querySelectorAll('.animate__center');
                const animateLeftEle =
                    fadeInElement.querySelectorAll('.animate__left');
                const animateRightEle =
                    fadeInElement.querySelectorAll('.animate__right');

                animateCenterEle?.forEach((item) => {
                    item.classList.add('animate__animated', 'animate__fadeInUpBig');
                    item.style.opacity = 1;
                    item.style.visibility = 'visible';
                });

                animateLeftEle?.forEach((item) => {
                    item.classList.add('animate__animated', 'animate__fadeInLeft');
                    item.style.opacity = 1;
                    item.style.visibility = 'visible';
                });

                animateRightEle?.forEach((item) => {
                    item.classList.add('animate__animated', 'animate__fadeInRight');
                    item.style.opacity = 1;
                    item.style.visibility = 'visible';
                });

                // observer.unobserve(fadeInElement); // Stop observing the element once it comes into view
            }
        });
    }, observerOptions);

    fadeInElements.forEach((element) => {
        observer.observe(element);
    });
}

// Attach the scroll event listener
function activeMenu() {
    var sections = document.querySelectorAll('section');
    var scrollDistance = document.documentElement.scrollTop;
    if (sections.length && scrollDistance) {
            for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            if (section.offsetTop <= scrollDistance + 10) {
                var navLinks = document.querySelectorAll(
                    '.main__right__menu .nav-item a'
                );
                var navLinksFixed = document.querySelectorAll(
                    '.nav-menu__block-dropdown .nav-item a'
                );
                for (var j = 0; j < navLinks.length; j++) {
                    navLinks[j].classList.remove('active');
                }
                for (var j = 0; j < navLinksFixed.length; j++) {
                    navLinksFixed[j].classList.remove('active');
                }
                var activeLink = document.querySelector(
                    '.main__right__menu .nav-item a[href="#' + section.id + '"]'
                );
                if (activeLink) {
                    activeLink.classList.add('active');
                }
                var activeLinkFixed = document.querySelector(
                    '.nav-menu__block-dropdown .nav-item a[href="#' +
                        section.id +
                        '"]'
                );
                if (activeLinkFixed) {
                    activeLinkFixed.classList.add('active');
                }
            }
        }
    }
}



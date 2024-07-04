      var imageContainer = document.querySelector('.longwear-img')
        var isVisible = false; // 초기에는 이미지가 보이지 않는 상태

        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', function() {
            var rect = imageContainer.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            var windowBottom = window.scrollY + windowHeight;

            // 이미지가 화면에 나타날 조건을 설정합니다.
            if (rect.top < windowBottom && rect.bottom >= 0) {
                // 이미지가 보이는 상태이면 visible 클래스를 추가합니다.
                if (!isVisible) {
                    imageContainer.classList.add('visible');
                    isVisible = true;
                }
            } else {
                // 이미지가 화면 밖으로 벗어나면 visible 클래스를 제거하고 isVisible을 false로 설정합니다.
                imageContainer.classList.remove('visible');
                isVisible = false;
            }
        });
        // 쿠션이미지




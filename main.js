window.addEventListener('DOMContentLoaded', () => {
	carusel();
	timer();

	function carusel() {
		const reviews = document.querySelectorAll('.review-content');
		const container = document.querySelector('#reviews');
		const next = document.querySelector('.reviews-btn.next');
		const prev = document.querySelector('.reviews-btn.prev');
	
		let i = 0;
		let touchX;

		next.addEventListener('click', () => showReview(1));
		prev.addEventListener('click', () => showReview(-1));
		container.addEventListener('touchmove', (e) => {
			const touches = e.touches[0].screenX;
			if (!touchX) {
				touchX = touches;
			} else {
				if (touches > touchX) showReview(1);
				else showReview(-1);

				touchX = null;
			}
		})
		

		function showReview(n) {
			const sideToMove = n == -1 ? 'slider-right' : 'slider-left';

			i += n;
			if (i >= 3) i = 0
			if (i < 0) i = 2;

			reviews.forEach(item => {
				item.classList.add('hide');
				item.classList.remove('slider-rigth', 'slider-left');
			})

			reviews[i].classList.remove('hide');
			reviews[i].classList.add(sideToMove);
		}
	}

	function timer() {
		const body = document.querySelector('#booking-timer');
		const deadline = new Date().getTime() + 18123456;

		changeTime();
		setInterval(changeTime, 0);

		function changeTime() {
			const now = new Date().getTime();
			const timeForTimer = deadline - now;

			body.textContent = `${addZero(new Date(timeForTimer).getHours())}:
										${addZero(new Date(timeForTimer).getMinutes())}:
										${addZero(new Date(timeForTimer).getSeconds())}`;
		}

		function addZero(num) {
			if (num < 10) {
				return `0${num}`;
			} else {
				return num;
			}
		}
	}
})
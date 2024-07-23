document.addEventListener('DOMContentLoaded', function() {
	const windowWidth = window.screen.width;
	const html = document.querySelector('HTML');
	const body = document.querySelector('BODY');

	// Toggle Dark theme
	const darkmodeBtns = document.querySelectorAll('.js-toggle-darkmode-btn');

	if (darkmodeBtns) {
		function removeActiveClass(elems) {
			elems.forEach(function(elem) {
				elem.classList.remove('is-active');
			});
		}

		function addActiveClass(elems) {
			elems.forEach(function(elem) {
				elem.classList.add('is-active');
			});
		}
		darkmodeBtns.forEach(function(darkmodeBtn) {
			darkmodeBtn.addEventListener('click', function() {
				if(this.classList.contains('is-active')) {
					removeActiveClass(darkmodeBtns);
				} else {
					addActiveClass(darkmodeBtns);
				}

				body.classList.toggle('is-dark');
			});
		});
	}

	// Add game to favorite list
	const addGameToFavoriteBtn = document.querySelectorAll('.js-add-game-to-favorite-btn');

	if (addGameToFavoriteBtn) {
		Array.from(addGameToFavoriteBtn).forEach(function(btn) {
			btn.addEventListener('click', function(e) {
				e.preventDefault();
				this.classList.toggle('is-active');
			});
		});
	}

	// Toggle Menu
	const toggleMenuBtns = document.querySelectorAll('.js-toggle-menu-btn');
	const menu = document.querySelector('.js-menu');
	const menuOverflow = document.querySelector('.menu-overflow');

	function toggleMenu() {
		menu.classList.toggle('is-active');
		
		if (windowWidth > 992) {
			body.classList.toggle('is-toggled');
		} else {
			html.classList.toggle('is-fixed');
			menuOverflow.classList.toggle('is-active');
		}
		
	}

	if (toggleMenuBtns) {
		toggleMenuBtns.forEach(function(toggleMenuBtn) {
			toggleMenuBtn.addEventListener('click', function(e) {
				e.stopPropagation();
				this.classList.toggle('is-active');
				toggleMenu();
			});
		});
	}

	document.addEventListener('click', function(e) {

		if (!menu.contains(e.target) && e.target !== toggleMenuBtns) {
			menu.classList.remove('is-active');
			body.classList.remove('is-toggled');
			html.classList.remove('is-fixed');
			toggleMenuBtns.forEach(function(toggleMenuBtn) {
				toggleMenuBtn.classList.remove('is-active');
			});
			
			menuOverflow.classList.remove('is-active');
		}

	});

	if (menu) {
		if (windowWidth > 992) {
			let menuOffset = menu.offsetTop;
			window.addEventListener('scroll', function() {
				let scroll = this.scrollY;
				if (scroll > menuOffset) {
					menu.classList.add('is-fixed');
				} else {
					menu.classList.remove('is-fixed');
				}
			});
		}
		
	}

	// SCroll page up
	const scrollUpBtn = document.querySelector('.js-scroll-up-btn');

	if (scrollUpBtn) {
		scrollUpBtn.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}

	// Search input active status
	const searchInput = document.querySelector('.js-search-input');

	if (searchInput) {
		searchInput.addEventListener('blur', function() {
			let val = this.value;
			if (val && val.length > 0 && val !== '') {
				searchInput.classList.add('is-active');
			} else {
				searchInput.classList.remove('is-active');
			}
		});
	}

	// toggle tags
	const tagsToggler = document.querySelector('.js-tags-toggler');

	if (tagsToggler) {
		tagsToggler.addEventListener('click', function() {
			this.closest('.categories-tags').classList.toggle('is-active');
		});
	}

	// Form fields
	const formInputs = document.querySelectorAll('.form-input');
	const contactsForm = document.querySelector('.contacts .form');
	const selectWrapper = document.querySelectorAll('.form-group__select');
	const selectOptions = document.querySelectorAll('.form-select__options li');

	if (formInputs) {

		Array.from(formInputs).forEach(function(input) {

			input.addEventListener('focus', function() {
				const label = this.closest('.form-label');

				label.classList.add('is-active');

				if(label.classList.contains('is-error')) {
					label.classList.remove('is-error');
				}
			});

			input.addEventListener('blur', function() {
				const label = this.closest('.form-label');

				if (label.classList.contains('is-active') && this.value || this.value !== '') {
					label.classList.add('is-valid');
				} else {
					label.classList.remove('is-valid');
					label.classList.remove('is-active');
				}
			});
		});
	}

	if (contactsForm) {
		contactsForm.addEventListener('submit', function(e) {
			e.preventDefault();

			let self = this;
			let validationFlag = true;
			let inputs = self.querySelectorAll('.js-required-field');

			// Validate
			if (inputs) {
				Array.from(inputs).forEach(function(input) {
					if (input.value || input.value == '') {
						input.closest('.form-label').classList.add('is-error');
						validationFlag = false;
					}
				});
			}
		
			if(!validationFlag) {return false;}
		});
	}

	if (selectWrapper) {

		document.addEventListener('click', function(e) {
			let target = e.target;
			let select = selectWrapper || selectWrapper.contains(target);

			if (select) {
				Array.from(selectWrapper).forEach(function(select) {
					select.classList.remove('is-active');
				});
			}
		});

		Array.from(selectWrapper).forEach(function(select) {
			select.addEventListener('click', function(e) {
				e.stopPropagation();
				this.classList.toggle('is-active');
			});
		});

		function checkOptionsActiveClass(option) {
			if (option.classList.contains('is-active')) {
				option.classList.remove('is-active');
			} else {
				Array.from(selectOptions).forEach(function(item) {
					item.classList.remove('is-active')
				});
				option.classList.add('is-active');
			}
		}

		Array.from(selectOptions).forEach(function(option) {

			option.addEventListener('click', function() {
				let value = this.getAttribute('data-value');
				let input = this.closest('.form-group__select').querySelector('.form-select__input');
				let textResult = this.closest('.form-group__select').querySelector('.select-result');
				let label = input.closest('.form-label');

				input.value = value;

				checkOptionsActiveClass(this);
				
				if (label) {
					label.classList.add('is-active');
				}
				
				if (textResult) {
					textResult.innerHTML = value;
				}
			});
		});

	}

	// Game tile sliders
	

	// Scrollable game card title
	const gameCards = document.querySelectorAll('.game-card');

	function getTextWidth(element) {
		const tempElement = document.createElement('span');
		tempElement.style.visibility = 'hidden';
		tempElement.style.whiteSpace = 'nowrap';
		tempElement.innerHTML = element.innerHTML;
		document.body.appendChild(tempElement);
		const width = tempElement.offsetWidth;
		document.body.removeChild(tempElement);
		return width;
	}	

	gameCards.forEach(function(gameCard) {
		let gameCardTitle = gameCard.querySelector('.game-card__title');
		let gameCardTitleSpan = gameCardTitle.querySelector('SPAN');

		const textWidth = gameCardTitleSpan.offsetWidth;
		const textWidthTitle = gameCardTitle.clientWidth;

		gameCard.addEventListener('mouseenter', () => {

			const containerWidth = gameCard.clientWidth;

			if (textWidth > containerWidth) {
				const animationDistance = textWidthTitle - textWidth;
				gameCardTitleSpan.style.transition = `transform 4s linear`;
				gameCardTitleSpan.style.transform = `translateX(${animationDistance}px)`;
			}
		});

		gameCard.addEventListener('mouseleave', () => {
			gameCardTitleSpan.style.transition = 'none';
			gameCardTitleSpan.style.transform = 'translateX(0)';
		});
		

	});

	// Game
	const gameFrame = document.getElementById('gamebox');

	const game = document.querySelector('#gamebox iframe');
	const playGameBtn = document.querySelector('.js-play-game-btn');

	const fullscreenBtn = document.querySelector('.js-fullscreen-btn');

	
	if (game) {
		playGameBtn.addEventListener('click', function(e) {
			e.preventDefault();
			const gameSrc = this.getAttribute('data-game-src');
			game.setAttribute('src', gameSrc);

			game.addEventListener('load', function(e) {
				let iframe = this;
				iframe.closest('#gamebox').querySelector('.game-demo-play__preview').classList.add('is-hidden');	
			});
		});

	
	}

	// toggle rate game btns
	const gameRateBtns = document.querySelectorAll('.game-rate-btn');

	if (gameRateBtns) {
		gameRateBtns.forEach(function(gameRateBtn) {
			gameRateBtn.addEventListener('click', function() {
				this.classList.toggle('is-active');
			});
		});
	}

	if (fullscreenBtn) {
		fullscreenBtn.addEventListener('click', function(e) {
			e.preventDefault();

			if (!gameFrame) {return;}

			if (gameFrame.requestFullscreen) {
				if (!document.fullscreenElement) {
						gameFrame.requestFullscreen();
						gameFrame.classList.add('is-fullscreen');
						gameFrame.classList.add('is-fullscreen');
				} else {
						document.exitFullscreen();
						gameFrame.classList.remove('is-fullscreen');
				}
			} else if (gameFrame.webkitRequestFullScreen) {
				if (!document.webkitIsFullScreen) {
						gameFrame.webkitRequestFullScreen();
						gameFrame.classList.add('is-fullscreen');
				} else {
						if (document.webkitExitFullscreen) {
								document.webkitExitFullscreen();
								gameFrame.classList.remove('is-fullscreen');
						}
				}
			}
		});
	}


	// scroll to discord
	const scrollToDiscordBtn = document.querySelector('.js-chat-btn');

	if (scrollToDiscordBtn) {
		

		scrollToDiscordBtn.addEventListener('click', function() {
			const gameChatBlock = document.getElementById('gameChat');
			if (gameChatBlock) {
				gameChatBlock.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}

	// Scrollable categories navigation
	let metrics = {};
	let scrollOffset = 0;
	let container = document.querySelector('.js-scroll-nav-categories');


	if(container) {

		const bar = container.querySelector('UL');
		const btnPrev = document.querySelector('.js-nav-cats-scroll-btn-prev');
		const btnNext = document.querySelector('.js-nav-cats-scroll-btn-next');

		function setMetrics() {
				metrics = {
				bar: bar.scrollWidth||0,
				container: container.clientWidth||0,
				left: parseInt(bar.offsetLeft),
				getHidden: function() {
					return (this.bar+this.left)-this.container;
				}
			}

			updateArrows();
		}

		function doSlide(direction){
			setMetrics();

			var pos = metrics.left;

			if (direction==="right") {
				amountToScroll = -(Math.abs(pos) + Math.min(metrics.getHidden(), metrics.container));
			}
			else {
				amountToScroll = Math.min(0, (metrics.container + pos));
			}

			bar.style.left = amountToScroll + "px";


		}

		

		function updateArrows() {
	
			if (metrics.getHidden() === 0) {
				btnNext.classList.add('is-disabled');
			}
			else {
				btnNext.classList.remove('is-disabled');
			}

			if (metrics.left === 0) {
				btnPrev.classList.add('is-disabled');
			}
			else {
				btnPrev.classList.remove('is-disabled');
			}
		}

		function adjust(){
			bar.style.left = 0;
			setMetrics();
			updateArrows();
		}

		btnNext.addEventListener('click', function(e){
			e.preventDefault();
			doSlide('right');
			btnPrev.classList.remove('is-disabled');
		});

		btnPrev.addEventListener('click', function(e){
			e.preventDefault();
			doSlide('left');
		});


		setMetrics();



	}

});
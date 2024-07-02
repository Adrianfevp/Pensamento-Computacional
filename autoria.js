const autorOptions = document.querySelectorAll('.autor-option');
		const autorOptionsContainer = document.querySelector('.autor-options');
		const infoContainer = document.getElementById('info-container');
		let isDragging = false;
		let startX, scrollLeft;

		const autorInfo = {
			'adrian-fernando': 'Realizou as páginas de filmes e catálogo, de turing e a página dos autores.',
			'arthur-de-moraes':'Deu ideias de criação e layout das páginas.',
			'gustavo-felchner': 'Realizou a pesquisa historica e a página inicial.',
			'matheus-campos':'Realizou a organização nos arquivos css e arrumou os backgrounds.',
			'iohan-stenger':'Realizou as páginas da linha do tempo e a de turing.',
			'italo-terue': 'Realizou o header das páginas, a linha do tempo e a logo.',
			'professor-thiago': 'Professor auxiliar',
		};

		autorOptions.forEach(option => {
			option.addEventListener('click', () => {
				autorOptions.forEach(opt => opt.classList.remove('selected'));
				option.classList.add('selected');
				const autorId = option.id;
				infoContainer.innerHTML = `<p>${autorInfo[autorId]}</p>`;
			});
		});

		autorOptionsContainer.addEventListener('mousedown', (e) => {
			isDragging = true;
			startX = e.pageX - autorOptionsContainer.offsetLeft;
			scrollLeft = autorOptionsContainer.scrollLeft;
		});

		autorOptionsContainer.addEventListener('mouseleave', () => {
			isDragging = false;
		});

		autorOptionsContainer.addEventListener('mouseup', () => {
			isDragging = false;
		});

		autorOptionsContainer.addEventListener('mousemove', (e) => {
			if (!isDragging) return;
			e.preventDefault();
			const x = e.pageX - autorOptionsContainer.offsetLeft;
			const walk = (x - startX) * 2;
			autorOptionsContainer.scrollLeft = scrollLeft - walk;
		});
export const data = [
	{
		title: 'Рожденные 17 числа...',
		description:
			'Человек эстет, окружает себя красотой. Таким людям важна поддержка и восхищение ими..',
		image: './assets/1.jpeg',
	},
	{
		title: 'Девушки рожденные 15 чиста.. ',
		description: 'Сексуальны, харизматичны, нравятся и мужчинам и женщинам. Вам дана молодость и красота...',
		image: './assets/2.jpeg',
	},
	{
		title: '7 Семерки',
		description: 'обязательно делать, не оставлятьситуацию в подвешенном состоянии',
		image: './assets/3.jpeg',
	},
	{
		title: 'Число 22',
		description: 'Обязательно берем ответственность на себя',
		image: './assets/4.jpeg',
	},
	{
		title: 'С 18...',
		description: 'будьте аккуратны и нежны, они очень мнительные и переживательные',
		image: './assets/5.jpeg',
	},
	{
		title: 'Для людей 5 и 9',
		description: 'обязательно обучаться на протяжении всей жизни',
		image: './assets/6.avif',
	},
	{
		title: '8 восьмерки',
		description: 'борцы за справедливость, обязательно жить по законам',
		image: './assets/7.avif',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
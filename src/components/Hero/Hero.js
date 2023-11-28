import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, HeroDescription } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>Ваш нумеролог</MainHeading>
				<HeroText>
                 Числа  не управляют миром, но показывают, как управляется мир (Гёте)
				</HeroText>
				<HeroDescription>
					Это не про гадание, это не про карты таро, это не про магию и даже не про ясновидения.
					Мы определяем соответсвующие Вам энергии на основании конкретных чисел и предлагаем подходы к корректировке образа жизни.
				</HeroDescription>
			</Container>
		</HeroSection>
	);
};

export default Hero;
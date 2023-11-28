import React from 'react';

import { GrDiamond } from "react-icons/gr";
import { FaChild } from "react-icons/fa";
import { GiCharacter } from "react-icons/gi";
import { GiSpikedFence } from "react-icons/gi";
import { PiTarget } from "react-icons/pi";
import { FaSackDollar } from "react-icons/fa6";
import { FcServices } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { GiAcorn } from "react-icons/gi";
import { GiAnvilImpact } from "react-icons/gi";
import { GiAirplaneArrival } from "react-icons/gi";
import { GiAirplaneDeparture } from "react-icons/gi";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Психологический портрет',
		description: 'Сформируем описание внутреннего склада и возможных поступков в определенных значимых обстоятельствах',
		icon: iconStyle(GrDiamond),
		imgClass: 'one',
	},
	{
		name: 'Детство',
		description: 'Заглянем в основные этапы формирования Вас как личности и человека',
		icon: iconStyle(FaChild),
		imgClass: 'two',
	},
	{
		name: 'Характер',
		description: 'Определим Ваши сильные и слабые стороны',
		icon: iconStyle(GiCharacter),
		imgClass: 'three',
	},
	{
		name: 'Точка препятствия',
		description: '',
		icon: iconStyle(GiSpikedFence),
		imgClass: 'four',
	},
	{
		name: 'Устремления человека',
		description: '',
		icon: iconStyle(FaSackDollar),
		imgClass: 'five',
	},
	{
		name: 'Социальная задача',
		description:
			'',
		icon: iconStyle(PiTarget),
		imgClass: 'six',
	},
	{
		name: 'Призвание',
		description:
			'Выясним где "заложены" большие деньги',
		icon: iconStyle(FcServices),
		imgClass: 'seven',
	},
	{
		name: 'Духовное призвание / Хобби',
		description:
			'',
		icon: iconStyle(FcIdea),
		imgClass: 'eight',
	},
	{
		name: 'Зона комфорта',
		description:
			'',
		icon: iconStyle(GiAcorn),
		imgClass: 'nine',
	},
	{
		name: 'Инструменты достижения цели',
		description:
			'',
		icon: iconStyle(GiAnvilImpact),
		imgClass: 'ten',
	},
	{
		name: 'Отрицательные слои кармы',
		description:
			'',
		icon: iconStyle(GiAirplaneArrival),
		imgClass: 'eleven',
	},
	{
		name: 'Положительные слои кармы',
		description:
			'',
		icon: iconStyle(GiAirplaneDeparture),
		imgClass: 'twelve',
	},
];
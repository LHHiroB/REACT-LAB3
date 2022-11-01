import React from "react";
import Item from "./Item";

import wDrum from "./imgs/not.png";
import aDrum from "./imgs/not.png";
import sDrum from "./imgs/not.png";
import dDrum from "./imgs/not.png";
import jDrum from "./imgs/not.png";
import kDrum from "./imgs/not.png";
import lDrum from "./imgs/not.png";


import tom1 from "./sounds/040.wav";
import tom2 from "./sounds/041.wav";
import tom3 from "./sounds/043.wav";
import tom4 from "./sounds/044.wav";
import snare from "./sounds/047.wav";
import crash from "./sounds/049.wav";
import kickbass from "./sounds/055.wav";


function ItemList() {
	const imgs = [wDrum, aDrum, sDrum, dDrum, jDrum, kDrum, lDrum];
	const sounds = [tom1, tom2, tom3, tom4, snare, crash, kickbass];

	document.addEventListener("keypress", (e) => {
		let key = e.keyCode;
		console.log(key);
		switch (key) {
			case 119:
				let wSound = new Audio(tom1);
				wSound.play();
				break;
			case 97:
				let aSound = new Audio(tom2);
				aSound.play();
				break;
			case 115:
				let sSound = new Audio(tom3);
				sSound.play();
				break;
			case 100:
				let dSound = new Audio(tom4);
				dSound.play();
				break;
			case 106:
				let jSound = new Audio(snare);
				jSound.play();
				break;
			case 107:
				let kSound = new Audio(crash);
				kSound.play();
				break;
			case 108:
				let lSound = new Audio(kickbass);
				lSound.play();
				break;
			
			default:
				wSound.play();
		}
	});

	return (
		<div className="ItemList">
			{imgs.map(function (img, index) {
				return <Item ImgSrc={img} SoundSrc={sounds[index]} />;
			})}
		</div>
	);
}

export default ItemList;

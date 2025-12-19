async function typing(element, texts, options = {}) {
	if (options.random && typeof options.speed !== 'object') 
		throw new Error('enter a range for speed such as [100, 500]')

	const el = document.querySelector(element);
	const speed = options.speed || 100;
	let n = 0;

	if (options.pointer) {
		const style = document.createElement('style');
		style.innerHTML = `${element}::after{content:'|';padding-left:4px;padding-right:4px;animation:pulse 1s cubic-bezier(1, 0, 0, 1) infinite;}@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0;}}`;
		document.head.append(style);
	}

	while (options.loop || n < 1) {
		n++;
		for (const text of texts) {
			for (let i = 0; i < text.length; i++) {
				el.textContent += text[i];
				const randomSpeed = options.random ? Math.floor(Math.random() * ((speed[1] - speed[0]) + speed[0])) : speed;
				await new Promise(resolve => setTimeout(resolve, randomSpeed));
			}
			await new Promise(resolve => setTimeout(resolve, options.delay || 3000)); // add a 3-second pause after each text
			if (options.delete) 
				for (let i = text.length; i >= 0; i--) {
					el.textContent = text.slice(0, i);
					const randomSpeed = options.random ? Math.floor(Math.random() * ((speed[1] - speed[0]) + speed[0])) : speed;
					await new Promise(resolve => setTimeout(resolve, randomSpeed));
				}
			await new Promise(resolve => setTimeout(resolve, options.break || 0));
		}
	}
}

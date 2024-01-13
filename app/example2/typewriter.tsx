"use client";
import { useEffect, useState, useCallback } from "react";

export default function Typewriter({ texts, classNames }: any) {
	const [typingText, setTypingText] = useState("");

	const typeText = useCallback(
		(index: number, erase: boolean) => {
			let i = erase ? texts[index].length : 0;
			const step = erase ? -1 : 1;

			const intervalId = setInterval(() => {
				if ((erase && i >= 0) || (!erase && i <= texts[index].length)) {
					const currentText = texts[index].substring(0, i);
					setTypingText(currentText);
					i += step;
				} else {
					clearInterval(intervalId);

					setTimeout(() => {
						if (!erase) {
							typeText(index, !erase);
						} else {
							typeText((index + 1) % texts.length, !erase);
						}
					}, 1000);
				}
			}, 100);
		},
		[texts]
	);

	useEffect(() => {
		typeText(0, false);
	}, [typeText]);

	return (
		<div className={classNames}>
			<span>
				{typingText}
				<span className="cursor">|</span>
			</span>
		</div>
	);
}

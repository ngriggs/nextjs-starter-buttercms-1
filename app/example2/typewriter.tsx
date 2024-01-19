"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// export default function Typewriter({ texts, classNames }: any) {
// 	const [typingText, setTypingText] = useState("");

// 	const typeText = useCallback(
// 		(index: number, erase: boolean) => {
// 			let i = erase ? texts[index].length : 0;
// 			const step = erase ? -1 : 1;

// 			const intervalId = setInterval(() => {
// 				setTypingText((prevText) => {
// 					const currentText = texts[index].substring(0, i);
// 					i += step;
// 					return currentText;
// 				});
// 			}, 100); // Increase interval duration for slower typing

// 			return intervalId;
// 		},
// 		[texts]
// 	);

// 	const startTyping = useCallback(() => {
// 		let currentIntervalId: NodeJS.Timeout | null = null;

// 		const typeAndSwitch = (index: number, erase: boolean) => {
// 			currentIntervalId = typeText(index, erase);

// 			setTimeout(
// 				() => {
// 					clearInterval(currentIntervalId!);

// 					setTimeout(() => {
// 						if (!erase) {
// 							typeAndSwitch(index, !erase);
// 						} else {
// 							typeAndSwitch((index + 1) % texts.length, !erase);
// 						}
// 					}, 1000); // Increase timeout duration for slower transitions
// 				},
// 				erase ? 500 : 500
// 			); // Increase timeout duration for slower transitions
// 		};

// 		typeAndSwitch(0, false);

// 		return () => {
// 			currentIntervalId && clearInterval(currentIntervalId);
// 		};
// 	}, [typeText, texts]);

// 	useEffect(() => {
// 		const cleanup = startTyping();
// 		return cleanup;
// 	}, [startTyping]);

// 	return (
// 		<div className={classNames}>
// 			<span>
// 				{typingText}
// 				<span className="cursor">|</span>
// 			</span>
// 		</div>
// 	);
// }

interface Props {
	texts: string[];
	className?: string;
}
const typeText = (
	index: number,
	erase: boolean,
	texts: string[],
	setTypingText: React.Dispatch<React.SetStateAction<string>>
) => {
	let i = erase ? texts[index].length : 0;
	const step = erase ? -1 : 1;
	let intervalId: NodeJS.Timeout | null = null;

	const startTypeText = () => {
		intervalId = setInterval(() => {
			if ((erase && i >= 0) || (!erase && i <= texts[index].length)) {
				const currentText = texts[index].substring(0, i);
				setTypingText(currentText);
				i += step;
			} else {
				clearInterval(intervalId!);
				setTimeout(() => {
					if (!erase) {
						typeText(index, !erase, texts, setTypingText);
					} else {
						typeText((index + 1) % texts.length, !erase, texts, setTypingText);
					}
				}, 1000);
			}
		}, 100);
	};

	startTypeText();

	return () => {
		if (intervalId !== null) {
			clearInterval(intervalId);
		}
	};
};

export default function Typewriter({ texts, className }: Props) {
	const [typingText, setTypingText] = useState("");
	let cleanupFunction: () => void;

	useEffect(() => {
		cleanupFunction = typeText(0, false, texts, setTypingText);
		return () => {
			cleanupFunction();
		};
	}, [typeText, texts]);
	return (
		<div className={cn(className, "")}>
			<span>
				{typingText}
				<span className="cursor">|</span>
			</span>
		</div>
	);

	// rest of the code
}
// export default function Typewriter({ texts, classNames }: any) {
// 	const [typingText, setTypingText] = useState("");

// 	const typeText = useCallback(
// 		(index: number, erase: boolean) => {
// 			let i = erase ? texts[index].length : 0;
// 			const step = erase ? -1 : 1;

// 			const intervalId = setInterval(() => {
// 				if ((erase && i >= 0) || (!erase && i <= texts[index].length)) {
// 					const currentText = texts[index].substring(0, i);
// 					setTypingText(currentText);
// 					i += step;
// 				} else {
// 					clearInterval(intervalId);

// 					setTimeout(() => {
// 						if (!erase) {
// 							typeText(index, !erase);
// 						} else {
// 							typeText((index + 1) % texts.length, !erase);
// 						}
// 					}, 1000);
// 				}
// 			}, 100);
// 		},
// 		[texts]
// 	);

// 	useEffect(() => {
// 		typeText(0, false);
// 	}, [typeText]);

// 	return (
// 		<div className={classNames}>
// 			<span>
// 				{typingText}
// 				<span className="cursor">|</span>
// 			</span>
// 		</div>
// 	);
// }

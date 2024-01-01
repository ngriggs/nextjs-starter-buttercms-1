"use client";
import React, { FormEvent } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ColorForm: React.FC = () => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevents the default form submission behavior

		// Get values from form inputs
		const hueInput = document.getElementById("hue") as HTMLInputElement;
		const saturationInput = document.getElementById(
			"saturation"
		) as HTMLInputElement;
		const lightnessInput = document.getElementById(
			"lightness"
		) as HTMLInputElement;

		const hue = hueInput.value;
		const saturation = saturationInput.value;
		const lightness = lightnessInput.value;

		// Validate and update HSL string
		if (isValidHSLValues(hue, saturation, lightness)) {
			const hslString = `${hue} ${saturation}% ${lightness}%`;
			document.documentElement.style.setProperty("--primary", hslString);
		} else {
			alert("Invalid HSL values. Please enter valid numbers.");
		}
	};

	const isValidHSLValues = (
		hue: string,
		saturation: string,
		lightness: string
	): boolean => {
		// Validate the input values (you can add more specific validation if needed)
		return (
			!isNaN(Number(hue)) &&
			!isNaN(Number(saturation)) &&
			!isNaN(Number(lightness))
		);
	};

	return (
		<form id="colorForm" onSubmit={handleSubmit} className="max-w-xs mx-auto">
			<Label htmlFor="hue">Hue:</Label>
			<Input type="number" id="hue" name="hue" min="0" max="360" />

			<Label htmlFor="saturation">Saturation:</Label>
			<Input
				type="number"
				id="saturation"
				name="saturation"
				min="0"
				max="100"
			/>

			<Label htmlFor="lightness">Lightness:</Label>
			<Input type="number" id="lightness" name="lightness" min="0" max="100" />

			<Button variant="default" type="submit" className="mt-10">
				Update Theme Color
			</Button>
		</form>
	);
};

export default ColorForm;

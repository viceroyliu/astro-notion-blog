const dateOptions = {
	date: {
		locale: "en",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

const dateFormat = new Intl.DateTimeFormat(dateOptions.date.locale, dateOptions.date.options);

export function getFormattedDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
	// 如果没有传入选项，使用默认的年月日格式
	if (!options) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");

		return `${year}-${month}-${day}`;
	}

	// 如果传入了选项，使用传入的选项
	return date.toLocaleDateString("zh-CN", options);
}

export function getFormattedDateWithTime(date: string | number | Date) {
	const ObjDate = new Date(date);

	// Check if the date string contains a 'T' or if it's a number or Date object
	let showTime = false;
	if (typeof date === "string") {
		showTime = date.includes("T");
	} else {
		// For number or Date types, we assume time might be relevant
		showTime = true;
	}

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
		...(showTime && { hour: "2-digit", minute: "2-digit", hour12: true }),
	};

	const formattedDate = ObjDate.toLocaleString("en-US", options);
	return formattedDate;
}

export function areDifferentDates(date1: string | number | Date, date2: string | number | Date) {
	const d1 = new Date(date1);
	const d2 = new Date(date2);

	// Compare only the date parts (year, month, and day)
	return (
		d1.getFullYear() !== d2.getFullYear() ||
		d1.getMonth() !== d2.getMonth() ||
		d1.getDate() !== d2.getDate()
	);
}

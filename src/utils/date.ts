export function getFormattedDate(
	date: Date | string,
	options?: Intl.DateTimeFormatOptions,
): string {
	// 若为字符串或其它类型，转换为Date对象
	let realDate: Date;
	if (date instanceof Date) {
		realDate = date;
	} else {
		realDate = new Date(date);
	}
	// 修正点：NaN判断，防止非法date类型时报空
	if (isNaN(realDate.getTime())) return "";

	if (!options) {
		const year = realDate.getFullYear();
		const month = String(realDate.getMonth() + 1).padStart(2, "0");
		const day = String(realDate.getDate()).padStart(2, "0");
		return `${year}.${month}.${day}`;
	}
	// 修正点：为保证兼容性这里依然返回zh-CN格式（你原逻辑就是这样）
	return realDate.toLocaleDateString("zh-CN", options);
}

// 基本逻辑不变，仅类型防御优化
export function getFormattedDateWithTime(date: string | number | Date) {
	const ObjDate = new Date(date);

	// 修正点: 非法输入处理
	if (isNaN(ObjDate.getTime())) return "";

	// 保持原逻辑：字符串含T显示时间，否则只显示日期
	let showTime = false;
	if (typeof date === "string") {
		showTime = date.includes("T");
	} else {
		// 若为数值或Date类型，默认展示时间
		showTime = true;
	}

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
		...(showTime && { hour: "2-digit", minute: "2-digit", hour12: true }),
	};

	return ObjDate.toLocaleString("zh-CN", options);
}

// 逻辑原样，仅增加日期对象合法性校验
export function areDifferentDates(date1: string | number | Date, date2: string | number | Date) {
	const d1 = new Date(date1);
	const d2 = new Date(date2);

	// 修正点: 若有任意日期解析失败，也返回不同
	if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return true;

	// 只比较年月日
	return (
		d1.getFullYear() !== d2.getFullYear() ||
		d1.getMonth() !== d2.getMonth() ||
		d1.getDate() !== d2.getDate()
	);
}

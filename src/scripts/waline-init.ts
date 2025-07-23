// eslint-disable-next-line no-undef
(window as any).__VUE_OPTIONS_API__ = true;
// eslint-disable-next-line no-undef
(window as any).__VUE_PROD_DEVTOOLS__ = false;
// eslint-disable-next-line no-undef
(window as any).__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

import { init } from "@waline/client";
import "@waline/client/style";
import type { WalineInitOptions } from "@waline/client";

declare global {
	interface Window {
		initWaline: (config: WalineInitOptions) => void;
	}
}

window.initWaline = function (config: WalineInitOptions): void {
	try {
		init(config);
		console.log("Waline initialized successfully");
	} catch (error) {
		console.error("Waline init error:", error);
		const walineElement = document.getElementById("waline-comments");
		if (walineElement) {
			walineElement.innerHTML =
				'<p style="color: #999; text-align: center; padding: 20px;">评论系统初始化失败: ' +
				(error instanceof Error ? error.message : String(error)) +
				"</p>";
		}
	}
};

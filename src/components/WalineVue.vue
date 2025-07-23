<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { init, type WalineInitOptions } from "@waline/client";
import "@waline/client/style";

// Props 类型
const props = defineProps<WalineInitOptions & { path: string }>();
const container = ref<HTMLElement | null>(null);
let destroy: any;
let observer: MutationObserver | null = null;

// 属性清理工具，你可以保留你的实现
function cleanWalineProps(propsObj: Record<string, any>) {
	const filtered = { ...propsObj };
	['highlighter', 'imageUploader', 'texRenderer'].forEach((key) => {
		if (typeof filtered[key] === "boolean") {
			delete filtered[key];
		}
	});
	return filtered;
}

// 挂载 Waline
function mountWaline() {
	if (!container.value) return;
	if (destroy) destroy();
	destroy = init({ ...cleanWalineProps(props), el: container.value });
}

// 切换主题监听
function setupDarkAutoWatcher() {
	const html = document.documentElement;
	const checkAndSetTheme = () => {
		const isDark = html.classList.contains("dark");
		if (destroy && typeof destroy.setTheme === "function") {
			destroy.setTheme(isDark ? "dark" : "light");
			console.log('切换主题', isDark ? "dark" : "light");
		}
	};
	observer = new MutationObserver(checkAndSetTheme);
	observer.observe(html, { attributes: true, attributeFilter: ["class"] });

	// 首次mount时立即同步
	checkAndSetTheme();
}

onMounted(() => {
	mountWaline();
	// 如果props.dark为'auto'，才开启watcher
	if (props.dark === "auto") {
		setupDarkAutoWatcher();
	}
});

// 监听props变化重新init
watch(
	() => [props.serverURL, props.path, props.dark],
	() => {
		mountWaline();
		// 检查是否需要更新Watcher
		if (props.dark === "auto") {
			if (!observer) setupDarkAutoWatcher();
		} else {
			if (observer) {
				observer.disconnect();
				observer = null;
			}
			// 非auto时立即手动setTheme
			if (destroy && typeof destroy.setTheme === "function") {
				destroy.setTheme(props.dark);
			}
		}
	}
);

onBeforeUnmount(() => {
	if (observer) observer.disconnect();
	if (destroy) destroy();
});
</script>

<template>
	<div ref="container"></div>
</template>

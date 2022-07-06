import {
	enUS,
	zhCN,
	dateEnUS,
	dateZhCN,
	darkTheme,
	GlobalTheme
} from 'naive-ui'
import { ref } from 'vue'

const theme = ref<GlobalTheme | null>(null)
const lang = ref(zhCN)
const dateLang = ref(dateZhCN)

const changeTheme = () => {
	if (theme.value === null) {
		theme.value = darkTheme as GlobalTheme
	} else {
		theme.value = null
	}
}
const changeLang = () => {
	console.log('lang', lang.value)
	if (lang.value.name === 'zh-CN') {
		lang.value = enUS
	} else {
		lang.value = zhCN
	}
}

const changeDateLang = () => {
	console.log('dateLang', dateLang.value)
	if (dateLang.value.name === 'zh-CN') {
		dateLang.value = dateEnUS
	} else {
		dateLang.value = dateZhCN
	}
}

export default () => {
	return {
		theme,
		lang,
		dateLang,
		changeTheme,
		changeLang,
		changeDateLang,
	}
}

// export default {
// }
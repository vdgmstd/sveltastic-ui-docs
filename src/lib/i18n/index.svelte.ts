import en from './locales/en.json';
import ru from './locales/ru.json';

const messages = { en, ru } as const;
export type Locale = keyof typeof messages;
export const LOCALES: readonly Locale[] = ['en', 'ru'];

export type TParams = Record<string, string | number>;

class I18n {
	locale = $state<Locale>('en');

	t(key: string, params?: TParams): string {
		const raw = key
			.split('.')
			.reduce<unknown>(
				(acc, k) => (acc as Record<string, unknown> | undefined)?.[k],
				messages[this.locale]
			);
		const message = typeof raw === 'string' ? raw : key;
		if (!params) return message;
		return message.replace(/\{(\w+)\}/g, (_, name: string) => {
			const value = params[name];
			return value === undefined ? `{${name}}` : String(value);
		});
	}

	setLocale(next: Locale): void {
		this.locale = next;
	}

	toggle(): void {
		this.locale = this.locale === 'en' ? 'ru' : 'en';
	}
}

export const i18n = new I18n();
export const t = (key: string, params?: TParams): string => i18n.t(key, params);

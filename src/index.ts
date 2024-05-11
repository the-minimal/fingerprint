declare const window: any;
declare const navigator: any;
declare const screen: any;
declare const global: any;
declare const process: any;

let FINGERPRINT = "";

export const createFingerPrint = () => {
	if (FINGERPRINT === "") {
		if (typeof global !== "undefined") {
			FINGERPRINT += Object.keys(global).join("");
		}

		if (typeof window !== "undefined") {
			FINGERPRINT += Object.keys(window).join("");
		}

		if (typeof performance !== "undefined") {
			FINGERPRINT += performance?.toJSON() ?? performance.timeOrigin;
		}

		if (typeof Intl !== "undefined") {
			FINGERPRINT += Intl.DateTimeFormat().resolvedOptions().timeZone;
		}

		if (typeof process !== "undefined") {
			FINGERPRINT += `${process.pid}${process.ppid}${process.arch}${
				process.platform
			}${process.version}${Object.values(process.env ?? {}).join("")}`;
		}

		if (typeof navigator !== "undefined") {
			FINGERPRINT += `${navigator.userAgent}${navigator.languages}${navigator.platform}`;
		}

		if (typeof screen !== "undefined") {
			FINGERPRINT += `${screen.width}${screen.height}`;
		}
	}

	return FINGERPRINT;
};

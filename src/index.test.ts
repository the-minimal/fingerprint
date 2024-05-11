import { describe, expect, it } from "vitest";
import { createFingerPrint } from "./index.js";

describe("createFingerPrint", () => {
	const fingerprint = createFingerPrint();

	it("should create fingerprint", () => {
		expect(fingerprint).toBeTruthy();
		expect(fingerprint).toBeTypeOf("string");
	});
});

import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/constants.ts",
		"src/utils/getHoliday.ts",
		"src/utils/getHolidaysByYear.ts",
		"src/utils/holidaysWithinInterval.ts",
		"src/utils/isHoliday.ts",
	],
	format: ["esm"],
	outDir: "dist",
	dts: true,
	bundle: true,
	splitting: false,
	sourcemap: false,
	clean: true,
	treeshake: true,
});

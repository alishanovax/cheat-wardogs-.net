import { tv } from "tailwind-variants";

export const prose = tv({
  /** Width is opt-in (e.g. max-w-3xl); pages that need a reading column should set it explicitly. */
  base: "sw-prose w-full max-w-none",
});

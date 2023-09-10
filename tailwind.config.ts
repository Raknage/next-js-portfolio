import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        starship: {
          "50": "#fdfde9",
          "100": "#f9fac7",
          "200": "#f7f491",
          "300": "#f2e750",
          DEFAULT: "#f2e750",
          "400": "#ecd623",
          "500": "#ddbe15",
          "600": "#be9610",
          "700": "#986c10",
          "800": "#7e5715",
          "900": "#6b4718",
          "950": "#3e250a",
        },
        hokeypokey: {
          "50": "#fbf7eb",
          "100": "#f5eccc",
          "200": "#edd79b",
          "300": "#e3bb61",
          "400": "#d9a036",
          DEFAULT: "#d9a036",
          "500": "#c98a29",
          "600": "#ad6b21",
          "700": "#8b4e1d",
          "800": "#743f1f",
          "900": "#633620",
          "950": "#391b0f",
        },
        kumera: {
          "50": "#fafaec",
          "100": "#f4f3cd",
          "200": "#eae59e",
          "300": "#ded266",
          "400": "#d2bc3d",
          "500": "#c3a72f",
          "600": "#a88526",
          "700": "#8c6723",
          DEFAULT: "#8c6723",
          "800": "#705023",
          "900": "#614422",
          "950": "#382310",
        },
        woodrush: {
          "50": "#f8faec",
          "100": "#eef3ce",
          "200": "#e1e8a0",
          "300": "#d6db69",
          "400": "#cecf40",
          "500": "#c0ba32",
          "600": "#a59629",
          "700": "#847024",
          "800": "#6f5b24",
          "900": "#5f4c24",
          "950": "#403014",
          DEFAULT: "#403014",
        },
        codgray: {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#0d0d0d",
          DEFAULT: "#0d0d0d",
        },
        desert: {
          "50": "#fdf9ed",
          "100": "#f9eccc",
          "200": "#f2d895",
          "300": "#ecbe5d",
          "400": "#e7a738",
          "500": "#df8821",
          "600": "#c5671a",
          "700": "#b14f1b",
          "800": "#863a1a",
          "900": "#6e3119",
          "950": "#3f1709",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

/*https://uicolors.app/edit?sv1=
cod-gray:50-f6f6f6/100-e7e7e7/200-d1d1d1/300-b0b0b0/400-888888/500-6d6d6d/600-5d5d5d/700-4f4f4f/800-454545/900-3d3d3d/950-0d0d0d;
woodrush:50-f8faec/100-eef3ce/200-e1e8a0/300-d6db69/400-cecf40/500-c0ba32/600-a59629/700-847024/800-6f5b24/900-5f4c24/950-403014;
starship:50-fdfde9/100-f9fac7/200-f7f491/300-f2e750/400-ecd623/500-ddbe15/600-be9610/700-986c10/800-7e5715/900-6b4718/950-3e250a;
kumera:50-fafaec/100-f4f3cd/200-eae59e/300-ded266/400-d2bc3d/500-c3a72f/600-a88526/700-8c6723/800-705023/900-614422/950-382310;
hokey-pokey:50-fbf7eb/100-f5eccc/200-edd79b/300-e3bb61/400-d9a036/500-c98a29/600-ad6b21/700-8b4e1d/800-743f1f/900-633620/950-391b0f;
desert:50-fdf9ed/100-f9eccc/200-f2d895/300-ecbe5d/400-e7a738/500-df8821/600-c5671a/700-b14f1b/800-863a1a/900-6e3119/950-3f1709
*/

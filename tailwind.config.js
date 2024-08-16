/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "swiphr-purple": "#6E15B5",
      "primaryPurple600": "#9623FA",
      "primary-purple-700": "#8113DD",
      "Primary-purple-100": "#F3E6FF",
      "neutrals-white-50": "#FFFFFF",
      "text-white-0": "#FFFFFF",
      "bg-white-0": "#FFFFFF",
      "bg-weak-100": "#F6F8FA",
      "bg-black-0": "#20232D",
      "bg-surface-700": "#20232D",
      "neutrals-white-100": "#EFEFEF",
      "neutrals-white-200": "#DCDCDC",
      "body-white": "#F9FAFB",
      "stroke-soft-200": "#E2E4E9",
      "stroke-soft-300": "#CDD0D5",
      "text-sub-500": "#525866",
      "text-soft-400": "#868C98",
      "text-main-900": "#0A0D14",
      "iconSoft400": "#868C98",
      "backgroundGrey": " #F9FAFB",
      "redBase":  "#DF1C41",
      "primaryBase":"#375DFB"

    },
    // fontFamily: {
    //   Inter: ['Inter', 'sans-serif'],
    // },
    extend: {
      height:{
        'inherit': 'inherit'
      }
    },
  },
  plugins: [],
}


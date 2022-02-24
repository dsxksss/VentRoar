module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        tilt: "tilt 8s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%,50%,100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(4deg)",
          },
          "75%": {
            transform: "rotate(-4deg)",
          },
        },
      },
      backgroundImage: {
        t1: "url('./src/img/t1.png')",
        t2: "url('./src/img/t2.jpg')",
        t3: "url('./src/img/t3.jpg')",
        t4: "url('./src/img/t4.jpg')",
      },
    },
  },
  plugins: [],
};

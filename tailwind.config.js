module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        tilt: "tilt 4s infinite linear",
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
        t5: "url('./src/img/t5.jpg')",
        t6: "url('./src/img/t6.jpg')",
        t7: "url('./src/img/t7.jpg')",
        t8: "url('./src/img/t8.jpg')",
        t9: "url('./src/img/t9.jpg')",
        t10: "url('./src/img/t10.jpg')",
      },
    },
  },
  plugins: [],
};

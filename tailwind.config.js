module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        code: ['Fira Code']
      },
      colors: {
        fluent: {
          220: '#11100f',
          210: '#161514',
          200: '#1b1a19',
          190: '#201f1e',
          180: '#252423',
          170: '#292827',
          160: '#323130',
          150: '#3b3a39',
          140: '#484644',
          130: '#605e5c',
          120: '#797775',
          110: '#8a8886',
          100: '#979593',
          90: '#a19f9d',
          80: '#b3b0ad',
          70: '#bebbb8',
          60: '#c8c6c4',
          50: '#d2d0ce',
          40: '#e1dfdd',
          30: '#edebe9',
          20: '#f3f2f1',
          10: '#faf9f8',
        },
      }
    },
  },
  plugins: [],
}

module.exports = {
    theme: {
      extend: {
        animation: {
          glow: "glow 1.5s infinite alternate",
          "box-glow": "box-glow 1.5s infinite alternate",
        },
        keyframes: {
          glow: {
            "0%, 100%": { textShadow: "0 0 5px #fff, 0 0 10px #ff0, 0 0 15px #ff0" },
            "50%": { textShadow: "0 0 10px #ff0, 0 0 20px #ff0, 0 0 30px #ff0" },
          },
          "box-glow": {
            "0%, 100%": { boxShadow: "0 0 5px #0ff" },
            "50%": { boxShadow: "0 0 20px #0ff" },
          },
        },
      },
    },
    plugins: [],
  };
  
module.exports = {
 content: [
  "./src/**/*.{js,ts,jsx,tsx}", // adjust to your project structure
],
 theme: {
   extend: {
     colors: {
       primary: '#080B2A', // dark gray
       accent: '#7C3AED',  // purple
       brand: {
         light: '#E0E7FF',
         DEFAULT: '#6366F1',
         dark: '#4338CA',
       },
     },
   },
 },
};

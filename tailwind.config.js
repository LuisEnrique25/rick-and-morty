/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'neonalive' : 'neonalive 1s linear infinite alternate',
        'neondead' : 'neondead 1s linear infinite alternate',
        'neonunknown' : 'neonunknown 1s linear infinite alternate'
      },
      keyframes:{
        neonalive: {
          '0%, 100%': { boxShadow : '0 0 5px rgb(34 197 94), 0 0 10px rgb(34 197 94), 0 0 20px rgb(109, 202, 143), 0 0 25px rgb(109, 202, 143) ' }, 
          '50%': { boxShadow: '0 0 5px rgb(34 197 94), 0 0 10px rgb(34 197 94), 0 0 20px rgb(109, 202, 143), 0 0 25px rgb(109, 202, 143), 0 0 30px rgb(109, 202, 143) '  },
        },
        neondead: {
          '0%, 100%': { boxShadow : '0 0 5px rgb(239 68 68), 0 0 10px rgb(239 68 68), 0 0 20px rgb(223, 129, 129), 0 0 25px rgb(223, 129, 129) ' }, 
          '50%': { boxShadow: '0 0 5px rgb(239 68 68), 0 0 10px rgb(239 68 68), 0 0 20px rgb(223, 129, 129), 0 0 25px rgb(223, 129, 129), 0 0 30px rgb(223, 129, 129) '},
        },
        neonunknown: {
          '0%, 100%': { boxShadow : '0 0 5px rgb(107 114 128), 0 0 10px rgb(107 114 128), 0 0 20px rgb(170, 171, 175), 0 0 25px rgb(170, 171, 175) ' }, 
          '50%': { boxShadow: '0 0 5px rgb(107 114 128), 0 0 10px rgb(107 114 128), 0 0 20px rgb(170, 171, 175), 0 0 25px rgb(170, 171, 175), 0 0 30px rgb(170, 171, 175)'},
        }
      },
    },
  },
  plugins: [],
}


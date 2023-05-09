## important command for created this project

```
npm create vite@latest

```

```
npx degit user/project my-project
cd my-project

npm install
npm run dev

```

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```
/** @type {import('tailwindcss').Config} */
export default {
  > content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
npm run dev
```

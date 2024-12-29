# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



# NavigationApp

- --- Crea una app default de Expo que ya viene con
  - Expo CLI, Expor Router, TS
    `pnpm create expo-app`

  - Damos el name de la app y siguiente
  - Como es una default app de expo, ya viene con el  `ROUTER`  de expo, q se bada x directorios `app/` como en `Next.js`
    - Los nombres de archivos y carpetas son traducidas a Rutas y a Screens de nuestra app


- --- Lanzamos la app generica q nos crea Expo
  - -- Corremos: `pnpm start`
    - Luego lanzamos con el emulador de android: `a` en la terminal







## NativeWind
- --- Es como trabajar con TailwindCSS de la Web, pero aqui en Mobile.
  - -- Install deps con soporte al Expo Router:
    - run: `pnpm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context`

  - -- Configurar NativeWind:
    - Creamos el tailwind.config.js
      - `pnpx tailwindcss init`
    - Lo editamos para q gestione los directorios q vamos a crear
        ```js
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: [
            './app/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}',
            './presentation/**/*.{js,jsx,ts,tsx}',
          ],
          presets: [require('nativewind/preset')],

          theme: {
            extend: {},
          },
          plugins: [],
        };
        ```

    - Creamos el archivo `global.css`
      - No importa mucho la ubicacion, FH lo crea en app/
        ```css
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
        ```
  
    - Creamos en achivo de `babel.config.js` xq en las ultimas versiones x default usa una config x debajo y no trae el archivo
      - Corremos `pnpx expo customize` > seleccionamos con space el de babel
        - Asi ya lo crea para poder meter los pressets de NativeWind
      
    - Metemos los Presets de NativeWind al babel file, el SDK a usar es la version de Expo en nuesto package.json, en este caso: `"expo": "~52.0.23",`
        ```js
          module.exports = function (api) {
            api.cache(true);
            return {
              presets: [
                ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
                'nativewind/babel',
              ],
            };
          };
        ```

    - Configuramos el `metro.config.js`, pero como el de babel, no viene el archivo asi q corremos su customize:
      - Para crear el archivo a customizar: `pnpx expo customize` > select el metro file
        - Igual el SDK como antes
          ```js
          // Learn more https://docs.expo.io/guides/customizing-metro
          const { getDefaultConfig } = require('expo/metro-config');
          const { withNativeWind } = require('nativewind/metro');

          const config = getDefaultConfig(__dirname);

          module.exports = withNativeWind(config, { input: './app/global.css' });
          ```

    - Importamos el `global.css` para q tome los styles
      - Simplemente lo importamos en el `_layout.tsx`

    - En el `_layout.tsx`
      - Configuramos el Router, q simplemente es con el <Slot />

    - Creamos el `nativewind-env.d.ts` en el root de la app
      - En la ultima version ya me lo creo solito :v
        - Solo es un comment


  - -- Docs:
    - Native wind con expo router
      - NativeWind
        https://www.nativewind.dev/getting-started/expo-router
      - TypeScript con NativeWind
        https://www.nativewind.dev/getting-started/typescript













## Custom Fonts
- --- Descargamos la Fuentes de GoogleFonts x ejemplo
  - -- Tomamos las fuentes q va a usar nuestra app, en este caso 3 nomas de los `statics` de la fuente
    - Las colocamos en la ruta de `/assets/fonts/`

  - -- Configuramos para q las use:
    - - 1) Tailwind config file para usarla como clase
      - En el `tailwind.config.js` agregamos la fuentes:
        ```js
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: [
            './app/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}',
            './presentation/**/*.{js,jsx,ts,tsx}',
          ],
          presets: [require('nativewind/preset')],

          theme: {
            extend: {
              fontFamily: {
                // nombre tal cual esta en el archivo de fuentes: WorkSans-Black.ttf
                'work-black': ['WorkSans-Black', 'sans-serif'],
                'work-light': ['WorkSans-Light', 'sans-serif'],
                'work-medium': ['WorkSans-Medium', 'sans-serif'],
              },
            },
          },
          plugins: [],
        };
        ```

    - - 2) En la config de react native para usarla como string como ya lo hemos hecho
      - Configuramos con el `useFonts()` en el `_layout.tsx`
        ```tsx
          import { View } from 'react-native';

          import './global.css';

          // router
          import { Slot, SplashScreen } from 'expo-router';

          // fonts
          import { useFonts } from 'expo-font';
          import { useEffect } from 'react';
          SplashScreen.preventAutoHideAsync();

          const RootLayout = () => {
            const [loaded, error] = useFonts({
              'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
              'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
              'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
            });

            useEffect(() => {
              if (error) throw error;

              if (loaded) SplashScreen.hideAsync();
            }, [loaded, error]);

            if (!loaded && !error) return null;

            return (
              <View>
                {/* --- ROUTER: app/ --- */}
                <Slot />
              </View>
            );
          };

          export default RootLayout;
        ```















## Custom Colors
- --- Simplemente los agregamos en el archivo de `tailwind.config.js`
  - -- Asi de simple:
    - Solo agregamos `colors`
    ```js
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          './app/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
          './presentation/**/*.{js,jsx,ts,tsx}',
        ],
        presets: [require('nativewind/preset')],

        theme: {
          extend: {
            colors: {
              primary: '#49129C',
              secondary: {
                DEFAULT: '#B40086',
                100: '#C51297',
                200: '#831266',
              },
              tertiary: '#EF2967',
            },

            fontFamily: {
              // nombre tal cual esta en el archivo de fuentes: WorkSans-Black.ttf
              'work-black': ['WorkSans-Black', 'sans-serif'],
              'work-light': ['WorkSans-Light', 'sans-serif'],
              'work-medium': ['WorkSans-Medium', 'sans-serif'],
            },
          },
        },
        plugins: [],
      };
      ```














## s
- --- S















## s
- --- S








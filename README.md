# Webpack

## The plan

### Part 1

#### lesson 1: Практика. Базовая конфигурация вебпак. Инициализируем проект

- create an NPM project `npm init -y` and install webpack and webpack cli `npm i -D webpack webpack-cli`
- create a `src` folder with `index.js` file
- create another file. for example `test.js` and we export a function from it and use the function call in `index.js`
- add scribt build to `package.json` `"build": "webpack"`
- run `npm run build` and see the output in `dist/main.js`

#### lesson 2: Создаем webpack.config.js. Entry и output. Кеширование файлов. Динамический filename

- create a `webpack.config.js` file and add the basic configuration
- add `entry` property to the configuration. The entry is the file that webpack will start from.
- import `path` from `node` and use it to create the path to the entry file
- if we have more than one entry point we can use an object instead of a string like this

  ```js
  entry: {
    main: './src/index.js',
    test: './src/test.js',
  },
  ```

  here we have two entry points `main` and `test` and webpack will create two files `main.js` and `test.js`

- add the `output` property to the configuration. The output is the file that webpack will create after bundling the files
- the output property is an object that has two properties `path` and `filename` like this

  ```js
  output: {
     path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
    }
  ```

- the problem with static filenames is that the browser will cache the file and if we make changes to the file the browser will not load the new file because it has the old file in the cache. to solve this problem we can use dynamic filenames like this

```js
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    }
```

- we can use the property `clean` in the output object to clean the `dist` folder before creating the new files

  ```js
  output: {
    clean: true,
    },
  ```

- the third property we can use in the configuratiion is `mode` and it can be `development` or `production`. The defference between the two modes is that in the `development` mode the files are not minified and the source maps are included in the files. In the `production` mode the files are minified and the source maps are not included in the files. The default value is `production` but we can change it to `development` like this:

  ```js
  mode: 'development',
  ```

#### lesson 3: Переменные окружения (env variables)

- To disambiguate in your webpack.config.js between development and production builds you may use environment variables.
- The webpack command line environment option `--env` allows you to pass in as many environment variables as you like. Environment variables will be made accessible in your webpack.config.js. For example, `--env production` or `--env goal=local`.
- Setting up your env variable without assignment `--env production` sets `env.production` to true by default.
- There is one change that you will have to make to your webpack config. Typically, module.exports points to the configuration object. To use the env variable, you must convert module.exports to a function:

```js
module.exports = (env) => {
  return {
    mode: env.production ? "production" : "development",
  };
};
```

### Part 2

#### lesson 4: HtmlWebpackPlugin. Концепция плагинов

- The `HtmlWebpackPlugin` simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.
- to use the `HtmlWebpackPlugin` we need to install it `npm i -D html-webpack-plugin`
- add the plugin to the configuration file via the `plugins` property

  ```js
  const HtmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
    ],
  };
  ```

#### lesson 5: ProgressPlugin

- The `ProgressPlugin` provides a way to track the progress during compilation.
- to use the `ProgressPlugin` we need to import it from `webpack` and add it to the plugins array

  ```js
  const webpack = require("webpack");

  module.exports = {
    plugins: [new webpack.ProgressPlugin()],
  };
  ```

- It's not recommended to use the `ProgressPlugin` in production mode because it will slow down the compilation process.

### Part 3

#### lesson 6: Концепция лоадеров (loaders). Настраиваем Typescript

- Loaders are transformations that are applied to the source code of a module. They allow you to pre-process files as you `import` or `load` them.
- Loaders can transform files from a different language (like TypeScript) to JavaScript, or inline images as data URLs. Loaders even allow you to do things like import CSS files directly from your JavaScript modules!
- to use TypeScript in webpack we need to install TS and the TypeScript loader `npm i -D ts-loader typescript`
- Next we need to change the files extensions to ts and also change the entry point to `index.ts` instead of `index.js`
- then we need to add tsconfig.json file to the root of the project and add the configuration for TypeScript

  ```json
  {
    "compilerOptions": {
      "outDir": "./dist/",
      "noImplicitAny": true,
      "module": "es6",
      "target": "es5",
      "jsx": "react",
      "allowJs": true,
      "moduleResolution": "node"
    }
  }
  ```

- finally, we need to add the TypeScript loader to the webpack configuration file

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
```

#### lesson 7: Меняем язык конфигурационного файла на TypeScript

- to change the configuration file to TypeScript we need to rename the file to `webpack.config.ts` and we need to insstall the following packages `npm i -D ts-node @types/node @types/webpack @types/webpack-dev-server`
- we also need to install typescript if it's not installed `npm i -D typescript`
- and then proceed to write your configuration:

```ts
import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

export default (env: { mode: "development" | "production" }) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[bundle].[contenthash].js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };

  return config;
};
```

- then we add these configs the tsconfig.json:

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  }
}
```

- Note that you'll also need to check your tsconfig.json file. If the module in compilerOptions in tsconfig.json is commonjs, the setting is complete, else webpack will fail with an error. This occurs because ts-node does not support any module syntax other than commonjs.

- the soultion for this is to open your tsconfig.json file and look for compilerOptions. Set target to "ES5" and module to "CommonJS" (or completely remove the module option).

#### lesson 8: Настраиваем Dev Server. Watch Режим. Что такое source maps?

- watch mode: webpack can watch files and recompile whenever they change. To enable this feature, you need to set the watch option to true in the configuration file.

```ts
module.exports = {
  watch: true,
};
```

- here we skipped the dev server and source maps parts.

#### lesson 9: React. JSX

- to use React in webpack we need to install React and React DOM `npm i react react-dom`
- we also need to install the types for React and React DOM `npm i -D @types/react @types/react-dom`
- as we're using ts loader, it can work with jsx and tsx code, if we use jsx only, we would have need to install babel and the babel loader.
- in the index.tsx file in the src folder we need a code like this to intitialize our react app:

```tsx
import { createRoot } from "react-dom/client";
import App from "./components/App";

createRoot(document.getElementById("root")!).render(<App />);
```

### Part 4

#### lesson 10: Работа со стилями. css и scss

- to use css in webpack we need to install the following packages `npm i -D css-loader` and add these configs in the webpack configuration file

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

- to use scss in webpack we need to install the following packages `npm i -D sass sass-loader` and add these configs in the webpack configuration file

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```

- Additionally, we need to install style loader for any of them to work `npm i -D style-loader`

#### lesson 11: MiniCssExtractPlugin

#### lesson 12: Декомпозируем конфиг. Улучшаем читаемость и подготавливаем к переиспользованию

#### lesson 13: Изоляция стилей. Css modules

### part 5

- Роутинг. Ленивые чанки. Code splitting. Размер бандла. Bundle analyzer. History Api Fallback.

### part 6

- Алиасы. Резолвинг модулей. Абсолютные импорты
- Ассеты. Работа с картинками, шрифтами, иконками.

### part 7

- Глобальные переменные сборки. Tree shaking
- Проверка типов в отдельном процессе. ForkTsCheckerPlugin

### part 8

- Hot module replacement (hmr)
- Favicon. CopyPlugin
- Настраиваем Babel. Babel-loader. Современные компиляторы. Swc и esbuild.
- Создаем свой babel плагин

### part 9

- Source map на примере ошибки
- Настраиваем монорепозиторий. Теория про микрофронтенд. npm workspaces.

### part 10

- Настраиваем микросервисы. Webpack module federation
- Shared код из packages
- Выносим общий tsconfig. Переиспользуем код в сервисах.

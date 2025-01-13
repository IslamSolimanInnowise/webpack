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

### part 2

- HtmlWebpackPlugin. Концепция плагинов.
- ProgressPlugin

### part 3

- Концепция лоадеров (loaders). Настраиваем Typescript
- Меняем язык конфигурационного файла на TypeScript
- Настраиваем Dev Server. Watch Режим. Что такое source maps?
- React. JSX

### part 4

- Работа со стилями. css и scss
- MiniCssExtractPlugin
- Декомпозируем конфиг. Улучшаем читаемость и подготавливаем к переиспользованию
- Изоляция стилей. Css modules

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

```

```

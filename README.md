# webpack

## the plan

### part 1

#### lesson1: Практика. Базовая конфигурация вебпак. Инициализируем проект

Here we:

- create an NPM project `npm init -y` and install webpack and webpack cli `npm i -D webpack webpack-cli`
- create a `src` folder with `index.js` file
- create another file. for example `test.js` and we export a function from it and use the function call in `index.js`
- add scribt build to `package.json` `"build": "webpack"`
- run `npm run build` and see the output in `dist/main.js`

#### Создаем webpack.config.js. Entry и output. Кеширование файлов. Динамический filename

#### Переменные окружения (env variables)

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

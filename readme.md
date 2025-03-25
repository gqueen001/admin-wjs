# Задание для React Developer

## 💪 This project built using:

- React,
- Javascript,
- Css,
- Json-server,
- React router dom,
- axios.

## 🚦 Running the project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `pnpm install` in the project directory to install the required dependencies.
3. Run `npx json-server --watch seminars.json` to run the json-server.
4. Run `pnpm run dev` to get started the project
5. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.

## Задание

Необходимо развернуть локально `json-server` и загрузить в него данные **seminars**. Используйте любые удобные технологии, но обязательно с использованием React для реализации следующих функций:

1. **Запрос данных**

   - Запросите данные с семинарами из `json-server`.
   - "Fetch data with seminars from json-server"

2. **Отрисовка списка семинаров**

   - Отобразите список семинаров на странице.
   - "Display the list of seminars on the page."

3. **Удаление семинара**

   - Реализуйте кнопку удаления семинара, которая при клике открывает окно подтверждения.
   - "Implement a seminar delete button that opens a confirmation window when clicked."
   - При подтверждении удаления отправьте `DELETE` запрос на сервер.
   - "When deletion is confirmed, send a DELETE request to the server."

4. **Редактирование семинара**

   - Реализуйте кнопку редактирования семинара.
   - "Implement an edit button for the seminar."
   - Редактирование должно происходить в модальном окне.
   - "Editing should take place in a modal window."

5. **Размещение на GitHub**
   - Залейте проект на GitHub и пришлите ссылку.
   - "Upload the project to GitHub and send the link."
   - **Важно:** `json-server` должен находиться в том же репозитории, что и приложение.

## Дополнительные рекомендации

- Используйте современные подходы (например, React Hooks, функциональные компоненты).
- Обратите внимание на обработку ошибок и состояния загрузки.
- Добавьте комментарии в код для пояснения ключевых моментов реализации.

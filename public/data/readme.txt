Необходимо, используя Figma макет, сверстать и реализовать логику приложения.
Технологический стек: Vue3 Composition API, Quasar v2, Typescript

Пояснения:
projects.json - иммитация данных на сервере, список проектов менеджера
resources.json - иммитация данных на сервере, список сотрудников проектов
persons.json - иммитация данных на еще одном сервере, данные по сотрудникам.

Нужно показать список проектов, используя данные в файле projects.json. При клике на каждый проект загружается список сотрудников в табличном ввиде.

Сущность projects: projectId - id проекта, name - название проекта, costObject - код проекта
Сущность resources: resourceId - id сотрудника, projectId - id проекта, в котором он состоит, position - должность, rateType - тип бюджета.
Фио сотрудника брать из файла persons.json - иммитация работы с микросервисами

Ссылка на макет figma - https://www.figma.com/file/AoXqs9yTCIVHRpaeCEiK67/Untitled?node-id=0%3A1.
Верстка должна быть responsive
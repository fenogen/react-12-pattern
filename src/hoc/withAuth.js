import React, { Component } from 'react'

// Принцып работы с НОС:
// 1. Принимаем условный компонент
// 2. Возвращаем новый условный компонент в виде класса или ф-и (тот же самый но обновленный c новым свойством)
// 3. Всю логику пишем после Рендера
// 4. Импортируем НОС(withAuth) в нужный компонент и просто оборачиваем потом при экспорте
// 5. Компонент который был обернут в НОС будет иметь доп.свойства isAuth

// ---------------------------------------------> Пример с исользованием класса:

// const withAuth = (NewComponent) => {
//     return class extends Component {
//         render() {
//             const user = {name: 'Bob', age: 23,}
//             const isAuth = Object.keys(user).length > 0;
//             return <NewComponent isAuth={isAuth}   {...this.props}/>  // Добавили новое свойство и распылили старые (обязательно что бы не потерять)
//         }
//     }

// }

// export default withAuth;

// ---------------------------------------------> Пример с исользованием ф-и:

const withAuth = (NewComponent) => {
            const user = {name: 'Bob', age: 23,}
            const isAuth = Object.keys(user).length > 0;
            return (props) => <NewComponent isAuth={isAuth} {...props}/>
}

export default withAuth;

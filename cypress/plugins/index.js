
// module.exports = (on) => {
//     on('task', {
//         loginTask: ({ username, password }) => {
//             debugger
//             // تابع واقعی لاگین را اینجا فراخوانی کنید
//             // مثلاً یک درخواست POST به سرور برای لاگین ارسال کنید
//             // در انتها به عنوان نمونه می‌توانید یک دستور cypress اضافه کنید
//             cy.visit('/');//باز کردن وب سایت
//             cy.get('#profile > [href="/"]').click()//رفتن به صفحه لاگین

//             cy.url().should('include', '/sso/login')// چک کردن وارد شدن در صفحه لاگین
//             cy.get('#username').type(username)//وارد کردن نام کاربری
//             cy.get('#password').type(password)//وارد کردن پسور
//             cy.get('#captchaValue').type('111111')//وارد کردن کد کپچا
//             cy.get('.login100-form-btn').click()//انجام عملیات لاگین

//             return null;
//         },
//         hello({ greeting, name }) {
//             console.log('%s, %s', greeting, name)

//             return null
//         },
//         loginTask(obj) {
//             console.log('------------------', obj)
//             // cy.visit('/');//باز کردن وب سایت
//             // cy.get('#profile > [href="/"]').click()//رفتن به صفحه لاگین
//             return null
//         }
//     });
// };

module.exports = (on) => {
    on('test', {
        twa(str) {
            console.log(str)

            return null
        }
    })
}
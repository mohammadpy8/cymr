describe('ثبت درخواست ام اقساط پلاس', () => {

    const mresalat_url = 'https://stage1.qhami.com/'
    const mhesam_url = 'https://stage1.fardaap.com'

    it('open web site', () => {

        cy.visit(mresalat_url);//باز کردن وب سایت
        cy.get('#profile > [href="/"]').click()//رفتن به صفحه لاگین

        cy.url().should('include', '/sso/login')// چک کردن وارد شدن در صفحه لاگین
        cy.get('#username').type('09397645294')//وارد کردن نام کاربری
        cy.get('#password').type('123456789')//وارد کردن پسور
        cy.get('#captchaValue').type('111111')//وارد کردن کد کپچا
        cy.get('.login100-form-btn').click()//انجام عملیات لاگین

        cy.url().should('include', 'qhami.com')//چک کردن بازگشت به صفحه اصلی بعد از لاگین

        cy.get('.cardtwo > :nth-child(1) > [style="display: flex; text-align: center;"] > [style="display: flex; width: 100%; padding: 2% 1%; border-radius: 10px; align-items: center; justify-content: center; margin: auto; flex-direction: column;"] > :nth-child(1) > .nav-link > .sc-gtcAbF').click({ force: true })
        cy.contains('ورود به ام حسام').click({ force: true })

        cy.origin(mhesam_url, () => {

            cy.get('a[href="/MAghsatHesan"]').click({ force: true })//ورود به ام اقساط پلاس

            cy.pause();//متوقف کردن تست جهت انتخاب گزینه ها و ادامه دادن فرایند
            console.log('یک گزینه را انتخاب نمایید!!!!!!!!!!!!!!!!');

            cy.wait(300)

            let checkDisabledATTR;

            cy.get('.btn-apply-mhesam-credit')
                .should(($btn) => {
                    if ($btn.hasClass('disabled')) {
                        // اگر اتریبیوت disabled وجود داشته باشد
                        checkDisabledATTR = true
                    } else {
                        // اگر اتریبیوت disabled وجود نداشته باشد
                        checkDisabledATTR = false
                    }
                })
                .then(() => {
                    if (checkDisabledATTR) {
                        alert('ثبت درخواست ام اقساط پلاس برای شما غیرفعال میباشد')
                    } else {
                        cy.get('.btn-apply-mhesam-credit').click({ force: true })//ثبت درخواست ام اقساط پلاس

                        cy.get('.amount-money-container').type(5000000) // وارد کردن مبلغ ام اقساط پلاس 

                        cy.get('.btn-primary-hesan').click({ force: true })
                    }
                })

        })

        // cy.origin('https://stage1maghsat.qhami.com/#?', () => {

        //     cy.pause();//متوقف کردن تست جهت انتخاب گزینه ها و ادامه دادن فرایند
        //     console.log("انتخاب بیعانه و مدت اقساط");

        //     cy.get('.btn-info').click({ force: true })

        // })

    })

})
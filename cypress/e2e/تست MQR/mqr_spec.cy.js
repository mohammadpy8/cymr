describe('mqr test', () => {

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
        // cy.origin().should('include', 'fardaap.com')//چک کردن بازگشت به صفحه اصلی بعد از لاگین
        cy.origin(mhesam_url, () => {
            const amount_payable = 1000000

            const _handleSelectCredit = () => {
                cy.wait(200)
                cy.get('#id-undefined').click()//انتخاب combo box
                cy.get('#react-select-2-option-0 > .d-flex > :nth-child(1)').click()//انتخاب اعتبار
                cy.wait(200)

                cy.get('.input_remain_mqr')//چک کردن مقدار باقی مانده 
                    .invoke('val')
                    .then(value => {
                        // debugger
                        if (value == 0) {
                            return true
                        } else {
                            // return false
                            // console.log('cy.::::::::::::::>> ', cy.get('#react-select-2-option-1 > .d-flex > :nth-child(1)'));
                            // cy.get('#id-undefined').click()
                            // cy.get('#react-select-2-option-1 > .d-flex > :nth-child(1)').click()//انتخاب اعتبار
                            // if (cy.get('#react-select-2-option-0 > .d-flex > :nth-child(1)')
                            cy.get('#id-undefined').click()
                            cy.get('#react-select-2-option-0 > .d-flex > :nth-child(1)')
                                .invoke('text')
                                .then(value => {
                                    cy.get('#id-undefined').click()
                                    if (value.includes("یافت نشد")) {
                                        return false
                                    } else {
                                        return _handleSelectCredit()
                                    }
                                })
                            // }
                            // return _handleSelectCredit()
                        }
                    });
            }

            cy.contains('MQR').click({ force: true })
            cy.get('.btn_mqr_scanner').click()//ورود به مودال mqr
            cy.get('.confirm_input_mqr').type(9)//وارد کردن کد mqr
            cy.get('.confirm_code_mqr').click()//رفتن به صفحه mqr
            cy.get('.mqrCreditPaymen-amount').type(amount_payable)//وارد کردن مبلغ قابل پرداخت

            // let checkCredit;
            cy.then(() => {
                return _handleSelectCredit()
            })
                .then((checkCredit) => {
                    if (checkCredit) {//تایید درخواست
                        console.log('checkCredit :>> ', checkCredit);
                        cy.contains('ادامه').click({ force: true })

                        cy.contains('بله ادامه').click({ force: true })

                        cy.window().then(win => {
                            const getUserInfo = JSON.parse(win.localStorage.getItem('userInfo'))
                            cy.wait(500)
                            cy.get('.national_box_mqr > .Input_cnfPayment_modal_one').type(getUserInfo.nationalCode)
                                .invoke('val')
                                .then(inputValue => {
                                    debugger
                                    if (inputValue.length == 10) {
                                        cy.contains('دریافت کد تایید').click({ force: true })
                                    }
                                });//وارد کردن مبلغ قابل پرداخت

                        })

                    } else {// رفتن به در گاه ام حسام جهت افزایش شارژ
                        console.log('checkCredit :>> ', checkCredit);

                    }
                })
        })

    });

})

const {test, expect}=require("@playwright/test");

test.beforeEach("OrangeHRM", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await  expect(page).toHaveTitle("OrangeHRM")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", {name:'Login'}).click()
    
    await page.waitForTimeout(2000)
    
})

test("OrangeHRM assignLeave", async({page})=>{
    await page.locator("button[title='Assign Leave']").click()
    await page.getByPlaceholder("Type for hints...").fill("Rahul")
    await page.getByRole('option',{name:'Rahul Das'}).first().click()
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'CAN - Personal' }).click();
    await page.locator('form i').nth(2).click();
    await page.getByText('16').click();
    await page.locator('form i').nth(3).click();
    await page.getByText('20', { exact: true }).click();
    await page.locator('form i').nth(4).click();
    await page.getByRole('option',{name:'End Day Only'}).click()
    await page.locator('form i').nth(5).click();
    await page.getByRole('option',{name:'Half Day - Afternoon'}).click()
    await page.locator(".oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical").fill("leave is for my personal reasons")
    await page.getByRole('button',{name:'Assign'}).click()
    await page.getByRole('button',{name:'Ok'}).click()
 
})

test("OrangeHRM Admin",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
    
    await page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").fill('Admin');
    await page.locator('form i').first().click()
    await page.getByRole('option',{name:'Admin'}).click()
    await page.getByPlaceholder('Type for hints...').fill('Raju')
    await page.getByRole('option',{name:'Raju  G'}).first().click()
    await page.locator('form i').nth(1).click()
    await page.getByRole('option',{name:'Enabled'}).click()
    await page.getByRole('button',{name:'Search'}).click()
})

test("OrangeHRM PIM", async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    // await page.getByRole('link',{name:'PIM'}).click()
    await page.getByPlaceholder('Type for hints...').first().fill('thunder bolt');
    await page.getByRole('textbox').nth(2).fill('0409');
    await page.getByRole('button',{name:'Search'}).click()
    await page.getByRole('button', {name:" Add "}).click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
    await page.getByPlaceholder("First Name").fill("vara")
    await page.getByPlaceholder("Middle Name").fill('Prasad')
    await page.getByPlaceholder('Last Name').fill('Saragada')
    await page.getByRole('button',{name:"save"}).click()
})



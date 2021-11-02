const Manager = require('../lib/Manager')

it('Can set officeNumber via Manager constructor', () => {
    const officeNumber = '08 245 9526'
    const e = new Manager('Mike', 23, 'mike@devcenter.com', officeNumber)
    expect(e.officeNumber).toBe('08 245 9526')
});

it('Can get officeNumber via getofficeNumber() function', () => {
    const officeNumber = '08 245 9526'
    const e = new Manager('Mike', 23, 'mike@devcenter.com', officeNumber)
    expect(e.getOfficeNumber()).toBe('08 245 9526')
});

it('Can get role via getRole() function', () => {
    const e = new Manager('Mike', 23, 'mike@devcenter.com')
    expect(e.getRole()).toBe('Manager')
});
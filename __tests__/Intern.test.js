const Intern = require('../lib/Intern')

it('Can set school via Intern constructor', () => {
    const school = 'MSHS'
    const e = new Intern('Mike', 23, 'mike@devcenter.com', school)
    expect(e.school).toBe('MSHS')
});

it('Can get school via getSchool() function', () => {
    const school = 'MSHS'
    const e = new Intern('Mike', 23, 'mike@devcenter.com', school)
    expect(e.getSchool()).toBe('MSHS')
});

it('Can get role via getRole() function', () => {
    const e = new Intern('Mike', 23, 'mike@devcenter.com')
    expect(e.getRole()).toBe('Intern')
});
const Engineer = require('../lib/Engineer')

it('Can set GitHub via Engineer constructor', () => {
    const github = 'MA-FS'
    const e = new Engineer('Mike', 23, 'mike@devcenter.com', github)
    expect(e.github).toBe('MA-FS')
});

it('Can get github via getGithub() function', () => {
    const github = 'MA-FS'
    const e = new Engineer('Mike', 23, 'mike@devcenter.com', github)
    expect(e.getGithub()).toBe('MA-FS')
});

it('Can get role via getRole() function', () => {
    const e = new Engineer('Mike', 23, 'mike@devcenter.com')
    expect(e.getRole()).toBe('Engineer')
});
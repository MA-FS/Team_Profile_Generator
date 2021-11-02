const Employee = require('../lib/Employee')

it('Can create a new Employee object', () => {
  const e = new Employee()
  expect(typeof e).toBe('object')  
});


it('Can set name via Employee constructor', () => {
  const name = 'Mike'
  const e = new Employee(name)
  expect(e.name).toBe('Mike')
});

it('Can set id via Employee constructor', () => {
  const id = 23
  const e = new Employee('Mike', id)
  expect(e.id).toBe(23)
});

it('Can set email via Employee constructor', () => {
  const email = 'mike@devcenter.com'
  const e = new Employee('Mike', 23, email)
  expect(e.email).toBe('mike@devcenter.com')
});

it('Can get name via getName() function', () => {
  const name = 'Mike'
  const e = new Employee(name)
  expect(e.getName()).toBe('Mike')
});

it('Can get id via getId() function', () => {
  const id = 23
  const e = new Employee('Mike', id)
  expect(e.getId()).toBe(23)
});

it('Can get email via getEmail() function', () => {
  const email = 'mike@devcenter.com'
  const e = new Employee('Mike', 23, email)
  expect(e.getEmail()).toBe('mike@devcenter.com')
});

it('Can get role via getRole() function', () => {
  const e = new Employee('Mike', 23, 'mike@devcenter.com')
  expect(e.getRole()).toBe('Employee')
});
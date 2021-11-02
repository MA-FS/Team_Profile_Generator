const Employee = require('../lib/Employee')

it('should have an Employee name', () => {
    const emp = new Employee('Mike', 23, 'ss@gmail.com')

    expect(emp.name).toBe('Mike');
    
  });

  it('should return an Employee name', () => {
    const emp = new Employee('Mike', 23, 'ss@gmail.com')

    expect(emp.getName()).toBe('Geoff');
    
  });
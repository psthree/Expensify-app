import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up remove expense action object', () => {
    const result = removeExpense({ id: '123abc' });
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
})

test('Should set up editExpense action object', () => {
    const result = editExpense('123ABC', { note: 'some test' });
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123ABC',
        updates: { note: 'some test' }
    });
});

test('Should set up expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        note: 'test note',
        amount: '10004',
        createdAt: '1000'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

})

test('Should set up add expense action object with default values', () => {
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }

    });

});



//to run in watch mode 
//npm test -- --watch
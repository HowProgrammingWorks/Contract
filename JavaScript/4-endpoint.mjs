// server

({
  parameters: {
    a: 'number',
    b: 'Account',
  },

  method: async ({ a, b }) => {
    const result = a > b;
    return result;
  },

  returns: 'boolean',

  errors: {
  }
});

// client

try {
  const res = await api.example.compare({ a: 1, b: 2 });
} catch (err) {
  
}

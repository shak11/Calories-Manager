// Shaked Benno 207058132
// Itay Gershy 123456789

const getStudents = (req, res) => {
    // Array of objects describing developers
    const developers = [
        { "firstname": "Shaked", "lastname": "Benno", "id": 207058132, "email": "shakedbeno@yahoo.com" },
        { "firstname": "Itay", "lastname": "Gershy", "id": 123456789, "email": "ChangeMe@" }
    ];
    res.json(developers);
};

export {getStudents};
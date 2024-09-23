// Shaked Benno 207058132
// Itay Gershi 212303028

const getStudents = (req, res) => {
    // Array of objects describing developers
    const developers = [
        { "firstname": "Itay", "lastname": "Gershi", "id": 212303028, "email": "itaygershi@gmail.com" },
        { "firstname": "Shaked", "lastname": "Benno", "id": 207058132, "email": "shakedbeno@yahoo.com" }
    ];
    res.json(developers);
};

export {getStudents};
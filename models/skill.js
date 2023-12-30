const skills = [
    {id: 123451, skill: 'Learn HTML', done: true},
    {id: 123452, skill: 'Learn CSS', done: true},
    {id: 123453, skill: 'Learn Java Script', done: true},
    {id: 123454, skill: 'Learn Express', done: true},
    {id: 123455, skill: 'Learn Python', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    //Find the Idx
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill)  {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}
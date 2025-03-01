function skillsMember() {
    console.log('skillsMember');
}

function addMember(name, age) {
    return {
        name: name,
        age: age
    };
}

function removeMember(name) {
    console.log(`${name} has been removed`);
}

function listMembers(members) {
    members.forEach(member => {
        console.log(`Name: ${member.name}, Age: ${member.age}`);
    });
}
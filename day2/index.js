const transformData = userData.map(function(e, i){
    let firstName = e.name.first;
    let lastName = e.name.last;
    let userDob = e.dob.date;
    let cleanDob = userDob.replace(/Z/g, '')
    let formattedDob = new Date(cleanDob).toDateString();
    
    const formattedUserObj = {
        fullName: `${firstName} ${lastName}`,
        birthday: formattedDob
    }
    return formattedUserObj;
});

// console.log(transformData)
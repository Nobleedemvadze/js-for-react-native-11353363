function createUserProfiles(originalNames, modifiedNames){
    const myProfiles = [];
    
    for(let i = 0; i < originalNames.length; i ++){
        myProfiles.push({
            originalName: originalNames[i],
            modifiedName: modifiedNames[i],
            id: i + 1,
        })
    }
    return myProfiles;
}
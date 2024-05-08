export const sortNames = (namesToSort: { firstName: string; middleName: string; lastName: string }[]) => {
    if (namesToSort.length < 2) {
        return { sortedNames: [], errorMessage: "Please provide at least two names." };
    }

    const sortedNames = [...namesToSort].sort((a, b) => {
        return a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName);
    });

    return { sortedNames, errorMessage: "" };
};
  
export const addName = (firstName: string, middleName: string, lastName: string, namesToAddTo: { firstName: string; middleName: string; lastName: string }[]) => {
    if (!firstName.trim() || !lastName.trim()) {
        return { updatedNames: namesToAddTo, errorMessage: "First name and last name are mandatory." };
    }

    const updatedNames = [...namesToAddTo, { firstName, middleName, lastName }];
    return { updatedNames, errorMessage: "" };
};
  
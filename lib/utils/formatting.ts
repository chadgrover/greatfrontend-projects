/**
 * 
 * @param firstName The first name of the user
 * @param lastName The last name of the user
 * @returns A formatted full name with proper capitalization
 */
const formatFullName = (firstName: string, lastName: string): string => {
  const capitalizedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const capitalizedLastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${capitalizedFirstName} ${capitalizedLastName}`;
};

export { formatFullName };

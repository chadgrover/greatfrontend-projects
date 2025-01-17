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

/**
 *
 * @param variant The variant of the button
 * @param baseClasses The base classes for the button
 * @param addClassName Additional classes to add to the button (optional)
 * @returns A formatted className for the button based on the variant
 */

const formatButtonVariantClassName = (
  variant: string,
  baseClasses: string,
  addClassName?: string
): string => {
  switch (variant) {
    case "primary":
      return `${baseClasses} hover:cursor-pointer text-indigo-700 hover:text-custom-indigo-hover focus:ring-violet-200 focus:ring focus:outline-none rounded-md ${addClassName ? addClassName : ""}`;
    case "disabled":
      return `${baseClasses} hover:cursor-default text-custom-slate-disabled ${addClassName ? addClassName : ""}`;
    default:
      return `${baseClasses} ${addClassName ? addClassName : ""}`;
  }
};

/**
 *
 * @param jobTitle The job title of the user
 * @param company The company the user works for
 * @returns A formatted string with the job title and company
 */
const formatJobTitleAndCompany = (
  jobTitle: string,
  company: string
): string => {
  const jobTitleAsArray = jobTitle.split(" ");
  jobTitleAsArray.forEach((word, index) => {
    jobTitleAsArray[index] = word.charAt(0).toUpperCase() + word.slice(1);
  });

  const companyAsArray = company.split(" ");
  companyAsArray.forEach((word, index) => {
    companyAsArray[index] = word.charAt(0).toUpperCase() + word.slice(1);
  });

  return `${jobTitleAsArray.join(" ")} @ ${companyAsArray.join(" ")}`;
};

export { formatFullName, formatButtonVariantClassName, formatJobTitleAndCompany };

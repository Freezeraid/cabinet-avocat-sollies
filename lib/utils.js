/**
 * Calculate years of experience since the law firm was established
 * @returns {number} Number of years since 2003
 */
export const getYearsOfExperience = () => {
  const startYear = 2003;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

/**
 * Get formatted experience text variations
 * @returns {object} Object containing different formatted experience strings
 */
export const getExperienceText = () => {
  const years = getYearsOfExperience();
  
  return {
    basic: `${years} ans`,
    withExperience: `${years} ans d'expérience`,
    since: `depuis ${years} ans`,
    strongOf: `Fort de ${years} ans`,
    withMore: `plus de ${years} ans`,
    practice: `${years} ans de pratique`,
    strongOfExperience: `Fort de ${years} ans d'expérience`,
    strongOfYears: `Fort de mes ${years} années d'expérience`,
    inField: (field) => `${years} ans d'expérience en ${field}`,
    practiceIn: (field) => `je pratique ${field} depuis ${years} ans`,
    myPractice: `ma pratique de ${years} ans`
  };
};

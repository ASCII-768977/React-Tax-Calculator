const option = { style: "currency", currency: "AUD" };
export const totalTaxFormat = new Intl.NumberFormat("en-AU", option);

export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const calculateTax = (country, year, income) => {
  let taxBreakdown;
  switch (country) {
    case "Australia":
      taxBreakdown = yearJudgement(year, income);
      return taxBreakdown;
    case "United States":
      taxBreakdown = yearJudgement(year, income);
      return taxBreakdown;
    case "China":
      taxBreakdown = yearJudgement(year, income);
      return taxBreakdown;
    case "Canada":
      taxBreakdown = yearJudgement(year, income);
      return taxBreakdown;
    case "New Zealand":
      taxBreakdown = yearJudgement(year, income);
      return taxBreakdown;
    default:
      taxBreakdown = yearJudgement(year, income);
      return taxBreakdown;
  }
};

const yearJudgement = (year, income) => {
  let taxBreakdown = {};
  switch (year) {
    case "2022 - 2023":
      taxBreakdown = resultCalculate(income);
      return taxBreakdown;
    case "2021 - 2022":
      taxBreakdown = resultCalculate(income);
      return taxBreakdown;
    case "2020 - 2021":
      taxBreakdown = resultCalculate(income);
      return taxBreakdown;
    case "2019 - 2020":
      taxBreakdown = resultCalculate(income);
      return taxBreakdown;
    default:
      taxBreakdown = resultCalculate(income);
      return taxBreakdown;
  }
};

// const resultCalculate = (income) => {
//   const taxBreakdown = {
//     totalTax: 0,
//     tax1: 0,
//     tax2: 0,
//     tax3: 0,
//     tax4: 0,
//     tax5: 0,
//   };
//   if (income <= 18200) {
//     taxBreakdown.totalTax = 0;
//     return taxBreakdown;
//   } else if (income > 18201 && income <= 45000) {
//     taxBreakdown.tax2 = (income - 18200) * 0.19;
//     taxBreakdown.totalTax = taxBreakdown.tax2;
//     return taxBreakdown;
//   } else if (income > 45001 && income <= 120000) {
//     taxBreakdown.tax2 = (45000 - 18200) * 0.19;
//     taxBreakdown.tax3 = (income - 45000) * 0.325;
//     taxBreakdown.totalTax = taxBreakdown.tax2 + taxBreakdown.tax3;
//     return taxBreakdown;
//   } else if (income > 120001 && income <= 180000) {
//     taxBreakdown.tax2 = (45000 - 18200) * 0.19;
//     taxBreakdown.tax3 = (120000 - 45000) * 0.325;
//     taxBreakdown.tax4 = (income - 120000) * 0.37;
//     taxBreakdown.totalTax =
//       taxBreakdown.tax2 + taxBreakdown.tax3 + taxBreakdown.tax4;
//     return taxBreakdown;
//   } else {
//     taxBreakdown.tax2 = (45000 - 18200) * 0.19;
//     taxBreakdown.tax3 = (120000 - 45000) * 0.325;
//     taxBreakdown.tax4 = (180000 - 120000) * 0.37;
//     taxBreakdown.tax5 = (income - 180000) * 0.45;
//     taxBreakdown.totalTax =
//       taxBreakdown.tax2 +
//       taxBreakdown.tax3 +
//       taxBreakdown.tax4 +
//       taxBreakdown.tax5;
//     return taxBreakdown;
//   }
// };

const resultCalculate = (income) => {
  const taxBreakdown = {
    totalTax: 0,
    tax1: 0,
    tax2: 0,
    tax3: 0,
    tax4: 0,
    tax5: 0,
  };
  if (income <= 18200) {
    taxBreakdown.totalTax = 0;
    return taxBreakdown;
  } else if (income > 18201 && income <= 45000) {
    taxBreakdown.tax2 = (income - 18200) * 0.19;
    taxBreakdown.totalTax = taxBreakdown.tax2;
    return taxBreakdown;
  } else if (income > 45001 && income <= 120000) {
    taxBreakdown.tax2 = (45000 - 18200) * 0.19;
    taxBreakdown.tax3 = (income - 45000) * 0.325;
    taxBreakdown.totalTax = taxBreakdown.tax2 + taxBreakdown.tax3;
    return taxBreakdown;
  } else if (income > 120001 && income <= 180000) {
    taxBreakdown.tax2 = (45000 - 18200) * 0.19;
    taxBreakdown.tax3 = (120000 - 45000) * 0.325;
    taxBreakdown.tax4 = (income - 120000) * 0.37;
    taxBreakdown.totalTax =
      taxBreakdown.tax2 + taxBreakdown.tax3 + taxBreakdown.tax4;
    return taxBreakdown;
  } else if (income > 180001 && income <= 200000) {
    taxBreakdown.tax2 = (45000 - 18200) * 0.19;
    taxBreakdown.tax3 = (120000 - 45000) * 0.325;
    taxBreakdown.tax4 = (180000 - 120000) * 0.37;
    taxBreakdown.tax5 = (income - 180000) * 0.45;
    taxBreakdown.totalTax =
      taxBreakdown.tax2 +
      taxBreakdown.tax3 +
      taxBreakdown.tax4 +
      taxBreakdown.tax5;
    return taxBreakdown;
  } else {
    taxBreakdown.tax2 = (45000 - 18200) * 0.19;
    taxBreakdown.tax3 = (120000 - 45000) * 0.325;
    taxBreakdown.tax4 = (180000 - 120000) * 0.37;
    taxBreakdown.tax5 = (200000 - 180000) * 0.45;
    taxBreakdown.tax6 = (income - 200000) * 0.47;
    taxBreakdown.totalTax =
      taxBreakdown.tax2 +
      taxBreakdown.tax3 +
      taxBreakdown.tax4 +
      taxBreakdown.tax5 +
      taxBreakdown.tax6;
    return taxBreakdown;
  }
};
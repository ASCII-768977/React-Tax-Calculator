import { totalTaxFormat, formatNumber, calculateTax } from "./GeneralFunctions";

describe("totalTaxFormat", () => {
  it("should format a number in Australian currency", () => {
    expect(totalTaxFormat.format(1234.56)).toEqual("$1,234.56");
  });

  it("should format a negative number in Australian currency", () => {
    expect(totalTaxFormat.format(-1234.56)).toEqual("-$1,234.56");
  });

  it("should format a zero in Australian currency", () => {
    expect(totalTaxFormat.format(0)).toEqual("$0.00");
  });

  it("should format a large number in Australian currency", () => {
    expect(totalTaxFormat.format(1234567890.12)).toEqual("$1,234,567,890.12");
  });
  it("should format a negative number in Australian currency", () => {
    expect(totalTaxFormat.format(-1234.56)).toEqual("-$1,234.56");
  });

  it("should format a zero in Australian currency", () => {
    expect(totalTaxFormat.format(0)).toEqual("$0.00");
  });

  it("should format a large number in Australian currency", () => {
    expect(totalTaxFormat.format(1234567890.12)).toEqual("$1,234,567,890.12");
  });
});

describe("formatNumber", () => {
  it("should format a number with commas", () => {
    expect(formatNumber(1234.56)).toEqual("1,234.56");
  });
  it("should format a negative number with commas", () => {
    expect(formatNumber(-1234.56)).toEqual("-1,234.56");
  });

  it("should format a zero with commas", () => {
    expect(formatNumber(0)).toEqual("0");
  });

  it("should format a large number with commas", () => {
    expect(formatNumber(1234567890.12)).toEqual("1,234,567,890.12");
  });
});

describe("calculateTax", () => {
  it("should calculate tax for Australia in 2022-2023", () => {
    const result = calculateTax("Australia", "2022 - 2023", 50000);
    expect(result.totalTax).toEqual(6717);
    expect(result.tax1).toEqual(0);
    expect(result.tax2).toEqual(5092);
    expect(result.tax3).toEqual(1625);
    expect(result.tax4).toEqual(0);
    expect(result.tax5).toEqual(0);
  });

  it("should calculate tax for United States in 2021-2022", () => {
    const result = calculateTax("United States", "2021 - 2022", 50000);
    expect(result.totalTax).toEqual(6717);
    expect(result.tax1).toEqual(0);
    expect(result.tax2).toEqual(5092);
    expect(result.tax3).toEqual(1625);
    expect(result.tax4).toEqual(0);
    expect(result.tax5).toEqual(0);
  });

  it("should calculate tax for China in 2020-2021", () => {
    const result = calculateTax("China", "2020 - 2021", 50000);
    expect(result.totalTax).toEqual(6717);
    expect(result.tax1).toEqual(0);
    expect(result.tax2).toEqual(5092);
    expect(result.tax3).toEqual(1625);
    expect(result.tax4).toEqual(0);
    expect(result.tax5).toEqual(0);
  });

  it("should calculate tax for Canada in 2019-2020", () => {
    const result = calculateTax("Canada", "2019 - 2020", 50000);
    expect(result.totalTax).toEqual(6717);
    expect(result.tax1).toEqual(0);
    expect(result.tax2).toEqual(5092);
    expect(result.tax3).toEqual(1625);
    expect(result.tax4).toEqual(0);
    expect(result.tax5).toEqual(0);
  });

  it("should calculate tax for New Zealand in an unknown year", () => {
    const result = calculateTax("New Zealand", "unknown", 50000);
    expect(result.totalTax).toEqual(6717);
    expect(result.tax1).toEqual(0);
    expect(result.tax2).toEqual(5092);
    expect(result.tax3).toEqual(1625);
    expect(result.tax4).toEqual(0);
    expect(result.tax5).toEqual(0);
  });

  it("should return 0 tax for income under $18,200", () => {
    const result = calculateTax("Australia", "2022 - 2023", 15000);
    expect(result.totalTax).toEqual(0);
  });
});

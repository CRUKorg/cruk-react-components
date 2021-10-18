// @ts-nocheck  "@types/jest": "^26.0.9", is currently broken and not in definitely typed repo
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/46571
// TODO remove no check comment when this is fixed
import {
  camelize,
  formatMoney,
  calculatePercentRounded,
  numberWithCommas,
  formatMoneyWithCommas,
} from "../Helper";

describe("camelize", () => {
  it("converts a string to camel case correctly", () => {
    expect(camelize("This Is A Camel Case String")).toEqual(
      "thisIsACamelCaseString"
    );
    expect(camelize("thisIsACamelCaseString")).toEqual(
      "thisIsACamelCaseString"
    );
    expect(camelize("ThisIsACamelCaseString")).toEqual(
      "thisIsACamelCaseString"
    );
    expect(camelize("This")).toEqual("this");
  });
});

describe("formatMoney", () => {
  it("formats numbers to money correctly", () => {
    expect(formatMoney(0)).toEqual("0.00");
    expect(formatMoney(1)).toEqual("1.00");
    expect(formatMoney(0.1)).toEqual("0.10");
    expect(formatMoney(0.11111)).toEqual("0.11");
    expect(formatMoney(0.1199999999)).toEqual("0.12");
    expect(formatMoney(1199999999)).toEqual("1199999999.00");
    expect(formatMoney(1199999999.999)).toEqual("1200000000.00");
  });
});

describe("numberWithCommas", () => {
  it("can take a integer or decimal number and turn it into a string adding commas for to denote thousands", () => {
    expect(numberWithCommas()).toEqual("");
    expect(numberWithCommas(1000000)).toEqual("1,000,000");
    expect(numberWithCommas(1000000.49)).toEqual("1,000,000.49");
  });
});

describe("formatMoneyWithCommas", () => {
  it("formats numbers to money correctly", () => {
    expect(formatMoneyWithCommas(0)).toEqual("0.00");
    expect(formatMoneyWithCommas(1)).toEqual("1.00");
    expect(formatMoneyWithCommas(0.1)).toEqual("0.10");
    expect(formatMoneyWithCommas(0.11111)).toEqual("0.11");
    expect(formatMoneyWithCommas(0.1199999999)).toEqual("0.12");
    expect(formatMoneyWithCommas(1199999999)).toEqual("1,199,999,999.00");
    expect(formatMoneyWithCommas(1199999999.999)).toEqual("1,200,000,000.00");
  });
});

describe("calculatePercentRounded", () => {
  it("calculated percentages  correctly", () => {
    expect(calculatePercentRounded(0, 0)).toEqual(0);
    expect(calculatePercentRounded(1, 1)).toEqual(100);
    expect(calculatePercentRounded(1, 2)).toEqual(50);
    expect(calculatePercentRounded(1.000000003, 2)).toEqual(50);
    expect(calculatePercentRounded(1, 2.000000003)).toEqual(49);
  });
});

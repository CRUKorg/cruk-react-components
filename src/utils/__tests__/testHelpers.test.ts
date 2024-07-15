/* eslint-disable @typescript-eslint/no-floating-promises */
// node test catches the errors there are no floating promises in reality
import assert from "node:assert";
import { it, test } from "node:test";

import {
  camelize,
  formatMoney,
  calculatePercentRounded,
  numberWithCommas,
  formatMoneyWithCommas,
  removeCommasFromObjectStringValues,
} from "../Helper";

test("camelize", async () => {
  await it("converts a string to camel case correctly", () => {
    assert.strictEqual(
      camelize("This Is A Camel Case String"),
      "thisIsACamelCaseString",
    );
    assert.strictEqual(
      camelize("thisIsACamelCaseString"),
      "thisIsACamelCaseString",
    );
    assert.strictEqual(
      camelize("ThisIsACamelCaseString"),
      "thisIsACamelCaseString",
    );
    assert.strictEqual(camelize("This"), "this");
  });
});

test("formatMoney", async () => {
  await it("formats numbers to money correctly", () => {
    assert.strictEqual(formatMoney(0), "0.00");
    assert.strictEqual(formatMoney(1), "1.00");
    assert.strictEqual(formatMoney(0.1), "0.10");
    assert.strictEqual(formatMoney(0.11111), "0.11");
    assert.strictEqual(formatMoney(0.1199999999), "0.12");
    assert.strictEqual(formatMoney(1199999999), "1199999999.00");
    assert.strictEqual(formatMoney(1199999999.999), "1200000000.00");
  });
});

test("numberWithCommas", async () => {
  await it("can take a integer or decimal number and turn it into a string adding commas for to denote thousands", () => {
    assert.strictEqual(numberWithCommas(), "");
    assert.strictEqual(numberWithCommas(1000000), "1,000,000");
    assert.strictEqual(numberWithCommas(1000000.49), "1,000,000.49");
  });
});

test("formatMoneyWithCommas", async () => {
  await it("formats numbers to money correctly", () => {
    assert.strictEqual(formatMoneyWithCommas(0), "0.00");
    assert.strictEqual(formatMoneyWithCommas(1), "1.00");
    assert.strictEqual(formatMoneyWithCommas(0.1), "0.10");
    assert.strictEqual(formatMoneyWithCommas(0.11111), "0.11");
    assert.strictEqual(formatMoneyWithCommas(0.1199999999), "0.12");
    assert.strictEqual(formatMoneyWithCommas(1199999999), "1,199,999,999.00");
    assert.strictEqual(
      formatMoneyWithCommas(1199999999.999),
      "1,200,000,000.00",
    );
  });
});

test("calculatePercentRounded", async () => {
  await it("calculated percentages  correctly", () => {
    assert.strictEqual(calculatePercentRounded(0, 0), 0);
    assert.strictEqual(calculatePercentRounded(1, 1), 100);
    assert.strictEqual(calculatePercentRounded(1, 2), 50);
    assert.strictEqual(calculatePercentRounded(1.000000003, 2), 50);
    assert.strictEqual(calculatePercentRounded(1, 2.000000003), 49);
  });
});

test("removeCommasFromObjectStringValues", async () => {
  await it("Removes commas from object values", () => {
    assert.deepEqual(
      removeCommasFromObjectStringValues({
        a: "foo, foo, foo",
        b: "bar,, bar",
        c: "baz baz",
      }),
      { a: "foo foo foo", b: "bar bar", c: "baz baz" },
    );
  });
});

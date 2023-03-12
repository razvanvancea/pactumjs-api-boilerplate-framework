const expect = require("chai").expect;
const { assert } = require('chai');
const { spec, request } = require('pactum');
const {faker} = require('@faker-js/faker');

module.exports = {
  expect,
  assert,
  spec,
  request,
  faker
};

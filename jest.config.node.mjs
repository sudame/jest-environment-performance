import jestConfigCommon from './jest.config.common.mjs';

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  ...jestConfigCommon,
  testEnvironment: 'node',
};

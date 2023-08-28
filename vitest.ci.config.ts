import { defineVitestConfig } from 'nuxt-vitest/config'
import { develConfig } from './vitest.config';

export default defineVitestConfig({
  ...develConfig,
  test: {
    ...develConfig.test,
    coverage: {
      reporter: "lcov",
    },
    outputFile: "test-report.xml",
    reporters: "vitest-sonar-reporter",
  }
})


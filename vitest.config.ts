import { defineVitestConfig } from 'nuxt-vitest/config'

export const develConfig = {
  test: {
    environment: 'nuxt',
  },
}

export default defineVitestConfig(develConfig)


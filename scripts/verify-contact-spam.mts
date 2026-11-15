import assert from 'node:assert/strict'
import { honeypotTriggered } from '../src/lib/contact-spam.ts'

assert.equal(honeypotTriggered(undefined), false)
assert.equal(honeypotTriggered(''), false)
assert.equal(honeypotTriggered('   '), false)
assert.equal(honeypotTriggered('https://bot.invalid'), true)
assert.equal(honeypotTriggered(42), false)
console.info('Contact honeypot tests passed')

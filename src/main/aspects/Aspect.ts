import {
  Metadata,
  beforeStaticMethod,
  beforeMethod,
  afterStaticMethod,
  afterMethod,
  beforeGetter,
  beforeSetter,
  afterGetter,
  afterSetter
} from 'aspect.js'

import json from '../json'

export default class Aspect {
  @beforeStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^new$/ })
  beforeNew (meta: Metadata) {
    console.log('beforeNew', json(meta))
  }

  @afterStaticMethod({ classNamePattern: /.*/, methodNamePattern: /^new$/ })
  afterNew (meta: Metadata) {
    console.log('afterNew', json(meta))
  }

  @beforeStaticMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
  beforeStaticMethod (meta: Metadata) {
    console.log('beforeStaticMethod', json(meta))
  }

  @afterStaticMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
  afterStaticMethod (meta: Metadata) {
    console.log('afterStaticMethod', json(meta))
  }

  @beforeMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
  beforeMethod (meta: Metadata) {
    console.log('beforeMethod', json(meta))
  }

  @afterMethod({ classNamePattern: /.*/, methodNamePattern: /.*/ })
  afterMethod (meta: Metadata) {
    console.log('afterMethod', json(meta))
  }

  @beforeGetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  beforeGetter (meta: Metadata) {
    console.log('beforeGetter', json(meta))
  }

  @afterGetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  afterGetter (meta: Metadata) {
    console.log('afterGetter', json(meta))
  }

  @beforeSetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  beforeSetter (meta: Metadata) {
    console.log('beforeSetter', json(meta))
  }
  @afterSetter({ classNamePattern: /.*/, fieldNamePattern: /.*/ })
  afterSetter (meta: Metadata) {
    console.log('afterSetter', json(meta))
  }
}

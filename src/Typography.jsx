/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'

const photography = require('./assets/photography.svg')

const styles = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 121.5px;
  line-height: 148px;
  color: #ffffff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Typography = () => (
  <div css={styles}>
    <img src={photography} />
  </div>
)

export default Typography

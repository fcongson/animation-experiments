/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/core'

const styles = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 81px;
  line-height: 99px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Typography = () => (
  <div css={styles}>
    <h1>PHOTOGRAPHY.</h1>
  </div>
)

export default Typography

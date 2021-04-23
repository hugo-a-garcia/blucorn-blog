import React, { Fragment } from "react"
import { Themed } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

const BioContent = () => (
  <Fragment>
    Words by <Themed.a href="http://bluecorn.dev/">Hugo A. Garcia</Themed.a>.
    <br />
    Roboticist
  </Fragment>
)

export default BioContent
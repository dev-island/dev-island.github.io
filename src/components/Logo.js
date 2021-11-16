import React from "react"
import "../assets/css/logo.css"

const Logo = ({ className = "" }) => (
  <p class={`logo ${className}`}>
    <span class="bracket left">&lt;</span>
    <span class="brand">
      <span class="d">d</span>
      <span class="rest">ev-</span>
      <span class="i">i</span>
      <span class="rest">sland</span>
    </span>
    <span class="slash">&#47;</span>
    <span class="bracket right">&gt;</span>
  </p>
)

export default Logo

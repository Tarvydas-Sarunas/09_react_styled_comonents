import { createGlobalStyle } from "styled-components";

const GlobalStil = createGlobalStyle`
  * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: #f4f4f4;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
}

.container {
  padding-left: 15px;
  padding-right: 15px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.unlisted {
  list-style: none;
  padding-left: 0;
}

/* utility classes */

.flex {
  display: flex;
  gap: 0.5rem;
}

.between {
  justify-content: space-between;
  align-items: center;
}

.tac {
  text-align: center;
}

.f-wrap {
  flex-wrap: wrap;
}
`
export default GlobalStil
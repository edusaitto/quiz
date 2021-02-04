import styled from 'styled-components'
import db from '../../../db.json'

const Background = styled.div`
  background-image: url(${db.bg});
  height: 150vh;
  background-size: cover;
  background-position: center;
`;

export default Background;
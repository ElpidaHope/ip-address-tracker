import styled from 'styled-components';

const HeaderStyle = styled.div`
  width: 100%;
  height: 35vh;
  overflow-x: hidden;
  overflow-y: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`

const Header = () => {
  return (
    <HeaderStyle>
      <img src={process.env.PUBLIC_URL + '/images/pattern-bg.png'} alt=""/>
    </HeaderStyle>
  )
}

export default Header;

import  {StyledTracker}  from './styles/Tracker.styled';


const Tracker = ({ipAddress, setIpAddress, handleSearch, data}) => {
  const handleIpAddress = (e) => {
    setIpAddress(e.target.value)
  }
  return (
    data && <StyledTracker>
      <h1>IP Address Tracker</h1>
      <div className='search-bar' onClick={() => {handleSearch(); setIpAddress('')}}>
        <input type="text" placeholder='Search for any IP address or domain' onChange={handleIpAddress} value={ipAddress}/>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/icon-arrow.svg'} alt="" />
        </div>
      </div>
      <div className='container'>
        <div className="ip-address">
          <h4>Ip Address</h4>
          <h2>{data.ip}</h2>
        </div>
        <div className="location">
          <h4>Location</h4>
          <h2>{data.location.region}, {data.location.country} {data.as.asn}</h2>
        </div>
        <div className="timezone">
          <h4>Timezone</h4>
          <h2>UTC{data.location.timezone}</h2>
        </div>
        <div className="isp">
          <h4>Isp</h4>
          <h2>{data.isp}</h2>
        </div>
      </div>
    </StyledTracker>
  )
}

export default Tracker
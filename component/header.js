import Link from 'next/link'
function Header() {
  return (
      <header><Link href="/"><h3 className="title component">PcariMovie</h3></Link>
          <div className="nav">
      
      <ul>
<Link href="/"><li className="component">Home</li></Link>
<Link href="/about"><li className="component">Movies</li></Link>
<li className="component">Tv Show</li>
<li className="component">Video</li>
<li className="component">FAQ</li>
<li className="component">Pricing</li>
<li className="component">Contact Us</li>
</ul>

</div>

  </header> 
  )
}

export default Header

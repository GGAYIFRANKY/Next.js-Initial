import Link from 'next/link'
import Navstyles from '../styles/Nav.module.css'

const Nav = ({children}) => {
	return(

		<div className={Navstyles.nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
import Link from 'next/link'

export default function Nav(){
    return <nav>
        <ul>
            <li><Link href="/users">Users</Link></li>
        </ul>
    </nav>
}
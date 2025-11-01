import Link from "next/link";

const Dashboard = () => {
    return (
        <div>
           <p>Dashboard</p>

            <ul>
                <li><Link href="/dashboard/users">Users List</Link></li>
                <li><Link href="/dashboard/analytics">Analytics Page</Link></li>

            </ul>

        </div>
    )
}
export default Dashboard

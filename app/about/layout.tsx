import Link from "next/link";

export default function AboutLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return(
        <div className="about">
            <h1>About us</h1>
            <ul className="list-row">
                <Link className="button" href="/about/contacts">Contacts</Link>
                <Link className="button" href="/about/team">Team</Link>
            </ul>
            {children}
        </div>
    )
}
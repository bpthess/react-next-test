import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Main Page Test</h1>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;

import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };

  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <h1 className="font-mono text-xl code">
          Welcome to <span className="text-purple-700">Nextjs</span>,{" "}
          <span className="text-indigo-700">TailwindCSS</span> and{" "}
          <span className="text-gray-700">TypeScript</span>
        </h1>

        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/product">
          <a>Products</a>
        </Link>
        <button onClick={handleClick}>Place Order</button>
      </main>
    </div>
  );
}

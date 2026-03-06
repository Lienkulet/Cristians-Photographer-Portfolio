import Link from "next/link";
import styles from "./not-found.module.css";
import Container from "@/components/UI/Container/Container";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <Container>

        <section className={styles.card}>
          <h1>404</h1>
          <h2>Oops!</h2>
          <p>
            It Looks Like You&apos;ve Stumbled Upon A Page That Doesn&apos;t Exist.
            Don&apos;t Worry, It Happens To The Best Of Us.
          </p>
          <Link href="/" className={styles.cta}>
            BACK TO HOMEPAGE
          </Link>
        </section>
      </Container>

    </main>
  );
}

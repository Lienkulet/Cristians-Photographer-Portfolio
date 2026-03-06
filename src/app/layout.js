import Navbar from "@/components/Layout/Navbar/Navbar";
import Footer from "@/components/Layout/Footer/Footer";
import ScrollReveal from "@/components/UI/ScrollReveal/ScrollReveal";
import "@/app/globals.css";

export const metadata = {
  title: "CRISTIAN STUDIO",
  description: "Welcome to Cristian Studio! A dedicated photography studio committed to capturing beautiful moments in your life with sincerity and authenticity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

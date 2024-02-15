import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex-col justify-between flex">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

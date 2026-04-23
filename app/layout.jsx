import "./globals.css";

export const metadata = {
  title: "Dhon Systems",
  description: "Soluções digitais para impulsionar o seu negócio",
  verification: {
    google: "0feCo5E1tWXbPcEs2yeiExZIuE4srLUKz_bQtcHbXZw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

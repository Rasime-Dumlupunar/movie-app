import "./globals.css";
import { Header } from "@/components/Header";
import Provider from "./Provider";
import Tabs from "@/components/Tabs";

export const metadata = {
  title: "Cine Magic",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <Tabs />
          {children}
        </Provider>
      </body>
    </html>
  );
}

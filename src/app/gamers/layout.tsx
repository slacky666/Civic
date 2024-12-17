import BottomMenu from "./compBottomMenu";
import TelegramHeaderColor  from "./compTelegramHeaderColor";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex-1">
            <TelegramHeaderColor />
            {children}
            {/* <BottomMenu /> */}
        </main>
    );
  }
  
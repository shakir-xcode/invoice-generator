import { ModeToggle } from "@/components/modeToggle";
import { InvoiceForm } from "@/components/invoiceFrom";


export default function Home() {

  return (
    <div>
      <header>
        <h1>Header</h1>
        <ModeToggle />
      </header>
      <main className=" container mx-auto min-h-screen px-3">
        <section className="max-w-[1020px]">
          <InvoiceForm />
          {/* <NewTest /> */}
        </section>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

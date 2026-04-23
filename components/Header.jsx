export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold">
        Dhon <span className="text-green-400">Systems</span>
      </h1>
      <a href="https://wa.me/5561994420949" className="bg-green-500 px-4 py-2 rounded-lg text-sm">
        Contato
      </a>
    </header>
  );
}